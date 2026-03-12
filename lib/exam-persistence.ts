import { ExamSessionState, ExerciseResult } from './types';

const STORAGE_KEY = 'amine-exam-session-v1';

export interface PersistedExamSession {
  version: number;
  session: ExamSessionState;
  currentPhase: string;
  results: ExerciseResult[];
  timerRemainingMs: number;
  savedAt: string;
}

export function saveExamSession(
  session: ExamSessionState,
  currentPhase: string,
  results: ExerciseResult[]
): void {
  const elapsed = Date.now() - new Date(session.timerStartedAt).getTime();
  const timerRemainingMs = Math.max(0, session.timerDurationMs - elapsed);

  const data: PersistedExamSession = {
    version: 1,
    session,
    currentPhase,
    results,
    timerRemainingMs,
    savedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable -- ignore silently
  }
}

export function loadExamSession(): PersistedExamSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedExamSession;
    if (parsed.version !== 1) return null;
    if (parsed.timerRemainingMs <= 0) {
      clearExamSession();
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearExamSession(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
