import React from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSubscription } from '../context/SubscriptionContext';
import { clsx } from 'clsx';

const SidebarLink = ({ to, icon, label, badge }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      clsx(
        "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
        isActive 
          ? "bg-[#262626] text-white font-medium" 
          : "text-[#a1a1aa] hover:bg-[#171717] hover:text-white"
      )
    }
  >
    <iconify-icon icon={icon} width="20" height="20"></iconify-icon>
    <span className="flex-1">{label}</span>
    {badge && (
      <span className="text-[10px] uppercase font-semibold bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded">
        {badge}
      </span>
    )}
  </NavLink>
);

export default function Layout() {
  const { isPro } = useSubscription();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#262626] bg-[#0a0a0a] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-[#262626]">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <iconify-icon icon="solar:play-circle-bold" width="20" height="20" style={{ color: 'white' }}></iconify-icon>
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">Studio AI</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <div className="text-xs font-medium text-[#71717a] px-4 py-2 uppercase tracking-wider mb-1">Menu</div>
          <SidebarLink to="/dashboard" icon="solar:widget-5-linear" label="Dashboard" />
          <SidebarLink to="/content" icon="solar:video-library-linear" label="Content" />
          
          <div className="mt-8 mb-1">
            <div className="text-xs font-medium text-[#71717a] px-4 py-2 uppercase tracking-wider">AI Features</div>
            <SidebarLink to="/ai-tools" icon="solar:magic-stick-3-linear" label="AI Hub" />
            <SidebarLink to="/ai-tools/seo-checker" icon="solar:text-square-linear" label="SEO Checker" />
            <SidebarLink to="/ai-tools/thumbnail-checker" icon="solar:gallery-bold-duotone" label="Thumbnails" />
            <SidebarLink to="/ai-tools/view-prediction" icon="solar:graph-up-linear" label="View Prediction" />
            <SidebarLink to="/ai-tools/video-generator" icon="solar:video-frame-play-linear" label="Video Gen" badge="PRO" />
          </div>
        </nav>

        <div className="p-4 border-t border-[#262626]">
          <div className="bg-[#171717] rounded-xl p-4 border border-[#262626]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#262626] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Creator Name</p>
                <p className="text-xs text-[#a1a1aa] truncate">{isPro ? 'Pro Plan' : 'Free Plan'}</p>
              </div>
            </div>
            {!isPro && (
              <button 
                onClick={() => navigate('/pricing')}
                className="w-full py-2 text-xs font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                Upgrade to Pro
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <iconify-icon icon="solar:magnifier-linear" width="18" height="18" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]"></iconify-icon>
              <input 
                type="text" 
                placeholder="Search across your channel..." 
                className="w-full bg-[#171717] border border-[#262626] text-sm text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-[#71717a]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#a1a1aa] hover:text-white transition-colors relative">
              <iconify-icon icon="solar:bell-linear" width="22" height="22"></iconify-icon>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#0a0a0a]"></span>
            </button>
            <button className="text-[#a1a1aa] hover:text-white transition-colors">
              <iconify-icon icon="solar:settings-linear" width="22" height="22"></iconify-icon>
            </button>
            {isPro && (
              <span className="flex items-center gap-1 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2.5 py-1 rounded-full shadow-lg shadow-indigo-500/20">
                <iconify-icon icon="solar:star-bold" width="12" height="12"></iconify-icon>
                PRO
              </span>
            )}
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-[#0a0a0a]">
          <div className="p-6 md:p-8 max-w-7xl mx-auto min-h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}