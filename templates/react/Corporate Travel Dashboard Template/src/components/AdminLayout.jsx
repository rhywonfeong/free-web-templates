import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'solar:widget-5-linear' },
    { name: 'All Trips', path: '/admin/trips', icon: 'solar:routing-2-linear' },
    { name: 'Threads', path: '/admin/threads', icon: 'solar:inbox-line-linear' },
    { name: 'Approvals', path: '/admin/approvals', icon: 'solar:clipboard-check-linear' },
    { name: 'Team', path: '/admin/team', icon: 'solar:users-group-two-rounded-linear' },
    { name: 'Settings', path: '/admin/settings', icon: 'solar:settings-linear' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex selection:bg-stone-200 selection:text-stone-900">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-stone-200/60 bg-[#FDFBF7] flex flex-col sticky top-0 h-screen hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-transparent">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-stone-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
            </div>
            <span className="font-medium text-stone-900 tracking-tight text-sm">TripLocked</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-stone-100/80 text-stone-900'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <iconify-icon icon={item.icon} width="18" className={isActive ? 'text-stone-900' : 'text-stone-400'}></iconify-icon>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-stone-200/60">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600">
              JS
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-900 truncate">Jane Smith</p>
              <p className="text-xs text-stone-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-200/60 sticky top-0 z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-medium tracking-tight text-stone-900">Admin Dashboard</h1>
            <div className="w-px h-4 bg-stone-200 hidden sm:block"></div>
            <span className="text-sm text-stone-500 hidden sm:block">Team Overview</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <iconify-icon 
                icon="solar:magnifer-linear" 
                width="16" 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              ></iconify-icon>
              <input 
                type="text" 
                placeholder="Search trips, people..." 
                className="w-64 pl-9 pr-4 py-1.5 bg-white border border-stone-200/80 rounded-full text-sm outline-none focus:border-stone-400 focus:ring-0 transition-colors shadow-sm"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-1.5 bg-stone-900 text-stone-50 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
              <iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
              New Trip
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}