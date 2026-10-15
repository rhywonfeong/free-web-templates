import React from 'react';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="py-40 px-6 bg-[#E02020] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative heat glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500] to-[#CC0000] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF8C42] rounded-full blur-[120px] opacity-30 pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-display text-white mb-8 tracking-tighter">
          A DECISÃO<br/>
          JÁ FOI TOMADA.<br/>
          AGORA É A AÇÃO.
        </h2>
        
        <div className="w-screen overflow-hidden border-y border-white/20 py-3 mb-12 bg-black/10 backdrop-blur-sm -rotate-1">
          <div className="whitespace-nowrap flex animate-[marquee_20s_linear_infinite] text-xs font-bold tracking-[0.3em] text-white">
            <span className="mx-4">AGENDE UMA VISITA</span>
            <span className="mx-4">·</span>
            <span className="mx-4">GRATUITA</span>
            <span className="mx-4">·</span>
            <span className="mx-4">SEM COMPROMISSO</span>
            <span className="mx-4">·</span>
            <span className="mx-4">TRAGA TÊNIS</span>
            <span className="mx-4">·</span>
            <span className="mx-4">AGENDE UMA VISITA</span>
            <span className="mx-4">·</span>
            <span className="mx-4">GRATUITA</span>
            <span className="mx-4">·</span>
            <span className="mx-4">SEM COMPROMISSO</span>
            <span className="mx-4">·</span>
            <span className="mx-4">TRAGA TÊNIS</span>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-[#0A0A0A] hover:bg-[#111111] border-none text-white shadow-2xl hover:scale-105"
          icon="solar:arrow-right-linear"
        >
          AGENDAR VISITA GRATUITA
        </Button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default FinalCTA;