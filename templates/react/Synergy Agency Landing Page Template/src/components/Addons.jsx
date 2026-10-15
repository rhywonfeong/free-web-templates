import React from 'react';

function Addons() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
        <div className="bg-brand-black rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
          <div>
            <h3 className="text-base font-medium tracking-tight mb-2 text-white">Global Integrations &amp; Add-ons</h3>
            <p className="text-xs text-white/50 max-w-sm">Standardized supplementary protocols applied across all developmental tiers.</p>
          </div>
          <ul className="space-y-3 w-full sm:w-auto min-w-[250px]">
            <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
              <span className="text-white/70">Payment Gateway</span>
              <span className="font-medium">+₹15,000</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
              <span className="text-white/70">External APIs / Maps</span>
              <span className="font-medium">+₹7,000</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-white/70">Priority Init (48h)</span>
              <span className="font-medium text-brand-lime">+30% Surcharge</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Addons;