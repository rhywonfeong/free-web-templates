import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import ParentHome from './pages/ParentHome';
import CoachHome from './pages/CoachHome';

// App Shell acting as a mobile device container on desktop, full bleed on mobile
export default function App() {
  const location = useLocation();
  const isCoach = location.pathname.includes('/coach');

  return (
    <div className="min-h-screen bg-black flex justify-center w-full">
      <div className="w-full max-w-[420px] bg-[#09090B] relative flex flex-col h-[100dvh] overflow-hidden sm:border-x border-[#27272A] sm:shadow-2xl shadow-[#00E559]/5">
        
        {/* Dynamic Top Header */}
        <header className="px-6 py-4 flex items-center justify-between z-10 bg-[#09090B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1B1E] border border-[#27272A] flex items-center justify-center text-[#00E559]">
              <iconify-icon icon="solar:shield-bold" width="20"></iconify-icon>
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-white leading-tight">Falcons U10</h1>
              <p className="text-xs text-[#A1A1AA] font-medium flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E559]"></span> Season Active
              </p>
            </div>
          </div>
          
          {/* Quick toggle for demo purposes */}
          <Link 
            to={isCoach ? "/" : "/coach"} 
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1B1E] border border-[#27272A] hover:bg-[#27272A] transition-colors"
            title="Toggle Role View"
          >
            <iconify-icon icon={isCoach ? "solar:users-group-rounded-linear" : "solar:user-id-linear"} width="18" style={{color: '#A1A1AA'}}></iconify-icon>
          </Link>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-4">
          <Routes>
            <Route path="/" element={<ParentHome />} />
            <Route path="/coach" element={<CoachHome />} />
          </Routes>
        </main>

        {/* Fixed Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 h-20 glass-nav border-t border-[#27272A] px-6 pb-2 flex items-center justify-between z-20">
          <NavItem icon="solar:home-smile-bold" label="Home" active={true} />
          <NavItem icon="solar:calendar-linear" label="Schedule" active={false} />
          <NavItem icon="solar:chat-round-line-linear" label="Chat" active={false} badge="2" />
          <NavItem icon="solar:user-linear" label="Profile" active={false} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, badge }) {
  return (
    <button className="flex flex-col items-center justify-center gap-1 w-12 h-full relative">
      <div className={clsx(
        "relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
        active ? "text-[#00E559]" : "text-[#A1A1AA] hover:text-white"
      )}>
        <iconify-icon icon={icon} width="22"></iconify-icon>
        {badge && (
          <span className="absolute -top-1 -right-1 bg-[#38BDF8] text-black text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className={clsx(
        "text-[10px] font-medium tracking-wide transition-colors",
        active ? "text-[#00E559]" : "text-[#A1A1AA]"
      )}>
        {label}
      </span>
    </button>
  );
}