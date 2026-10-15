import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Coaches = () => {
  const team = [
    {
      name: "Rafael Mendes",
      spec: "Força e Hipertrofia",
      exp: "9 anos de experiência",
      desc: "Especialista em treinamento de força progressiva. Responsável pelo Protocolo de Intensificação.",
      image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Camila Torres",
      spec: "Condicionamento",
      exp: "7 anos de experiência",
      desc: "Referência em recomposição corporal. Especialista em treino feminino de alta performance.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Lucas Andrade",
      spec: "Mobilidade e Funcional",
      exp: "6 anos de experiência",
      desc: "Referência em mobilidade articular aplicada ao desempenho e prevenção de lesões.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Beatriz Leal",
      spec: "Cardio e Resistência",
      exp: "5 anos de experiência",
      desc: "Especialista em periodização aeróbica e programas de condicionamento intervalado.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeader 
          tag="Nosso time" 
          title="Coaches que evoluem junto com você." 
          subtitle="Selecionados por competência técnica e capacidade de acompanhar perfis diferentes. Não temos estagiários nos horários de pico."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {team.map((coach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A] mb-6">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#AAFF00] transition-colors duration-300 pointer-events-none"></div>
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
              </div>
              
              <h3 className="font-display font-black text-2xl uppercase text-white mb-1 group-hover:text-[#AAFF00] transition-colors">
                {coach.name}
              </h3>
              <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-wide mb-3">
                {coach.spec}
              </p>
              <p className="text-[#666666] text-xs uppercase tracking-wider mb-2">
                {coach.exp}
              </p>
              <p className="text-[#CCCCCC] text-sm leading-relaxed">
                {coach.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;