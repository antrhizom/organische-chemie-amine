import { contentPool } from './content/basizitaet';
import {
  SessionState,
  RevealCardData,
  ComparisonDuelData,
  SortChallengeData,
  ChemistryBuilderData,
  DrawingExerciseData,
  OpenReflectionData,
  SynthesisOrderData,
  CaseStudyData,
} from './types';

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

const TIMER_DURATION_MS = 60 * 60 * 1000; // 60 Minuten

export function createSession(): SessionState {
  const revealCards: RevealCardData[] = pickRandom(contentPool.revealCards, 4);
  const comparisonDuels: ComparisonDuelData[] = pickRandom(contentPool.comparisonDuels, 5);
  const sortChallenge: SortChallengeData = pickRandom(contentPool.sortChallenges, 1)[0];
  const chemistryBuilders: ChemistryBuilderData[] = pickRandom(contentPool.chemistryBuilders, 3);
  const drawingExercise: DrawingExerciseData = pickRandom(contentPool.drawingExercises, 1)[0];
  const openReflection: OpenReflectionData = pickRandom(contentPool.openReflections, 1)[0];
  const synthesisOrder: SynthesisOrderData = pickRandom(contentPool.synthesisOrders, 1)[0];
  const caseStudy: CaseStudyData = pickRandom(contentPool.caseStudies, 1)[0];

  const now = new Date().toISOString();

  return {
    revealCards,
    comparisonDuels,
    sortChallenge,
    chemistryBuilders,
    drawingExercise,
    openReflection,
    synthesisOrder,
    caseStudy,
    results: [],
    studentName: '',
    startedAt: now,
    timerStartedAt: now,
    timerDurationMs: TIMER_DURATION_MS,
  };
}
