import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-12 md:pt-20 bg-texture">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3D5C1A] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-8 flex-grow flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Column: Copy */}
        <div className="w-full md:w-[60%] pt-10 md:pt-0 pb-20 md:pb-0 relative z-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#AAFF00]"></span>
            <span className="font-display text-[#AAFF00] uppercase tracking-[0.2em] text-sm font-bold">
              Performance. Resultado. Identidade.
            </span>
          </div>
          
          <h1 className="font-display font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.9] uppercase tracking-[-0.03em] mb-8 flex flex-col">
            <span className="text-white">Seu corpo</span>
            <span className="text-outline">é o projeto mais</span>
            <span className="text-white">importante.</span>
          </h1>
          
          <p className="text-[#CCCCCC] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Treinamento de alto nível, metodologia exclusiva e estrutura que você nunca viu antes — tudo em um único lugar, projetado para quem leva a sério.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg" href="#agendar" icon="solar:arrow-right-linear">
              Agendar Visita Gratuita
            </Button>
            <Button variant="secondary" size="lg" href="#contato">
              Falar com Especialista
            </Button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="flex gap-6 md:gap-10 pt-8 border-t border-[#252525]">
            <div>
              <p className="font-display font-black text-3xl text-white">+1.4k</p>
              <p className="text-[#666666] text-xs uppercase tracking-widest mt-1">Alunos Ativos</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-white">94%</p>
              <p className="text-[#666666] text-xs uppercase tracking-widest mt-1">Frequência</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-white">12y</p>
              <p className="text-[#666666] text-xs uppercase tracking-widest mt-1">Transformando</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-[40%] absolute bottom-0 right-0 md:relative h-[600px] md:h-[800px] opacity-30 md:opacity-100 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
            alt="Atleta em treinamento" 
            className="w-full h-full object-cover object-center [mask-image:linear-gradient(to_top,transparent_5%,black_40%)] md:[mask-image:linear-gradient(to_left,black_70%,transparent_100%)]"
          />
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-[#AAFF00]/30 rounded-full scale-[1.2] opacity-50"></div>
          <div className="absolute top-1/4 right-10 w-24 h-24 border-t-2 border-r-2 border-[#AAFF00] opacity-50"></div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="w-full bg-[#AAFF00] py-6 relative z-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between md:justify-around items-center opacity-80 mix-blend-color-burn">
          <iconify-icon icon="simple-icons:nike" class="text-4xl text-[#0D0F0A]"></iconify-icon>
          <iconify-icon icon="simple-icons:gymshark" class="text-4xl text-[#0D0F0A]"></iconify-icon>
          <iconify-icon icon="simple-icons:rogue" class="text-4xl text-[#0D0F0A]"></iconify-icon>
          <iconify-icon icon="simple-icons:underarmour" class="text-4xl text-[#0D0F0A]"></iconify-icon>
          <iconify-icon icon="simple-icons:crossfit" class="text-4xl text-[#0D0F0A] hidden md:block"></iconify-icon>
        </div>
      </div>
    </section>
  );
};

export default Hero;