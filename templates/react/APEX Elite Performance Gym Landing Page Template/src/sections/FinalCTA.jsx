import React from 'react';
import Button from '../components/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#C8F135] overflow-hidden flex items-center justify-center">
      {/* Dynamic background pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter text-black leading-[0.9] mb-6">
          Seu corpo merece <br/> o melhor
        </h2>
        <p className="text-xl md:text-2xl font-bold text-black/70 mb-10 max-w-2xl mx-auto">
          Não existe amanhã no seu treino. O melhor momento para começar é agora.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            className="!bg-black !text-white hover:!shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full sm:w-auto text-lg py-5 px-10"
            icon="solar:arrow-right-line-duotone"
          >
            Agendar visita gratuita
          </Button>
          <Button 
            variant="secondary" 
            className="!border-black/20 !text-black hover:!border-black hover:!bg-black/5 w-full sm:w-auto text-lg py-5 px-10"
          >
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
}