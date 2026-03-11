import {
  ContentPool,
  RevealCardData,
  ComparisonDuelData,
  SortChallengeData,
  ChemistryBuilderData,
  DrawingExerciseData,
  OpenReflectionData,
  SynthesisOrderData,
  CaseStudyData,
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

// ========== SYNTHESIS ORDERS (K4 - Analysieren) ==========

const synthesisOrders: SynthesisOrderData[] = [
  {
    id: 'so-1',
    instruction: 'Bringe die Schritte der Gabriel-Synthese in die richtige Reihenfolge.',
    synthesisName: 'Gabriel-Synthese',
    steps: [
      { id: 'gab-1', label: 'Phthalimid-Kaliumsalz herstellen', description: 'Phthalimid + KOH → Kalium-Phthalimid' },
      { id: 'gab-2', label: 'Alkylierung mit Halogenalkan', description: 'K-Phthalimid + R-X → N-Alkylphthalimid' },
      { id: 'gab-3', label: 'Hydrolyse mit Hydrazin', description: 'N-Alkylphthalimid + N₂H₄ → primäres Amin + Phthalhydrazid' },
      { id: 'gab-4', label: 'Primäres Amin isolieren', description: 'Reines R-NH₂ wird abgetrennt' },
    ],
    correctOrder: ['gab-1', 'gab-2', 'gab-3', 'gab-4'],
    explanation: 'Die Gabriel-Synthese liefert selektiv primäre Amine ohne Überalkylierung. Das Phthalimid schützt die Aminogruppe vor Folgereaktionen.',
  },
  {
    id: 'so-2',
    instruction: 'Bringe die Schritte der reduktiven Aminierung in die richtige Reihenfolge.',
    synthesisName: 'Reduktive Aminierung',
    steps: [
      { id: 'ra-1', label: 'Aldehyd/Keton mit Amin mischen', description: 'R-CHO + R\'NH₂ → Gemisch' },
      { id: 'ra-2', label: 'Imin-Bildung (Schiff-Base)', description: 'Kondensation unter Wasserabspaltung → R-CH=NR\'' },
      { id: 'ra-3', label: 'Selektive Reduktion mit NaBH₃CN', description: 'Imin wird zum Amin reduziert, Aldehyd bleibt unberührt' },
      { id: 'ra-4', label: 'Sekundäres Amin isolieren', description: 'R-CH₂-NHR\' wird erhalten' },
    ],
    correctOrder: ['ra-1', 'ra-2', 'ra-3', 'ra-4'],
    explanation: 'Die reduktive Aminierung ist sehr vielseitig: Man kann primäre, sekundäre oder tertiäre Amine gezielt herstellen. NaBH₃CN reduziert selektiv das Imin, nicht die Carbonylverbindung.',
  },
  {
    id: 'so-3',
    instruction: 'Bringe die Schritte der Anilin-Synthese aus Benzol in die richtige Reihenfolge.',
    synthesisName: 'Nitroreduktion (Anilin-Synthese)',
    steps: [
      { id: 'nr-1', label: 'Nitrierung von Benzol', description: 'Benzol + HNO₃/H₂SO₄ → Nitrobenzol' },
      { id: 'nr-2', label: 'Katalytische Reduktion', description: 'Nitrobenzol + 3 H₂ (Pd/C) → Anilin + 2 H₂O' },
      { id: 'nr-3', label: 'Anilin isolieren', description: 'C₆H₅NH₂ wird durch Destillation gereinigt' },
    ],
    correctOrder: ['nr-1', 'nr-2', 'nr-3'],
    explanation: 'Die Nitroreduktion ist die wichtigste industrielle Methode zur Anilin-Herstellung. 97% des weltweit produzierten Nitrobenzols wird so zu Anilin umgewandelt.',
  },
  {
    id: 'so-4',
    instruction: 'Bringe die Schritte der direkten Alkylierung in die richtige Reihenfolge und erkenne das Problem.',
    synthesisName: 'Direkte Alkylierung (mit Überalkylierung)',
    steps: [
      { id: 'da-1', label: 'NH₃ + R-X → primäres Amin + HX', description: 'Ammoniak reagiert mit Halogenalkan' },
      { id: 'da-2', label: 'R-NH₂ + R-X → sekundäres Amin + HX', description: 'Primäres Amin reagiert weiter (nukleophiler als NH₃!)' },
      { id: 'da-3', label: 'R₂NH + R-X → tertiäres Amin + HX', description: 'Sekundäres Amin reagiert weiter' },
      { id: 'da-4', label: 'R₃N + R-X → quartäres Ammoniumsalz', description: 'Auch tertiäres Amin reagiert noch weiter' },
    ],
    correctOrder: ['da-1', 'da-2', 'da-3', 'da-4'],
    explanation: 'Das Grundproblem der direkten Alkylierung: Jedes gebildete Amin ist nukleophiler als das vorherige und reagiert bevorzugt weiter. Man erhält immer ein Gemisch aller Substitutionsgrade. Nur ein grosser Überschuss an NH₃ kann dies teilweise unterdrücken.',
  },
  {
    id: 'so-5',
    instruction: 'Bringe die Schritte der Nitrilreduktion in die richtige Reihenfolge.',
    synthesisName: 'Nitrilreduktion',
    steps: [
      { id: 'nc-1', label: 'Halogenalkan mit NaCN umsetzen', description: 'R-X + NaCN → R-CN + NaX (SN2-Reaktion)' },
      { id: 'nc-2', label: 'Nitril mit LiAlH₄ reduzieren', description: 'R-CN + LiAlH₄ → R-CH₂-NH₂' },
      { id: 'nc-3', label: 'Primäres Amin mit verlängerter Kette isolieren', description: 'R-CH₂-NH₂ (ein C-Atom mehr als R-X)' },
    ],
    correctOrder: ['nc-1', 'nc-2', 'nc-3'],
    explanation: 'Die Nitrilreduktion verlängert die Kohlenstoffkette um ein C-Atom und liefert selektiv ein primäres Amin. Sie ist komplementär zur Gabriel-Synthese.',
  },
];

// ========== CASE STUDIES (K5 - Bewerten, KI bewertet Antworten) ==========

const caseStudies: CaseStudyData[] = [
  {
    id: 'cs-1',
    title: 'Unbekanntes Amin identifizieren',
    scenario: `In deinem Praktikum erhältst du eine Probe eines unbekannten Amins. Du führst folgende Tests durch:

• Die Substanz ist bei Raumtemperatur flüssig und wasserlöslich.
• Der gemessene pKₛ-Wert des konjugierten Ammonium-Ions beträgt 10.73.
• Bei der Reaktion mit salpetriger Säure (HNO₂) entsteht ein Alkohol und Stickstoffgas (N₂).
• Die molare Masse beträgt ca. 45 g/mol.

Analysiere die Daten und identifiziere das Amin.`,
    questions: [
      {
        id: 'cs-1-q1',
        prompt: 'Handelt es sich um ein primäres, sekundäres oder tertiäres Amin? Begründe anhand der experimentellen Daten.',
        hint: 'Welcher Test unterscheidet primäre von sekundären und tertiären Aminen?',
        expectedTopics: ['primäres Amin', 'HNO₂-Test', 'N₂-Entwicklung', 'primäre Amine reagieren mit HNO₂ unter Stickstoffabspaltung'],
      },
      {
        id: 'cs-1-q2',
        prompt: 'Ist es ein Alkyl- oder Arylamin? Welche Daten stützen deine Einschätzung?',
        hint: 'Vergleiche den pKₛ-Wert mit typischen Werten für Alkyl- und Arylamine.',
        expectedTopics: ['Alkylamin', 'pKₛ ≈ 10.7 typisch für Alkylamine', 'Arylamine haben pKₛ < 5', 'wasserlöslich deutet auf niedrige Molmasse'],
      },
      {
        id: 'cs-1-q3',
        prompt: 'Welches konkrete Amin könnte es sein? Begründe mit der molaren Masse.',
        hint: 'Berechne die Molmasse möglicher primärer Alkylamine.',
        expectedTopics: ['Ethylamin', 'C₂H₅NH₂', 'M = 45.08 g/mol', '2·12 + 7·1 + 14 = 45'],
      },
    ],
    aiContext: `Kontext: Es handelt sich um Ethylamin (C₂H₅NH₂, M = 45.08 g/mol).
Begründung:
- Primäres Amin: HNO₂-Test mit N₂-Entwicklung ist charakteristisch für primäre Amine (sekundäre bilden Nitrosamine, tertiäre reagieren nicht mit HNO₂).
- Alkylamin: pKₛ = 10.73 ist typisch für Alkylamine (Arylamine wie Anilin haben pKₛ ≈ 4.6).
- Ethylamin: M(CH₃CH₂NH₂) = 2×12 + 7×1 + 14 = 45 g/mol. Methylamin (M=31) wäre zu leicht, Propylamin (M=59) zu schwer.
Bewerte nach: 1) Korrekte Zuordnung primär/sekundär/tertiär, 2) Richtige Interpretation der pKₛ-Werte, 3) Korrekte Berechnung der Molmasse, 4) Fachsprachliche Genauigkeit.`,
  },
  {
    id: 'cs-2',
    title: 'Syntheseplanung: Selektive Amin-Herstellung',
    scenario: `Du arbeitest in einem Pharmaunternehmen und sollst Benzylamin (C₆H₅CH₂NH₂) in grösserer Menge herstellen. Dein Vorgesetzter schlägt vor, einfach Benzylbromid (C₆H₅CH₂Br) mit einem grossen Überschuss Ammoniak umzusetzen.

Du weisst aus dem Unterricht, dass es verschiedene Synthesemethoden für primäre Amine gibt:
• Direkte Alkylierung
• Gabriel-Synthese
• Nitrilreduktion
• Reduktive Aminierung

Beurteile den Vorschlag und empfehle die beste Methode.`,
    questions: [
      {
        id: 'cs-2-q1',
        prompt: 'Warum ist der Vorschlag der direkten Alkylierung problematisch? Erkläre das Hauptproblem.',
        hint: 'Was passiert mit dem primären Amin, sobald es gebildet wird?',
        expectedTopics: ['Überalkylierung', 'Folgereaktionen', 'primäres Amin nukleophiler als NH₃', 'Gemisch aus primär/sekundär/tertiär', 'quartäres Ammoniumsalz'],
      },
      {
        id: 'cs-2-q2',
        prompt: 'Welche Synthesemethode würdest du empfehlen und warum? Beschreibe die Schritte.',
        hint: 'Welche Methode liefert selektiv ein primäres Amin?',
        expectedTopics: ['Gabriel-Synthese', 'Phthalimid', 'selektiv primäre Amine', 'keine Überalkylierung', 'alternativ Nitrilreduktion'],
      },
    ],
    aiContext: `Kontext: Benzylamin-Herstellung
- Direkte Alkylierung ist problematisch: C₆H₅CH₂Br + NH₃ → C₆H₅CH₂NH₂, aber das Produkt ist nukleophiler als NH₃ und reagiert weiter zu Di- und Tribenzylamin.
- Gabriel-Synthese wäre ideal: Phthalimid-K + C₆H₅CH₂Br → N-Benzylphthalimid → Hydrolyse → reines Benzylamin. Keine Überalkylierung möglich.
- Nitrilreduktion: C₆H₅CH₂Br + NaCN → C₆H₅CH₂CN → Reduktion → C₆H₅CH₂CH₂NH₂ (aber Achtung: dies verlängert die Kette um 1 C!).
- Reduktive Aminierung: Benzaldehyd + NH₃ → Imin → Reduktion → Benzylamin. Auch möglich.
Bewerte nach: 1) Verständnis des Überalkylierungsproblems, 2) Begründete Methodenwahl, 3) Korrekte Beschreibung der Syntheseschritte, 4) Umfang und Tiefe der Analyse.`,
  },
  {
    id: 'cs-3',
    title: 'Trennproblem: Säure-Base-Extraktion',
    scenario: `Im Labor hast du ein Gemisch aus drei Substanzen, die du voneinander trennen musst:

1. Toluol (C₆H₅CH₃) -- ein neutraler Kohlenwasserstoff
2. Benzoesäure (C₆H₅COOH) -- eine organische Säure
3. p-Toluidin (CH₃-C₆H₄-NH₂) -- ein aromatisches Amin

Alle drei Substanzen sind in Diethylether löslich, aber unterscheiden sich in ihren Säure-Base-Eigenschaften.

Beschreibe ein Trennverfahren basierend auf Säure-Base-Extraktion.`,
    questions: [
      {
        id: 'cs-3-q1',
        prompt: 'Wie würdest du zuerst das Amin (p-Toluidin) aus dem Gemisch isolieren? Beschreibe den Vorgang und die chemische Reaktion.',
        hint: 'Amine sind Basen -- wie kannst du sie wasserlöslich machen?',
        expectedTopics: ['HCl-Extraktion', 'Protonierung', 'Ammoniumsalz', 'wasserlöslich', 'wässrige Phase', 'NaOH zum Freisetzen'],
      },
      {
        id: 'cs-3-q2',
        prompt: 'Wie trennst du anschliessend die Benzoesäure vom Toluol? Beschreibe den vollständigen Ablauf bis zur Isolierung aller drei reinen Substanzen.',
        hint: 'Benzoesäure reagiert als Säure mit Basen.',
        expectedTopics: ['NaOH-Extraktion', 'Natriumbenzoat wasserlöslich', 'Ansäuern mit HCl', 'Benzoesäure fällt aus', 'Toluol bleibt in Etherphase', 'Ether abdestillieren'],
      },
    ],
    aiContext: `Kontext (Auftrag 25 -- Isolierung von Aminen):
Korrektes Trennverfahren:
1. Gemisch in Diethylether lösen
2. Mit verd. HCl extrahieren: p-Toluidin (Base) wird protoniert → CH₃-C₆H₄-NH₃⁺ Cl⁻ geht in wässrige Phase. Benzoesäure und Toluol bleiben im Ether.
3. Wässrige Phase mit NaOH versetzen → p-Toluidin wird freigesetzt (Niederschlag), abfiltrieren.
4. Etherphase mit verd. NaOH extrahieren: Benzoesäure reagiert → C₆H₅COO⁻ Na⁺ geht in wässrige Phase. Toluol bleibt im Ether.
5. Wässrige Phase mit HCl ansäuern → Benzoesäure fällt aus, abfiltrieren.
6. Etherphase enthält reines Toluol → Ether abdestillieren.
Bewerte nach: 1) Korrekte Reihenfolge der Extraktionsschritte, 2) Verständnis der Protonierung/Deprotonierung, 3) Kenntnis der Löslichkeitsunterschiede, 4) Umfang und chemische Tiefe der Erklärung.`,
  },
  {
    id: 'cs-4',
    title: 'Basizitäts-Rätsel: Struktur-Eigenschafts-Beziehung',
    scenario: `Dir liegen vier aromatische Amine vor, deren pKₛ-Werte des konjugierten Ammonium-Ions gemessen wurden:

| Verbindung | pKₛ-Wert |
|---|---|
| Verbindung A: Anilin (C₆H₅NH₂) | 4.60 |
| Verbindung B: p-Methoxyanilin (CH₃O-C₆H₄-NH₂) | 5.36 |
| Verbindung C: p-Nitroanilin (O₂N-C₆H₄-NH₂) | 1.00 |
| Verbindung D: p-Methylanilin (CH₃-C₆H₄-NH₂) | 5.08 |

Analysiere die Struktur-Eigenschafts-Beziehungen.`,
    questions: [
      {
        id: 'cs-4-q1',
        prompt: 'Ordne die vier Verbindungen nach steigender Basizität und erkläre, warum diese Reihenfolge zustande kommt. Beziehe dich dabei auf die elektronischen Effekte der Substituenten.',
        hint: 'Welche Substituenten sind Elektronendonoren (+I/+M), welche sind Akzeptoren (-I/-M)?',
        expectedTopics: ['p-Nitroanilin schwächste Base', '-M-Effekt der NO₂-Gruppe', '+I-Effekt von CH₃', '+M-Effekt von OCH₃', 'Elektronendichte am Stickstoff', 'Mesomerie', 'Reihenfolge C < A < D < B'],
      },
      {
        id: 'cs-4-q2',
        prompt: 'Warum ist der Unterschied zwischen Anilin (4.60) und p-Nitroanilin (1.00) so viel grösser als zwischen Anilin (4.60) und p-Methylanilin (5.08)? Erkläre den Mechanismus.',
        hint: 'Vergleiche den induktiven Effekt von CH₃ mit dem mesomeren Effekt von NO₂.',
        expectedTopics: ['NO₂ hat starken -M-Effekt', 'direkte Konjugation mit NH₂', 'CH₃ hat nur schwachen +I-Effekt', 'Mesomerie stärker als Induktion', 'Elektronenpaar wird in NO₂ delokalisiert'],
      },
    ],
    aiContext: `Kontext: Basizität substituierter Aniline (Auftrag 24).
Richtige Reihenfolge steigender Basizität: p-Nitroanilin (1.00) < Anilin (4.60) < p-Methylanilin (5.08) < p-Methoxyanilin (5.36).
Erklärung:
- NO₂ in para: Starker -M-Effekt. Die NO₂-Gruppe steht in direkter Konjugation mit der NH₂-Gruppe über den aromatischen Ring. Das Elektronenpaar am N wird stark in Richtung NO₂ delokalisiert → drastische Basizitätsabnahme.
- CH₃ in para: Schwacher +I-Effekt. Erhöht die Elektronendichte am Ring leicht → moderate Basizitätserhöhung.
- OCH₃ in para: +M-Effekt. Das freie Elektronenpaar am Sauerstoff erhöht die Elektronendichte im Ring → stärkste Basizitätserhöhung unter den gezeigten Substituenten.
- Unterschied NO₂ vs. CH₃: Mesomere Effekte (-M) sind viel stärker als induktive (+I), besonders in para-Position, wo direkte Konjugation möglich ist.
Bewerte nach: 1) Korrekte Reihenfolge, 2) Verständnis der elektronischen Effekte, 3) Unterscheidung Mesomerie vs. Induktion, 4) Umfang und Tiefe der Analyse.`,
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
  synthesisOrders,
  caseStudies,
};
