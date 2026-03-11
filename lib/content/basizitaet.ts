import {
  ContentPool,
  RevealCardData,
  ComparisonDuelData,
  SortChallengeData,
  ChemistryBuilderData,
  DrawingExerciseData,
  OpenReflectionData,
} from '../types';

// ========== REVEAL CARDS (K1 - Erinnern) ==========

const revealCards: RevealCardData[] = [
  {
    id: 'rc-1',
    category: 'Grundlagen',
    question: 'Warum sind Amine basisch?',
    answer:
      'Der Stickstoff verfügt über ein freies Elektronenpaar. Stickstoff ist weniger elektronegativ als Sauerstoff, weshalb Amine eine grössere Neigung als Alkohole haben, mit einem Proton zu reagieren.',
    hint: 'Denke an die Elektronegativität von N vs. O',
  },
  {
    id: 'rc-2',
    category: 'Induktiver Effekt',
    question: 'Warum ist Methylamin basischer als Ammoniak?',
    answer:
      'Die Methylgruppe ist ein Elektronendonor (+I-Effekt) und erhöht die Elektronendichte des freien Elektronenpaares am Stickstoff. Dadurch kann das Elektronenpaar leichter ein Proton angreifen.',
  },
  {
    id: 'rc-3',
    category: 'Sterische Hinderung',
    question: 'Warum sind tertiäre Amine nicht basischer als sekundäre, obwohl sie drei Alkylgruppen tragen?',
    answer:
      'Tertiäre Amine sind sterisch gehindert: Die drei Alkylgruppen behindern den Zutritt zum freien Elektronenpaar, sodass ein H⁺ nicht so leicht angreifen kann.',
  },
  {
    id: 'rc-4',
    category: 'Arylamine',
    question: 'Warum ist Anilin deutlich weniger basisch als Cyclohexylamin?',
    answer:
      'Das freie Elektronenpaar am Stickstoff von Anilin ist mit dem aromatischen Ring delokalisiert (Mesomerie). Diese Stabilisierung fällt beim Ammonium-Ion weg, weshalb Anilin ungern ein H⁺ aufnimmt.',
  },
  {
    id: 'rc-5',
    category: 'Substituenten',
    question: 'Wie beeinflussen elektronenziehende Substituenten die Basizität von Aminen?',
    answer:
      'Elektronenziehende Substituenten (z.B. Cl, NO₂) in der Nähe der Aminogruppe erniedrigen die Basizität, weil sie die Elektronendichte am Stickstoff verringern. So ist 2-Chlorethylamin schwächer basisch als Ethylamin.',
  },
  {
    id: 'rc-6',
    category: 'Diphenylamin',
    question: 'Warum ist Diphenylamin (~10⁴ mal weniger basisch als Anilin) so eine schwache Base?',
    answer:
      'Das freie Elektronenpaar am Stickstoff ist nicht nur mit einem, sondern mit zwei aromatischen Ringen konjugiert. Dadurch ist die Elektronendichte am Stickstoff besonders gering.',
  },
];

// ========== COMPARISON DUELS (K2 - Verstehen) ==========

