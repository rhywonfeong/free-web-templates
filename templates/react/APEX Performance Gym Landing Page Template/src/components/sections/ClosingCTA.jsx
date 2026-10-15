import React from 'react';
import { Button } from '../ui/Button';

const ClosingCTA = () => {
  return (
    <section className="bg-[#FF8000] py-32 text-[#2B2B2B] text-center relative overflow-hidden">
      {/* Subtle Background Pattern/Noise could go here */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-[#2B2B2B]">
          A sua melhor<br />versão não<br />espera.
        </h2>
        
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">
          E a APEX também não.
        </h3>
        
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
          A vaga que você está olhando agora pode não estar disponível amanhã.<br />
          Dê o primeiro passo. A gente cuida do resto.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <Button variant="black" className="shadow-2xl">Quero começar agora</Button>
          <Button variant="outlineBlack">Agendar visita gratuita</Button>
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
          Sem compromisso · Sem taxa de matrícula no primeiro mês · Visita gratuita e sem pressão
        </p>

      </div>
    </section>
  );
};

export default ClosingCTA;