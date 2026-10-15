import React from 'react';
import { useAppState } from '../../context/AppStateContext';

export default function Navbar() {
  const { 
    currentUser, 
    currentUserRole, 
    setCurrentUserRole, 
    showTraineeOnly, 
    setShowTraineeOnly 
  } = useAppState();

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/50 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-transform group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
            <iconify-icon icon="solar:layers-bold-duotone" width="28" height="28"></iconify-icon>
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hidden sm:block">
            AuraDesk
          </span>
        </div>

        {/* Controls Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Trainee Toggle */}
          <div className="flex items-center gap-3 bg-white/5 py-2 px-3 rounded-full border border-white/5">
            <label htmlFor="trainee-toggle" className="text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer select-none hidden sm:block">
              Trainee Mode
            </label>
            <button 
              id="trainee-toggle"
              role="switch"
              aria-checked={showTraineeOnly}
              onClick={() => setShowTraineeOnly(!showTraineeOnly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${showTraineeOnly ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-[0_0_10px_rgba(217,70,239,0.5)]' : 'bg-white/10'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${showTraineeOnly ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className="h-8 w-px bg-white/10 hidden sm:block"></div>

          {/* Role Switcher */}
          <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
            <iconify-icon icon="solar:user-id-linear" className="text-indigo-400" width="20" height="20"></iconify-icon>
            <select 
              value={currentUserRole}
              onChange={(e) => setCurrentUserRole(e.target.value)}
              className="bg-transparent text-sm font-semibold text-slate-200 cursor-pointer outline-none focus:ring-0 appearance-none pr-5 relative"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23CBD5E1%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '10px auto' }}
            >
              <option value="Admin" className="bg-slate-800">Admin</option>
              <option value="Executor" className="bg-slate-800">Executor</option>
              <option value="Trainee" className="bg-slate-800">Trainee</option>
            </select>
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/10">
            <div className="flex flex-col items-end hidden md:flex">
              <span className="text-sm font-semibold text-white leading-none">{currentUser.name}</span>
              <span className="text-xs font-medium text-indigo-400 mt-1">{currentUser.role}</span>
            </div>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="relative w-10 h-10 rounded-full object-cover border-2 border-slate-900 bg-slate-900"
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}