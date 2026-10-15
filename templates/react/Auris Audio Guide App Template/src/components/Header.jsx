import React from 'react';

export default function Header() {
  return (
    <header className="pt-12 pb-4 px-6 sticky top-0 z-50 bg-gray-50/90 backdrop-blur-xl border-b border-gray-100/50">
      <div className="flex justify-between items-center mb-5">
        <div className="text-xl font-medium tracking-tighter text-slate-900 uppercase">Auris</div>
        <button className="w-10 h-10 rounded-full border border-gray-200/80 bg-white flex items-center justify-center text-slate-800 transition-transform active:scale-95">
          <iconify-icon icon="solar:bell-linear" style={{ strokeWidth: "1.5" }} className="text-lg"></iconify-icon>
        </button>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-slate-800 transition-colors">
          <iconify-icon icon="solar:magnifer-linear" style={{ strokeWidth: "1.5" }} className="text-base"></iconify-icon>
        </div>
        <input 
          type="text" 
          className="w-full bg-white border border-gray-200/80 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all placeholder:text-gray-400 shadow-sm shadow-gray-100/50" 
          placeholder="搜索线路、景点或城市..." 
        />
      </div>
    </header>
  );
}