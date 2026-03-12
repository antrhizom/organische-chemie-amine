import {
  RevealCardData,
  ComparisonDuelData,
  SortChallengeData,
  ChemistryBuilderData,
  SynthesisOrderData,
  OpenReflectionData,
  CaseStudyData,
  TrueFalseQuizData,
  ExamContentPool,
} from '../types';

// ==================================================================
// REVEAL CARDS (Jokerwissen) – K1
// Prüfungswissen als kompakte Wissenskarten
// ==================================================================

const revealCards: RevealCardData[] = [
  {
    id: 'exam-rc-1',
    category: 'Siedepunkte',
    question: 'Wie beeinflussen H-Brücken die Siedepunkte von Aminen?',
    answer:
      'Primäre und sekundäre Amine können H-Brücken ausbilden (N–H-Bindungen vorhanden), was zu höheren Siedepunkten führt. Tertiäre Amine besitzen keine N–H-Bindung und können daher keine H-Brücken bilden – ihre Siedepunkte sind ähnlich niedrig wie bei vergleichbaren Alkanen.',
    hint: 'Denke an die N–H-Bindung als Voraussetzung für H-Brücken.',
  },
  {
    id: 'exam-rc-2',
    category: 'IUPAC-Nomenklatur',
    question: 'Wie benennt man Amine nach IUPAC?',
    answer:
      'Die Aminogruppe wird als Präfix «Amino-» benannt. Die Position wird durch die Nummer des C-Atoms angegeben. Bei mehrfach substituierten Aminen: N-Methyl-, N,N-Diethyl- etc. Die längste Kette bestimmt den Stammnamen. Beispiel: 6-Amino-5-hydroxy-3-heptanon.',
    hint: 'Amino- als Präfix, N- für Substituenten am Stickstoff.',
  },
  {
    id: 'exam-rc-3',
    category: 'Nukleophilie',
    question: 'Warum sind tertiäre Amine trotz hoher Basizität oft schlechte Nukleophile?',
    answer:
      'Drei Gründe: (1) Sterische Hinderung – die drei Alkylgruppen behindern die Annäherung an ein Elektrophil. (2) In Gegenwart von Säuren werden tertiäre Amine protoniert und bilden Ammoniumsalze, die nicht nukleophil sind. (3) Sie besitzen keine N–H-Bindung für die Protonenabgabe nach dem nukleophilen Angriff.',
  },
  {
    id: 'exam-rc-4',
    category: 'Wasserlöslichkeit',
    question: 'Wovon hängt die Wasserlöslichkeit organischer Verbindungen ab?',
    answer:
      'Entscheidend ist das Verhältnis von polaren (hydrophilen) zu unpolaren (hydrophoben) Gruppen. Amine (–NH₂), Alkohole (–OH), Carbonsäuren (–COOH) und Amide (–CONH–) sind gut wasserlöslich, wenn der unpolare Rest klein genug ist. Ether, reine Kohlenwasserstoffe und Ester mit langen Ketten sind schlecht löslich.',
    hint: 'Je mehr H-Brücken-Donoren/-Akzeptoren, desto löslicher.',
  },
  {
    id: 'exam-rc-5',
    category: 'Gabriel-Synthese',
    question: 'Was ist die Gabriel-Synthese und wozu dient sie?',
    answer:
      'Die Gabriel-Synthese liefert selektiv primäre Amine ohne Überalkylierung. Ablauf: (1) Phthalimid-Kaliumsalz herstellen, (2) Alkylierung mit R–X, (3) Hydrolyse mit Hydrazin (N₂H₄) → primäres Amin + Phthalhydrazid. Vorteil: Das Stickstoff-Nukleophil ist durch die Phthalimid-Schutzgruppe blockiert, sodass keine Mehrfachalkylierung möglich ist.',
  },
  {
    id: 'exam-rc-6',
    category: 'Reduktive Aminierung',
    question: 'Was ist die reduktive Aminierung?',
    answer:
      'Ein Carbonylverbindung (Aldehyd/Keton) reagiert mit einem Amin unter Wasserabspaltung zu einem Imin (Schiff-Base). Dieses wird anschliessend selektiv mit NaBH₃CN zum Amin reduziert. Vorteil: Sehr vielseitig, da verschiedene Aldehyde/Ketone mit verschiedenen Aminen kombiniert werden können.',
  },
  {
    id: 'exam-rc-7',
    category: 'Ideales Gasgesetz',
    question: 'Wie lautet das ideale Gasgesetz und wann braucht man es?',
    answer:
      'pV = nRT mit R = 0.08314 bar·L/(mol·K). Anwendung: Berechnung der Stoffmenge eines Gases bei bekanntem Druck, Volumen und Temperatur. Wichtig: T in Kelvin (°C + 273.15). Bei Druckänderungen Δp verwenden, um verbrauchte Stoffmenge zu berechnen.',
    hint: 'R = 0.08314 bar·L/(mol·K), T immer in Kelvin!',
  },
  {
    id: 'exam-rc-8',
    category: 'Sandmeyer-Reaktion',
    question: 'Was sind Diazotierung und Sandmeyer-Reaktion?',
    answer:
      'Diazotierung: Primäres aromatisches Amin + NaNO₂/HCl bei T < 5°C → Diazoniumsalz (Ar–N₂⁺). Sandmeyer-Reaktion: Das instabile Diazoniumsalz reagiert bei T > 5°C mit CuCN, CuCl oder CuBr unter N₂-Abspaltung. So lassen sich –CN, –Cl oder –Br in den Aromaten einführen.',
  },
];

