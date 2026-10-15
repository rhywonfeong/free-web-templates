import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Team = () => {
  const coaches = [
    {
      name: "RAFAEL DUARTE",
      title: "Head Coach — Força e Potência",
      spec: "Levantamento olímpico, powerlifting e periodização avançada",
      exp: "12 anos",
      img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&q=80",
      quote: "Força não é o destino. É o veículo."
    },
    {
      name: "CAMILA TORRES",
      title: "Coach de Performance — Condicionamento",
      spec: "Protocolos de resistência, HIIT avançado e preparação física",
      exp: "9 anos",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
      quote: "O corpo sabe exatamente quanto pode. Meu trabalho é fazer você descobrir isso."
    },
    {
      name: "MARCUS VIEIRA",
      title: "Coach de Hipertrofia",
      spec: "Periodização para hipertrofia, dieta de atleta e recomposição",
      exp: "11 anos",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
      quote: "Hipertrofia não é estética. É adaptação estrutural ao estímulo correto."
    },
    {
      name: "JULIANA MESQUITA",
      title: "Coach de Mobilidade e Movimento",
      spec: "Mobilidade funcional, correção postural e treino para longevidade",
      exp: "8 anos",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      quote: "Movimento de qualidade é o fundamento que sustenta qualquer protocolo."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0F0D0B]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <SectionHeader 
          theme="dark"
          eyebrow="TIME Forgee"
          title="TREINADOS PARA TREINAR OS MELHORES."
          subtitle="Nosso time não foi montado por acaso. Cada coach passou por curadoria rigorosa — técnica, comportamental e metodológica. Eles não apenas prescrevem treinos. Eles constroem atletas."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden mb-6">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-[#1E1B18]/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <iconify-icon icon="solar:clock-circle-bold" class="text-[#E84E0F] text-[12px]" />
                  <span className="font-accent text-white text-[10px] tracking-[1px] uppercase">{coach.exp} exp</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-[24px] uppercase tracking-tight text-white mb-1 group-hover:text-[#E84E0F] transition-colors">
                {coach.name}
              </h3>
              <p className="font-accent text-[#8A837C] text-[11px] tracking-[1px] uppercase mb-4">
                {coach.title}
              </p>
              
              <p className="text-[#B0AAA4] text-[13px] leading-[1.5] mb-4">
                <span className="font-semibold text-[#E6E3E0]">Especialidade:</span> {coach.spec}
              </p>

              <div className="pt-4 border-t border-[#1E1B18]">
                <p className="font-serif italic text-[#8A837C] text-[13px] leading-[1.6]">
                  "{coach.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;