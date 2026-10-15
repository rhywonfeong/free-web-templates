import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 bg-void overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        {/* Subtle decorative neon line */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#BFFF00]/5 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col gap-12">
        
        {/* Main Content */}
        <div className="max-w-4xl flex flex-col items-start gap-8">
          <p className="text-[#888780] text-xs font-semibold uppercase tracking-[0.06em]">
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
          </p>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[96px] font-semibold leading-[1.0] tracking-tight uppercase">
            Sem mágica<br />
            Sem atalhos<br />
            Sem desculpas
          </h1>
          
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-xl font-medium text-white">
              Treinos progressivos e acompanhamento real.
            </p>
            <p className="text-[#888780] text-base md:text-lg leading-relaxed">
              Um espaço desenhado para quem treina com intenção.<br/>
              Sem distrações. Sem promessas vazias.<br/>
              Só você, o equipamento e o trabalho.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg">COMEÇAR AGORA</Button>
            <Button variant="secondary" size="lg">CONHECER O ESPAÇO</Button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="w-full bg-[#111111]/60 backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 mt-12 hidden md:block">
          <div className="grid grid-cols-5 divide-x divide-[rgba(255,255,255,0.1)] text-center">
            <div className="px-4 text-xs font-semibold uppercase tracking-[0.06em] text-[#888780]">
              <span className="block text-white mb-1">05H–23H</span> Horário
            </div>
            <div className="px-4 text-xs font-semibold uppercase tracking-[0.06em] text-[#888780]">
              <span className="block text-white mb-1">7 DIAS</span> Semana
            </div>
            <div className="px-4 text-xs font-semibold uppercase tracking-[0.06em] text-[#888780]">
              <span className="block text-white mb-1">1.800M²</span> Área
            </div>
            <div className="px-4 text-xs font-semibold uppercase tracking-[0.06em] text-[#888780]">
              <span className="block text-white mb-1">+1.200</span> Alunos
            </div>
            <div className="px-4 text-xs font-semibold uppercase tracking-[0.06em] text-[#888780]">
              <span className="block text-white mb-1">DESDE 2018</span> Fundação
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BFFF00]/50 to-transparent blur-sm" />
    </section>
  );
};

export default HeroSection;