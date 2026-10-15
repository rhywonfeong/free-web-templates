import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const CoachesSection = () => {
  const coaches = [
    {
      initials: "RF",
      name: "RODRIGO FARIAS",
      role: "Head Coach",
      cref: "CREF 045821-G/SP",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80"
    },
    {
      initials: "AL",
      name: "ANA LUÍSA",
      role: "Conditioning",
      cref: "CREF 078342-G/SP",
      img: "https://images.unsplash.com/photo-1609899517236-7783bc06d543?w=600&q=80"
    },
    {
      initials: "BT",
      name: "BRUNO T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
    },
    {
      initials: "CD",
      name: "CAMILA D.",
      role: "Personal Trainer",
      cref: "CREF 063417-G/SP",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-void border-y border-subtle">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader 
            eyebrow="Quem te acompanha"
            title="COACHES QUE\nTREINAM."
            subtitle="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
          />
          <Button variant="secondary" className="hidden md:inline-flex">CONHECER A EQUIPE COMPLETA</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-surface border border-subtle aspect-[3/4]">
              <img 
                src={coach.img} 
                alt={coach.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col">
                <span className="text-[#BFFF00] font-serif italic text-2xl mb-2 opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {coach.initials}
                </span>
                <h3 className="text-lg font-semibold tracking-wide uppercase text-white mb-1">{coach.name}</h3>
                <p className="text-white/80 text-sm">{coach.role}</p>
                <p className="text-[#888780] text-xs mt-2">{coach.cref}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Button variant="secondary" className="w-full">CONHECER A EQUIPE COMPLETA</Button>
        </div>

      </div>
    </section>
  );
};

export default CoachesSection;