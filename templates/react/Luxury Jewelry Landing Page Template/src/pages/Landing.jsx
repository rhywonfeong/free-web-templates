import React, { useEffect, useRef, useState } from 'react';
import SpotlightCanvas from '../components/SpotlightCanvas';
import ParticleCanvas from '../components/ParticleCanvas';
import JewelleryHero from '../components/JewelleryHero';
import Marquee from '../components/Marquee';
import Continuation from '../components/Continuation';

export default function Landing() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / heroHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-obsidian text-parchment font-serif">
      {/* 
        HERO SECTION - 100dvh
        Interaction that reveals, not announces. Scroll as narrative.
      */}
      <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden">
        {/* Layer 1: Scroll-scrubbed Spotlight */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <SpotlightCanvas progress={scrollProgress} />
        </div>

        {/* Layer 5: Gold Dust Particles */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <ParticleCanvas />
        </div>

        {/* Layer 10: Mouse Parallax Jewellery */}
        <div className="absolute inset-0 z-[10] flex items-center justify-center">
          <JewelleryHero />
        </div>

        {/* Layer 20: Minimal UI Overlays */}
        <div className="absolute inset-0 z-[20] pointer-events-none flex flex-col justify-between p-8 md:p-12">
          <div className="w-full flex justify-between items-start font-ui tracking-[0.5em] text-xs font-thin uppercase opacity-55">
            <span>Roma</span>
            <span>MCMLXXXIV</span>
          </div>
          
          <div className="w-full flex justify-between items-end font-ui">
            <h1 className="text-sm tracking-[0.5em] font-thin uppercase opacity-55 origin-bottom-left">
              Bvlgari
            </h1>
            
            <div className="flex flex-col items-center gap-4 opacity-50">
              <span className="text-[10px] tracking-widest uppercase rotate-90 origin-bottom mb-8">Scroll</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 50: Marquee Transition Band */}
      <div className="relative z-[50]">
        <Marquee />
      </div>

      {/* Layer 60: Editorial Continuation */}
      <div className="relative z-[60]">
        <Continuation />
      </div>
    </main>
  );
}