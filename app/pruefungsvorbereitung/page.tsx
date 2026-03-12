'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { examContentPool } from '@/lib/content/pruefung-amine';
import { addResult } from '@/lib/progress';
import { saveExamSession, loadExamSession, clearExamSession } from '@/lib/exam-persistence';
import {
  ExamSessionState,
  ExerciseResult,
  RevealCardData,
  ComparisonDuelData,
  SortChallengeData,
  ChemistryBuilderData,
  SynthesisOrderData,
  OpenReflectionData,
  CaseStudyData,
  TrueFalseQuizData,
} from '@/lib/types';
import RevealCard from '@/components/RevealCard';
import ComparisonDuel from '@/components/ComparisonDuel';
import SortChallenge from '@/components/SortChallenge';
import ChemistryBuilder from '@/components/ChemistryBuilder';
import OpenReflection from '@/components/OpenReflection';
import SynthesisOrder from '@/components/SynthesisOrder';
import CaseStudy from '@/components/CaseStudy';
import TrueFalseQuiz from '@/components/TrueFalseQuiz';
import CountdownTimer from '@/components/CountdownTimer';
import ResumeDialog from '@/components/ResumeDialog';
import ScoreSummary from '@/components/ScoreSummary';
import { generateCertificatePDF } from '@/components/Certificate';

// ---- Randomizer helpers (local, to avoid modifying shared randomizer) ----

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(array: T[], count: number): T[] {
  return shuffle(array).slice(0, count);
}

const TIMER_DURATION_MS = 90 * 60 * 1000; // 90 Minuten

function createExamSession(): ExamSessionState {
  const pool = examContentPool;
  const now = new Date().toISOString();

  return {
    revealCards: pickRandom(pool.revealCards, 5),
    trueFalseQuizzes: pickRandom(pool.trueFalseQuizzes, 1),
    comparisonDuels: pickRandom(pool.comparisonDuels, 3),
    sortChallenges: pickRandom(pool.sortChallenges, 2),
    chemistryBuilders: pickRandom(pool.chemistryBuilders, 1),
    synthesisOrder: pickRandom(pool.synthesisOrders, 1)[0],
    openReflections: pickRandom(pool.openReflections, 2),
    caseStudies: pickRandom(pool.caseStudies, 2),
    results: [],
    studentName: '',
    startedAt: now,
    timerStartedAt: now,
    timerDurationMs: TIMER_DURATION_MS,
  };
}

// ---- Phase types ----

type Phase = 'loading' | 'reveal' | 'truefalse' | 'duels' | 'sort' | 'builders' | 'synthesis' | 'reflection' | 'casestudy' | 'summary';

const PHASE_INFO: Record<Phase, { title: string; subtitle: string; icon: string; kLevel?: string }> = {
  loading: { title: '', subtitle: '', icon: '' },
  reveal: {
    title: 'Wissen auffrischen',
    subtitle: 'Prüfungsrelevantes Wissen als Jokerkarten.',
    icon: '🔍',
    kLevel: 'K1 Erinnern',
  },
  truefalse: {
    title: 'Richtig oder Falsch?',
    subtitle: 'Beurteile Aussagen über Amine -- wie in der Prüfung.',
    icon: '✅',
    kLevel: 'K2 Verstehen',
  },
  duels: {
    title: 'Vergleichs-Duelle',
    subtitle: 'Vergleiche physikalische und chemische Eigenschaften von Aminen.',
    icon: '⚔️',
    kLevel: 'K2 Verstehen',
  },
  sort: {
    title: 'Sortier-Challenges',
    subtitle: 'Ordne Verbindungen nach Löslichkeit, Basizität oder anderen Eigenschaften.',
    icon: '📊',
    kLevel: 'K4 Analysieren',
  },
  builders: {
    title: 'Formel-Baukasten',
    subtitle: 'Wähle die richtigen Antworten aus den Optionen.',
    icon: '🧩',
    kLevel: 'K3 Anwenden',
  },
  synthesis: {
    title: 'Synthese-Reihenfolge',
    subtitle: 'Ordne die Syntheseschritte in die richtige Reihenfolge.',
    icon: '🧬',
    kLevel: 'K4 Analysieren',
  },
  reflection: {
    title: 'Offene Fragen',
    subtitle: 'Beantworte prüfungsnahe Fragen -- die KI gibt Feedback.',
    icon: '💭',
    kLevel: 'K5 Bewerten',
  },
  casestudy: {
    title: 'Prüfungsaufgaben',
    subtitle: 'Mehrstufige Synthese- und Rechenaufgaben auf Prüfungsniveau.',
    icon: '🔬',
    kLevel: 'K5/K6',
  },
  summary: {
    title: 'Auswertung',
    subtitle: 'Dein Ergebnis im Überblick.',
    icon: '🏆',
  },
};

