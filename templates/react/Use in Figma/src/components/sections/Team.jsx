import SectionTitle from '../ui/SectionTitle';

const Team = () => {
  const coaches = [
    {
      id: "RF",
      name: "RODRIGO FARIAS",
      role: "Head Coach",
      cref: "CREF 045821-G/SP",
      img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=500&q=80"
    },
    {
      id: "AL",
      name: "ANA LUÍSA",
      role: "Conditioning",
      cref: "CREF 078342-G/SP",
      img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&q=80"
    },
    {
      id: "BT",
      name: "BRUNO T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80"
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
    <section id="equipe" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <SectionTitle 
          eyebrow="Quem te acompanha"
          title="NÓS TAMBÉM"
          titleAccent="TREINAMOS."
          description="Todos graduados em Educação Física. Todos registrados no CREF SP. Ninguém aqui fica apenas segurando prancheta."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-16">
          {coaches.map((coach) => (
            <div key={coach.id} className="group relative overflow-hidden bg-surface border border-subtle">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#E8400A] text-[10px] font-bold uppercase tracking-widest block mb-1">
                    {coach.id}
                  </span>
                  <h4 className="text-white font-display uppercase tracking-tight text-xl md:text-2xl mb-1">
                    {coach.name}
                  </h4>
                  <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="text-[#B0B0B0] text-xs font-medium uppercase tracking-wider">{coach.role}</span>
                    <span className="text-[#6B6B6B] text-[10px] uppercase tracking-widest">{coach.cref}</span>
                  </div>
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