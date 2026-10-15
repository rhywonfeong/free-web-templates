import React from 'react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-10 bg-[#111111] relative overflow-hidden flex justify-center items-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46A17] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center text-center gap-10">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none text-white">
          A DECISÃO JÁ<br/>FOI TOMADA.<br/><span className="text-[#F46A17]">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-[#888888] font-bold tracking-widest text-xs md:text-sm uppercase">
          AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS.
        </p>

        <Button variant="primary" className="text-sm md:text-base px-8 py-4 w-full sm:w-auto">
          AGENDAR VISITA GRATUITA <iconify-icon icon="solar:arrow-right-linear" class="ml-2 text-xl"></iconify-icon>
        </Button>
      </div>
    </section>
  );
}