const PHASE_ORDER: Phase[] = ['reveal', 'truefalse', 'duels', 'sort', 'builders', 'synthesis', 'reflection', 'casestudy', 'summary'];

export default function PruefungsvorbereitungPage() {
  const [session, setSession] = useState<ExamSessionState | null>(null);
  const [phase, setPhase] = useState<Phase>('loading');
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const persistedRef = useRef<ReturnType<typeof loadExamSession>>(null);

  // Initialize session
  useEffect(() => {
    const name = localStorage.getItem('studentName') || 'Lernende/r';
    setStudentName(name);

    const saved = loadExamSession();
    if (saved) {
      persistedRef.current = saved;
      setShowResumeDialog(true);
    } else {
      const s = createExamSession();
      s.studentName = name;
      setSession(s);
      setPhase('reveal');
    }
  }, []);

  const handleResume = () => {
    const saved = persistedRef.current;
    if (saved) {
      const adjustedSession = {
        ...saved.session,
        timerStartedAt: new Date(Date.now() - (saved.session.timerDurationMs - saved.timerRemainingMs)).toISOString(),
      };
      setSession(adjustedSession as ExamSessionState);
      setPhase(saved.currentPhase as Phase);
      setResults(saved.results);
    }
    setShowResumeDialog(false);
  };

  const handleRestart = () => {
    clearExamSession();
    const name = localStorage.getItem('studentName') || 'Lernende/r';
    const s = createExamSession();
    s.studentName = name;
    setSession(s);
    setPhase('reveal');
    setResults([]);
    setRevealedCount(0);
    setShowResumeDialog(false);
  };

  const handleResult = useCallback((result: ExerciseResult) => {
    setResults((prev) => addResult(prev, result));
  }, []);

  // Persist after results or phase change
  useEffect(() => {
    if (session && phase !== 'loading' && phase !== 'summary') {
      saveExamSession(session, phase, results);
    }
  }, [session, phase, results]);

  // Save on beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (session && phase !== 'loading' && phase !== 'summary') {
        saveExamSession(session, phase, results);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [session, phase, results]);

  const goToNextPhase = () => {
    const currentIndex = PHASE_ORDER.indexOf(phase);
    if (currentIndex < PHASE_ORDER.length - 1) {
      const nextPhase = PHASE_ORDER[currentIndex + 1];
      setPhase(nextPhase);
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (nextPhase === 'summary') {
        clearExamSession();
      }
    }
  };

  const handleTimeUp = useCallback(() => {
    setTimeExpired(true);
    setPhase('summary');
    clearExamSession();
  }, []);

  const currentPhaseIndex = PHASE_ORDER.indexOf(phase);
  const progressPercent = phase === 'summary' ? 100 : Math.round((currentPhaseIndex / (PHASE_ORDER.length - 1)) * 100);

  if (!session || phase === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {showResumeDialog && persistedRef.current ? (
          <ResumeDialog
            persisted={persistedRef.current}
            onResume={handleResume}
            onRestart={handleRestart}
          />
        ) : (
          <div className="animate-spin w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full" />
        )}
      </div>
    );
  }

  const info = PHASE_INFO[phase];

  const nextPhaseLabels: Partial<Record<Phase, string>> = {
    reveal: 'Weiter zu Richtig/Falsch →',
    truefalse: 'Weiter zu den Duellen →',
    duels: 'Weiter zur Sortierung →',
    sort: 'Weiter zum Baukasten →',
    builders: 'Weiter zur Synthese →',
    synthesis: 'Weiter zu den offenen Fragen →',
    reflection: 'Weiter zu den Prüfungsaufgaben →',
    casestudy: 'Zur Auswertung →',
  };

  return (
    <main className="min-h-screen pb-20">
      <div ref={topRef} />

      {showResumeDialog && persistedRef.current && (
        <ResumeDialog
          persisted={persistedRef.current}
          onResume={handleResume}
          onRestart={handleRestart}
        />
      )}

      {/* Progress bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Prüfung</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono text-gray-400">{progressPercent}%</span>
            {phase !== 'summary' && (
              <CountdownTimer
                startedAt={session.timerStartedAt}
                durationMs={session.timerDurationMs}
                onTimeUp={handleTimeUp}
              />
            )}
          </div>
          <div className="flex justify-between mt-2">
            {PHASE_ORDER.filter((p) => p !== 'summary').map((p, i) => (
              <div
                key={p}
                className={`text-xs ${
                  i < currentPhaseIndex
                    ? 'text-green-600'
                    : i === currentPhaseIndex
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {PHASE_INFO[p].icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Section header */}
        {phase !== 'summary' && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{info.icon}</span>
              <h2 className="text-xl font-bold text-gray-900">{info.title}</h2>
              {info.kLevel && (
                <span className="ml-auto text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {info.kLevel}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{info.subtitle}</p>
          </div>
        )}

        {/* PHASE: Reveal Cards (Jokerwissen) */}
        {phase === 'reveal' && (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {session.revealCards.map((card) => (
                <RevealCard
                  key={card.id}
                  card={card}
                  onRevealed={() => setRevealedCount((c) => c + 1)}
                />
              ))}
            </div>
            <div className="text-center pt-4">
              <p className="text-xs text-gray-400 mb-3">
                {revealedCount}/{session.revealCards.length} Karten aufgedeckt
              </p>
              <button
                onClick={goToNextPhase}
                disabled={revealedCount < session.revealCards.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: True/False Quiz */}
        {phase === 'truefalse' && (
          <div className="space-y-4">
            {session.trueFalseQuizzes.map((quiz) => (
              <TrueFalseQuiz key={quiz.id} quiz={quiz} onResult={handleResult} />
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'true-false').length < session.trueFalseQuizzes.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Comparison Duels */}
        {phase === 'duels' && (
          <div className="space-y-4">
            {session.comparisonDuels.map((duel, i) => (
              <ComparisonDuel key={duel.id} duel={duel} index={i} onResult={handleResult} />
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'comparison-duel').length < session.comparisonDuels.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Sort Challenges (multiple) */}
        {phase === 'sort' && (
          <div className="space-y-6">
            {session.sortChallenges.map((challenge, i) => (
              <div key={challenge.id}>
                {i > 0 && <hr className="border-gray-200 my-4" />}
                <p className="text-xs text-gray-400 mb-2">Challenge {i + 1} von {session.sortChallenges.length}</p>
                <SortChallenge challenge={challenge} onResult={handleResult} />
              </div>
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'sort-challenge').length < session.sortChallenges.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Chemistry Builders */}
        {phase === 'builders' && (
          <div className="space-y-4">
            {session.chemistryBuilders.map((builder) => (
              <ChemistryBuilder key={builder.id} builder={builder} onResult={handleResult} />
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'chemistry-builder').length < session.chemistryBuilders.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Synthesis Order */}
        {phase === 'synthesis' && (
          <div className="space-y-4">
            <SynthesisOrder synthesis={session.synthesisOrder} onResult={handleResult} />
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={!results.some((r) => r.exerciseType === 'synthesis-order')}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Open Reflections (multiple) */}
        {phase === 'reflection' && (
          <div className="space-y-6">
            {session.openReflections.map((exercise, i) => (
              <div key={exercise.id}>
                {i > 0 && <hr className="border-gray-200 my-4" />}
                <p className="text-xs text-gray-400 mb-2">Frage {i + 1} von {session.openReflections.length}</p>
                <OpenReflection exercise={exercise} onResult={handleResult} />
              </div>
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'open-reflection').length < session.openReflections.length}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Case Studies (multiple) */}
        {phase === 'casestudy' && (
          <div className="space-y-6">
            {session.caseStudies.map((cs, i) => (
              <div key={cs.id}>
                {i > 0 && <hr className="border-gray-200 my-4" />}
                <p className="text-xs text-gray-400 mb-2">Aufgabe {i + 1} von {session.caseStudies.length}</p>
                <CaseStudy caseStudy={cs} onResult={handleResult} />
              </div>
            ))}
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={results.filter((r) => r.exerciseType === 'case-study').length < session.caseStudies.length}
                className="px-8 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Summary */}
        {phase === 'summary' && (
          <div>
            {timeExpired && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-amber-800 font-medium">Die Zeit ist abgelaufen.</p>
                <p className="text-xs text-amber-700 mt-1">Hier sind deine bisherigen Ergebnisse. Du kannst die Prüfungsvorbereitung jederzeit erneut starten.</p>
              </div>
            )}
            <ScoreSummary
              results={results}
              studentName={studentName}
              onDownloadCertificate={() => generateCertificatePDF(studentName, results)}
            />
          </div>
        )}
      </div>
    </main>
  );
}
