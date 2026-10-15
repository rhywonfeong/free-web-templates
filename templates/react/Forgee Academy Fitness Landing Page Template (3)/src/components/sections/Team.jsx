import React from 'react';

const Team = () => {
  const team = [
    { name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=600&auto=format&fit=crop" },
    { name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop" },
    { name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP", img: "https://images.unsplash.com/photo-1611562300067-175513d7890b?q=80&w=600&auto=format&fit=crop" },
    { name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="equipe" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-[#FF6B2B] uppercase tracking-widest text-xs font-bold mb-4 block">Quem te acompanha</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none">
            Coaches Que <br/>Treinam.
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
          Todos graduados em Educação Física. Todos registrados no CREF SP. Todos vivendo o que ensinam.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#131313] aspect-[3/4]">
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover object-top grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[#FF6B2B] text-[10px] font-bold uppercase tracking-widest block mb-1">{member.role}</span>
              <h3 className="font-display text-2xl uppercase text-white tracking-wide mb-1">{member.name}</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{member.cref}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;