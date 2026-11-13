import React, { useState } from 'react';
import { ActiveTab, UserProfile } from '../types';
import { useAuth } from '../context/AuthContext';
import { Scale, Crown, User, Menu, X, LogOut, CheckCircle2 } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallBanner';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  userProfile: UserProfile;
  onOpenAuth: () => void;
  onOpenPremiumModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  userProfile,
  onOpenAuth,
  onOpenPremiumModal
}) => {
  const { currentUser, userProfile: authProfile, signOutUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'oab', label: 'OAB' },
    { id: 'concursos', label: 'Concursos' },
    { id: 'questoes', label: 'Questões' },
    { id: 'simulados', label: 'Simulados' },
    { id: 'pecas', label: 'Peças' },
    { id: 'apostilas', label: 'Apostilas' },
    { id: 'desempenho', label: 'Desempenho' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const activeUser = authProfile || (currentUser ? {
    name: currentUser.displayName || currentUser.email?.split('@')[0] || 'Estudante',
    email: currentUser.email || '',
    isRegistered: true,
    studyFocus: userProfile.studyFocus
  } : (userProfile.isRegistered ? userProfile : null));

  const handleLogout = async () => {
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    await signOutUser();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B1F3A] text-white border-b border-[#D4AF37]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Wordmark with discreet legal symbol */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
            aria-label="Ir para a página inicial do Aprova Direito"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89326] p-0.5 flex items-center justify-center shadow-inner">
              <div className="w-full h-full bg-[#0B1F3A] rounded-[7px] flex items-center justify-center group-hover:bg-[#0E274A] transition-colors">
                <Scale className="w-5 h-5 text-[#D4AF37]" strokeWidth={2.2} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-[#F6ECCE] transition-colors whitespace-nowrap">
                APROVA <span className="text-[#D4AF37]">DIREITO</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-300 font-medium -mt-1 hidden sm:block">
                OAB & Concursos Jurídicos
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap text-xs xl:text-sm ${
                    isActive
                      ? 'text-[#D4AF37] bg-white/10 font-semibold shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Profile Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* PWA Install Button */}
            <PWAInstallButton variant="header" />

            {/* Premium CTA Button */}
            <button
              onClick={() => handleNavClick('premium')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm ${
                activeTab === 'premium'
                  ? 'bg-[#D4AF37] text-[#0B1F3A]'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#C59F2A] hover:from-[#E6C86E] hover:to-[#D4AF37] text-[#0B1F3A]'
              }`}
            >
              <Crown className="w-3.5 h-3.5 fill-current" />
              {authProfile?.isPremium || userProfile.isPremium ? (
                <span>Premium Ativo</span>
              ) : (
                <>
                  <span className="hidden sm:inline">Assinar</span> Premium
                </>
              )}
            </button>

            {/* Profile / Account Area */}
            {currentUser || activeUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                    activeTab === 'perfil' || userDropdownOpen
                      ? 'border-[#D4AF37] bg-white/15 text-[#D4AF37]'
                      : 'border-slate-700 hover:border-slate-500 bg-white/5 text-slate-200'
                  }`}
                  title="Menu do Usuário"
                >
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="hidden md:inline max-w-[110px] truncate font-semibold">
                    {activeUser?.name?.split(' ')[0] || 'Aluno'}
                  </span>
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-900 truncate">{activeUser?.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{currentUser?.email || activeUser?.email}</p>
                    </div>
                    <button
                      onClick={() => handleNavClick('perfil')}
                      className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                    >
                      <User className="w-3.5 h-3.5 text-[#0B1F3A]" />
                      <span>Meu Perfil</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('desempenho')}
                      className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Meu Desempenho</span>
                    </button>
                    <div className="border-t border-slate-100 my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 hover:bg-rose-50 text-rose-600 flex items-center gap-2 font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sair da conta</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>
            )}

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu for all items */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071527] border-b border-[#D4AF37]/20 px-4 pt-2 pb-4 space-y-1">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                  activeTab === link.id
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-semibold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* PWA Install in Mobile Drawer */}
          <div className="pt-1 pb-1">
            <PWAInstallButton variant="menu" />
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>
              {currentUser
                ? `Conectado como: ${activeUser?.name?.split(' ')[0]}`
                : 'Você está navegando como visitante'}
            </span>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-rose-400 font-semibold hover:underline flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="text-[#D4AF37] font-medium hover:underline"
              >
                Entrar / Cadastrar
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

