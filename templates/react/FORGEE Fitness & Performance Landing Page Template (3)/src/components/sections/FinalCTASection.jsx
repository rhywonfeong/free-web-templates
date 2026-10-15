import React from 'react';
import Button from '../ui/Button';

const FinalCTASection = () => {
  return (
    <section className="py-32 md:py-48 bg-[#0A0A0A] relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Intense background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-[#BFFF00]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-12">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[96px] font-semibold leading-[1.0] tracking-tight uppercase max-w-4xl">
          A decisão<br />já foi tomada.<br />Agora é a ação.
        </h2>
        
        <p className="text-[#888780] text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] max-w-2xl text-center">
          A G E N D E  U M A  V I S I T A  ·  G R A T U I T A  ·  S E M  C O M P R O M I S S O  ·  T R A G A  T Ê N I S .
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto shadow-[0_4px_32px_rgba(191,255,0,0.2)]">AGENDAR VISITA GRATUITA</Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">FALAR COM ESPECIALISTA</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;