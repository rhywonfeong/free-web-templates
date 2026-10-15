import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

const Team = () => {
  const coaches = [
    {
      initials: "RF",
      name: "RODRIGO FARIAS",
      role: "Head Coach",
      cref: "CREF 045821-G/SP",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop"
    },
    {
      initials: "AL",
      name: "ANA LUÍSA",
      role: "Conditioning",
      cref: "CREF 078342-G/SP",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" // Used a dramatic one
    },
    {
      initials: "BT",
      name: "BRUNO T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1567598508481-65985588ce6b?q=80&w=800&auto=format&fit=crop"
    },
    {
      initials: "CD",
      name: "CAMILA D.",
      role: "Personal Trainer",
      cref: "CREF 063417-G/SP",
      img: "https://images.unsplash.com/photo-1609899517236-7783bc06d943?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="equipe" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <SectionHeading 
          eyebrow="Quem te acompanha"
          title="COACHES QUE TREINAM."
          highlightWords={['TREINAM.']}
          description="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {coaches.map((coach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1E1E1E] mb-4">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale-[80%] contrast-125 group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 font-display font-black text-4xl text-[#3A3A3A] opacity-50 group-hover:text-[#E8400A] transition-colors duration-300">
                  {coach.initials}
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-xl uppercase tracking-wider text-white mb-1 group-hover:text-[#E8400A] transition-colors">
                  {coach.name}
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="text-[#B0B0B0] text-sm">{coach.role}</span>
                  <span className="text-[#6B6B6B] text-[10px] tracking-widest uppercase">{coach.cref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;