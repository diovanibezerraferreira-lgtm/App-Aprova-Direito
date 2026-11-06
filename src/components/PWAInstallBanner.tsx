import React, { useState } from 'react';
import { Download, Smartphone, Share, PlusSquare, X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const PWAInstallButton: React.FC<{ variant?: 'header' | 'hero' | 'menu' }> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already running in standalone PWA mode, do not show install CTA
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
        setTimeout(() => setJustInstalled(false), 4000);
      }
    } else {
      // Show guided prompt modal (especially for iOS or desktop where beforeinstallprompt hasn't fired yet)
      setShowIOSModal(true);
    }
  };

  if (justInstalled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
        <CheckCircle2 className="w-3.5 h-3.5" /> App Instalado!
      </span>
    );
  }

  if (variant === 'menu') {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37]/15 to-[#D4AF37]/5 hover:from-[#D4AF37]/25 hover:to-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-sm font-semibold transition-all group"
        >
          <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
            <Smartphone className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="leading-tight font-medium">Instalar Aplicativo</p>
            <p className="text-[11px] text-slate-400 font-normal">Acesso rápido no Android e iPhone</p>
          </div>
        </button>

        {showIOSModal && <PWAInstallModal onClose={() => setShowIOSModal(false)} isIOS={isIOS} />}
      </>
    );
  }

  if (variant === 'hero') {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#C9A434] text-[#0B1F3A] font-bold text-sm shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Download className="w-4 h-4" />
          <span>Instalar no Celular / PC</span>
        </button>

        {showIOSModal && <PWAInstallModal onClose={() => setShowIOSModal(false)} isIOS={isIOS} />}
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        aria-label="Instalar Aprova Direito como aplicativo no celular ou computador"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#D4AF37] border border-[#D4AF37]/35 hover:border-[#D4AF37]/60 text-xs font-semibold tracking-wide transition-all shadow-sm group"
      >
        <Download className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Instalar App</span>
        <span className="sm:hidden">Instalar</span>
      </button>

      {showIOSModal && <PWAInstallModal onClose={() => setShowIOSModal(false)} isIOS={isIOS} />}
    </>
  );
};

export const PWAInstallModal: React.FC<{ onClose: () => void; isIOS: boolean }> = ({ onClose, isIOS }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0B1F3A] border border-[#D4AF37]/30 p-6 text-white shadow-2xl overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F284D] to-[#08162B] border border-[#D4AF37]/40 flex items-center justify-center shadow-md">
              <img src="/pwa-192x192.png" alt="Aprova Direito" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-wide">Aprova Direito</h3>
              <p className="text-xs text-[#D4AF37] font-medium">Aplicativo Web Progressivo (PWA)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-3.5 flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <p className="font-semibold text-white mb-0.5">Vantagens do Aplicativo:</p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                <li>Abre em tela cheia (sem barra do navegador).</li>
                <li>Carregamento ultrarrápido com cache inteligente.</li>
                <li>Ícone exclusivo na sua tela inicial.</li>
                <li>Sem precisar baixar arquivos pesados de lojas.</li>
              </ul>
            </div>
          </div>

          {isIOS ? (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#D4AF37]" /> Como instalar no iPhone (Safari):
              </p>
              <ol className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2.5 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    No navegador <strong>Safari</strong>, toque no botão <strong>Compartilhar</strong>{' '}
                    <Share className="w-3.5 h-3.5 inline text-[#D4AF37] mx-0.5" /> na barra inferior.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    Role as opções e toque em <strong>"Adicionar à Tela de Início"</strong>{' '}
                    <PlusSquare className="w-3.5 h-3.5 inline text-[#D4AF37] mx-0.5" />.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    Toque em <strong>Adicionar</strong> no canto superior direito para concluir.
                  </div>
                </li>
              </ol>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#D4AF37]" /> Instalação no Android / Chrome / Computador:
              </p>
              <ol className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2.5 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    No menu do Chrome (três pontos ⋮) ou na barra de endereços, clique em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    Confirme em <strong>"Instalar"</strong> para fixar o ícone oficial do Aprova Direito.
                  </div>
                </li>
              </ol>
            </div>
          )}

          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% seguro. Suas credenciais e dados permanecem protegidos pelo Firebase.</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#C9A434] text-[#0B1F3A] font-bold text-sm shadow-md transition-all"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};

export const OfflineStatusIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-xl bg-[#0B1F3A]/95 border border-amber-500/40 px-4 py-2.5 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-fade-in"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
      </span>
      <span>Você está offline. Conteúdos em cache continuam disponíveis.</span>
    </aside>
  );
};
