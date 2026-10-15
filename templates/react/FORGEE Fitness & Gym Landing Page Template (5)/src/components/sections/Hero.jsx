import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background massive blurred text (Reference Image signature) */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center text-[18vw] font-black text-white/5 blur-[12px] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0 leading-none">
        WORKOUT
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 h-full items-center">
        
        {/* Left Column: Text & CTA */}
        {/* Added pb-40 on mobile so the bottom bar doesn't overlap the button */}
        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1 pt-12 pb-40 lg:pb-0 lg:pt-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-[#FF4500]">
              {[1,2,3,4,5].map(i => (
                <iconify-icon key={i} icon="solar:star-bold" width="16"></iconify-icon>
              ))}
            </div>
            <span className="text-xs text-neutral-400 font-medium tracking-wide">4.9 · BASEADO EM +1.200 ALUNOS</span>
          </div>

          {/* Using clamp() for responsive text that won't break or cut off */}
          <h1 className="flex flex-col gap-2 font-black leading-[1.1] tracking-tighter text-[clamp(2.5rem,7vw,5.5rem)] whitespace-nowrap">
            <span>SEM <i className="text-neutral-500 font-light">MÁGICA</i></span>
            <span>SEM <i className="text-neutral-500 font-light">ATALHOS</i></span>
            <span className="text-[#E02020]">SEM DESCULPAS</span>
          </h1>

          <p className="text-xl text-neutral-300 max-w-md font-light leading-relaxed border-l border-[#E02020] pl-6">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4 relative z-20">
            <Button variant="pillHero">COMEÇAR AGORA</Button>
            <a href="#espaco" className="text-sm font-bold tracking-widest text-white hover:text-[#E02020] transition-colors flex items-center gap-2">
              CONHECER O ESPAÇO
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Center/Right Column: Image & Floating Element */}
        <div className="lg:col-span-7 relative order-1 lg:order-2 h-[60vh] lg:h-[80vh] flex justify-end items-center">
          
          {/* Main Cinematic Image (Muscular back, rim lit) */}
          <div className="relative w-full max-w-lg lg:max-w-xl h-full ml-auto rim-light-bottom">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#111] via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop" 
              alt="Atleta treinando costas" 
              className="w-full h-full object-cover object-center grayscale-[30%] contrast-125 rounded-sm"
            />
          </div>

          {/* Floating Media Card (Reference image feature) */}
          <div className="absolute right-0 lg:-right-8 top-1/3 translate-y-[-50%] bg-[#1A1A1A] p-3 shadow-2xl border border-[#2E2E2E] hidden md:flex flex-col gap-3 z-20 max-w-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" 
              alt="Gym detail" 
              className="w-full h-24 object-cover grayscale brightness-75"
            />
            <p className="text-[10px] text-neutral-400 leading-tight uppercase tracking-wide">
              Equipamentos calibrados para elevar. A estrutura não interfere, ela desaparece.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <button className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <iconify-icon icon="solar:arrow-left-linear" width="12"></iconify-icon>
              </button>
              <button className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111111]/90 backdrop-blur-md border-t border-[#2E2E2E] z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex overflow-x-auto no-scrollbar gap-8 lg:gap-16 justify-between text-xs tracking-widest font-bold whitespace-nowrap">
          <div className="flex flex-col"><span className="text-neutral-500 mb-1">HORÁRIO</span><span className="text-white">05H–23H</span></div>
          <div className="flex flex-col"><span className="text-neutral-500 mb-1">DIAS</span><span className="text-white">7 DIAS</span></div>
          <div className="flex flex-col"><span className="text-neutral-500 mb-1">ESPAÇO</span><span className="text-white">1.800M²</span></div>
          <div className="flex flex-col"><span className="text-neutral-500 mb-1">ALUNOS</span><span className="text-white">+1.200 ALUNOS</span></div>
          <div className="flex flex-col"><span className="text-neutral-500 mb-1">DESDE</span><span className="text-white text-[#E02020]">2018</span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;