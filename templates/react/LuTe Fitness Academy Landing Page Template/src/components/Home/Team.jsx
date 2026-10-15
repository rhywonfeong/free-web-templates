import React from 'react';

const team = [
  {
    initials: 'RF',
    name: 'RODRIGO FARIAS',
    role: 'Head Coach',
    cref: 'CREF 045821-G/SP',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80'
  },
  {
    initials: 'AL',
    name: 'ANA LUÍSA',
    role: 'Conditioning',
    cref: 'CREF 078342-G/SP',
    img: 'https://images.unsplash.com/photo-1609899517236-7783bc06d956?w=500&q=80'
  },
  {
    initials: 'BT',
    name: 'BRUNO T.',
    role: 'Mobility & Rehab',
    cref: 'CREF 091205-G/SP',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80'
  },
  {
    initials: 'CD',
    name: 'CAMILA D.',
    role: 'Personal Trainer',
    cref: 'CREF 063417-G/SP',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80'
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-[#121212] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 uppercase">
          Coaches que <span className="text-[#00F9E4]">treinam.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg bg-[#0A0A0A]">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#00F9E4] font-mono text-sm">{member.initials}</span>
                  <h3 className="text-white font-semibold tracking-wide">{member.name}</h3>
                </div>
                <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-[#CFCFCF] text-sm">{member.role}</span>
                  <span className="text-[#6B6B6B] text-xs font-mono">{member.cref}</span>
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