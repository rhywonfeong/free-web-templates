import React from 'react';

export function ThreadCard({ sender, subject, time, isActive, delay }) {
  return (
    <div 
      className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-500 ${
        isActive ? 'border-stone-300 shadow-md scale-[1.02] z-10' : 'border-stone-100 scale-100 opacity-80'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-600">
            {sender.charAt(0)}
          </div>
          <span className="text-sm font-medium text-stone-800">{sender}</span>
        </div>
        <span className="text-xs text-stone-400">{time}</span>
      </div>
      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">{subject}</p>
    </div>
  );
}

export function ItineraryCard() {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-lg p-6 w-full max-w-sm relative overflow-hidden group">
      {/* Subtle glow effect behind the card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors duration-700"></div>
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-semibold text-stone-900 tracking-tight">Q3 Executive Offsite</h3>
          <p className="text-xs text-stone-500 mt-0.5">Oct 12 — Oct 14 • London, UK</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Event 1 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600">
              <iconify-icon icon="solar:plain-linear" width="14"></iconify-icon>
            </div>
            <div className="w-px h-full bg-stone-100 my-1"></div>
          </div>
          <div className="pb-4 pt-1">
            <div className="text-xs font-medium text-stone-900 mb-0.5">BA Flight 118</div>
            <div className="text-[11px] text-stone-500">JFK 09:00 → LHR 21:00</div>
            <div className="mt-2 flex gap-2">
              <span className="text-[10px] bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded">Seat 4A</span>
              <span className="text-[10px] bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded">Conf: XYZ789</span>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600">
              <iconify-icon icon="solar:buildings-linear" width="14"></iconify-icon>
            </div>
          </div>
          <div className="pt-1">
            <div className="text-xs font-medium text-stone-900 mb-0.5">The Rosewood London</div>
            <div className="text-[11px] text-stone-500">Check-in pre-approved</div>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-stone-500 bg-stone-50 p-1.5 rounded border border-stone-100">
              <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
              Payment authorized via corporate card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}