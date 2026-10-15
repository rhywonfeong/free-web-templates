import React from 'react';
import { clsx } from 'clsx';
import { useLocation, Link } from 'react-router-dom';

const navItems = [
  { label: 'Início', path: '/dashboard' },
  { label: 'Contadores', path: '/contadores' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Parâmetros', path: '/parametros' },
  { label: 'Relatórios', path: '/relatorios' },
  { label: 'Configurações', path: '/configuracoes' },
];

export default function TopNav({ isLocked }) {
  const location = useLocation();

  return (
    <header className="h-16 bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-between px-20 sticky top-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#10677F] rounded-lg flex items-center justify-center">
          <iconify-icon icon="solar:chart-square-bold" style={{ color: 'white', fontSize: '20px' }}></iconify-icon>
        </div>
        <span className="text-[#10677F] font-bold text-lg tracking-tight">Contabilize Aqui</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center gap-2">
        {navItems.map((item) => {
          // Check if the current route matches or starts with the nav item path (for sub-routes like /contadores/novo)
          const isExactMatch = location.pathname === item.path;
          const isSubRouteMatch = item.path !== '/dashboard' && location.pathname.startsWith(item.path);
          const isActive = (isExactMatch || isSubRouteMatch) && !isLocked;
          
          return (
            <Link
              key={item.label}
              to={isLocked ? "#" : item.path}
              onClick={(e) => isLocked && e.preventDefault()}
              className={clsx(
                "relative group flex items-center px-4 py-2 rounded-full transition-all duration-200",
                isLocked 
                  ? "cursor-not-allowed opacity-60" 
                  : "cursor-pointer",
                isActive
                  ? "text-[#10677F] border-b-2 border-[#10677F] rounded-none px-2 mx-2 py-5"
                  : isLocked
                    ? "text-[#939393]"
                    : "text-[#494949] hover:text-[#10677F]"
              )}
              title={isLocked ? "Configure sua equipe para liberar o acesso completo" : ""}
            >
              <span className={clsx("text-[14px]", isActive ? "font-bold" : "font-medium")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User Area */}
      <div className="flex items-center gap-6">
        <button 
          className={clsx(
            "relative transition-colors",
            isLocked ? "text-[#939393] cursor-not-allowed" : "text-[#494949] hover:text-[#1E1E1E]"
          )}
          disabled={isLocked}
        >
          <iconify-icon icon="solar:bell-bing-linear" style={{ fontSize: '24px' }}></iconify-icon>
        </button>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-[#DCEBEF] flex items-center justify-center text-[#10677F] font-semibold text-sm">
            GS
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-[#1E1E1E]">Gestor Silva</span>
          </div>
        </div>
      </div>
    </header>
  );
}