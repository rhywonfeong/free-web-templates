import React from 'react';
import SpotlightCard from './SpotlightCard';

export default function PlayerCardDetailed({ player }) {
  return (
    <SpotlightCard className="flex flex-col w-full max-w-sm overflow-hidden bg-white dark:bg-slate-900 rounded-xl">
      {/* Card Header with Image */}
      <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-950 flex items-end justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
        {/* Background abstract overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
        <img 
          src={player.image} 
          alt={player.name}
          className="relative z-0 h-full w-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <div className="rounded border border-white/20 bg-black/40 px-2 py-1 text-[11px] font-bold tracking-tight text-white backdrop-blur-md">
            {player.nat}
          </div>
          <div className="rounded border border-accent-500/30 bg-accent-500/20 px-2 py-1 flex items-center gap-1 text-[11px] font-bold tracking-tight text-accent-300 backdrop-blur-md">
            <iconify-icon icon="solar:star-bold" className="text-accent-400"></iconify-icon> TOP PROSPECT
          </div>
        </div>

        {/* Overall Rating prominent badge */}
        <div className="absolute -bottom-6 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-xl border border-white bg-pitch-500 text-xl font-bold text-white shadow-xl dark:border-slate-800">
          {player.ovr}
        </div>

        <div className="absolute bottom-4 left-4 z-20">
          <h2 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">{player.name}</h2>
          <p className="text-xs font-medium text-slate-300">{player.position} • {player.club}</p>
        </div>
      </div>

      {/* Card Body - Bio Info */}
      <div className="p-5 pt-8">
        <div className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Age</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{player.age}</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Height</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{player.height}</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Foot</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{player.foot}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
          {player.stats.map(s => (
            <div key={s.label}>
              <div className="mb-1.5 flex justify-between text-[11px] font-semibold uppercase tracking-widest">
                <span className="text-slate-500 dark:text-slate-400">{s.label}</span>
                <span className="text-slate-900 dark:text-slate-200">{s.val}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div 
                  className={`h-full rounded-full ${s.val >= 85 ? 'bg-pitch-500' : s.val >= 75 ? 'bg-pitch-400' : 'bg-slate-400 dark:bg-slate-500'}`} 
                  style={{ width: `${s.val}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}