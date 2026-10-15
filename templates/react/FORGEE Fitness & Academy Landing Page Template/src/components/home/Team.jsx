import React from 'react';

const Team = () => {
  const coaches = [
    { init: "RF", name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP" },
    { init: "AL", name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP" },
    { init: "BT", name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP" },
    { init: "CD", name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP" }
  ];

  return (
    <section id="equipe" className="py-24 md:py-32 bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter uppercase mb-4">
              COACHES QUE<br /><span className="text-[#FF1E00]">TREINAM.</span>
            </h2>
            <p className="text-[#D9D9D9] text-base max-w-md">
              Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative bg-[#111] aspect-[3/4] flex flex-col justify-end p-8 overflow-hidden border border-[#222] hover:border-[#FF1E00] transition-colors duration-500 rounded-none">
              
              {/* Abstract Initials Background */}
              <div className="absolute -top-10 -right-10 font-display text-[160px] font-black text-[#222] leading-none select-none group-hover:text-[#FF1E00]/10 transition-colors duration-500">
                {coach.init}
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10"></div>

              {/* Content */}
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-[#FF1E00] text-white text-[10px] font-bold tracking-widest uppercase mb-4 rounded-none">
                  {coach.role}
                </span>
                <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wide mb-1">
                  {coach.name}
                </h3>
                <p className="text-xs text-[#636363] tracking-widest uppercase font-medium">
                  {coach.cref}
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