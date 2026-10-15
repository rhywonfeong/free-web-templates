import React from 'react';

const coaches = [
  { initials: "RF", name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP" },
  { initials: "AL", name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP" },
  { initials: "BT", name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP" },
  { initials: "CD", name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP" }
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-neutral-950">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase text-neutral-50 mb-4">
            Coaches que treinam.
          </h2>
          <p className="text-neutral-400 text-lg">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col items-center text-center hover:border-brand-purple transition-colors group">
              <div className="w-24 h-24 bg-neutral-950 border-2 border-brand-purple rounded-full flex items-center justify-center text-3xl font-display font-bold text-neutral-50 mb-6 group-hover:scale-110 transition-transform">
                {coach.initials}
              </div>
              <h3 className="text-xl font-semibold text-neutral-50 uppercase tracking-tight mb-1">{coach.name}</h3>
              <div className="text-brand-purple text-sm font-medium uppercase tracking-widest mb-3">{coach.role}</div>
              <div className="text-neutral-500 text-xs">{coach.cref}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}