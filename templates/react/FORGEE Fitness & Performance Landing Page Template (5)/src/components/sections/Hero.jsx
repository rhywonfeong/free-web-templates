import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-8 px-6 md:px-10 overflow-hidden bg-[#111111]" id="espaco">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto flex flex-col gap-6 mb-16">
        <div className="text-[#888888] font-bold tracking-[0.1em] text-xs uppercase flex items-center gap-2">
          BEYOND LIMITS KNOWN™ <span className="w-1 h-1 bg-[#F46A17] rounded-full"></span> INDAIATUBA, SP <span className="w-1 h-1 bg-[#F46A17] rounded-full"></span> EST. 2018
        </div>
        
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[110px] tracking-tighter leading-[0.9] uppercase flex flex-col">
          <span className="text-[#F46A17]">SEM MÁGICA</span>
          <span className="text-white">SEM ATALHOS</span>
        </h1>

        <h2 className="text-white font-bold tracking-widest text-sm md:text-base uppercase max-w-xl mt-4">
          TREINOS PROGRESSIVOS E ACOMPANHAMENTO REAL!
        </h2>

        <p className="text-[#CCCCCC] text-base md:text-lg max-w-xl font-medium leading-relaxed">
          Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button variant="primary" className="w-full sm:w-auto">COMEÇAR AGORA <iconify-icon icon="solar:arrow-right-linear" class="ml-2"></iconify-icon></Button>
          <Button variant="secondary" className="w-full sm:w-auto">CONHECER O ESPAÇO</Button>
        </div>
      </div>

      {/* Proof Bar */}
      <div className="relative z-10 w-full border-t border-[#2C2C2C] mt-auto pt-6 pb-2">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4 text-xs md:text-sm font-bold text-[#888888] tracking-widest uppercase">
          <span>05H–23H</span>
          <span className="hidden md:block w-1 h-1 bg-[#3A3A3A] rounded-full"></span>
          <span>7 DIAS</span>
          <span className="hidden md:block w-1 h-1 bg-[#3A3A3A] rounded-full"></span>
          <span>1.800M²</span>
          <span className="hidden md:block w-1 h-1 bg-[#3A3A3A] rounded-full"></span>
          <span>+1.200 ALUNOS</span>
          <span className="hidden md:block w-1 h-1 bg-[#3A3A3A] rounded-full"></span>
          <span>DESDE 2018</span>
        </div>
      </div>
    </section>
  );
}