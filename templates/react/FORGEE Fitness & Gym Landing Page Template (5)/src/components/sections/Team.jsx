import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const Team = () => {
  const coaches = [
    { 
      initials: "RF", 
      name: "RODRIGO FARIAS", 
      role: "Head Coach", 
      cref: "CREF 045821-G/SP",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
    },
    { 
      initials: "AL", 
      name: "ANA LUÍSA", 
      role: "Conditioning", 
      cref: "CREF 078342-G/SP",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop"
    },
    { 
      initials: "BT", 
      name: "BRUNO T.", 
      role: "Mobility & Rehab", 
      cref: "CREF 091205-G/SP",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"
    },
    { 
      initials: "CD", 
      name: "CAMILA D.", 
      role: "Personal Trainer", 
      cref: "CREF 063417-G/SP",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="equipe" className="py-32 px-6 lg:px-12 bg-[#111111] border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading 
          label="QUEM TE ACOMPANHA"
          title={"COACHES QUE\nTREINAM."}
          description="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#1A1A1A] border border-[#2E2E2E] flex flex-col items-center justify-center relative overflow-hidden mb-4 group-hover:border-[#E02020] transition-colors">
                
                {/* Coach Unsplash Image */}
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 z-0" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity z-10"></div>
                
                <div className="absolute bottom-6 w-full text-center z-20">
                  <iconify-icon icon="solar:user-bold" className="text-[#E02020] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0" width="24"></iconify-icon>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">{coach.name}</h4>
              <p className="text-sm text-[#E02020] font-medium tracking-wide mt-1">{coach.role}</p>
              <p className="text-[10px] text-neutral-500 tracking-widest uppercase mt-2">{coach.cref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;