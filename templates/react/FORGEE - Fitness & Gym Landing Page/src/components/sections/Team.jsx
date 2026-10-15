import SectionHeading from '../ui/SectionHeading';

export default function Team() {
  const coaches = [
    { initials: "RF", name: "Rodrigo Farias", role: "Head Coach", reg: "CREF 045821-G/SP" },
    { initials: "AL", name: "Ana Luísa", role: "Conditioning", reg: "CREF 078342-G/SP" },
    { initials: "BT", name: "Bruno T.", role: "Mobility & Rehab", reg: "CREF 091205-G/SP" },
    { initials: "CD", name: "Camila D.", role: "Personal Trainer", reg: "CREF 063417-G/SP" }
  ];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={["COACHES QUE", "TREINAM."]}
          subtitle="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-zinc-950 border border-zinc-900 p-8 hover:border-zinc-700 transition-colors">
              <div className="w-16 h-16 bg-zinc-900 text-red-600 flex items-center justify-center text-2xl font-black mb-8 tracking-tighter group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {coach.initials}
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-1">{coach.name}</h4>
              <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-6">{coach.role}</p>
              <div className="text-[10px] font-mono text-zinc-600 bg-zinc-900 inline-block px-2 py-1">
                {coach.reg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}