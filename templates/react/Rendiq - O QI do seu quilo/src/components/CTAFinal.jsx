import React, { useEffect, useState, useRef } from 'react';

const CTAFinal = () => {
  const [translateY, setTranslateY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when the section is in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate the visible offset
          const scrolledIntoView = windowHeight - rect.top;
          // Apply a gentle floating downward parallax effect (moves slower than scroll)
          setTranslateY(scrolledIntoView * 0.1); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Ticker Animado (Top of card area, absolute to screen or just above card) */}
      <div className="absolute top-10 left-0 w-full overflow-hidden flex items-center z-10 opacity-60">
        <div className="animate-ticker text-white/50 font-display text-2xl tracking-widest uppercase">
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
        </div>
      </div>

      {/* Main Glass Card with Parallax */}
      <div 
        className="relative z-10 text-center p-12 md:p-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-2xl w-[calc(100%-3rem)] mx-auto flex flex-col items-center will-change-transform"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white mb-10 leading-tight flex flex-col">
          <span>A MARGEM</span>
          <span>NÃO ESPERA.</span>
          <span>COMECE HOJE.</span>
        </h2>
        
        <button className="bg-lime-400 text-neutral-900 text-base font-label px-10 py-4 rounded-full hover:bg-lime-300 transition-colors w-full sm:w-auto">
          COMEÇAR TESTE GRATUITO
        </button>
      </div>

       <div className="absolute bottom-10 left-0 w-full overflow-hidden flex items-center z-10 opacity-60">
        <div className="animate-ticker text-white/50 font-display text-2xl tracking-widest uppercase" style={{ animationDirection: 'reverse' }}>
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
          <span className="px-4">14 · DIAS · GRÁTIS · SEM · CARTÃO · ACESSO · COMPLETO · CANCELE · QUANDO · QUISER · </span>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;