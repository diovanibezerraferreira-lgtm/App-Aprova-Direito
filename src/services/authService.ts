import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from './firebase';
import { UserProfile } from '../types';
import firebaseConfig from '../../firebase-applet-config.json';

export interface ExtendedUserProfile extends UserProfile {
  id: string;
  plan: 'gratuito' | 'premium';
  termsAccepted: boolean;
  createdAt: string;
  updatedAt: string;
  isLocalOnly?: boolean;
}

export function isOperationNotAllowedError(error: unknown): boolean {
  const str = String(error).toLowerCase();
  return str.includes('operation-not-allowed') || str.includes('operation_not_allowed');
}

export function translateAuthError(codeOrMessage: unknown): string {
  const code = String(codeOrMessage || '').toLowerCase();

  if (code.includes('auth/operation-not-allowed') || code.includes('operation_not_allowed')) {
    return 'O provedor de autenticação por E-mail e Senha ainda não está ativado no Firebase Console deste projeto. É necessário ativá-lo nas configurações do Firebase.';
  }
  if (code.includes('auth/email-already-in-use') || code.includes('email_exists')) {
    return 'Este endereço de e-mail já está em uso por outra conta. Tente fazer login ou recupere sua senha.';
  }
  if (code.includes('auth/invalid-email')) {
    return 'O formato do e-mail informado não é válido.';
  }
  if (code.includes('auth/weak-password')) {
    return 'A senha é muito fraca. Utilize pelo menos 6 caracteres.';
  }
  if (
    code.includes('auth/wrong-password') ||
    code.includes('auth/user-not-found') ||
    code.includes('auth/invalid-credential')
  ) {
    return 'E-mail ou senha incorretos. Por favor, verifique os dados digitados.';
  }
  if (code.includes('auth/user-disabled')) {
    return 'Esta conta de usuário foi temporariamente desativada.';
  }
  if (code.includes('auth/popup-closed-by-user')) {
    return 'A janela de autenticação foi fechada antes da conclusão do login.';
  }
  if (code.includes('auth/popup-blocked')) {
    return 'O navegador bloqueou a janela pop-up. Por favor, permita pop-ups para este site.';
  }
  if (code.includes('auth/too-many-requests')) {
    return 'Muitas tentativas malsucedidas. Por motivos de segurança, tente novamente em alguns instantes.';
  }
  if (code.includes('auth/network-request-failed')) {
    return 'Falha na conexão de rede. Verifique sua conexão com a internet.';
  }
  if (code.includes('permission-denied') || code.includes('missing or insufficient permissions')) {
    return 'Permissão insuficiente no Firestore. Suas credenciais não têm autorização para esta operação.';
  }

  // If there's an actual message, show it cleanly
  if (typeof codeOrMessage === 'string' && codeOrMessage.trim().length > 0 && !codeOrMessage.includes('[object')) {
    // strip Firebase technical prefixes if present
    const cleanMsg = codeOrMessage.replace(/FirebaseError:\s*Firebase:\s*/i, '').replace(/Error\s*\((.*?)\):?/i, '');
    if (cleanMsg.trim()) {
      return `Não foi possível concluir: ${cleanMsg.trim()}`;
    }
  }

  return 'Ocorreu um erro ao processar sua solicitação. Verifique os dados e tente novamente.';
}

export async function fetchUserProfile(uid: string): Promise<ExtendedUserProfile | null> {
  const path = `users/${uid}`;
  try {
    const docRef = doc(db, 'users', uid);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return snap.data() as ExtendedUserProfile;
  } catch (error) {
    console.warn('Notice reading user profile from Firestore:', error);
    return null;
  }
}

export async function createUserProfileDoc(
  user: User,
  name: string,
  studyFocus: UserProfile['studyFocus'],
  dailyGoalQuestions: number = 20
): Promise<ExtendedUserProfile> {
  const now = new Date().toISOString();
  const profile: ExtendedUserProfile = {
    id: user.uid,
    name: name || user.displayName || user.email?.split('@')[0] || 'Estudante',
    email: user.email || '',
    isRegistered: true,
    plan: 'gratuito',
    studyFocus: studyFocus || 'OAB 1ª Fase',
    dailyGoalQuestions: dailyGoalQuestions || 20,
    memberSince: new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
    termsAccepted: true,
    isPremium: false,
    createdAt: now,
    updatedAt: now
  };

  const path = `users/${user.uid}`;
  try {
    await setDoc(doc(db, 'users', user.uid), profile);
  } catch (error) {
    console.warn('Notice saving profile in Firestore, keeping in session cache:', error);
  }
  return profile;
}

export async function updateUserProfileDoc(uid: string, data: Partial<ExtendedUserProfile>): Promise<void> {
  const path = `users/${uid}`;
  try {
    const docRef = doc(db, 'users', uid);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.warn('Notice updating profile in Firestore:', error);
  }
}

export async function registerWithEmail(
  name: string,
  email: string,
  pass: string,
  studyFocus: UserProfile['studyFocus']
): Promise<ExtendedUserProfile> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
  const user = userCredential.user;

  if (name) {
    try {
      await updateProfile(user, { displayName: name });
    } catch (e) {
      console.warn('Notice updating displayName:', e);
    }
  }

  const profile = await createUserProfileDoc(user, name, studyFocus);
  return profile;
}

export async function loginWithEmail(email: string, pass: string): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  return userCredential.user;
}

export async function loginWithGoogle(): Promise<ExtendedUserProfile> {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  let profile = await fetchUserProfile(user.uid);
  if (!profile) {
    profile = await createUserProfileDoc(user, user.displayName || '', 'OAB 1ª Fase');
  }
  return profile;
}

export async function requestPasswordReset(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}

export async function logout(): Promise<void> {
  await signOut(auth);
}

// Local registration fallback so student can study immediately without being blocked
export function createLocalFallbackProfile(
  name: string,
  email: string,
  studyFocus: UserProfile['studyFocus']
): ExtendedUserProfile {
  const now = new Date().toISOString();
  return {
    id: 'local_' + Date.now(),
    name: name || 'Estudante',
    email: email || 'estudante@aprovadireito.com.br',
    isRegistered: true,
    plan: 'gratuito',
    studyFocus: studyFocus || 'OAB 1ª Fase',
    dailyGoalQuestions: 20,
    memberSince: new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
    termsAccepted: true,
    isPremium: false,
    createdAt: now,
    updatedAt: now,
    isLocalOnly: true
  };
}

export function getFirebaseConsoleAuthUrl(): string {
  return `https://console.firebase.google.com/project/${firebaseConfig.projectId}/authentication/providers`;
}
