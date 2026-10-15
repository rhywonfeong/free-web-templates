import React from 'react';

export default function Pricing() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 animate-on-scroll" id="claim">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Pilot Economics</span>
        <h2 className="text-4xl md:text-5xl font-display text-white tracking-tighter mt-6">
          Transparent allocation pricing.
        </h2>
        <p className="text-neutral-400 mt-6 leading-relaxed">
          We are investing in early partners to build the standard for independent joiners. The pilot setup rate strictly covers our direct data-ingest and dedicated support costs.
        </p>
      </div>

      <div className="max-w-md mx-auto relative group">
        {/* Advanced multi-layered shadow/glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700 pointer-events-none"></div>
        
        <div className="relative bg-neutral-950 border border-white/10 group-hover:border-emerald-500/50 rounded-[2rem] p-8 md:p-10 shadow-2xl glass transition duration-700 overflow-hidden">
          {/* Internal subtle gradient top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-display text-white tracking-tight">Regional Pilot</h3>
            <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                5 Slots Remaining
              </span>
            </div>
          </div>

          <div className="mb-8 flex items-end gap-3 border-b border-white/10 pb-8">
            <span className="text-6xl font-display font-bold text-white tracking-tighter leading-none">£1,250</span>
            <span className="text-neutral-500 line-through text-sm font-mono mb-2">£3,500 standard</span>
          </div>

          <ul className="space-y-5 mb-10">
            {[
              "Full supplier library ingest (Egger, etc.)",
              "Custom portal & workflow setup",
              "3 months unlimited platform access",
              "Direct 1:1 founder support pipeline",
              "Commercial evidence PDF generation",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-500/50 transition-colors shrink-0">
                  <iconify-icon icon="lucide:check" class="text-emerald-400 w-3 h-3"></iconify-icon>
                </div>
                <span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center w-full mt-auto">
            <a href="#claim" className="btn-wrapper group w-full">
              <div className="line horizontal top"></div>
              <div className="line vertical right"></div>
              <div className="line horizontal bottom"></div>
              <div className="line vertical left"></div>
              <div className="dot top left"></div>
              <div className="dot top right"></div>
              <div className="dot bottom right"></div>
              <div className="dot bottom left"></div>
              <button className="btn w-full bg-white/5 hover:bg-emerald-500">
                <span className="btn-text">Secure Pilot Slot</span>
                <iconify-icon icon="lucide:arrow-up-right" class="btn-svg"></iconify-icon>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}