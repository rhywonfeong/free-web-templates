import React from 'react';

export default function Ticker({ text = "PREMIUM QUALITY • CRAFTED WITH CARE", speed = "normal" }) {
  // Create an array to repeat the text enough times to fill a large screen
  const items = Array(8).fill(text);
  
  return (
    <div className="relative flex overflow-hidden bg-stone-900 py-3 border-y border-stone-800 -skew-y-1 my-12 shadow-inner group">
      <div className={`whitespace-nowrap flex ${speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {items.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold tracking-[0.2em] text-stone-300 uppercase flex items-center gap-6">
            {item}
            <iconify-icon icon="solar:star-fall-minimalistic-2-bold" class="text-amber-500" width="14"></iconify-icon>
          </span>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div className={`absolute top-0 py-3 whitespace-nowrap flex ${speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}`} style={{ ariaHidden: true }}>
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-6 text-sm font-semibold tracking-[0.2em] text-stone-300 uppercase flex items-center gap-6">
            {item}
            <iconify-icon icon="solar:star-fall-minimalistic-2-bold" class="text-amber-500" width="14"></iconify-icon>
          </span>
        ))}
      </div>
    </div>
  );
}