import React from 'react';

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-serif-display text-3xl italic text-stone-400 mb-4 block">03.</span>
          <h2 className="font-serif-display text-5xl md:text-6xl text-[#1a1a1a] mb-6">Tuition &amp; Plans</h2>
          <p className="text-stone-500 font-light max-w-md mx-auto">Flexible options for every commitment level. From drop-ins to full studio apprenticeships.</p>
        </div>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="group bg-[#Fdfcf8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-stone-100 hover:border-stone-300 transition-colors cursor-pointer">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-serif-display text-3xl text-[#1a1a1a]">Drop-in</h3>
                <span className="px-3 py-1 bg-stone-100 rounded-full text-[10px] uppercase tracking-wide font-medium">Casual</span>
              </div>
              <p className="text-sm text-stone-500 font-light">Single session pass. Perfect for uninstructed figure drawing.</p>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <span className="block text-2xl font-serif-display">$35</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wide">Per Session</span>
              </div>
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <iconify-icon icon="solar:add-linear" width="16" height="16"></iconify-icon>
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="group bg-[#1a1a1a] text-[#Fdfcf8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="mb-4 md:mb-0 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-serif-display text-3xl">Monthly Studio</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] uppercase tracking-wide font-medium">Popular</span>
              </div>
              <p className="text-sm text-stone-400 font-light">Weekly classes. Includes gallery exhibition participation.</p>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end relative z-10">
              <div className="text-right">
                <span className="block text-2xl font-serif-display">$180</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wide">Starts at</span>
              </div>
              <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
              </button>
            </div>
          </div>

          {/* Row 3 */}
          <div className="group bg-[#Fdfcf8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-stone-100 hover:border-stone-300 transition-colors cursor-pointer">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-serif-display text-3xl text-[#1a1a1a]">Apprenticeship</h3>
                <span className="px-3 py-1 bg-stone-100 rounded-full text-[10px] uppercase tracking-wide font-medium">Portfolio Review</span>
              </div>
              <p className="text-sm text-stone-500 font-light">Intensive atelier training &amp; guaranteed gallery features.</p>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <span className="block text-2xl font-serif-display">Custom</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wide">Per Season</span>
              </div>
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <iconify-icon icon="solar:add-linear" width="16" height="16"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}