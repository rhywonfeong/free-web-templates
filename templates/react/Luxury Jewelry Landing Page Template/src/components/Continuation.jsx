import React, { useEffect, useRef, useState } from 'react';
import JewelleryHero from './JewelleryHero';

export default function Continuation() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Scroll Reveal Logic via Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    if (rightColRef.current) {
      observer.observe(rightColRef.current);
    }

    // Parallax logic for left column
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Only calculate if section is somewhere in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate a local scroll value based on how far the section has travelled
        const offset = (window.innerHeight - rect.top) * 0.6; 
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-warmBlack grid grid-cols-1 lg:grid-cols-[58%_42%] min-h-screen relative overflow-hidden">
      
      {/* Left Column: Detail View with Parallax */}
      <div className="relative h-[60vh] lg:h-auto overflow-hidden bg-obsidian flex items-center justify-center">
        {/* Seamless bleed gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-warmBlack via-transparent to-transparent opacity-80 pointer-events-none"></div>
        
        <div 
          ref={leftColRef}
          className="w-full h-full flex items-center justify-center will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.15}px) scale(1.4) rotate(10deg)` }}
        >
          {/* Re-using the SVG logic, but strictly visual without mouse parallax here to focus on scale */}
           <svg 
            viewBox="0 0 500 500" 
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-70"
          >
             <use href="#goldMain" /> {/* Assuming defs are global, but in React we should ideally extract SVG defs. For demo, we rely on the hero piece having rendered first or we duplicate. Let's duplicate defs to be safe. */}
             <defs>
              <linearGradient id="goldMainDetail" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#8b6914"/>
                <stop offset="25%"  stopColor="#c9a84c"/>
                <stop offset="50%"  stopColor="#f7e7c1"/>
                <stop offset="75%"  stopColor="#c9a84c"/>
                <stop offset="100%" stopColor="#a07520"/>
              </linearGradient>
              <linearGradient id="goldShadowDetail" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1405" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#0a0802" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <g transform="translate(250, 250) rotate(-15)">
              <path d="M -120 -40 C -80 -180, 150 -160, 140 -20 C 130 100, -100 120, -140 20" fill="none" stroke="url(#goldShadowDetail)" strokeWidth="48" strokeLinecap="round"/>
              <path d="M -130 -30 C -90 -160, 130 -140, 120 -10 C 110 90, -80 100, -120 10" fill="none" stroke="url(#goldMainDetail)" strokeWidth="32" strokeLinecap="round"/>
              <path d="M -150 20 C -110 -120, 160 -100, 150 30 C 140 140, -130 160, -170 60" fill="none" stroke="url(#goldShadowDetail)" strokeWidth="50" strokeLinecap="round"/>
              <path d="M -160 30 C -120 -100, 140 -80, 130 40 C 120 130, -110 140, -150 50" fill="none" stroke="url(#goldMainDetail)" strokeWidth="34" strokeLinecap="round"/>
              <path d="M -170 70 C -130 -70, 180 -50, 170 80 C 160 190, -150 210, -190 100" fill="none" stroke="url(#goldShadowDetail)" strokeWidth="52" strokeLinecap="round"/>
              <path d="M -180 80 C -140 -50, 160 -30, 150 90 C 140 180, -130 190, -170 90" fill="none" stroke="url(#goldMainDetail)" strokeWidth="36" strokeLinecap="round"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Right Column: Editorial Copy */}
      <div 
        ref={rightColRef}
        className="flex flex-col justify-center px-12 py-24 md:px-24 lg:px-32 z-20"
      >
        <div className="max-w-[400px]">
          <h2 className="font-serif italic font-light text-[34px] leading-snug text-parchment tracking-wide reveal-item">
            Formed in the darkness.
          </h2>
          <h2 className="font-serif italic font-light text-[34px] leading-snug text-parchment tracking-wide reveal-item mt-2">
            Revealed by the light.
          </h2>
          <h2 className="font-serif italic font-light text-[34px] leading-snug text-parchment tracking-wide reveal-item mt-2">
            A singular vision.
          </h2>

          <div className="w-full h-[1px] bg-gradient-to-r from-gold to-transparent my-12 opacity-40 reveal-item"></div>

          <div className="reveal-item">
            <span className="font-ui text-xs font-thin tracking-[0.3em] uppercase text-paleGold opacity-70">
              18k Yellow Gold & Emerald Cut
            </span>
          </div>
        </div>
      </div>
      
    </section>
  );
}