'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createSession } from '@/lib/randomizer';
import { addResult } from '@/lib/progress';
import { saveSession, loadSession, clearSession } from '@/lib/persistence';
import { SessionState, ExerciseResult } from '@/lib/types';
import RevealCard from '@/components/RevealCard';
import ComparisonDuel from '@/components/ComparisonDuel';
import SortChallenge from '@/components/SortChallenge';
import ChemistryBuilder from '@/components/ChemistryBuilder';
import DrawingExercise from '@/components/DrawingExercise';
import OpenReflection from '@/components/OpenReflection';
import SynthesisOrder from '@/components/SynthesisOrder';
import CaseStudy from '@/components/CaseStudy';
import CountdownTimer from '@/components/CountdownTimer';
import ResumeDialog from '@/components/ResumeDialog';
import ScoreSummary from '@/components/ScoreSummary';
import { generateCertificatePDF } from '@/components/Certificate';

type Phase = 'loading' | 'reveal' | 'duels' | 'builders' | 'sort' | 'synthesis' | 'drawing' | 'casestudy' | 'reflection' | 'summary';

const PHASE_INFO: Record<Phase, { title: string; subtitle: string; icon: string; kLevel?: string }> = {
  loading: { title: '', subtitle: '', icon: '' },
  reveal: {
    title: 'Wissen auffrischen',
    subtitle: 'Decke die Karten auf, um die Kernkonzepte zu wiederholen.',
    icon: '🔍',
    kLevel: 'K1 Erinnern',
  },
  duels: {
    title: 'Vergleichs-Duelle',
    subtitle: 'Welches Amin ist basischer? Triff die richtige Entscheidung.',
    icon: '⚔️',
    kLevel: 'K2 Verstehen',
  },
  builders: {
    title: 'Formel-Baukasten',
    subtitle: 'Vervollständige die chemischen Formeln mit den richtigen Gruppen.',
    icon: '🧩',
    kLevel: 'K3 Anwenden',
  },
  sort: {
    title: 'Sortier-Challenge',
    subtitle: 'Bringe die Verbindungen in die richtige Reihenfolge.',
    icon: '📊',
    kLevel: 'K4 Analysieren',
  },
  synthesis: {
    title: 'Synthese-Reihenfolge',
    subtitle: 'Ordne die Reaktionsschritte der Amin-Synthese korrekt.',
    icon: '🧬',
    kLevel: 'K4 Analysieren',
  },
  drawing: {
    title: 'Zeichenaufgabe',
    subtitle: 'Zeichne die Struktur -- die KI gibt dir Feedback.',
    icon: '✏️',
    kLevel: 'K6 Erschaffen',
  },
  casestudy: {
    title: 'Fallbeispiel',
    subtitle: 'Analysiere einen chemischen Fall -- die KI bewertet nach Umfang und Tiefe.',
    icon: '🔬',
    kLevel: 'K5 Bewerten',
  },
  reflection: {
    title: 'Offene Reflexion',
    subtitle: 'Bewerte einen Sachverhalt und erhalte KI-Feedback.',
    icon: '💭',
    kLevel: 'K5 Bewerten',
  },
  summary: {
    title: 'Zusammenfassung',
    subtitle: 'Dein Lernweg im Überblick.',
    icon: '🏆',
  },
};

const PHASE_ORDER: Phase[] = ['reveal', 'duels', 'builders', 'sort', 'synthesis', 'drawing', 'casestudy', 'reflection', 'summary'];

