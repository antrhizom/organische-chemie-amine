'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('studentName', name.trim());
      router.push('/lernen');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span>🧪</span>
            <span>Organische Chemie III</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Basizität von Aminen
          </h1>
          <p className="text-lg text-gray-500">
            Interaktive Repetition -- Auftrag 24
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-6">
            {/* Info */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-2">Was dich erwartet</h3>
              <ul className="text-sm text-amber-700 space-y-1.5">
                <li className="flex gap-2"><span>🔍</span><span><strong>Aufdeckkarten</strong> -- Kernkonzepte aktiv wiederholen</span></li>
                <li className="flex gap-2"><span>⚔️</span><span><strong>Vergleichs-Duelle</strong> -- Welches Amin ist basischer?</span></li>
                <li className="flex gap-2"><span>🧩</span><span><strong>Formel-Baukasten</strong> -- Moleküle vervollständigen</span></li>
                <li className="flex gap-2"><span>📊</span><span><strong>Sortier- & Synthese-Challenge</strong> -- Reihenfolgen ordnen</span></li>
                <li className="flex gap-2"><span>🔬</span><span><strong>Fallbeispiel</strong> -- Analyse mit KI-Bewertung</span></li>
                <li className="flex gap-2"><span>✏️</span><span><strong>Zeichnen & Reflektieren</strong> -- KI gibt Feedback</span></li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200 flex items-center gap-2 text-xs text-amber-600">
                <span>⏱️</span>
                <span>Zeitrahmen: ca. 60 Minuten · Dein Fortschritt wird automatisch gespeichert.</span>
              </div>
            </div>

            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Dein Name (für das Zertifikat)
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                placeholder="Vor- und Nachname"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Start button */}
            <button
              onClick={handleStart}
              disabled={!name.trim()}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-200"
            >
              Lernpfad starten
            </button>

            <p className="text-xs text-gray-400 text-center">
              Jeder Durchgang ist etwas anders -- durch zufällige Aufgabenauswahl.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          BBW Berufsbildungsschule Winterthur · Laboranten Fachrichtung Chemie
        </p>
      </div>
    </main>
  );
}
