import React, { useEffect, useRef } from 'react';

export default function Terminal({ logs }) {
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogStyle = (type) => {
    switch (type) {
      case 'success': return 'text-emerald-400';
      case 'warning': return 'text-amber-400';
      case 'system': return 'text-cyan-400';
      default: return 'text-slate-300';
    }
  };

  const getLogIcon = (type) => {
    switch (type) {
      case 'success': return 'solar:check-circle-bold';
      case 'warning': return 'solar:danger-circle-bold';
      case 'system': return 'solar:settings-minimalistic-bold';
      default: return 'solar:info-circle-bold';
    }
  };

  return (
    <div className="h-48 glass-panel rounded-xl border border-slate-700/50 flex flex-col overflow-hidden bg-[#0A0F1A]">
      {/* Terminal Header */}
      <div className="bg-slate-900/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 text-slate-300">
          <iconify-icon icon="solar:code-square-bold-duotone" width="18"></iconify-icon>
          <h3 className="text-sm font-medium m-0 tracking-tight">سجل النظام (LiteLLM Logs)</h3>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
        </div>
      </div>
      
      {/* Logs Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 font-mono text-[13px] space-y-2 scroll-smooth">
        {logs.length === 0 ? (
          <div className="text-slate-600 text-center mt-4">لا توجد سجلات حالياً...</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="flex gap-3 hover:bg-slate-800/30 px-2 py-1 rounded transition-colors group">
              <span className="text-slate-500 shrink-0 select-none">[{log.time}]</span>
              <span className={`shrink-0 flex items-center opacity-70 group-hover:opacity-100 transition-opacity ${getLogStyle(log.type)}`}>
                <iconify-icon icon={getLogIcon(log.type)} width="14"></iconify-icon>
              </span>
              <span className={`${getLogStyle(log.type)} leading-relaxed break-words`}>
                {log.message}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}