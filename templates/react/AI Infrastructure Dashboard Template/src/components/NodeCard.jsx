import React from 'react';

export default function NodeCard({ title, subtitle, icon, children, color = 'cyan', isActive = false }) {
  
  const colorMap = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/20',
      iconText: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.1)]',
      activeGlow: 'shadow-[0_0_40px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50'
    },
    blue: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-950/20',
      iconText: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.1)]',
      activeGlow: 'shadow-[0_0_40px_rgba(59,130,246,0.3)] ring-1 ring-blue-400/50'
    },
    indigo: {
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-950/20',
      iconText: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10',
      glow: 'shadow-[0_0_30px_rgba(99,102,241,0.1)]',
      activeGlow: 'shadow-[0_0_40px_rgba(99,102,241,0.3)] ring-1 ring-indigo-400/50'
    },
    red: {
      border: 'border-red-500/50',
      bg: 'bg-red-950/20',
      iconText: 'text-red-400',
      iconBg: 'bg-red-500/10',
      glow: 'shadow-[0_0_30px_rgba(239,68,68,0.15)]',
      activeGlow: 'shadow-[0_0_40px_rgba(239,68,68,0.4)] ring-1 ring-red-400/50'
    }
  };

  const theme = colorMap[color] || colorMap.cyan;

  return (
    <div className={`relative w-full rounded-2xl glass-panel ${theme.border} ${theme.bg} p-6 transition-all duration-300 ${isActive ? theme.activeGlow : theme.glow}`}>
      
      {/* Decorative Top Line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-${color}-500 to-transparent opacity-50`}></div>

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl flex items-center justify-center ${theme.iconBg} ${theme.iconText} shrink-0`}>
          <iconify-icon icon={icon} width="28" height="28"></iconify-icon>
        </div>
        <div>
          <h2 className="text-[1.1rem] font-medium tracking-tight text-slate-100 leading-tight m-0">{title}</h2>
          <span className="text-sm font-medium text-slate-400">{subtitle}</span>
        </div>
      </div>
      
      {children}
    </div>
  );
}