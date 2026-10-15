import React from 'react';

const brands = [
  { name: 'Vortex', initial: 'V' },
  { name: 'Nimbus', initial: 'N' },
  { name: 'Prysma', initial: 'P' },
  { name: 'Cirrus', initial: 'C' },
  { name: 'Kynder', initial: 'K' },
  { name: 'Halcyn', initial: 'H' },
];

export default function Marquee() {
  // Duplicate array for seamless infinite scroll
  const scrollItems = [...brands, ...brands];

  return (
    <div className="max-w-5xl mx-auto w-full px-8 pb-10 mt-auto flex items-center gap-12 overflow-hidden">
      
      {/* Left Static Text */}
      <div className="flex-shrink-0 text-foreground/50 text-sm leading-snug">
        Relied on by brands<br />
        across the globe
      </div>

      {/* Right Marquee */}
      <div className="flex-1 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused] items-center gap-16">
          {scrollItems.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex items-center gap-3 group cursor-default">
              
              <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="text-foreground text-xs font-medium opacity-90">
                  {brand.initial}
                </span>
              </div>
              
              <span className="text-base font-medium text-foreground tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                {brand.name}
              </span>
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}