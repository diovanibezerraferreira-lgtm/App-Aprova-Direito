import React from 'react';
import { ActiveTab } from '../types';
import { Home, HelpCircle, Clock, FileCheck, BarChart3 } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab
}) => {
  const tabs: { id: ActiveTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'questoes', label: 'Questões', icon: HelpCircle },
    { id: 'simulados', label: 'Simulados', icon: Clock },
    { id: 'pecas', label: 'Peças', icon: FileCheck },
    { id: 'desempenho', label: 'Desempenho', icon: BarChart3 }
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-md border-t border-[#D4AF37]/30 text-slate-300 pb-safe shadow-2xl"
      aria-label="Navegação móvel inferior"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-1">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] min-w-[44px] py-1 transition-colors relative ${
                isActive ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <span className="absolute top-1 w-6 h-0.5 bg-[#D4AF37] rounded-full" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              <span className={`text-[11px] font-medium tracking-tight mt-1 truncate max-w-[62px] ${
                isActive ? 'font-semibold text-[#D4AF37]' : ''
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
