import React from 'react';

export default function Marquee() {
  const text = "Joaillerie · Savoir-Faire · Roma · MCMLXXXIV · Serpenti · Haute Couture · ";
  const repetitions = 4;

  return (
    <section className="marquee-container w-full h-[68px] bg-parchment overflow-hidden border-y border-gold/20 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee text-obsidian font-serif italic font-light text-[22px] tracking-[0.06em]">
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} className="flex items-center">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}