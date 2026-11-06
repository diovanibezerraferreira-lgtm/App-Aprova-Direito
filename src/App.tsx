import React, { useState, useEffect } from 'react';
import { ActiveTab, Discipline, UserProfile } from './types';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AuthModal } from './components/AuthModal';
import { PremiumModal } from './components/PremiumModal';
import { DisciplineModal } from './components/DisciplineModal';
import { OfflineStatusIndicator } from './components/PWAInstallBanner';

import { HomeView } from './views/HomeView';
import { OABHubView } from './views/OABHubView';
import { ConcursosHubView } from './views/ConcursosHubView';
import { QuestionsView } from './views/QuestionsView';
import { SimuladosView } from './views/SimuladosView';
import { LegalBriefsView } from './views/LegalBriefsView';
import { StudyGuidesView } from './views/StudyGuidesView';
import { PerformanceView } from './views/PerformanceView';
import { PremiumView } from './views/PremiumView';
import { ProfileView } from './views/ProfileView';

function AppContent() {
  const {
    currentUser,
    userProfile,
    authModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    updateProfileData
  } = useAuth();

  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [premiumModalOpen, setPremiumModalOpen] = useState<boolean>(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [targetedDisciplineForQuestions, setTargetedDisciplineForQuestions] = useState<string | undefined>(undefined);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleStartQuestionsFromDiscipline = (discId: string) => {
    setTargetedDisciplineForQuestions(discId);
    setActiveTab('questoes');
  };

  const handleOpenMaterialsFromDiscipline = (_discId: string) => {
    setActiveTab('apostilas');
  };

  const activeUserProfile: UserProfile = userProfile || {
    name: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Estudante',
    email: currentUser?.email || 'estudante@aprovadireito.com.br',
    isRegistered: !!currentUser,
    studyFocus: 'OAB 1ª Fase',
    dailyGoalQuestions: 20,
    memberSince: 'Novembro de 2026',
    isPremium: false
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-[#D4AF37]/25 selection:text-[#0B1F3A]">
      {/* Top Executive Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        userProfile={activeUserProfile}
        onOpenAuth={() => openAuthModal('login')}
        onOpenPremiumModal={() => setPremiumModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        {activeTab === 'inicio' && (
          <HomeView
            onSelectTab={setActiveTab}
            onSelectDiscipline={setSelectedDiscipline}
            onOpenAuth={() => openAuthModal('signup')}
            onOpenPremium={() => setPremiumModalOpen(true)}
            userProfile={activeUserProfile}
          />
        )}

        {activeTab === 'oab' && (
          <OABHubView
            onSelectTab={setActiveTab}
            onSelectDiscipline={setSelectedDiscipline}
          />
        )}

        {activeTab === 'concursos' && (
          <ConcursosHubView onSelectTab={setActiveTab} />
        )}

        {activeTab === 'questoes' && (
          <QuestionsView initialDisciplineId={targetedDisciplineForQuestions} />
        )}

        {activeTab === 'simulados' && (
          <SimuladosView />
        )}

        {activeTab === 'pecas' && (
          <LegalBriefsView />
        )}

        {activeTab === 'apostilas' && (
          <StudyGuidesView />
        )}

        {activeTab === 'desempenho' && (
          <PerformanceView
            userProfile={activeUserProfile}
            onUpdateProfile={(p) => updateProfileData(p)}
            onGoToQuestions={() => setActiveTab('questoes')}
          />
        )}

        {activeTab === 'premium' && (
          <PremiumView
            onOpenPremiumModal={() => setPremiumModalOpen(true)}
            onGoToQuestions={() => setActiveTab('questoes')}
          />
        )}

        {activeTab === 'perfil' && (
          <ProfileView
            onOpenAuth={() => openAuthModal('login')}
            onOpenPremium={() => setPremiumModalOpen(true)}
            onSelectTab={setActiveTab}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Firebase Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={closeAuthModal}
        initialMode={authModalMode}
      />

      {/* Premium Informative Modal */}
      <PremiumModal
        isOpen={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        userEmail={activeUserProfile.email}
      />

      {/* Discipline Detail Modal */}
      <DisciplineModal
        discipline={selectedDiscipline}
        onClose={() => setSelectedDiscipline(null)}
        onStartQuestions={handleStartQuestionsFromDiscipline}
        onOpenMaterials={handleOpenMaterialsFromDiscipline}
      />

      {/* Offline Status Indicator */}
      <OfflineStatusIndicator />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
