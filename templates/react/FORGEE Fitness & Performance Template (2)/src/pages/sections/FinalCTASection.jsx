import React from 'react';
import { Display } from '../../components/Typography';

export default function FinalCTASection() {
  return (
    <section id="agendar" className="relative py-32 md:py-48 bg-[#1E2B1F] text-[#F5F3EF] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background large text graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
        <span className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">ACTION</span>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-8 h-[1px] bg-[#F5F3EF] mb-8"></div>
        <span className="text-xs font-medium tracking-widest mb-12">09 / 09</span>
        
        <Display className="mb-8 text-5xl md:text-7xl lg:text-8xl">
          A DECISÃO<br/>
          JÁ FOI TOMADA<br/>
          AGORA É A AÇÃO
        </Display>
        
        <p className="text-[#A09688] text-[10px] md:text-xs uppercase tracking-[0.4em] mb-16 leading-loose">
          A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S .
        </p>
        
        <button className="bg-[#F5F3EF] text-[#1A1812] px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#C4A882] transition-colors shadow-2xl flex items-center gap-4">
          Agendar Visita Gratuita <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
        </button>
      </div>
    </section>
  );
}