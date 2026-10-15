import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { name: 'Panel', path: '/dashboard', icon: 'solar:widget-bold-duotone', end: true },
  { name: 'Faturalar', path: '/dashboard/invoices', icon: 'solar:wallet-bold-duotone', end: false },
  { name: 'Ticketlarım', path: '/dashboard/tickets', icon: 'solar:chat-round-dots-bold-duotone', end: false },
  { name: 'API Dokümantasyonu', path: '/dashboard/api-docs', icon: 'solar:document-text-bold-duotone', end: false },
  { name: 'Ayarlar', path: '/dashboard/settings', icon: 'solar:settings-bold-duotone', end: false },
];

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex selection:bg-[#E1B552]/30 selection:text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0F0F0F] hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:chart-square-bold-duotone" width="24" height="24" style={{ color: '#E1B552' }}></iconify-icon>
            <span className="font-semibold tracking-tight text-lg text-white">HasFiyat</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-[#E1B552]/10 text-[#E1B552]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {({ isActive }) => (
                <>
                  <iconify-icon 
                    icon={item.icon} 
                    width="20" 
                    height="20" 
                    style={{ color: isActive ? '#E1B552' : 'currentColor' }}
                  ></iconify-icon>
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E1B552] to-[#FFE082] flex items-center justify-center text-black font-bold text-sm">
              AA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Ali Akpınar</p>
              <p className="text-xs text-gray-500 truncate">ali@sirket.com</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <iconify-icon icon="solar:logout-2-linear" width="18" height="18"></iconify-icon>
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0F0F0F]/80 backdrop-blur-md md:hidden">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:chart-square-bold-duotone" width="24" height="24" style={{ color: '#E1B552' }}></iconify-icon>
            <span className="font-semibold tracking-tight">HasFiyat</span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}