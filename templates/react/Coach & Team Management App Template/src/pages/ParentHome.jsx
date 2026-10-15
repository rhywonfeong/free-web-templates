import React, { useState } from 'react';
import clsx from 'clsx';

export default function ParentHome() {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  return (
    <div className="flex flex-col gap-6 pt-2 pb-6 animate-fade-in" style={{animation: 'fadeIn 0.5s ease-out'}}>
      
      {/* Greeting Context */}
      <section>
        <h2 className="text-2xl font-medium tracking-tight text-white mb-1">Hey, Sarah</h2>
        <p className="text-sm text-[#A1A1AA]">Here's what Leo needs next.</p>
      </section>

      {/* Primary Action Card: Next Event */}
      <section className="bg-[#1A1B1E] border border-[#27272A] rounded-[20px] p-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E559] opacity-[0.03] rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#27272A] px-2 py-1 rounded-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">Next Game</span>
            </div>
            <h3 className="text-lg font-medium tracking-tight text-white leading-snug">
              vs. Redhawks U10
            </h3>
            <p className="text-sm text-[#A1A1AA] mt-1 flex items-center gap-1.5">
              <iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
              Centennial Park, Field 3
            </p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-sm font-mono text-[#00E559]">Sat, Oct 14</span>
            <span className="text-xl font-medium tracking-tight text-white">9:00 AM</span>
          </div>
        </div>

        {/* RSVP Interaction */}
        <div className="mt-5 pt-5 border-t border-[#27272A]">
          <p className="text-xs text-[#A1A1AA] mb-3 font-medium">Are you going?</p>
          <div className="flex gap-2">
            <button 
              onClick={() => setRsvpStatus('going')}
              className={clsx(
                "flex-1 py-2.5 rounded-[12px] text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
                rsvpStatus === 'going' 
                  ? "bg-[#00E559] text-black" 
                  : "bg-[#27272A] text-white hover:bg-[#3f3f46]"
              )}
            >
              <iconify-icon icon="solar:check-circle-bold" width="16" style={{display: rsvpStatus === 'going' ? 'block' : 'none'}}></iconify-icon>
              Going
            </button>
            <button 
              onClick={() => setRsvpStatus('no')}
              className={clsx(
                "flex-1 py-2.5 rounded-[12px] text-sm font-medium transition-all duration-200",
                rsvpStatus === 'no' 
                  ? "bg-red-500/20 text-red-500 border border-red-500/50" 
                  : "bg-[#27272A] text-white hover:bg-[#3f3f46]"
              )}
            >
              Can't Make It
            </button>
          </div>
        </div>
      </section>

      {/* Signature Feature: Parent Replay */}
      <section className="bg-gradient-to-b from-[#1A1B1E] to-[#09090B] border border-[#27272A] rounded-[20px] p-1 shadow-lg group hover:border-[#00E559]/30 transition-colors">
        <div className="bg-[#1A1B1E] rounded-[18px] p-5 h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00E559]/10 flex items-center justify-center text-[#00E559]">
                <iconify-icon icon="solar:play-circle-bold" width="20"></iconify-icon>
              </div>
              <h3 className="text-sm font-semibold text-white">Parent Replay</h3>
            </div>
            <span className="text-[10px] font-mono text-[#00E559] bg-[#00E559]/10 px-2 py-0.5 rounded-full border border-[#00E559]/20">
              New
            </span>
          </div>
          
          <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
            Coach Mike shared a 2-minute recap from Thursday's practice focusing on <span className="text-white font-medium">spatial awareness</span>.
          </p>
          
          <button className="w-full bg-[#27272A] hover:bg-[#3f3f46] text-white text-sm font-medium py-3 rounded-[12px] flex items-center justify-between px-4 transition-colors">
            <span className="flex items-center gap-2">
              <iconify-icon icon="solar:bolt-linear" width="16" className="text-[#38BDF8]"></iconify-icon>
              View 5-Min Home Drill
            </span>
            <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-[#A1A1AA] group-hover:text-white transition-colors"></iconify-icon>
          </button>
        </div>
      </section>

      {/* Team Needs / Tasks */}
      <section className="grid grid-cols-2 gap-3">
        <div className="bg-[#1A1B1E] border border-[#27272A] rounded-[16px] p-4 flex flex-col justify-between aspect-square">
          <div className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center text-[#A1A1AA] mb-2">
            <iconify-icon icon="solar:apple-linear" width="18"></iconify-icon>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white mb-1">Snack Duty</h4>
            <p className="text-xs text-[#A1A1AA] leading-tight mb-2">Open for this Saturday</p>
            <button className="text-[11px] font-mono text-[#38BDF8] font-semibold hover:text-white transition-colors">CLAIM SLOT →</button>
          </div>
        </div>
        
        <div className="bg-[#1A1B1E] border border-[#27272A] rounded-[16px] p-4 flex flex-col justify-between aspect-square relative overflow-hidden">
           <div className="absolute top-0 right-0 w-16 h-16 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&q=80')] bg-cover bg-center opacity-20 rounded-bl-[100%]"></div>
          <div className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center text-[#A1A1AA] mb-2 relative z-10">
            <iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
          </div>
          <div className="relative z-10">
            <h4 className="text-sm font-medium text-white mb-1">Photos</h4>
            <p className="text-xs text-[#A1A1AA] leading-tight mb-2">12 new from last week</p>
            <button className="text-[11px] font-mono text-white font-semibold hover:text-[#00E559] transition-colors">VIEW ALBUM</button>
          </div>
        </div>
      </section>

    </div>
  );
}