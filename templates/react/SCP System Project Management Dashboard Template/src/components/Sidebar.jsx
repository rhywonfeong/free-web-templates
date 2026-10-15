import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', icon: 'solar:home-smile-linear', label: 'Home' },
  { path: '/dashboard/projetos', icon: 'solar:folder-with-files-linear', label: 'Projetos' },
  { path: '/dashboard/engenheiros', icon: 'solar:users-group-rounded-linear', label: 'Engenheiros' },
  { path: '/dashboard/financeiro', icon: 'solar:wallet-money-linear', label: 'Financeiro' },
  { path: '/dashboard/alertas', icon: 'solar:bell-bing-linear', label: 'Alertas', badge: 3 },
  { path: '/dashboard/analytics', icon: 'solar:chart-square-linear', label: 'Analytics' },
  { path: '/dashboard/relatorio', icon: 'solar:document-text-linear', label: 'Relatório' },
  { path: '/dashboard/horas', icon: 'solar:clock-circle-linear', label: 'Horas' },
  { path: '/dashboard/configuracoes', icon: 'solar:settings-linear', label: 'Configurações' },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-dark border-r border-dark transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        <div className="h-16 flex items-center px-6 border-b border-dark shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-dark font-bold text-lg">
              S
            </div>
            <span className="text-inverted font-bold text-xl tracking-tight">SCP</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors relative
                ${isActive 
                  ? 'bg-[#BFFF00]/10 text-inverted' 
                  : 'text-[#8A9099] hover:bg-[#7FA8B8]/20 hover:text-inverted'}
              `}
            >
              {({ isActive }) => (
                <>
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r-md" />}
                  <iconify-icon icon={item.icon} width="20" style={{ color: isActive ? '#BFFF00' : 'currentColor' }}></iconify-icon>
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-dark shrink-0">
          <div className="bg-[#4A4A4A]/30 rounded-md p-3">
            <p className="text-xs text-muted-dark mb-1">Meta Mensal</p>
            <p className="text-sm font-bold text-inverted">R$ 90.000</p>
            <div className="w-full bg-[#4A4A4A] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-accent h-full w-[72%]"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}