import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import {
  ExtendedUserProfile,
  fetchUserProfile,
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  requestPasswordReset,
  logout,
  updateUserProfileDoc,
  createUserProfileDoc,
  createLocalFallbackProfile
} from '../services/authService';
import { UserProfile } from '../types';
import { getStoredProfile, saveStoredProfile } from '../utils/storage';

interface AuthContextType {
  currentUser: User | null;
  userProfile: ExtendedUserProfile | null;
  loading: boolean;
  authModalOpen: boolean;
  authModalMode: 'login' | 'signup' | 'forgot';
  openAuthModal: (mode?: 'login' | 'signup' | 'forgot') => void;
  closeAuthModal: () => void;
  signUp: (name: string, email: string, pass: string, focus: UserProfile['studyFocus']) => Promise<void>;
  signIn: (email: string, pass: string) => Promise<void>;
  signInGoogle: () => Promise<void>;
  signInLocally: (name: string, email: string, focus: UserProfile['studyFocus']) => void;
  resetPassword: (email: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  updateProfileData: (data: Partial<ExtendedUserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<ExtendedUserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'forgot'>('login');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          let profile = await fetchUserProfile(user.uid);
          if (!profile) {
            profile = await createUserProfileDoc(
              user,
              user.displayName || user.email?.split('@')[0] || 'Estudante',
              'OAB 1ª Fase'
            );
          }
          setUserProfile(profile);
          saveStoredProfile(profile);
        } catch (e) {
          console.error('Error fetching user profile:', e);
          const fallback = getStoredProfile();
          const fallbackExt: ExtendedUserProfile = {
            ...fallback,
            id: user.uid,
            plan: 'gratuito',
            termsAccepted: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          setUserProfile(fallbackExt);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = (mode: 'login' | 'signup' | 'forgot' = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const signUp = async (name: string, email: string, pass: string, focus: UserProfile['studyFocus']) => {
    const profile = await registerWithEmail(name, email, pass, focus);
    setUserProfile(profile);
    saveStoredProfile(profile);
  };

  const signIn = async (email: string, pass: string) => {
    const user = await loginWithEmail(email, pass);
    let profile = await fetchUserProfile(user.uid);
    if (!profile) {
      profile = await createUserProfileDoc(user, user.displayName || email.split('@')[0], 'OAB 1ª Fase');
    }
    setUserProfile(profile);
    saveStoredProfile(profile);
  };

  const signInGoogle = async () => {
    const profile = await loginWithGoogle();
    setUserProfile(profile);
    saveStoredProfile(profile);
  };

  const signInLocally = (name: string, email: string, focus: UserProfile['studyFocus']) => {
    const profile = createLocalFallbackProfile(name, email, focus);
    setUserProfile(profile);
    saveStoredProfile(profile);
  };

  const resetPassword = async (email: string) => {
    await requestPasswordReset(email);
  };

  const signOutUser = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn('Notice during signOut:', e);
    }
    setUserProfile(null);
    saveStoredProfile({
      name: 'Estudante Concurseiro',
      email: 'estudante@aprovadireito.com.br',
      isRegistered: false,
      studyFocus: 'OAB 1ª Fase',
      targetExamDate: '2026-11-29',
      dailyGoalQuestions: 20,
      memberSince: 'Novembro de 2026',
      isPremium: false
    });
  };

  const updateProfileData = async (data: Partial<ExtendedUserProfile>) => {
    if (currentUser) {
      await updateUserProfileDoc(currentUser.uid, data);
    }
    const current = userProfile || getStoredProfile();
    const updated = { ...current, ...data, updatedAt: new Date().toISOString() } as ExtendedUserProfile;
    setUserProfile(updated);
    saveStoredProfile(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        authModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        signUp,
        signIn,
        signInGoogle,
        signInLocally,
        resetPassword,
        signOutUser,
        updateProfileData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
