import React from 'react';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-[#AAFF00] overflow-hidden">
      {/* Abstract structural graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C8FF00] skew-x-[-20deg] translate-x-32 origin-bottom"></div>
      <div className="absolute top-1/2 left-10 w-full h-[1px] bg-[#0D0F0A]/20"></div>
      <div className="absolute top-20 left-1/4 w-[1px] h-full bg-[#0D0F0A]/20"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 text-center">
        <span className="font-display font-bold text-[#0D0F0A] uppercase tracking-[0.2em] text-sm mb-6 block">
          O momento é agora
        </span>
        
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-[#0D0F0A] uppercase tracking-tighter leading-[0.9] mb-8 max-w-4xl mx-auto">
          A única coisa entre você e o resultado é a <span className="text-transparent" style={{ WebkitTextStroke: '2px #0D0F0A' }}>decisão.</span>
        </h2>
        
        <p className="text-[#0D0F0A]/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12">
          A estrutura está aqui. O método está aqui. O time está aqui. O próximo passo é seu.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#agendar" className="inline-flex items-center justify-center gap-2 bg-[#0D0F0A] text-[#AAFF00] py-4 px-10 text-lg font-display uppercase tracking-widest font-bold hover:bg-[#1A1A1A] transition-colors rounded-full">
            Agendar Visita Gratuita
            <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
          </a>
          <a href="#contato" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0D0F0A] border-2 border-[#0D0F0A] py-4 px-10 text-lg font-display uppercase tracking-widest font-bold hover:bg-[#0D0F0A] hover:text-[#AAFF00] transition-colors rounded-full">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;