import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import clsx from 'clsx';

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-neutral-50 dark:bg-neutral-950 overflow-hidden text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900/20 dark:bg-black/40 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={clsx(
          "fixed inset-y-0 left-0 z-30 w-64 transform bg-neutral-100/50 dark:bg-neutral-900/50 border-r border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center px-4 h-14 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md sticky top-0 z-10">
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label="Toggle Sidebar"
          >
            <iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
          </button>
          <span className="ml-2 font-medium tracking-tight text-sm">Tasks</span>
        </div>

        {/* Route Outlet */}
        <div className="flex-1 overflow-y-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}