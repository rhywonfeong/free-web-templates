import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import ThemeToggle from '../ThemeToggle';

export default function TopBar({ onMenuToggle }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-500 dark:border-slate-800/50 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between px-4 lg:px-8">
        
        <div className="flex items-center">
          <button 
            onClick={onMenuToggle}
            className="mr-2 flex items-center justify-center rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
          >
            <iconify-icon icon="solar:hamburger-menu-linear" className="text-xl"></iconify-icon>
          </button>
          <Logo />
        </div>

        {/* Global Search */}
        <div className="hidden max-w-md flex-1 px-8 md:block lg:max-w-xl">
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <iconify-icon icon="solar:magnifer-linear" className="text-slate-400 group-focus-within:text-pitch-500 transition-colors dark:text-slate-500"></iconify-icon>
            </div>
            <input 
              type="text" 
              placeholder="Search players, clubs, or reports..." 
              className="w-full rounded-md border border-slate-200 bg-slate-100/50 py-1.5 pr-3 pl-9 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-pitch-500 focus:bg-white focus:ring-4 focus:ring-pitch-500/10 focus:outline-none dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:border-slate-700 dark:focus:bg-slate-900"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <span className="hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 lg:inline-block dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">⌘K</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="hidden items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 md:inline-flex dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            <iconify-icon icon="solar:arrow-left-linear" className="text-sm"></iconify-icon>
            Platform
          </Link>

          <ThemeToggle />

          <button className="relative flex items-center justify-center rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white">
            <iconify-icon icon="solar:bell-linear" className="text-lg"></iconify-icon>
            <span className="bg-pitch-500 absolute top-1.5 right-1.5 h-2 w-2 rounded-full border-2 border-white dark:border-slate-950"></span>
          </button>

          <div className="ml-2 h-8 w-px bg-slate-200 dark:bg-slate-800"></div>

          <div className="group relative ml-2 flex cursor-pointer items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">MS</span>
            </div>
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xs text-slate-400"></iconify-icon>
          </div>
        </div>
      </div>
    </nav>
  );
}