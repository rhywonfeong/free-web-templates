import React from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const stats = [
    { label: "Horário", value: "05H–23H" },
    { label: "Dias", value: "7 DIAS" },
    { label: "Área", value: "1.800M²" },
    { label: "Comunidade", value: "+1.200 ALUNOS" },
    { label: "História", value: "DESDE 2018" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
          alt="Forgee Gym Space" 
          className="w-full h-full object-cover object-center opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#111111]/80 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,64,10,0.15)_0%,rgba(0,0,0,0)_60%)] -translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col gap-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-[72px] md:text-[100px] lg:text-[120px] leading-[0.85] tracking-tighter text-white mb-6">
            SEM <span className="text-[#E8400A]">MÁGICA</span><br/>
            SEM <span className="text-[#E8400A]">ATALHOS</span><br/>
            SEM DESCULPAS
          </h1>
          
          <div className="border-l-2 border-[#E8400A] pl-6 py-1 mb-8 max-w-2xl">
            <p className="text-xl md:text-2xl font-medium text-white mb-2">
              Treinos progressivos e acompanhamento real!
            </p>
            <p className="text-[#B0B0B0] text-[15px] leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">Começar Agora</Button>
            <Button variant="secondary" size="lg">Conhecer o Espaço</Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto max-w-7xl mt-24 relative z-10 border-t border-[#2A2A2A] pt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6B6B6B] uppercase tracking-[0.14em] font-medium">{stat.label}</span>
              <span className="text-white font-display tracking-wide text-lg">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}