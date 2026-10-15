import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-5 md:px-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ember/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 relative">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-300 mb-2">
            <span className="w-8 h-[1px] bg-acid"></span>
            Alto padrão · Treinamento de elite
          </div>
          
          <h1 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-display font-black uppercase tracking-tightest leading-[0.9] text-offwhite drop-shadow-xl">
            Forge Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-electric-lime">Strength.</span><br/>
            Define Your <br/>
            Legacy.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-300 max-w-lg mt-4 font-normal">
            Uma academia construída para quem leva o treinamento a sério. Equipamentos de competição, protocolos personalizados e coaches de elite — tudo sob um mesmo teto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
              Agendar Visita Gratuita
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Right Imagery (Mimicking the editorial broken grid feel) */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-md aspect-[3/4] shadow-ambient">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
              alt="Atleta treinando intensamente" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-neutral-900 border border-neutral-800 p-6 shadow-xl backdrop-blur-sm bg-neutral-900/90 max-w-[240px]">
              <div className="text-acid font-display font-black text-4xl leading-none mb-1">12+</div>
              <div className="text-xs uppercase tracking-widest text-neutral-300 font-medium">Anos formando <br/>atletas de elite</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;