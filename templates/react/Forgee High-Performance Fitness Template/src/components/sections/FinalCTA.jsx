import React from 'react';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center brand-gradient text-center px-5 py-24 overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-accent text-white/80 text-[12px] tracking-[4px] uppercase font-semibold mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          A ESCOLHA É SUA
        </span>
        
        <h2 className="font-display font-black uppercase text-white tracking-[-2px] leading-[0.88] text-[64px] sm:text-[80px] md:text-[112px] mb-8 drop-shadow-xl">
          A IMOBILIDADE NÃO É DESCANSO. <br/>É RETROCESSO.
        </h2>
        
        <p className="text-white/90 text-[18px] md:text-[22px] leading-[1.6] max-w-2xl mb-12 font-medium">
          Cada dia sem protocolo é um dia que seu potencial fica parado enquanto o tempo não para. A Forgee está pronta. A questão é: você está?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto bg-white text-[#E84E0F] hover:bg-[#F8F7F6] shadow-xl"
            iconRight 
            icon={<iconify-icon icon="solar:arrow-right-linear" width="20" />}
          >
            Agendar Visita Gratuita
          </Button>
          <Button 
            variant="secondaryLight" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Falar com um Especialista
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-serif italic text-white/60 text-[16px]">
            "In silence, the transformation begins." — Forgee · Since 2010
          </p>
          <p className="font-accent text-white/40 text-[10px] tracking-[2px] uppercase max-w-md">
            Visita gratuita. Sem compromisso. Sem pressão. Você decide no seu tempo — com todas as informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;