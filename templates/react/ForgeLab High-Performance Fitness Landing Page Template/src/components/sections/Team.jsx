import SectionHeading from '../ui/SectionHeading';

const Team = () => {
  const team = [
    {
      name: "Felipe Andrade",
      role: "Head de Performance",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
      specialties: ["Força máxima", "Powerlifting", "Periodização"]
    },
    {
      name: "Larissa Fontes",
      role: "Especialista em Recomposição",
      image: "https://images.unsplash.com/photo-1609899517235-cba0631317fb?w=400&q=80",
      specialties: ["Recomposição", "Saúde feminina", "Nutrição"]
    },
    {
      name: "Rafael Bittencourt",
      role: "Performance & Mobility",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
      specialties: ["Mobilidade", "Reabilitação", "Biomecânica"]
    },
    {
      name: "Camila Nascimento",
      role: "HIIT & Metabolic Training",
      image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&q=80",
      specialties: ["HIIT", "Resistência", "Performance"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <SectionHeading 
            supertitle="Nosso Time"
            title="Coaches que fazem a diferença."
          />
          <p className="text-neutral-400 text-lg max-w-md font-medium leading-relaxed pb-2">
            Cada profissional da FORGELAB passa por um processo rigoroso de seleção. Aqui, coach não é função — é identidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-1">{coach.name}</h4>
                <p className="text-[#E84E1B] text-xs font-bold uppercase tracking-widest mb-4">{coach.role}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((spec, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 text-neutral-300 rounded backdrop-blur">
                      {spec}
                    </span>
                  ))}
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