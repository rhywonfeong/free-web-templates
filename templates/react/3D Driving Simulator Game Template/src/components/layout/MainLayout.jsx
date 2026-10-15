import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isGameRoute = location.pathname === '/play';

  return (
    <div className="min-h-screen w-full relative flex flex-col bg-slate-950">
      {!isGameRoute && (
        <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
          <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-2xl pointer-events-auto cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
              <iconify-icon icon="solar:steering-wheel-linear" style={{ color: 'white', fontSize: '20px' }}></iconify-icon>
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-white">ApexClimb</h1>
          </div>
          <nav className="flex gap-4 pointer-events-auto">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-panel p-2 rounded-xl hover:bg-white/20 transition-all text-white flex items-center justify-center">
              <iconify-icon icon="simple-icons:github" style={{ fontSize: '20px' }}></iconify-icon>
            </a>
          </nav>
        </header>
      )}
      
      <main className={clsx("flex-1 w-full h-full", isGameRoute ? "absolute inset-0 z-0" : "relative z-10 pt-24 flex flex-col items-center justify-center")}>
        <Outlet />
      </main>
    </div>
  );
}