import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 flex items-center bg-[#0F0D0B] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0F0D0B]/50 to-[#0F0D0B] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
          alt="Atleta em treinamento intenso" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Brand Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(ellipse,rgba(232,78,15,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-12 relative z-20">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-accent text-[#E84E0F] text-[11px] tracking-[2px] uppercase">
              ◈ SEC_01 · HERO
            </span>
            <span className="font-accent text-[#8A837C] text-[11px] tracking-[2px] uppercase">
              YOUR NEXT LEVEL IS COMING
            </span>
          </div>
          
          <h1 className="font-display font-black text-white text-[72px] sm:text-[96px] md:text-[112px] leading-[0.88] tracking-[-3px] uppercase mb-8 drop-shadow-2xl">
            FORJE A SUA <br/>
            <span className="brand-gradient-text">MELHOR VERSÃO</span>
          </h1>
          
          <p className="text-[#E6E3E0] text-[20px] md:text-[24px] font-serif italic mb-6 opacity-90">
            Você não foi feito para ficar parado. Você foi feito para ultrapassar limites — e ascender.
          </p>
          
          <p className="text-[#B0AAA4] text-[17px] leading-[1.65] max-w-lg mb-10">
            A Forgee não é uma academia. É um sistema de transformação de alto padrão, construído para atletas que levam performance a sério.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <Button variant="brand" iconRight icon={<iconify-icon icon="solar:arrow-right-bold" width="20" />}>
              Agendar Visita Gratuita
            </Button>
            <Button variant="secondaryLight">
              Falar com um Especialista
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:star-fall-bold" class="text-[#E84E0F]" width="18" />
              <span className="text-[#E6E3E0] text-[13px] font-semibold tracking-[0.5px] uppercase">+1.200 Alunos Ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:chart-square-bold" class="text-[#E84E0F]" width="18" />
              <span className="text-[#E6E3E0] text-[13px] font-semibold tracking-[0.5px] uppercase">96% de Frequência</span>
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:shield-check-bold" class="text-[#E84E0F]" width="18" />
              <span className="text-[#E6E3E0] text-[13px] font-semibold tracking-[0.5px] uppercase">14 Anos de Excelência</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-12 hidden md:block">
        <p className="font-accent text-[#8A837C]/50 text-[11px] tracking-[2px] uppercase">
          THE EVOLUTION WILL START SOON. Forgee — BEYOND LIMITS KNOWN™
        </p>
      </div>
    </section>
  );
};

export default Hero;