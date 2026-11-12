export type DisciplineId =
  | 'etica'
  | 'constitucional'
  | 'civil'
  | 'processo-civil'
  | 'penal'
  | 'processo-penal'
  | 'lep'
  | 'trabalho'
  | 'processo-trabalho'
  | 'administrativo'
  | 'tributario'
  | 'empresarial'
  | 'ambiental'
  | 'internacional'
  | 'direitos-humanos'
  | 'consumidor'
  | 'crianca-adolescente'
  | 'previdenciario'
  | 'financeiro'
  | 'eleitoral'
  | 'filosofia';

export interface Discipline {
  id: DisciplineId;
  name: string;
  shortName: string;
  iconName: string;
  oabWeight: number; // approximate questions in 1st phase
  category: 'fundamental' | 'processual' | 'material' | 'especial';
  description: string;
  keyTopics: string[];
  keyArticles: string[];
}

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  disciplineId: DisciplineId;
  subject: string;
  statement: string;
  options: QuestionOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalFoundation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  examReference?: string;
}

export interface QuestionAnswerRecord {
  questionId: string;
  selectedOptionId: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timestamp: number;
  disciplineId: DisciplineId;
  subject?: string;
}

export interface SimuladoConfig {
  id: string;
  title: string;
  description: string;
  disciplineId?: DisciplineId | 'todas';
  questionCount: number;
  timeLimitMinutes: number;
  level: string;
}

export interface SimuladoResult {
  id: string;
  configTitle: string;
  disciplineId?: DisciplineId | 'todas';
  totalQuestions: number;
  correctAnswers: number;
  timeSpentSeconds: number;
  date: string;
  answers: {
    questionId: string;
    selectedOptionId?: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
  }[];
}

export interface LegalBrief {
  id: string;
  title: string;
  area:
    | 'Direito Processual Civil'
    | 'Direito Civil'
    | 'Direito Penal'
    | 'Direito do Trabalho'
    | 'Direito Constitucional'
    | 'Direito Tributário'
    | 'Direito Empresarial';
  subject: string;
  legalBasis: string;
  legalDeadlines: string;
  jurisdiction: string;
  overview: string;
  structureGuide: {
    step: string;
    description: string;
    practicalTip: string;
  }[];
  caseScenario: {
    title: string;
    problemStatement: string;
    clientNeeds: string;
  };
  fullDraft: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  disciplineId: DisciplineId;
  author: string;
  estimatedReadTime: string;
  description: string;
  pageCount?: number;
  isExtensiveManual?: boolean;
  edition?: string;
  chapters: {
    title: string;
    content: string;
    keyStatutes: string[];
    summaryPoints: string[];
  }[];
}

export interface UserProfile {
  name: string;
  email: string;
  isRegistered: boolean;
  studyFocus: 'OAB 1ª Fase' | 'OAB 2ª Fase' | 'Concursos Jurídicos';
  targetExamDate?: string;
  dailyGoalQuestions: number;
  memberSince: string;
  isPremium: boolean;
}

export type ActiveTab =
  | 'inicio'
  | 'oab'
  | 'concursos'
  | 'questoes'
  | 'simulados'
  | 'pecas'
  | 'apostilas'
  | 'desempenho'
  | 'premium'
  | 'perfil';