// ==================================================================
// TRUE/FALSE QUIZZES – K2
// ==================================================================

const trueFalseQuizzes: TrueFalseQuizData[] = [
  {
    id: 'exam-tf-1',
    instruction: 'Welche der folgenden Aussagen sind korrekt und welche sind falsch?',
    statements: [
      {
        id: 'exam-tf-1-a',
        statement: 'Tertiäre Amine sind weniger basisch als primäre und sekundäre, weil sie keine H-Brücken ausbilden können.',
        isTrue: false,
        explanation: 'Die Basizität hängt nicht von H-Brücken ab, sondern von der Verfügbarkeit des freien Elektronenpaares. Die geringere Basizität tertiärer Amine in Wasser liegt an sterischer Hinderung und schlechterer Solvatation des Ammonium-Ions.',
      },
      {
        id: 'exam-tf-1-b',
        statement: 'Aminoethan (Ethylamin) ist wasserlöslich.',
        isTrue: true,
        explanation: 'Ethylamin (CH₃CH₂NH₂) ist ein kleines Amin mit einer polaren NH₂-Gruppe, die H-Brücken mit Wasser bilden kann. Amine bis ca. C5 sind gut wasserlöslich.',
      },
      {
        id: 'exam-tf-1-c',
        statement: 'Aromatische Amine wie Anilin sind weniger nukleophil als Alkylamine, weil das freie Elektronenpaar in Konjugation mit dem Ring steht.',
        isTrue: true,
        explanation: 'Das freie Elektronenpaar am Stickstoff ist in das π-System des Aromaten delokalisiert. Dadurch steht es weniger für einen nukleophilen Angriff zur Verfügung.',
      },
      {
        id: 'exam-tf-1-d',
        statement: 'Die Hydrierung von Nitrilen führt zu primären Aminen.',
        isTrue: true,
        explanation: 'R–C≡N + 2 H₂ (Pd/C oder LiAlH₄) → R–CH₂–NH₂. Die Dreifachbindung wird vollständig reduziert, es entsteht ein primäres Amin.',
      },
      {
        id: 'exam-tf-1-e',
        statement: 'Bei der direkten Alkylierung von Ammoniak mit einem Halogenalkan entsteht ausschliesslich das primäre Amin.',
        isTrue: false,
        explanation: 'Es kommt zur Überalkylierung: Das gebildete primäre Amin ist nukleophiler als NH₃ und reagiert weiter zu sekundären, tertiären Aminen und quartären Ammoniumsalzen.',
      },
    ],
  },
  {
    id: 'exam-tf-2',
    instruction: 'Beurteile die folgenden Aussagen zur Reaktivität von Aminen.',
    statements: [
      {
        id: 'exam-tf-2-a',
        statement: 'Amide (R–CO–NH₂) sind deutlich weniger basisch als Amine (R–NH₂).',
        isTrue: true,
        explanation: 'Das freie Elektronenpaar am Stickstoff ist durch die Konjugation mit der Carbonylgruppe (C=O) delokalisiert. Der Amid-Stickstoff ist daher eine sehr schwache Base.',
      },
      {
        id: 'exam-tf-2-b',
        statement: 'Anilin reagiert mit NaNO₂/HCl bei 0°C zu einem Diazoniumsalz.',
        isTrue: true,
        explanation: 'Die Diazotierung von primären aromatischen Aminen bei T < 5°C ist eine klassische Reaktion. Das Diazoniumsalz kann dann für Sandmeyer-Reaktionen oder Azokupplungen verwendet werden.',
      },
      {
        id: 'exam-tf-2-c',
        statement: 'Die Grignard-Reaktion kann direkt mit Aminen durchgeführt werden, da Amine nukleophil sind.',
        isTrue: false,
        explanation: 'Grignard-Reagenzien (R–MgX) reagieren mit N–H-Bindungen unter Protolyse: R–MgX + H–NR₂ → R–H + XMg–NR₂. Die N–H-Bindung zerstört das Grignard-Reagenz.',
      },
      {
        id: 'exam-tf-2-d',
        statement: 'Sekundäre Amine sind in wässriger Lösung basischer als primäre Amine gleicher Kettenlänge.',
        isTrue: true,
        explanation: 'Zwei Alkylgruppen liefern einen stärkeren +I-Effekt, und das protonierte sekundäre Ammonium-Ion ist noch ausreichend gut solvatisiert. Daher sind sekundäre Amine in Wasser etwas basischer als primäre.',
      },
      {
        id: 'exam-tf-2-e',
        statement: 'Die Nitrilreduktion mit LiAlH₄ verlängert die Kohlenstoffkette um ein C-Atom.',
        isTrue: true,
        explanation: 'Durch die vorherige SN2-Reaktion mit NaCN (R–X + NaCN → R–CN) wird ein C-Atom eingebaut. Die anschliessende Reduktion des Nitrils ergibt das primäre Amin: R–CN → R–CH₂–NH₂.',
      },
    ],
  },
  {
    id: 'exam-tf-3',
    instruction: 'Richtig oder falsch? Beurteile die folgenden Aussagen über physikalische und chemische Eigenschaften von Aminen.',
    statements: [
      {
        id: 'exam-tf-3-a',
        statement: 'Tertiäre Amine haben ähnliche Siedepunkte wie Alkane gleicher Molekülmasse.',
        isTrue: true,
        explanation: 'Tertiäre Amine können keine H-Brücken ausbilden (keine N–H-Bindung). Daher wirken nur van-der-Waals-Kräfte, ähnlich wie bei Alkanen.',
      },
      {
        id: 'exam-tf-3-b',
        statement: 'Die Molmasse von Anilin (C₆H₅NH₂) beträgt 93 g/mol.',
        isTrue: true,
        explanation: '6×12 + 7×1 + 14 = 72 + 7 + 14 = 93 g/mol.',
      },
      {
        id: 'exam-tf-3-c',
        statement: 'Carbonsäureester sind gut wasserlöslich, da sie eine Carbonylgruppe enthalten.',
        isTrue: false,
        explanation: 'Ester können zwar H-Brücken als Akzeptor bilden, aber nicht als Donor. Zudem haben sie oft lange unpolare Ketten, was die Wasserlöslichkeit stark reduziert.',
      },
      {
        id: 'exam-tf-3-d',
        statement: 'Bei der Gabriel-Synthese kann es nicht zur Überalkylierung kommen.',
        isTrue: true,
        explanation: 'Das Stickstoffatom ist durch die Phthalimid-Schutzgruppe blockiert. Nach der Alkylierung ist nur ein Substituent am N gebunden, und die Hydrolyse liefert selektiv das primäre Amin.',
      },
      {
        id: 'exam-tf-3-e',
        statement: 'Ein Diazoniumsalz ist bei Raumtemperatur stabil und kann problemlos gelagert werden.',
        isTrue: false,
        explanation: 'Diazoniumsalze sind thermisch sehr instabil und können bei Temperaturen über 5°C explosionsartig N₂ abspalten. Sie müssen sofort weiterverarbeitet werden.',
      },
    ],
  },
];

