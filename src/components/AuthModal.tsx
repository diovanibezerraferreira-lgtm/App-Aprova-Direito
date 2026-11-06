import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserProfile } from '../types';
import {
  translateAuthError,
  isOperationNotAllowedError,
  getFirebaseConsoleAuthUrl
} from '../services/authService';
import {
  X,
  Scale,
  Lock,
  Mail,
  User,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login'
}) => {
  const { signIn, signUp, signInGoogle, signInLocally, resetPassword } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [studyFocus, setStudyFocus] = useState<UserProfile['studyFocus']>('OAB 1ª Fase');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showConsoleHelper, setShowConsoleHelper] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setErrorMsg('');
      setSuccessMsg('');
      setShowConsoleHelper(false);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setShowConsoleHelper(false);
    setLoading(true);

    try {
      if (mode === 'forgot') {
        if (!email.trim() || !email.includes('@')) {
          setErrorMsg('Por favor, informe um endereço de e-mail válido para redefinição.');
          setLoading(false);
          return;
        }
        await resetPassword(email.trim());
        setSuccessMsg('E-mail de recuperação enviado com sucesso! Verifique sua caixa de entrada.');
        setLoading(false);
        return;
      }

      if (mode === 'signup') {
        if (!name.trim()) {
          setErrorMsg('Informe seu nome completo para concluir o cadastro.');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('A senha deve conter no mínimo 6 caracteres.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setErrorMsg('As senhas digitadas não coincidem.');
          setLoading(false);
          return;
        }
        if (!termsAccepted) {
          setErrorMsg('Você precisa aceitar os Termos de Uso e Política de Privacidade.');
          setLoading(false);
          return;
        }

        await signUp(name.trim(), email.trim(), password, studyFocus);
        setSuccessMsg('Conta criada com sucesso! Redirecionando...');
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        // mode === 'login'
        if (!email.trim() || !password) {
          setErrorMsg('Preencha seu e-mail e senha para entrar.');
          setLoading(false);
          return;
        }

        await signIn(email.trim(), password);
        setSuccessMsg('Login realizado com sucesso! Bem-vindo(a) de volta.');
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (err: unknown) {
      console.warn('Authentication attempt notice:', err);
      if (isOperationNotAllowedError(err)) {
        setShowConsoleHelper(true);
        setErrorMsg('O método de login por E-mail e Senha ainda não está ativado no Firebase Console deste projeto.');
      } else {
        setErrorMsg(translateAuthError(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    setShowConsoleHelper(false);
    setLoading(true);
    try {
      await signInGoogle();
      setSuccessMsg('Login com Google realizado com sucesso!');
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: unknown) {
      console.warn('Google authentication notice:', err);
      setErrorMsg(translateAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleInstantLocalEntry = () => {
    signInLocally(
      name.trim() || 'Estudante',
      email.trim() || 'estudante@aprovadireito.com.br',
      studyFocus
    );
    setSuccessMsg('Acesso iniciado! Seu perfil e progresso estão salvos localmente.');
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const consoleUrl = getFirebaseConsoleAuthUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-serif font-bold text-base tracking-wide text-white">
              APROVA DIREITO
            </span>
          </div>

          <h2 className="text-xl font-bold font-serif text-white">
            {mode === 'login' && 'Entrar na sua Conta'}
            {mode === 'signup' && 'Criar Conta de Estudos'}
            {mode === 'forgot' && 'Recuperar Senha'}
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            {mode === 'login' && 'Acesse seus simulados, questões salvas e métricas de aprovação.'}
            {mode === 'signup' && 'Junte-se à plataforma oficial de preparação jurídica.'}
            {mode === 'forgot' && 'Informe seu e-mail para receber as instruções de recuperação.'}
          </p>

          {/* Mode Switch Tabs (Only show when not in 'forgot') */}
          {mode !== 'forgot' && (
            <div className="flex mt-4 bg-white/10 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); setShowConsoleHelper(false); }}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  mode === 'login' ? 'bg-[#D4AF37] text-[#0B1F3A] shadow' : 'text-slate-200 hover:text-white'
                }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => { setMode('signup'); setErrorMsg(''); setSuccessMsg(''); setShowConsoleHelper(false); }}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  mode === 'signup' ? 'bg-[#D4AF37] text-[#0B1F3A] shadow' : 'text-slate-200 hover:text-white'
                }`}
              >
                Criar Conta
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          
          {errorMsg && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Special Helper Box if Firebase Email Provider is pending activation in Console */}
          {showConsoleHelper && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-3 animate-fade-in">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Compass className="w-4 h-4 text-amber-700" />
                <span>Como ativar o login por E-mail no Firebase:</span>
              </div>
              <ol className="list-decimal pl-4 space-y-1 text-amber-800 leading-relaxed text-[11px]">
                <li>Acesse a aba <strong>Sign-in method</strong> no Firebase Console.</li>
                <li>Clique em <strong>E-mail/senha</strong> (Email/Password).</li>
                <li>Ative a opção <strong>Habilitar</strong> e clique em <strong>Salvar</strong>.</li>
              </ol>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={consoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg text-center flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <span>Abrir Firebase Console (Sign-in method)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleInstantLocalEntry}
                  className="w-full py-2 px-3 bg-white hover:bg-amber-100 text-[#0B1F3A] border border-amber-300 font-bold text-xs rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Entrar Imediatamente (Modo de Estudos)</span>
                </button>
              </div>
            </div>
          )}

          {/* SIGNUP: Name */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nome Completo
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ex.: Dra. Mariana Silva"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* E-mail (Used across all modes) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              E-mail
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-transparent"
              />
            </div>
          </div>

          {/* Passwords (Login & Signup only) */}
          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Senha {mode === 'signup' && '(mínimo 6 caracteres)'}
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setErrorMsg(''); setSuccessMsg(''); setShowConsoleHelper(false); }}
                    className="text-[11px] text-[#0B1F3A] hover:text-[#D4AF37] font-semibold transition-colors"
                  >
                    Esqueceu a senha?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* SIGNUP: Confirm Password, Focus & Terms Checkbox */}
          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Confirmação de Senha
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Foco de Estudo Principal
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

              {/* Terms of Use & Privacy Acceptance */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={e => setTermsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-[#0B1F3A] focus:ring-[#0B1F3A]"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    Declaro que li e aceito os <strong>Termos de Uso</strong> e a{' '}
                    <strong>Política de Privacidade</strong> da plataforma Aprova Direito.
                  </span>
                </label>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-[#0B1F3A] hover:bg-[#16365C] disabled:bg-slate-400 text-[#D4AF37] font-semibold text-sm rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-[#D4AF37] border-t-transparent" />
            ) : mode === 'login' ? (
              'Entrar na Plataforma'
            ) : mode === 'signup' ? (
              'Cadastrar e Iniciar Estudos'
            ) : (
              'Enviar Link de Recuperação'
            )}
          </button>

          {/* FORGOT MODE: Return to Login */}
          {mode === 'forgot' && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); setShowConsoleHelper(false); }}
                className="text-xs text-[#0B1F3A] hover:underline font-semibold"
              >
                ← Voltar para a tela de login
              </button>
            </div>
          )}

          {/* Alternative Google Sign In (already configured in Firebase) */}
          {mode !== 'forgot' && (
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div className="relative flex items-center justify-center">
                <span className="absolute inset-x-0 h-px bg-slate-200" />
                <span className="relative bg-white px-3 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  ou
                </span>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full py-2.5 px-4 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Entrar com o Google</span>
              </button>
            </div>
          )}

          <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Autenticação protegida via Firebase Authentication</span>
          </div>

        </form>

      </div>
    </div>
  );
};
