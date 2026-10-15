import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
          alt="Gym Environment" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40"></div>
        {/* Subtle Cyan Glow */}
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#00F9E4]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2A2A] bg-[#121212]/80 backdrop-blur-sm text-xs font-medium text-[#9A9A9A] mb-8 w-fit tracking-wide">
          <iconify-icon icon="solar:map-point-linear" class="text-[#00F9E4]"></iconify-icon>
          Beyond Limits Known · Indaiatuba, SP · Est. 2018
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] text-white mb-8">
          SEM MÁGICA.<br />
          SEM ATALHOS.<br />
          <span className="text-gradient-cyan">SEM DESCULPAS.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#9A9A9A] max-w-2xl mb-10 leading-relaxed font-medium">
          Treinos progressivos e acompanhamento real. Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button onClick={() => navigate('/agendar')} size="lg">COMEÇAR AGORA</Button>
          <Button variant="secondary" size="lg" onClick={() => {
            document.getElementById('estrutura').scrollIntoView({ behavior: 'smooth' });
          }}>CONHECER O ESPAÇO</Button>
        </div>
      </div>

      {/* KPI Footer inside Hero */}
      <div className="border-y border-[#1C1C1C] bg-[#0A0A0A]/90 backdrop-blur relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-x divide-[#1C1C1C]">
          <div className="flex flex-col px-4">
            <span className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-1">Horário</span>
            <span className="text-[#F5F5F5] font-semibold">05H — 23H</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-1">Dias</span>
            <span className="text-[#F5F5F5] font-semibold">7 DIAS</span>
          </div>
          <div className="flex flex-col px-4 hidden md:flex">
            <span className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-1">Área</span>
            <span className="text-[#F5F5F5] font-semibold">1.800M²</span>
          </div>
          <div className="flex flex-col px-4 hidden md:flex">
            <span className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-1">Alunos</span>
            <span className="text-[#00F9E4] font-semibold">+1.200 ALUNOS</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase mb-1">Fundação</span>
            <span className="text-[#F5F5F5] font-semibold">DESDE 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;