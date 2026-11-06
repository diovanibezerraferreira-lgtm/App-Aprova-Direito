import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db, auth } from './firebase';
import { QuestionAnswerRecord, SimuladoResult } from '../types';

export async function syncAnswerToFirestore(record: QuestionAnswerRecord): Promise<void> {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await setDoc(doc(db, 'users', user.uid, 'answers', record.questionId), {
      questionId: record.questionId,
      disciplineId: record.disciplineId,
      selectedOptionId: record.selectedOptionId,
      isCorrect: record.isCorrect,
      timestamp: record.timestamp
    });
  } catch (error) {
    console.warn(`Firestore sync note for answer ${record.questionId}:`, error);
  }
}

export async function syncSimuladoToFirestore(result: SimuladoResult): Promise<void> {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await setDoc(doc(db, 'users', user.uid, 'simulados', result.id), {
      id: result.id,
      configTitle: result.configTitle,
      disciplineId: result.disciplineId || 'todas',
      totalQuestions: result.totalQuestions,
      correctAnswers: result.correctAnswers,
      timeSpentSeconds: result.timeSpentSeconds,
      date: result.date,
      createdAt: Date.now()
    });
  } catch (error) {
    console.warn(`Firestore sync note for simulado ${result.id}:`, error);
  }
}

export async function loadUserAnswersFromFirestore(): Promise<QuestionAnswerRecord[]> {
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const snap = await getDocs(collection(db, 'users', user.uid, 'answers'));
    const records: QuestionAnswerRecord[] = [];
    snap.forEach(d => {
      records.push(d.data() as QuestionAnswerRecord);
    });
    return records;
  } catch (error) {
    console.warn('Firestore load answers note:', error);
    return [];
  }
}

export async function loadUserSimuladosFromFirestore(): Promise<SimuladoResult[]> {
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const snap = await getDocs(collection(db, 'users', user.uid, 'simulados'));
    const results: SimuladoResult[] = [];
    snap.forEach(d => {
      const data = d.data();
      results.push({
        id: data.id,
        configTitle: data.configTitle,
        disciplineId: data.disciplineId,
        totalQuestions: data.totalQuestions,
        correctAnswers: data.correctAnswers,
        timeSpentSeconds: data.timeSpentSeconds,
        date: data.date,
        answers: []
      });
    });
    return results;
  } catch (error) {
    console.warn('Firestore load simulados note:', error);
    return [];
  }
}
