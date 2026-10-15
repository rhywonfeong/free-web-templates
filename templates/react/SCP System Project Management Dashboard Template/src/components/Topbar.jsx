import React from 'react';
import { useLocation } from 'react-router-dom';
import { user } from '../data/mockData';

export default function Topbar({ toggleSidebar }) {
  const location = useLocation();
  const pathTitles = {
    '/dashboard': 'Dashboard Geral',
    '/dashboard/projetos': 'Gestão de Projetos',
    '/dashboard/financeiro': 'Controle Financeiro',
    '/dashboard/analytics': 'Analytics & Relatórios',
  };
  
  const title = pathTitles[location.pathname] || 'SCP System';

  return (
    <header className="h-16 bg-dark border-b border-dark flex items-center justify-between px-4 sm:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-inverted hover:text-accent p-1"
        >
          <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
        </button>
        <h1 className="text-inverted text-lg sm:text-xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-muted-dark hover:text-inverted relative">
          <iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-dark"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-dark cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-inverted">{user.name}</p>
            <p className="text-[10px] text-accent tracking-wider font-semibold">{user.role}</p>
          </div>
          <img src={user.avatar} alt="User" className="w-9 h-9 rounded-full border border-dark group-hover:border-accent transition-colors" />
          <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="text-muted-dark group-hover:text-inverted"></iconify-icon>
        </div>
      </div>
    </header>
  );
}