export default function LernenPage() {
  const [session, setSession] = useState<SessionState | null>(null);
  const [phase, setPhase] = useState<Phase>('loading');
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const persistedRef = useRef<ReturnType<typeof loadSession>>(null);

  // Initialize session
  useEffect(() => {
    const name = localStorage.getItem('studentName') || 'Lernende/r';
    setStudentName(name);

    const saved = loadSession();
    if (saved) {
      persistedRef.current = saved;
      setShowResumeDialog(true);
    } else {
      const s = createSession();
      s.studentName = name;
      setSession(s);
      setPhase('reveal');
    }
  }, []);

  // Handle resume or restart
  const handleResume = () => {
    const saved = persistedRef.current;
    if (saved) {
      // Adjust timer: set timerStartedAt so remaining time matches
      const adjustedSession = {
        ...saved.session,
        timerStartedAt: new Date(Date.now() - (saved.session.timerDurationMs - saved.timerRemainingMs)).toISOString(),
      };
      setSession(adjustedSession);
      setPhase(saved.currentPhase as Phase);
      setResults(saved.results);
    }
    setShowResumeDialog(false);
  };

  const handleRestart = () => {
    clearSession();
    const name = localStorage.getItem('studentName') || 'Lernende/r';
    const s = createSession();
    s.studentName = name;
    setSession(s);
    setPhase('reveal');
    setResults([]);
    setRevealedCount(0);
    setShowResumeDialog(false);
  };

  // Save on result change
  const handleResult = useCallback((result: ExerciseResult) => {
    setResults((prev) => {
      const updated = addResult(prev, result);
      return updated;
    });
  }, []);

  // Persist after results or phase change
  useEffect(() => {
    if (session && phase !== 'loading' && phase !== 'summary') {
      saveSession(session, phase, results);
    }
  }, [session, phase, results]);

  // Save on beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (session && phase !== 'loading' && phase !== 'summary') {
        saveSession(session, phase, results);
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
        clearSession();
      }
    }
  };

  const handleTimeUp = useCallback(() => {
    setTimeExpired(true);
    setPhase('summary');
    clearSession();
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

  // Button labels for next phase
  const nextPhaseLabels: Partial<Record<Phase, string>> = {
    reveal: 'Weiter zu den Duellen →',
    duels: 'Weiter zum Baukasten →',
    builders: 'Weiter zur Sortierung →',
    sort: 'Weiter zur Synthese →',
    synthesis: 'Weiter zum Zeichnen →',
    drawing: 'Weiter zum Fallbeispiel →',
    casestudy: 'Weiter zur Reflexion →',
    reflection: 'Zur Zusammenfassung →',
  };

  return (
    <main className="min-h-screen pb-20">
      <div ref={topRef} />

      {/* Resume dialog overlay */}
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
            <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Fortschritt</span>
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
          {/* Phase indicators */}
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

        {/* PHASE: Reveal Cards */}
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

        {/* PHASE: Sort Challenge */}
        {phase === 'sort' && (
          <div className="space-y-4">
            <SortChallenge challenge={session.sortChallenge} onResult={handleResult} />
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={!results.some((r) => r.exerciseType === 'sort-challenge')}
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

        {/* PHASE: Drawing */}
        {phase === 'drawing' && (
          <div className="space-y-4">
            <DrawingExercise exercise={session.drawingExercise} onResult={handleResult} />
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={!results.some((r) => r.exerciseType === 'drawing')}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Case Study */}
        {phase === 'casestudy' && (
          <div className="space-y-4">
            <CaseStudy caseStudy={session.caseStudy} onResult={handleResult} />
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={!results.some((r) => r.exerciseType === 'case-study')}
                className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {nextPhaseLabels[phase]}
              </button>
            </div>
          </div>
        )}

        {/* PHASE: Open Reflection */}
        {phase === 'reflection' && (
          <div className="space-y-4">
            <OpenReflection exercise={session.openReflection} onResult={handleResult} />
            <div className="text-center pt-4">
              <button
                onClick={goToNextPhase}
                disabled={!results.some((r) => r.exerciseType === 'open-reflection')}
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
                <p className="text-sm text-amber-800 font-medium">⏱️ Die Zeit ist abgelaufen.</p>
                <p className="text-xs text-amber-700 mt-1">Hier sind deine bisherigen Ergebnisse. Du kannst den Lernpfad jederzeit erneut starten.</p>
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
