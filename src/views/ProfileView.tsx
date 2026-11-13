import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Mail,
  Target,
  Crown,
  Calendar,
  Save,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Check,
  LogOut,
  Clock,
  Lock
} from 'lucide-react';

interface ProfileViewProps {
  onOpenAuth: () => void;
  onOpenPremium: () => void;
  onSelectTab: (tab: ActiveTab) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onOpenAuth,
  onOpenPremium,
  onSelectTab
}) => {
  const { currentUser, userProfile, updateProfileData, signOutUser } = useAuth();

  const [name, setName] = useState('');
  const [studyFocus, setStudyFocus] = useState<UserProfile['studyFocus']>('OAB 1ª Fase');
  const [dailyGoal, setDailyGoal] = useState<number>(20);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || '');
      setStudyFocus(userProfile.studyFocus || 'OAB 1ª Fase');
      setDailyGoal(userProfile.dailyGoalQuestions || 20);
    } else if (currentUser) {
      setName(currentUser.displayName || currentUser.email?.split('@')[0] || '');
    }
  }, [userProfile, currentUser]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    try {
      await updateProfileData({
        name,
        studyFocus,
        dailyGoalQuestions: Number(dailyGoal) || 20
      });
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOutUser();
  };

  // If visitor is not logged in, show protected account prompt
  if (!currentUser) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37] mx-auto shadow-lg">
          <Lock className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
            Acesso ao Perfil do Aluno
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Crie sua conta gratuita ou faça login com Firebase para salvar seu histórico de simulados, taxa de acerto por matéria e metas diárias na nuvem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenAuth}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" />
            <span>Fazer Login ou Criar Conta</span>
          </button>
          <button
            onClick={() => onSelectTab('questoes')}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
          >
            Navegar pelas Questões
          </button>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center justify-center gap-2 max-w-md mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Autenticação segura via Firebase Authentication & Firestore</span>
        </div>
      </div>
    );
  }

  const creationDate = userProfile?.createdAt
    ? new Date(userProfile.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : (currentUser.metadata?.creationTime
        ? new Date(currentUser.metadata.creationTime).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        : 'Recente');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
              <User className="w-4 h-4" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
              Meu Perfil & Conta de Estudos
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Seus dados cadastrais, plano e preferências sincronizados no Firebase.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="self-start sm:self-auto px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sair da conta</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card & Plan (1 col) */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#0B1F3A] text-[#D4AF37] font-serif font-bold text-2xl flex items-center justify-center mx-auto border-2 border-[#D4AF37] shadow-inner">
              {name ? name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{name || 'Aluno'}</h2>
              <p className="text-xs text-slate-500 break-all">{currentUser.email}</p>
            </div>
            <div className="inline-block px-3 py-1 bg-slate-100 text-[#0B1F3A] text-xs rounded-full font-bold">
              {studyFocus}
            </div>

            <div className="pt-3 border-t border-slate-100 text-left text-xs text-slate-600 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Data de cadastro:</span>
                <span className="font-semibold text-slate-800">{creationDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Data de criação:</span>
                <span className="font-semibold text-slate-800">{creationDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Plano atual:</span>
                {userProfile?.isPremium ? (
                  <span className="font-bold text-[#0B1F3A] bg-[#D4AF37]/25 px-2 py-0.5 rounded inline-flex items-center gap-1">
                    <Crown className="w-3 h-3 text-[#D4AF37] fill-current" />
                    Premium Ativo
                  </span>
                ) : (
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Gratuito
                  </span>
                )}
              </div>
              {userProfile?.subscriptionStatus && userProfile.subscriptionStatus !== 'NONE' && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Assinatura:</span>
                  <span className="font-semibold text-slate-700">
                    {userProfile.subscriptionStatus === 'ACTIVE'
                      ? 'Ativa'
                      : userProfile.subscriptionStatus === 'PENDING'
                      ? 'Aguardando pagamento'
                      : userProfile.subscriptionStatus === 'OVERDUE'
                      ? 'Pagamento em atraso'
                      : 'Cancelada'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Plan Showcase Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/50 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Plano do Aluno
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  userProfile?.isPremium
                    ? 'text-[#0B1F3A] bg-[#D4AF37]'
                    : 'text-[#0B1F3A] bg-[#D4AF37]/20'
                }`}
              >
                {userProfile?.isPremium ? 'Premium' : 'Gratuito'}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {userProfile?.isPremium
                ? 'Sua assinatura Premium Aprova Direito (R$ 29,90/mês) está ativa com acesso total liberado.'
                : 'Você está utilizando o plano gratuito. Desbloqueie simulados ilimitados e banco ampliado com o Premium.'}
            </p>
            <button
              onClick={onOpenPremium}
              className="w-full py-2 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span>
                {userProfile?.isPremium ? 'Ver Detalhes do Premium' : 'Assinar Premium (R$ 29,90)'}
              </span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs space-y-1">
            <div className="font-bold text-[#0B1F3A] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Segurança da Conta</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Sua senha é protegida por criptografia de ponta do Firebase Authentication e suas respostas ficam isoladas na sua conta no Firestore.
            </p>
          </div>
        </div>

        {/* Right Column: Edit Settings Form (2 cols) */}
        <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-base font-bold font-serif text-[#0B1F3A] border-b border-slate-100 pb-3">
            Preferências e Metas de Estudo
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            {savedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Perfil e metas atualizados com sucesso no Firestore!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nome de Exibição
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                E-mail Cadastrado
              </label>
              <input
                type="email"
                disabled
                value={currentUser.email || ''}
                className="w-full px-3 py-2 text-sm border border-slate-200 bg-slate-50 text-slate-500 rounded-lg cursor-not-allowed"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Para alterar seu e-mail de acesso, entre em contato com o suporte.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Foco Principal de Estudos
              </label>
              <select
                value={studyFocus}
                onChange={e => setStudyFocus(e.target.value as UserProfile['studyFocus'])}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value="OAB 1ª Fase">Exame de Ordem - OAB 1ª Fase</option>
                <option value="OAB 2ª Fase">Exame de Ordem - OAB 2ª Fase (Peças)</option>
                <option value="Concursos Jurídicos">Concursos Jurídicos (Magistratura, MP, DPE)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Meta Diária de Questões
              </label>
              <input
                type="number"
                min={5}
                max={100}
                value={dailyGoal}
                onChange={e => setDailyGoal(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Sua meta será sincronizada com o Painel de Desempenho.
              </span>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-rose-600 font-semibold hover:underline flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair da conta</span>
              </button>

              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-[#0B1F3A] hover:bg-[#16365C] disabled:bg-slate-400 text-[#D4AF37] font-bold text-xs rounded-lg shadow transition-colors flex items-center gap-2"
              >
                {saving ? (
                  <span className="inline-block animate-spin rounded-full h-3.5 w-3.5 border-2 border-[#D4AF37] border-t-transparent" />
                ) : (
                  <Save className="w-3.5 h-3.5" />
                )}
                <span>Salvar Configurações</span>
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
};
