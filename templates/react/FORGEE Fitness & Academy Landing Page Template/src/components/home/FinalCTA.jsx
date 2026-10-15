import React from 'react';

const FinalCTA = () => {
  return (
    <section id="contato" className="py-32 bg-[#FF1E00] relative overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)' }}></div>
      <div className="absolute -top-40 -left-40 font-display text-[300px] font-black text-black/20 leading-none select-none pointer-events-none">
        ACT
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
        
        <h2 className="font-display text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 drop-shadow-xl">
          A DECISÃO<br />JÁ FOI TOMADA.<br />
          <span className="text-black">AGORA É A AÇÃO.</span>
        </h2>

        <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-white/80 mb-12 w-full break-words">
          A G E N D E &nbsp; U M A &nbsp; V I S I T A · G R A T U I T A · S E M &nbsp; C O M P R O M I S S O · T R A G A &nbsp; T Ê N I S .
        </p>

        <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-black text-white font-bold tracking-widest uppercase text-base hover:bg-white hover:text-[#FF1E00] transition-all duration-300 rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          Agendar Visita Gratuita
          <iconify-icon icon="solar:arrow-right-line-duotone" class="ml-3 text-xl group-hover:translate-x-2 transition-transform"></iconify-icon>
        </button>

      </div>
    </section>
  );
};

export default FinalCTA;