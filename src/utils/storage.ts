import { QuestionAnswerRecord, SimuladoResult, UserProfile, DisciplineId } from '../types';
import { syncAnswerToFirestore, syncSimuladoToFirestore } from '../services/firestoreSync';

const PROFILE_KEY = 'aprova_direito_profile';
const ANSWERS_KEY = 'aprova_direito_answers';
const SIMULADOS_KEY = 'aprova_direito_simulados';

const DEFAULT_PROFILE: UserProfile = {
  name: 'Estudante Concurseiro',
  email: 'estudante@aprovadireito.com.br',
  isRegistered: false,
  studyFocus: 'OAB 1ª Fase',
  targetExamDate: '2026-11-29',
  dailyGoalQuestions: 20,
  memberSince: 'Novembro de 2026',
  isPremium: false
};

export const getStoredProfile = (): UserProfile => {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return JSON.parse(raw);
  } catch {
    return DEFAULT_PROFILE;
  }
};

export const saveStoredProfile = (profile: UserProfile): void => {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile', e);
  }
};

export const getStoredAnswers = (): QuestionAnswerRecord[] => {
  try {
    const raw = localStorage.getItem(ANSWERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveQuestionAnswer = (record: QuestionAnswerRecord): QuestionAnswerRecord[] => {
  try {
    const current = getStoredAnswers();
    // remove previous answer for this question if exists
    const filtered = current.filter(a => a.questionId !== record.questionId);
    filtered.push(record);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(filtered));

    // Async sync to Firestore
    syncAnswerToFirestore(record).catch(err => {
      console.warn('Silent Firestore sync notice:', err);
    });

    return filtered;
  } catch (e) {
    console.error('Failed to save answer', e);
    return [];
  }
};

export const getStoredSimulados = (): SimuladoResult[] => {
  try {
    const raw = localStorage.getItem(SIMULADOS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveSimuladoResult = (result: SimuladoResult): void => {
  try {
    const current = getStoredSimulados();
    current.unshift(result);
    // keep last 20
    const trimmed = current.slice(0, 20);
    localStorage.setItem(SIMULADOS_KEY, JSON.stringify(trimmed));

    // Async sync to Firestore
    syncSimuladoToFirestore(result).catch(err => {
      console.warn('Silent Firestore sync notice:', err);
    });
  } catch (e) {
    console.error('Failed to save simulado result', e);
  }
};

export const calculatePerformanceMetrics = () => {
  const answers = getStoredAnswers();
  const totalAnswered = answers.length;
  const totalCorrect = answers.filter(a => a.isCorrect).length;
  const totalIncorrect = totalAnswered - totalCorrect;
  const accuracyPercent = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Today answered
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTimestamp = today.getTime();
  const todayAnswered = answers.filter(a => a.timestamp >= todayTimestamp).length;

  // Breakdown by discipline
  const disciplineStats: Record<string, { total: number; correct: number; percent: number }> = {};
  for (const a of answers) {
    if (!disciplineStats[a.disciplineId]) {
      disciplineStats[a.disciplineId] = { total: 0, correct: 0, percent: 0 };
    }
    disciplineStats[a.disciplineId].total += 1;
    if (a.isCorrect) disciplineStats[a.disciplineId].correct += 1;
  }

  for (const disc in disciplineStats) {
    const item = disciplineStats[disc];
    item.percent = Math.round((item.correct / item.total) * 100);
  }

  return {
    totalAnswered,
    totalCorrect,
    totalIncorrect,
    accuracyPercent,
    todayAnswered,
    disciplineStats
  };
};

export const resetUserProgress = (): void => {
  try {
    localStorage.removeItem(ANSWERS_KEY);
    localStorage.removeItem(SIMULADOS_KEY);
  } catch (e) {
    console.error('Failed to reset', e);
  }
};
