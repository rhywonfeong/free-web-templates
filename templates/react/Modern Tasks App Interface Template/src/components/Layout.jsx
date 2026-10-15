import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-900">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-sm">
              <iconify-icon icon="solar:check-square-linear" width="18" height="18"></iconify-icon>
            </div>
            <span className="font-semibold tracking-tight text-sm">Tasks</span>
          </div>
          
          <nav className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
            <NavLink 
              to="/" 
              className={({ isActive }) => clsx(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                isActive ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              List
            </NavLink>
            <NavLink 
              to="/stats" 
              className={({ isActive }) => clsx(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                isActive ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              Overview
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto p-4 md:py-12 flex flex-col">
        <Outlet />
      </main>
      
      <footer className="py-6 text-center text-xs text-zinc-400 font-medium">
        <p className="flex items-center justify-center gap-1">
          Designed with <iconify-icon icon="solar:heart-linear"></iconify-icon> for productivity
        </p>
      </footer>
    </div>
  );
}