// ==================================================================
// COMPARISON DUELS – K2
// ==================================================================

const comparisonDuels: ComparisonDuelData[] = [
  {
    id: 'exam-cd-1',
    compoundA: { name: 'Hexylamin (primär)', formula: 'C₆H₁₃NH₂' },
    compoundB: { name: 'Trihexylamin (tertiär)', formula: '(C₆H₁₃)₃N' },
    correctAnswer: 'A',
    property: 'hat den höheren Siedepunkt (relativ zur Molekülmasse)',
    explanation: 'Primäre Amine können H-Brücken ausbilden (N–H vorhanden), tertiäre Amine nicht. Daher hat Hexylamin trotz geringerer Molekülmasse einen relativ höheren Siedepunkt als vergleichbare tertiäre Amine.',
  },
  {
    id: 'exam-cd-2',
    compoundA: { name: 'Amin A (kein π-System am N)' },
    compoundB: { name: 'Amin B (freies e⁻-Paar konjugiert mit C=C)' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Wenn das freie Elektronenpaar am Stickstoff mit einer Doppelbindung konjugiert ist, steht es weniger für die Protonierung zur Verfügung. Das nicht-konjugierte Amin A ist daher basischer.',
  },
  {
    id: 'exam-cd-3',
    compoundA: { name: 'Cyclohexylamin', formula: 'C₆H₁₁NH₂' },
    compoundB: { name: 'Anilin', formula: 'C₆H₅NH₂' },
    correctAnswer: 'A',
    property: 'nukleophiler',
    explanation: 'Bei Anilin ist das freie Elektronenpaar in Konjugation mit dem aromatischen Ring. Cyclohexylamin hat ein vollständig verfügbares Elektronenpaar und ist daher deutlich nukleophiler.',
  },
  {
    id: 'exam-cd-4',
    compoundA: { name: 'Methylamin', formula: 'CH₃NH₂' },
    compoundB: { name: 'Acetamid', formula: 'CH₃CONH₂' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Im Amid ist das freie Elektronenpaar am N in die Carbonylgruppe delokalisiert (Mesomerie mit C=O). Methylamin hat das volle Elektronenpaar verfügbar und ist um Grössenordnungen basischer.',
  },
  {
    id: 'exam-cd-5',
    compoundA: { name: 'Butylamin (primär)', formula: 'C₄H₉NH₂' },
    compoundB: { name: 'Dibutylamin (sekundär)', formula: '(C₄H₉)₂NH' },
    correctAnswer: 'A',
    property: 'hat den höheren Siedepunkt (relativ zur Molekülmasse)',
    explanation: 'Primäre Amine haben zwei N–H-Bindungen und können mehr H-Brücken bilden als sekundäre Amine (nur eine N–H-Bindung). Pro Masseneinheit ist der H-Brücken-Anteil bei primären Aminen grösser.',
  },
  {
    id: 'exam-cd-6',
    compoundA: { name: 'Piperidin (sek. Amin, gesättigt)', formula: 'C₅H₁₁N' },
    compoundB: { name: 'Pyridin (aromat. N)', formula: 'C₅H₅N' },
    correctAnswer: 'A',
    property: 'basischer',
    explanation: 'Im Pyridin liegt das freie Elektronenpaar in einer sp²-Hybridorbital (grösserer s-Anteil = näher am Kern = schlechter verfügbar). Piperidin hat sp³-hybridisierten Stickstoff mit besser verfügbarem Elektronenpaar.',
  },
];

// ==================================================================
// SORT CHALLENGES – K4
// ==================================================================

const sortChallenges: SortChallengeData[] = [
  {
    id: 'exam-sc-1',
    instruction: 'Ordne die folgenden Verbindungen nach steigender Wasserlöslichkeit.',
    items: [
      { id: 'sc1-a', label: 'Cyclohexan', formula: 'C₆H₁₂' },
      { id: 'sc1-b', label: 'Diethylether', formula: '(C₂H₅)₂O' },
      { id: 'sc1-c', label: 'Buttersäureethylester', formula: 'C₃H₇COOC₂H₅' },
      { id: 'sc1-d', label: 'Propionsäure', formula: 'C₂H₅COOH' },
      { id: 'sc1-e', label: 'Butylamin', formula: 'C₄H₉NH₂' },
      { id: 'sc1-f', label: 'Ethanol', formula: 'C₂H₅OH' },
    ],
    correctOrder: ['sc1-a', 'sc1-b', 'sc1-c', 'sc1-d', 'sc1-e', 'sc1-f'],
    orderLabel: 'schlecht löslich → gut löslich',
    explanation: 'Cyclohexan (rein unpolar) < Diethylether (schwacher H-Brücken-Akzeptor) < Ester (Carbonyl-Akzeptor, aber langer Rest) < Propionsäure (H-Brücken-Donor + Akzeptor) < Butylamin (NH₂-Gruppe, guter H-Brücken-Partner) < Ethanol (klein, starke H-Brücken).',
  },
  {
    id: 'exam-sc-2',
    instruction: 'Ordne die folgenden Verbindungen nach steigender Basizität. Beginne mit der schwächsten Base.',
    items: [
      { id: 'sc2-a', label: 'Acetamid', formula: 'CH₃CONH₂' },
      { id: 'sc2-b', label: 'Anilin', formula: 'C₆H₅NH₂' },
      { id: 'sc2-c', label: 'Benzylamin', formula: 'C₆H₅CH₂NH₂' },
      { id: 'sc2-d', label: 'Piperidin (sek. cycl.)', formula: 'C₅H₁₀NH' },
      { id: 'sc2-e', label: 'Trimethylamin', formula: '(CH₃)₃N' },
      { id: 'sc2-f', label: 'Diethylamin', formula: '(C₂H₅)₂NH' },
    ],
    correctOrder: ['sc2-a', 'sc2-b', 'sc2-c', 'sc2-e', 'sc2-d', 'sc2-f'],
    orderLabel: 'schwächste Base → stärkste Base',
    explanation: 'Acetamid (Konjugation mit C=O, kaum basisch) < Anilin (Konjugation mit Aromat, pKs ~4.6) < Benzylamin (kein konjugiertes Paar, pKs ~9.3) < Trimethylamin (3× +I, aber Sterik/Solvatation, pKs ~9.8) < Piperidin (sek., ring-fixiert, pKs ~11.1) < Diethylamin (sek., pKs ~10.9).',
  },
  {
    id: 'exam-sc-3',
    instruction: 'Ordne die folgenden Amine nach steigender Basizität.',
    items: [
      { id: 'sc3-a', label: 'p-Nitroanilin', formula: 'O₂N-C₆H₄-NH₂' },
      { id: 'sc3-b', label: 'Anilin', formula: 'C₆H₅NH₂' },
      { id: 'sc3-c', label: 'p-Methylanilin', formula: 'CH₃-C₆H₄-NH₂' },
      { id: 'sc3-d', label: 'Cyclohexylamin', formula: 'C₆H₁₁NH₂' },
      { id: 'sc3-e', label: 'Dimethylamin', formula: '(CH₃)₂NH' },
    ],
    correctOrder: ['sc3-a', 'sc3-b', 'sc3-c', 'sc3-d', 'sc3-e'],
    orderLabel: 'schwächste → stärkste Base',
    explanation: 'p-Nitroanilin (starker -M/-I, pKs ~1.0) < Anilin (Mesomerie mit Ring, pKs ~4.6) < p-Methylanilin (+I, pKs ~5.1) < Cyclohexylamin (Alkylamin, pKs ~10.6) < Dimethylamin (sek. Alkylamin, pKs ~10.6).',
  },
];

// ==================================================================
// CHEMISTRY BUILDERS – K3
// ==================================================================

const chemistryBuilders: ChemistryBuilderData[] = [
  {
    id: 'exam-cb-1',
    instruction: 'Welche Stickstoff-haltige funktionelle Gruppe im LSD-Molekül wird bei Zugabe einer Säure am schnellsten protoniert?',
    moleculeBase: 'LSD hat drei Stickstoffatome: (1) Indol-NH, (2) tertiäres Amin im Ring, (3) Amid-N',
    slots: [
      {
        id: 'slot-1',
        position: { x: 50, y: 50 },
        correctAnswer: 'tert-amin',
        label: 'Welcher N wird protoniert?',
      },
    ],
    options: [
      { id: 'tert-amin', label: 'Tertiäres Amin (Ring-N)', symbol: 'N (tert.)' },
      { id: 'indol-nh', label: 'Indol-NH', symbol: 'NH (Indol)' },
      { id: 'amid-n', label: 'Amid-N', symbol: 'N (Amid)' },
    ],
    explanation: 'Das tertiäre Amin im Piperidinring hat das am besten verfügbare Elektronenpaar. Das Indol-NH ist in das aromatische π-System eingebunden, und der Amid-N ist durch Konjugation mit C=O deaktiviert.',
  },
  {
    id: 'exam-cb-2',
    instruction: 'Welches Produkt entsteht, wenn Ethylamin mit Salzsäure reagiert?',
    moleculeBase: 'CH₃CH₂NH₂ + HCl → ?',
    slots: [
      {
        id: 'slot-1',
        position: { x: 50, y: 50 },
        correctAnswer: 'ammoniumsalz',
        label: 'Produkt',
      },
    ],
    options: [
      { id: 'ammoniumsalz', label: 'Ethylammoniumchlorid', symbol: 'CH₃CH₂NH₃⁺ Cl⁻' },
      { id: 'chlorethylamin', label: 'Chlorethylamin', symbol: 'ClCH₂CH₂NH₂' },
      { id: 'ethanol', label: 'Ethanol', symbol: 'CH₃CH₂OH' },
      { id: 'ethen', label: 'Ethen + NH₄Cl', symbol: 'CH₂=CH₂ + NH₄Cl' },
    ],
    explanation: 'Amine sind Brønsted-Basen: Das freie Elektronenpaar nimmt ein Proton von HCl auf. Es entsteht das Ammoniumsalz CH₃CH₂NH₃⁺ Cl⁻.',
  },
];

// ==================================================================
// SYNTHESIS ORDERS – K4
// ==================================================================

const synthesisOrders: SynthesisOrderData[] = [
  {
    id: 'exam-so-1',
    instruction: 'Bringe die Schritte der Gabriel-Synthese in die richtige Reihenfolge.',
    synthesisName: 'Gabriel-Synthese',
    steps: [
      { id: 'gs-1', label: 'Phthalimid mit KOH zum Kaliumsalz umsetzen' },
      { id: 'gs-2', label: 'Alkylierung: K-Phthalimid + Halogenalkan (R–X)' },
      { id: 'gs-3', label: 'Hydrolyse mit Hydrazin (N₂H₄)' },
      { id: 'gs-4', label: 'Primäres Amin (R–NH₂) isolieren' },
    ],
    correctOrder: ['gs-1', 'gs-2', 'gs-3', 'gs-4'],
    explanation: 'Die Gabriel-Synthese schützt den Stickstoff durch die Phthalimid-Gruppe vor Mehrfachalkylierung. Das Kaliumsalz reagiert als Nukleophil mit R–X, und die Schutzgruppe wird am Ende mit Hydrazin entfernt.',
  },
  {
    id: 'exam-so-2',
    instruction: 'Bringe die Schritte der Sandmeyer-Route (Aromat → Nitril) in die richtige Reihenfolge.',
    synthesisName: 'Nitrierung → Reduktion → Diazotierung → Sandmeyer',
    steps: [
      { id: 'sm-1', label: 'Nitrierung: Aromat + HNO₃/H₂SO₄ → Nitroarenol' },
      { id: 'sm-2', label: 'Reduktion: Ar–NO₂ + H₂/Pd/C → Ar–NH₂' },
      { id: 'sm-3', label: 'Diazotierung: Ar–NH₂ + NaNO₂/HCl bei T < 5°C → Ar–N₂⁺' },
      { id: 'sm-4', label: 'Sandmeyer: Ar–N₂⁺ + CuCN bei T > 5°C → Ar–CN + N₂' },
    ],
    correctOrder: ['sm-1', 'sm-2', 'sm-3', 'sm-4'],
    explanation: 'Diese vierstufige Sequenz erlaubt die Einführung einer CN-Gruppe in einen Aromaten. Die Diazotierung muss unter 5°C erfolgen, da Diazoniumsalze thermisch instabil sind.',
  },
  {
    id: 'exam-so-3',
    instruction: 'Bringe die Schritte der reduktiven Aminierung in die richtige Reihenfolge.',
    synthesisName: 'Reduktive Aminierung',
    steps: [
      { id: 'ra-1', label: 'Aldehyd/Keton und Amin mischen' },
      { id: 'ra-2', label: 'Imin-Bildung (Schiff-Base) unter Wasserabspaltung' },
      { id: 'ra-3', label: 'Selektive Reduktion des Imins mit NaBH₃CN' },
      { id: 'ra-4', label: 'Sekundäres (oder tertiäres) Amin isolieren' },
    ],
    correctOrder: ['ra-1', 'ra-2', 'ra-3', 'ra-4'],
    explanation: 'NaBH₃CN reduziert selektiv das Imin, aber nicht das Keton/Aldehyd. Dadurch kann das Gleichgewicht Imin ⇌ Amin gezielt in Richtung Amin verschoben werden.',
  },
];

// ==================================================================
// OPEN REFLECTIONS – K5 (AI-bewertet)
// ==================================================================

const openReflections: OpenReflectionData[] = [
  {
    id: 'exam-or-1',
    question: 'Benenne die folgende Verbindung nach IUPAC: Ein Heptangerüst mit einer Ketogruppe an C-3, einer Hydroxygruppe an C-5 und einer Aminogruppe an C-6. Erkläre deinen Lösungsweg.',
    aiContext: 'IUPAC-Nomenklatur von Aminen. Korrekte Antwort: 6-Amino-5-hydroxy-3-heptanon. Der Lernende soll die Prioritätsregeln erklären: Keton als Hauptgruppe bestimmt den Stammnamen (-on), OH und NH₂ als Präfixe (Hydroxy-, Amino-), Nummerierung so dass die Hauptgruppe die niedrigste Nummer erhält.',
    hint: 'Welche funktionelle Gruppe bestimmt den Stammnamen? Wie nummerierst du die Kette?',
  },
  {
    id: 'exam-or-2',
    question: 'Im letzten Schritt einer Synthese greift ein Alkohol (OH-Gruppe) ein Säurechlorid an, obwohl an demselben Molekül auch ein tertiäres Amin vorhanden ist. Gib zwei Gründe an, warum das tertiäre Amin hier nicht als Nukleophil reagiert.',
    aiContext: 'Nukleophilie tertiärer Amine. Erwartete Antworten (2 von 3): (1) Sterische Hinderung – drei Alkylgruppen behindern Annäherung an Carbonyl. (2) In Gegenwart von HCl (freigesetzt bei Reaktion) wird das tert. Amin protoniert → Ammoniumsalz, nicht nukleophil. (3) Tert. Amine besitzen keine N–H-Bindung für die nach dem Angriff nötige Protonenabgabe. Dies ist die Aufgabe 5 der Prüfung (2 Punkte).',
    hint: 'Denke an sterische, elektronische und mechanistische Faktoren.',
  },
  {
    id: 'exam-or-3',
    question: 'Das LSD-Molekül (Lysergsäurediethylamid) enthält drei verschiedene Stickstoffatome: ein Indol-NH, ein tertiäres Amin im Ring und einen Amid-Stickstoff. Welcher Stickstoff wird bei Zugabe einer Säure am schnellsten protoniert? Begründe ausführlich.',
    aiContext: 'Protonierung verschiedener N-Atome in LSD. Korrekte Antwort: Das tertiäre Amin im Piperidinring wird am schnellsten protoniert. Begründung: (1) Das Indol-NH ist Teil des aromatischen π-Systems – sein Elektronenpaar trägt zur Aromatizität bei und ist nicht verfügbar. (2) Der Amid-N ist durch Mesomerie mit C=O deaktiviert (Elektronenpaar in die Carbonylgruppe delokalisiert). (3) Das tertiäre Amin hat ein freies Elektronenpaar in einem sp³-Orbital, das nicht konjugiert ist. Dies ist Aufgabe 8a der Prüfung.',
    hint: 'Vergleiche die Verfügbarkeit des Elektronenpaares an jedem N-Atom.',
  },
  {
    id: 'exam-or-4',
    question: 'Erkläre, warum ein primäres Amin (z.B. Hexylamin, Sdp. 131°C) einen deutlich höheren Siedepunkt hat als ein tertiäres Amin ähnlicher Molekülmasse (z.B. Triethylamin, Sdp. 89°C), obwohl Triethylamin die höhere Molekülmasse hat.',
    aiContext: 'Siedepunkte und intermolekulare Kräfte bei Aminen. Erwartete Konzepte: (1) Primäre Amine haben N–H-Bindungen und können als H-Brücken-Donor und -Akzeptor fungieren. (2) Tertiäre Amine haben keine N–H-Bindung → keine H-Brücken als Donor möglich. (3) Daher dominieren bei tertiären Aminen nur van-der-Waals-Kräfte (Dipol-Dipol und London-Dispersion). (4) H-Brücken sind stärker als vdW → höherer Siedepunkt trotz geringerer Molekülmasse. Dies bezieht sich auf Aufgabe 1 der Prüfung.',
    hint: 'Welche intermolekularen Kräfte können primäre vs. tertiäre Amine ausbilden?',
  },
];

// ==================================================================
// CASE STUDIES – K5/K6 (AI-bewertet, mehrstufig)
// ==================================================================

const caseStudies: CaseStudyData[] = [
  {
    id: 'exam-cs-1',
    title: 'Herstellung eines sekundären Amins',
    scenario: 'In Ihrem Labor soll N-Ethylpropylamin (ein sekundäres Amin: CH₃CH₂NHCH₂CH₂CH₃) hergestellt werden. Ihr Vorgesetzter schlägt die direkte Alkylierung vor: Ethylamin + 1-Brompropan.',
    questions: [
      {
        id: 'exam-cs-1-q1',
        prompt: 'Welches Problem tritt bei der direkten Alkylierung auf? Erkläre, warum diese Methode für ein reines sekundäres Amin ungeeignet ist.',
        hint: 'Was passiert mit dem Produkt, nachdem es gebildet wurde?',
        expectedTopics: ['Überalkylierung', 'Nukleophilie des Produkts', 'Gemisch aller Substitutionsgrade', 'sekundäres Amin nukleophiler als primäres'],
      },
      {
        id: 'exam-cs-1-q2',
        prompt: 'Schlage zwei alternative Synthese-Methoden vor, die das Problem der Überalkylierung vermeiden. Beschreibe jeden Weg mit Edukten und Reagenzien.',
        hint: 'Denke an Schutzgruppen und an die Reduktion von C=N-Doppelbindungen.',
        expectedTopics: ['Reduktive Aminierung', 'Aldehyd + Amin → Imin → Reduktion mit NaBH₃CN', 'Gabriel-Synthese als Alternative für primäre Amine', 'Selektivität'],
      },
    ],
    aiContext: 'Prüfungsaufgabe zur Synthese sekundärer Amine. Erwartet werden: (1) Erklärung der Überalkylierung (Produkt reagiert weiter, da nukleophiler als Edukt), (2) Reduktive Aminierung als bevorzugte Methode (Propanal + Ethylamin → Imin → NaBH₃CN-Reduktion) und/oder (3) direkte Alkylierung mit grossem Überschuss NH₂R. Bewerte nach Vollständigkeit und chemischer Korrektheit.',
  },
  {
    id: 'exam-cs-2',
    title: 'Mehrstufensynthese: Benzol → sekundäres Amid',
    scenario: 'Ausgehend von Benzol soll ein N-Methylbenzamid (C₆H₅CONHCH₃) hergestellt werden. Dies erfordert mehrere Syntheseschritte über verschiedene Zwischenstufen.',
    questions: [
      {
        id: 'exam-cs-2-q1',
        prompt: 'Wie wird aus Benzol zunächst Benzoesäure hergestellt? Beschreibe die nötigen Schritte und Reagenzien.',
        hint: 'Über welches Zwischenprodukt kann man von einem Aromaten zu einer Carbonsäure gelangen?',
        expectedTopics: ['Bromierung (Br₂/FeBr₃)', 'Grignard: C₆H₅MgBr', 'CO₂-Addition', 'Hydrolyse → Benzoesäure', 'Friedel-Crafts als Alternative'],
      },
      {
        id: 'exam-cs-2-q2',
        prompt: 'Wie wird aus der Benzoesäure das gewünschte N-Methylbenzamid hergestellt? Nenne die Reagenzien und Zwischenstufen.',
        hint: 'Carbonsäuren reagieren nicht direkt mit Aminen. Wie aktiviert man eine Carbonsäure?',
        expectedTopics: ['Aktivierung mit SOCl₂ → Säurechlorid', 'Benzoylchlorid + Methylamin → N-Methylbenzamid + HCl', 'Amid-Bindung', 'Alternative: Säureanhydrid'],
      },
    ],
    aiContext: 'Mehrstufensynthese-Prüfungsaufgabe (A11). Erwarteter Weg: Benzol → (Br₂/FeBr₃) → Brombenzol → (Mg/THF) → C₆H₅MgBr → (+CO₂, dann H₃O⁺) → Benzoesäure → (SOCl₂) → Benzoylchlorid → (+CH₃NH₂) → N-Methylbenzamid. Bewerte ob der Lernende die Grignard-Route kennt und die Aktivierung der Carbonsäure versteht.',
  },
  {
    id: 'exam-cs-3',
    title: 'Mehrstufensynthese mit Ozonolyse und reduktiver Aminierung',
    scenario: 'Ein Keton mit einer terminalen Doppelbindung (z.B. 5-Hexen-2-on) soll in ein sekundäres Amin mit Hydroxylgruppe umgewandelt werden. Dazu werden Grignard-Reaktion, Ozonolyse und reduktive Aminierung kombiniert.',
    questions: [
      {
        id: 'exam-cs-3-q1',
        prompt: 'Erkläre den Ablauf einer Ozonolyse mit DMS (Dimethylsulfid) als Reduktionsmittel. Was passiert mit der C=C-Doppelbindung?',
        hint: 'Ozonolyse spaltet C=C-Bindungen. Was entsteht bei einer terminalen Doppelbindung?',
        expectedTopics: ['O₃ spaltet C=C', 'Ozonid-Zwischenstufe', 'DMS als mildes Reduktionsmittel', 'Aldehyd + Keton als Produkte', 'Terminale Doppelbindung → Formaldehyd + Aldehyd/Keton'],
      },
      {
        id: 'exam-cs-3-q2',
        prompt: 'Wie kann der bei der Ozonolyse entstandene Aldehyd mittels reduktiver Aminierung in ein sekundäres Amin überführt werden? Gib die Reagenzien an.',
        hint: 'Welches Reagenz bildet mit einem Aldehyd ein Imin, und wie wird dieses reduziert?',
        expectedTopics: ['Aldehyd + primäres Amin → Imin (Schiff-Base)', 'Wasserabspaltung', 'NaBH₃CN oder NaBH₄ als Reduktionsmittel', 'Selektive Reduktion des Imins', 'Sekundäres Amin als Produkt'],
      },
    ],
    aiContext: 'Mehrstufensynthese (A12). Ozonolyse-Route: Keton+Alken → (Grignard) → Alkohol mit Alken → (O₃/DMS) → Alkohol mit Aldehyd → (R-NH₂, NaBH₃CN) → Alkohol mit sekundärem Amin. Bewerte mechanistisches Verständnis der Ozonolyse und der reduktiven Aminierung.',
  },
  {
    id: 'exam-cs-4',
    title: 'Synthesesequenz mit Gasgesetz-Berechnung',
    scenario: 'Isopropylbenzol (Cumol, A) wird über ein Nitril (B) zum primären Amin (C) umgesetzt. Die Hydrierung von B zu C erfolgt in einem Autoklav (V = 10.0 L) bei 50.0°C. Der Druck sinkt dabei von 10.0 bar auf 6.2 bar. R = 0.08314 bar·L/(mol·K).',
    questions: [
      {
        id: 'exam-cs-4-q1',
        prompt: 'Beschreibe die Synthesesequenz von Isopropylbenzol (Cumol) zum Nitril. Welche Zwischenstufen und Reagenzien sind nötig?',
        hint: 'Du brauchst eine Nitrierung, Reduktion und Diazotierung/Sandmeyer als Schlüsselschritte.',
        expectedTopics: ['Nitrierung (HNO₃/H₂SO₄)', 'Reduktion (H₂/Pd/C) → Amin', 'Diazotierung (NaNO₂/HCl, T<5°C)', 'Sandmeyer mit CuCN (T>5°C)', 'Nitril als Produkt'],
      },
      {
        id: 'exam-cs-4-q2',
        prompt: 'Berechne die Stoffmenge (mol) des verbrauchten Wasserstoffs bei der Hydrierung von B zu C. Verwende das ideale Gasgesetz.',
        hint: 'Δp = 10.0 - 6.2 = 3.8 bar. T in Kelvin umrechnen!',
        expectedTopics: ['Δp = 3.8 bar', 'T = 323.15 K', 'n = pV/RT', 'n = (3.8 × 10.0) / (0.08314 × 323.15)', 'n ≈ 1.41 mol'],
      },
      {
        id: 'exam-cs-4-q3',
        prompt: 'Ein Nitril benötigt 2 mol H₂ für die Reduktion zum primären Amin. Wie viele Gramm des Amins C (M = 149.12 g/mol) werden theoretisch gebildet?',
        hint: 'R–C≡N + 2 H₂ → R–CH₂–NH₂. Berechne zuerst n(Amin) aus n(H₂).',
        expectedTopics: ['n(Amin) = n(H₂)/2 = 0.707 mol', 'm = n × M = 0.707 × 149.12', 'm ≈ 105.5 g', 'Stöchiometrie 1:2'],
      },
    ],
    aiContext: 'Prüfungsaufgabe 13 (6 Punkte). Teil a: Sandmeyer-Route (Cumol → Nitrierung → Reduktion → Diazotierung → Sandmeyer mit CuCN → Nitril). Teil b: Ideales Gasgesetz n = ΔpV/(RT) = 3.8×10.0/(0.08314×323.15) = 1.414 mol. Teil c: n(Amin) = n(H₂)/2 = 0.707 mol, m = 0.707 × 149.12 = 105.5 g. Bewerte die Rechnung streng: korrektes Einsetzen, Einheiten, Ergebnis.',
  },
];

// ==================================================================
// EXPORT
// ==================================================================

export const examContentPool: ExamContentPool = {
  revealCards,
  trueFalseQuizzes,
  comparisonDuels,
  sortChallenges,
  chemistryBuilders,
  synthesisOrders,
  openReflections,
  caseStudies,
};
