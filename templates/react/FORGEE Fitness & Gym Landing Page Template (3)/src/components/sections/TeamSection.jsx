import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function TeamSection() {
  const team = [
    {
      id: "RF",
      name: "RODRIGO FARIAS",
      role: "Head Coach",
      cref: "CREF 045821-G/SP",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80"
    },
    {
      id: "AL",
      name: "ANA LUÍSA",
      role: "Conditioning",
      cref: "CREF 078342-G/SP",
      img: "https://images.unsplash.com/photo-1611564551101-e9411dc10f44?w=500&q=80"
    },
    {
      id: "BT",
      name: "BRUNO T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80"
    },
    {
      id: "CD",
      name: "CAMILA D.",
      role: "Personal Trainer",
      cref: "CREF 063417-G/SP",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&q=80"
    }
  ];

  return (
    <section id="equipe" className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          eyebrow="Quem te acompanha" 
          title={<><span className="text-[#E8400A]">COACHES</span> QUE<br/>TREINAM.</>}
          description="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {team.map((member) => (
            <div key={member.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#111111] border border-[#1E1E1E] relative">
                {/* ID Tag overlay */}
                <div className="absolute top-4 left-4 z-20 font-display text-4xl text-white/20 group-hover:text-[#E8400A]/40 transition-colors">
                  {member.id}
                </div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
              </div>
              <div>
                <h4 className="font-display text-xl text-white tracking-wide">{member.name}</h4>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[#E8400A] text-[13px] uppercase tracking-wider font-medium">{member.role}</span>
                  <span className="text-[#6B6B6B] text-[11px] font-mono">{member.cref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}