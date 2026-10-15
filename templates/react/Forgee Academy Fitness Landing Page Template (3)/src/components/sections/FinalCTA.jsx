import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-[#E8280D]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[6rem] uppercase tracking-tighter leading-[0.9] mb-8 text-white drop-shadow-2xl">
          A Decisão <br/>
          Já Foi Tomada.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8280D] to-[#FF6B2B]">Agora É A Ação.</span>
        </h2>
        
        <p className="font-display text-sm md:text-base text-neutral-400 uppercase tracking-[0.3em] md:tracking-[0.5em] mb-12 word-spacing-wide">
          A G E N D E · U M A · V I S I T A · G R A T U I T A · <br className="hidden md:block" />S E M · C O M P R O M I S S O · T R A G A · T Ê N I S .
        </p>
        
        <Link 
          to="/agendar"
          className="inline-flex items-center justify-center bg-white text-black font-black uppercase tracking-widest py-5 px-10 md:px-16 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-[#E8280D] hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(232,40,13,0.5)]"
        >
          Agendar Visita Gratuita
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;