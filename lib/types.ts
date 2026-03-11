// ---- Content Types ----

export interface RevealCardData {
  id: string;
  question: string;
  answer: string;
  hint?: string;
  category: string;
}

export interface ComparisonDuelData {
  id: string;
  compoundA: { name: string; formula?: string; structure?: string };
  compoundB: { name: string; formula?: string; structure?: string };
  correctAnswer: 'A' | 'B';
  explanation: string;
  property: string; // z.B. "basischer", "saurer", "höherer Siedepunkt"
}

export interface SortChallengeData {
  id: string;
  instruction: string;
  items: { id: string; label: string; formula?: string }[];
  correctOrder: string[]; // item ids in correct order
  orderLabel: string; // z.B. "schwächer → stärker"
  explanation: string;
}

export interface ChemistryBuilderData {
  id: string;
  instruction: string;
  // SVG-based molecule with slots
  moleculeBase: string; // description of the base molecule
  slots: {
    id: string;
    position: { x: number; y: number };
    correctAnswer: string;
    label?: string;
  }[];
  options: { id: string; label: string; symbol: string }[];
  explanation: string;
}

export interface DrawingExerciseData {
  id: string;
  instruction: string;
  hint?: string;
  aiContext: string; // context for Claude Vision
}

export interface OpenReflectionData {
  id: string;
  question: string;
  aiContext: string; // context for Claude text feedback
  hint?: string;
}

// ---- Evaluation Types ----

export interface ExerciseResult {
  exerciseId: string;
  exerciseType: string;
  correct: boolean;
  score: number; // 0-1
  maxScore: number;
  kLevel: number; // K1-K6
}

export interface SessionState {
  revealCards: RevealCardData[];
  comparisonDuels: ComparisonDuelData[];
  sortChallenge: SortChallengeData;
  chemistryBuilders: ChemistryBuilderData[];
  drawingExercise: DrawingExerciseData;
  openReflection: OpenReflectionData;
  results: ExerciseResult[];
  studentName: string;
  startedAt: string;
}

// ---- Content Pool ----

export interface ContentPool {
  revealCards: RevealCardData[];
  comparisonDuels: ComparisonDuelData[];
  sortChallenges: SortChallengeData[];
  chemistryBuilders: ChemistryBuilderData[];
  drawingExercises: DrawingExerciseData[];
  openReflections: OpenReflectionData[];
}