const comparisonDuels: ComparisonDuelData[] = [
  {
    id: 'cd-1',
    compoundA: { name: 'Ammoniak', formula: 'NH₃' },
    compoundB: { name: 'Methylamin', formula: 'CH₃NH₂' },
    correctAnswer: 'B',
    property: 'basischer',
    explanation: 'Die Methylgruppe hat einen +I-Effekt und erhöht die Elektronendichte am Stickstoff. pKₛ(NH₄⁺) = 9.24 vs. pKₛ(CH₃NH₃⁺) = 10.62.',
  },
  {
    id: 'cd-2',
    compoundA: { name: 'Methylamin', formula: 'CH₃NH₂' },
    compoundB: { name: 'Dimethylamin', formula: '(CH₃)₂NH' },
    correctAnswer: 'B',
    property: 'basischer',
    explanation: 'Zwei Methylgruppen liefern einen stärkeren +I-Effekt als eine. pKₛ = 10.62 vs. 10.64.',
  },
  {
    id: 'cd-3',
    compoundA: { name: 'Dimethylamin', formula: '(CH₃)₂NH' },
    compoundB: { name: 'Trimethylamin', formula: '(CH₃)₃N' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Trotz drei Methylgruppen ist Trimethylamin wegen sterischer Hinderung weniger basisch. pKₛ = 10.64 vs. 9.79.',
  },
  {
    id: 'cd-4',
    compoundA: { name: 'Anilin', formula: 'C₆H₅NH₂' },
    compoundB: { name: 'Cyclohexylamin', formula: 'C₆H₁₁NH₂' },
    correctAnswer: 'B',
    property: 'basischer',
    explanation: 'Bei Anilin ist das freie Elektronenpaar in den aromatischen Ring delokalisiert. Bei Cyclohexylamin gibt es keine solche Delokalisierung, plus der +I-Effekt der Alkylgruppe.',
  },
  {
    id: 'cd-5',
    compoundA: { name: 'Ethylamin', formula: 'CH₃CH₂NH₂' },
    compoundB: { name: '2-Chlorethylamin', formula: 'ClCH₂CH₂NH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Chlor hat einen elektronenziehenden -I-Effekt und verringert die Elektronendichte am Stickstoff.',
  },
  {
    id: 'cd-6',
    compoundA: { name: 'Anilin', formula: 'C₆H₅NH₂' },
    compoundB: { name: 'p-Nitroanilin', formula: 'O₂N-C₆H₄-NH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Die Nitrogruppe in para-Position steht in direkter Konjugation mit der Aminogruppe und zieht Elektronendichte ab. pKₛ = 4.60 vs. 1.00.',
  },
  {
    id: 'cd-7',
    compoundA: { name: 'p-Methylanilin', formula: 'CH₃-C₆H₄-NH₂' },
    compoundB: { name: 'p-Chloranilin', formula: 'Cl-C₆H₄-NH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Die Methylgruppe ist ein Elektronendonor (+I-Effekt), während Chlor ein Elektronenakzeptor ist (-I-Effekt).',
  },
  {
    id: 'cd-8',
    compoundA: { name: 'Anilin', formula: 'C₆H₅NH₂' },
    compoundB: { name: 'Diphenylamin', formula: '(C₆H₅)₂NH' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Bei Diphenylamin ist das Elektronenpaar mit zwei Ringen konjugiert statt nur einem. Diphenylamin ist ca. 10⁴ mal weniger basisch.',
  },
  {
    id: 'cd-9',
    compoundA: { name: 'Diethylamin', formula: '(C₂H₅)₂NH' },
    compoundB: { name: 'Ethylamin', formula: 'C₂H₅NH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Zwei Ethylgruppen liefern einen stärkeren +I-Effekt. Sekundäre Alkylamine sind basischer als primäre.',
  },
  {
    id: 'cd-10',
    compoundA: { name: 'p-Fluoranilin', formula: 'F-C₆H₄-NH₂' },
    compoundB: { name: 'p-Cyanoanilin', formula: 'NC-C₆H₄-NH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Die Cyanogruppe ist ein viel stärkerer Elektronenakzeptor als Fluor. pKₛ = 4.65 vs. 1.74.',
  },
];

// ========== SORT CHALLENGES (K4 - Analysieren) ==========

const sortChallenges: SortChallengeData[] = [
  {
    id: 'sc-1',
    instruction: 'Ordne die folgenden Verbindungen nach steigender Basizität.',
    items: [
      { id: 'anilin', label: 'Anilin', formula: 'C₆H₅NH₂' },
      { id: 'ammoniak', label: 'Ammoniak', formula: 'NH₃' },
      { id: 'methylamin', label: 'Methylamin', formula: 'CH₃NH₂' },
      { id: 'dimethylamin', label: 'Dimethylamin', formula: '(CH₃)₂NH' },
    ],
    correctOrder: ['anilin', 'ammoniak', 'methylamin', 'dimethylamin'],
    orderLabel: 'schwächste Base → stärkste Base',
    explanation:
      'Anilin (pKₛ ≈ 4.6) < Ammoniak (9.24) < Methylamin (10.62) < Dimethylamin (10.64). Arylamine sind wegen Delokalisierung am schwächsten, Alkylamine werden durch +I-Effekt stärker, aber tertiäre Amine fallen wegen sterischer Hinderung wieder ab.',
  },
  {
    id: 'sc-2',
    instruction: 'Ordne die folgenden Arylamine nach steigender Basizität.',
    items: [
      { id: 'p-nitro', label: 'p-Nitroanilin', formula: 'O₂N-C₆H₄-NH₂' },
      { id: 'anilin', label: 'Anilin', formula: 'C₆H₅-NH₂' },
      { id: 'p-methyl', label: 'p-Methylanilin', formula: 'CH₃-C₆H₄-NH₂' },
      { id: 'p-chlor', label: 'p-Chloranilin', formula: 'Cl-C₆H₄-NH₂' },
    ],
    correctOrder: ['p-nitro', 'p-chlor', 'anilin', 'p-methyl'],
    orderLabel: 'schwächste Base → stärkste Base',
    explanation:
      'p-Nitroanilin (pKₛ = 1.00) < p-Chloranilin (3.98) < Anilin (4.60) < p-Methylanilin. Die Nitrogruppe ist der stärkste Elektronenakzeptor, Methyl ist ein Donor.',
  },
  {
    id: 'sc-3',
    instruction: 'Ordne die folgenden Verbindungen nach steigender Basizität.',
    items: [
      { id: 'diphenyl', label: 'Diphenylamin', formula: '(C₆H₅)₂NH' },
      { id: 'trimethyl', label: 'Trimethylamin', formula: '(CH₃)₃N' },
      { id: 'anilin', label: 'Anilin', formula: 'C₆H₅NH₂' },
      { id: 'diethyl', label: 'Diethylamin', formula: '(C₂H₅)₂NH' },
    ],
    correctOrder: ['diphenyl', 'anilin', 'trimethyl', 'diethyl'],
    orderLabel: 'schwächste Base → stärkste Base',
    explanation:
      'Diphenylamin (pKₛ ≈ 0.79) < Anilin (4.60) < Trimethylamin (9.79) < Diethylamin (10.94). Die Konjugation mit aromatischen Ringen senkt die Basizität drastisch.',
  },
];

// ========== CHEMISTRY BUILDERS (K3 - Anwenden) ==========

const chemistryBuilders: ChemistryBuilderData[] = [
  {
    id: 'cb-1',
    instruction: 'Welche funktionelle Gruppe muss am Benzolring stehen, damit ein primäres aromatisches Amin entsteht?',
    moleculeBase: 'Benzolring mit einer leeren Position',
    slots: [
      { id: 'slot-1', position: { x: 200, y: 60 }, correctAnswer: 'nh2', label: '?' },
    ],
    options: [
      { id: 'nh2', label: 'Aminogruppe', symbol: 'NH₂' },
      { id: 'oh', label: 'Hydroxylgruppe', symbol: 'OH' },
      { id: 'no2', label: 'Nitrogruppe', symbol: 'NO₂' },
      { id: 'ch3', label: 'Methylgruppe', symbol: 'CH₃' },
    ],
    explanation: 'Ein primäres aromatisches Amin (Anilin) entsteht durch eine NH₂-Gruppe am Benzolring. Die NO₂-Gruppe wäre eine Nitroverbindung, die aber zum Amin reduziert werden kann.',
  },
  {
    id: 'cb-2',
    instruction: 'Vervollständige die Protonierung von Methylamin: Was entsteht, wenn Methylamin mit HCl reagiert?',
    moleculeBase: 'CH₃NH₂ + HCl → ?',
    slots: [
      { id: 'slot-1', position: { x: 280, y: 100 }, correctAnswer: 'nh3cl', label: '?' },
    ],
    options: [
      { id: 'nh3cl', label: 'Ammoniumsalz', symbol: 'CH₃NH₃⁺ Cl⁻' },
      { id: 'nhcl', label: 'Chloramin', symbol: 'CH₃NHCl' },
      { id: 'ncl', label: 'Dichloramin', symbol: 'CH₃NCl₂' },
      { id: 'oh', label: 'Alkohol', symbol: 'CH₃OH' },
    ],
    explanation: 'Methylamin als Base nimmt ein Proton von HCl auf und bildet das Methylammoniumchlorid (CH₃NH₃⁺ Cl⁻). Das freie Elektronenpaar am Stickstoff greift das Proton an.',
  },
  {
    id: 'cb-3',
    instruction: 'Welcher Substituent in para-Position würde die Basizität von Anilin am stärksten erhöhen?',
    moleculeBase: 'Anilin mit para-Position leer',
    slots: [
      { id: 'slot-1', position: { x: 200, y: 200 }, correctAnswer: 'ch3o', label: 'para-?' },
    ],
    options: [
      { id: 'no2', label: 'Nitro', symbol: 'NO₂' },
      { id: 'ch3o', label: 'Methoxy', symbol: 'OCH₃' },
      { id: 'cl', label: 'Chlor', symbol: 'Cl' },
      { id: 'cn', label: 'Cyano', symbol: 'CN' },
    ],
    explanation: 'OCH₃ ist ein Elektronendonor (+M-Effekt) und erhöht die Elektronendichte am Stickstoff. NO₂ und CN sind starke Akzeptoren, Cl ist ein schwacher Akzeptor.',
  },
  {
    id: 'cb-4',
    instruction: 'Was entsteht bei der Säure-Base-Extraktion, wenn Anilin mit verdünnter HCl behandelt wird?',
    moleculeBase: 'C₆H₅NH₂ + HCl (aq) → ?',
    slots: [
      { id: 'slot-1', position: { x: 280, y: 100 }, correctAnswer: 'salt', label: '?' },
    ],
    options: [
      { id: 'salt', label: 'Anilinium-Salz', symbol: 'C₆H₅NH₃⁺ Cl⁻' },
      { id: 'chlor', label: 'Chlorbenzol', symbol: 'C₆H₅Cl' },
      { id: 'nitro', label: 'Nitrobenzol', symbol: 'C₆H₅NO₂' },
      { id: 'amid', label: 'Acetanilid', symbol: 'C₆H₅NHCOCH₃' },
    ],
    explanation: 'Die Aminogruppe wird protoniert und es entsteht das wasserlösliche Anilinium-Hydrochlorid. Dies ist die Basis der Säure-Base-Extraktion zur Isolierung von Aminen.',
  },
  {
    id: 'cb-5',
    instruction: 'Welches Reagenz reduziert Nitrobenzol zum primären Amin (Anilin)?',
    moleculeBase: 'C₆H₅NO₂ + ? → C₆H₅NH₂',
    slots: [
      { id: 'slot-1', position: { x: 200, y: 100 }, correctAnswer: 'h2pd', label: '?' },
    ],
    options: [
      { id: 'h2pd', label: 'Katalytische Hydrierung', symbol: 'H₂ / Pd/C' },
      { id: 'naoh', label: 'Base', symbol: 'NaOH' },
      { id: 'hcl', label: 'Säure', symbol: 'HCl' },
      { id: 'nabh4', label: 'Mildes Reduktionsmittel', symbol: 'NaBH₄' },
    ],
    explanation: 'Die Reduktion von Nitroverbindungen zu Aminen erfolgt durch katalytische Hydrierung (H₂/Pd/C) oder mit Zn/NH₄Cl. 97% des weltweiten Nitrobenzols wird so zu Anilin reduziert.',
  },
];

// ========== DRAWING EXERCISES (K6 - Erschaffen) ==========

const drawingExercises: DrawingExerciseData[] = [
  {
    id: 'de-1',
    instruction: 'Zeichne die Skelettformel von Diethylamin ((C₂H₅)₂NH).',
    hint: 'Denke daran: In der Skelettformel werden C-Atome als Ecken dargestellt, aber das N-Atom muss explizit gezeigt werden.',
    aiContext: 'Der Schüler soll Diethylamin als Skelettformel zeichnen: zwei Ethyl-Ketten, die über ein NH verbunden sind. Korrekt wäre eine Zickzack-Linie mit N-H in der Mitte. Bewerte ob die Struktur chemisch korrekt ist und ob die Skelettformel-Konventionen eingehalten werden.',
  },
  {
    id: 'de-2',
    instruction: 'Zeichne die Grenzstrukturen von Anilin, die zeigen, warum das freie Elektronenpaar am Stickstoff delokalisiert ist.',
    hint: 'Es gibt mehrere Grenzstrukturen. Zeige, wie das Elektronenpaar in den Ring "wandert".',
    aiContext: 'Der Schüler soll die Mesomerie/Grenzstrukturen von Anilin zeichnen. Es gibt 5 Grenzstrukturen: die neutrale Form und 4 Formen, bei denen das Elektronenpaar in ortho- und para-Positionen des Rings delokalisiert ist (N trägt positive Ladung, Ring-C trägt negative Ladung). Bewerte die Korrektheit der Ladungen, Doppelbindungen und ob mindestens 2-3 Grenzstrukturen gezeigt werden.',
  },
];

// ========== OPEN REFLECTIONS (K5 - Bewerten) ==========

const openReflections: OpenReflectionData[] = [
  {
    id: 'or-1',
    question: 'Ein Kollege schlägt vor, ein tertiäres Amin über die direkte Alkylierung von Ammoniak mit einem Überschuss an Bromethan herzustellen. Bewerte diesen Vorschlag: Würde das funktionieren? Was sind die Probleme?',
    aiContext: `Kontext aus dem Skript: Bei der direkten Alkylierung kommt es zu Folgereaktionen (primär → sekundär → tertiär). Ein grosser Überschuss des Amins unterdrückt dies, aber bei Ammoniak als Ausgangsstoff und Überschuss Bromethan erhält man ein Gemisch aller Substitutionsgrade. Der Vorschlag ist problematisch, weil:
1. Folgereaktionen auftreten (das gebildete primäre Amin ist nukleophiler als NH₃)
2. Ein Gemisch aus primärem, sekundärem und tertiärem Amin entsteht
3. Besser wäre die reduktive Aminierung oder Gabriel-Synthese (nur für primäre)
Gute Antwort: Erkennt das Problem der Folgereaktionen, schlägt Alternativen vor.`,
    hint: 'Denke an die Nukleophilie der entstehenden Produkte.',
  },
  {
    id: 'or-2',
    question: 'In einem Gemisch befinden sich Naphthalin, Benzoesäure und 3-Nitroanilin. Beschreibe Schritt für Schritt, wie du die drei Verbindungen mittels Säure-Base-Extraktion trennen würdest.',
    aiContext: `Kontext aus dem Skript (Auftrag 25): Die Trennung erfolgt durch:
1. Lösen in Diethylether
2. Extraktion mit HCl → 3-Nitroanilin geht als Ammoniumsalz in die wässrige Phase
3. Die wässrige Phase basisch stellen (NaOH) → 3-Nitroanilin fällt als gelber Niederschlag aus
4. Etherphase mit NaOH extrahieren → Benzoesäure geht als Natriumsalz in wässrige Phase
5. Wässrige Phase ansäuern → Benzoesäure fällt als farbloser Niederschlag aus
6. Etherphase enthält Naphthalin → Ether abdestillieren
Gute Antwort: Nennt die Reihenfolge der Extraktionen, erklärt warum HCl das Amin und NaOH die Säure extrahiert.`,
    hint: 'Nutze die unterschiedlichen Säure-Base-Eigenschaften der drei Verbindungen aus.',
  },
];

// ========== EXPORT ==========

export const contentPool: ContentPool = {
  revealCards,
  comparisonDuels,
  sortChallenges,
  chemistryBuilders,
  drawingExercises,
  openReflections,
};
