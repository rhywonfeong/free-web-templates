import React from 'react';

export default function Toast({ isOpen, onClose }) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-[150%] opacity-0 pointer-events-none'}`}>
      <div className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 min-w-[300px]">
        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
          <iconify-icon icon="solar:check-circle-linear" stroke-width="2" class="text-lg"></iconify-icon>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-sm font-medium tracking-tight">Success</span>
          <span className="text-xs text-slate-300">Production stage updated successfully.</span>
        </div>
        <button onClick={onClose} className="cursor-pointer text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors ml-2 bg-transparent border-none">
          <iconify-icon icon="solar:close-circle-linear" class="text-lg"></iconify-icon>
        </button>
      </div>
    </div>
  );
}