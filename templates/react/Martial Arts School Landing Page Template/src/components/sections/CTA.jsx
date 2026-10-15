import React from 'react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0B0D14] flex items-center justify-center text-center border-y border-[#2B3045]">
      {/* Heavy Red Accent background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8193C] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <span className="text-[#E8193C] uppercase tracking-[0.2em] font-bold text-sm mb-6 block">Sua jornada começa aqui</span>
        
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
          A mudança que você procura começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6B7280]">em nossas escolas.</span>
        </h2>
        
        <p className="text-[#94A3B8] text-lg mb-12 max-w-lg mx-auto">
          Desde 1995 transformando pessoas através das artes marciais coreanas. O próximo passo é seu — e a primeira aula é por nossa conta.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" className="w-full sm:w-auto text-lg" onClick={() => document.getElementById('aula-experimental').scrollIntoView({ behavior: 'smooth' })}>
            Agendar Aula Gratuita
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Falar com especialista
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs font-bold text-[#6B7280] uppercase tracking-widest">
          <div className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-bold" className="text-[#E8193C] text-lg"></iconify-icon> Sem compromisso</div>
          <div className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-bold" className="text-[#E8193C] text-lg"></iconify-icon> Retorno Rápido</div>
        </div>
      </div>
    </section>
  );
}