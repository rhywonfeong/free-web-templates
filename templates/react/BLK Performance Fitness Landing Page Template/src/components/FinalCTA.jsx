import React from 'react';
import Button from './ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 relative border-t border-[var(--color-ash)]/30 overflow-hidden">
      {/* Background with strong primary glow */}
      <div className="absolute inset-0 bg-[var(--color-carbon)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-[radial-gradient(ellipse_at_center,rgba(255,56,0,0.15)_0%,transparent_60%)] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-[56px] md:text-[96px] lg:text-[120px] leading-[0.85] tracking-tighter text-white mb-8">
          A ÚNICA BARREIRA É <br className="hidden md:block"/><span className="text-[var(--color-primary)]">VOCÊ MESMO.</span>
        </h2>
        
        <p className="text-[18px] text-[var(--color-silver)] max-w-2xl mb-12">
          Agende sua visita gratuita e descubra por que mais de 2.000 pessoas escolheram a BLK.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Button variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">Agendar Visita Gratuita</Button>
          <Button variant="secondary" className="border border-[var(--color-ash)] hover:border-white w-full sm:w-auto bg-[var(--color-surface)]">Falar com Especialista</Button>
        </div>
      </div>
    </section>
  );
}