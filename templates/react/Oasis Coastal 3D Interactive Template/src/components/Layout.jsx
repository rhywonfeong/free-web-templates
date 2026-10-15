import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { path: '/', label: 'Interactive Scene', icon: 'solar:sun-2-linear' },
    { path: '/gallery', label: 'Coastal Gallery', icon: 'solar:gallery-wide-linear' },
    { path: '/about', label: 'About Project', icon: 'solar:info-circle-linear' }
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* Sidebar Navigation */}
      <aside className={clsx(
        "relative z-20 flex flex-col w-64 border-r border-slate-200/50 backdrop-blur-xl transition-colors duration-300",
        isHome ? "bg-white/40" : "bg-white"
      )}>
        <div className="p-8 flex items-center gap-3 border-b border-slate-200/50">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <iconify-icon icon="solar:palmtree-bold-duotone" width="24" height="24"></iconify-icon>
          </div>
          <h1 className="text-xl tracking-tight font-medium text-slate-900">Oasis 3D</h1>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-white shadow-sm text-blue-600 font-medium border border-slate-100" 
                  : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
              )}
            >
              <iconify-icon icon={item.icon} width="20" height="20"></iconify-icon>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="p-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex items-center gap-3">
            <iconify-icon icon="simple-icons:threejs" width="20" height="20" className="text-blue-500"></iconify-icon>
            <div className="text-xs text-slate-600 font-medium">Powered by Three.js</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}