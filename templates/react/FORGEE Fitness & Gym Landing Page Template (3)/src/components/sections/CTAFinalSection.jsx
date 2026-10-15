import React from 'react';
import Button from '../ui/Button';

export default function CTAFinalSection() {
  // Infinite marquee text
  const tickerText = "A G E N D E  U M A  V I S I T A · G R A T U I T A · S E M  C O M P R O M I S S O · T R A G A  T Ê N I S · ";
  const fullTicker = Array(10).fill(tickerText).join('');

  return (
    <section className="relative bg-[#111111] overflow-hidden flex flex-col items-center justify-center min-h-[60vh] border-t border-[#E8400A]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[#E8400A] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Ticker Tape Top */}
      <div className="absolute top-0 w-full overflow-hidden bg-[#E8400A] py-2 whitespace-nowrap">
        <p className="text-[#111111] font-display text-[14px] tracking-[0.3em] inline-block animate-[marquee_20s_linear_infinite]">
          {fullTicker}
        </p>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-8">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.9] mb-12">
          A DECISÃO<br/>
          JÁ FOI TOMADA.<br/>
          <span className="text-[#E8400A]">AGORA É A AÇÃO.</span>
        </h2>
        
        <Button size="lg" className="shadow-[0_0_40px_rgba(232,64,10,0.4)] hover:shadow-[0_0_60px_rgba(232,64,10,0.6)]">
          Agendar Visita Gratuita
        </Button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}