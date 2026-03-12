'use client';

import { useState } from 'react';
import { TrueFalseQuizData, ExerciseResult } from '@/lib/types';

interface Props {
  quiz: TrueFalseQuizData;
  onResult: (result: ExerciseResult) => void;
}

export default function TrueFalseQuiz({ quiz, onResult }: Props) {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(() =>
    Object.fromEntries(quiz.statements.map((s) => [s.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = quiz.statements.every((s) => answers[s.id] !== null);

  const handleSelect = (statementId: string, value: boolean) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [statementId]: value }));
  };

  const handleSubmit = () => {
    if (!allAnswered || submitted) return;
    setSubmitted(true);

    const correctCount = quiz.statements.filter(
      (s) => answers[s.id] === s.isTrue
    ).length;
    const total = quiz.statements.length;
    const score = correctCount / total;

    onResult({
      exerciseId: quiz.id,
      exerciseType: 'true-false',
      correct: correctCount === total,
      score,
      maxScore: 1,
      kLevel: 2,
    });
  };

  const correctCount = quiz.statements.filter(
    (s) => answers[s.id] === s.isTrue
  ).length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="mb-4">
        <span className="text-xs font-medium text-indigo-600">{quiz.instruction}</span>
      </div>

      <div className="space-y-3 mb-4">
        {quiz.statements.map((statement, idx) => {
          const userAnswer = answers[statement.id];
          const isCorrectAnswer = submitted && userAnswer === statement.isTrue;
          const isWrongAnswer = submitted && userAnswer !== null && userAnswer !== statement.isTrue;

          return (
            <div
              key={statement.id}
              className={`rounded-lg border-2 p-4 transition-all duration-200 ${
                submitted
                  ? isCorrectAnswer
                    ? 'border-green-400 bg-green-50'
                    : isWrongAnswer
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-gray-400 mt-1 shrink-0">
                  {idx + 1}.
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 mb-2">{statement.statement}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSelect(statement.id, true)}
                      disabled={submitted}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        userAnswer === true
                          ? submitted
                            ? statement.isTrue
                              ? 'bg-green-600 text-white border-green-600'
                              : 'bg-red-500 text-white border-red-500'
                            : 'bg-indigo-600 text-white border-indigo-600'
                          : submitted && statement.isTrue
                            ? 'bg-green-100 text-green-700 border-green-300'
                            : 'bg-gray-50 text-gray-600 border-gray-300 hover:border-indigo-300'
                      } disabled:cursor-not-allowed`}
                    >
                      Richtig
                    </button>
                    <button
                      onClick={() => handleSelect(statement.id, false)}
                      disabled={submitted}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        userAnswer === false
                          ? submitted
                            ? !statement.isTrue
                              ? 'bg-green-600 text-white border-green-600'
                              : 'bg-red-500 text-white border-red-500'
                            : 'bg-indigo-600 text-white border-indigo-600'
                          : submitted && !statement.isTrue
                            ? 'bg-green-100 text-green-700 border-green-300'
                            : 'bg-gray-50 text-gray-600 border-gray-300 hover:border-indigo-300'
                      } disabled:cursor-not-allowed`}
                    >
                      Falsch
                    </button>
                  </div>
                  {submitted && (
                    <p className={`text-xs mt-2 ${isCorrectAnswer ? 'text-green-700' : 'text-red-700'}`}>
                      {isCorrectAnswer ? '✓' : '✗'} {statement.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="w-full py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Prüfen
        </button>
      ) : (
        <div
          className={`rounded-lg p-3 text-sm ${
            correctCount === quiz.statements.length
              ? 'bg-green-50 border border-green-200'
              : correctCount >= quiz.statements.length / 2
                ? 'bg-amber-50 border border-amber-200'
                : 'bg-red-50 border border-red-200'
          }`}
        >
          <p className="font-medium">
            {correctCount === quiz.statements.length
              ? '✅ Alle richtig!'
              : `${correctCount} von ${quiz.statements.length} korrekt.`}
          </p>
        </div>
      )}
    </div>
  );
}
