import { Eyebrow, Headline } from '../ui/Typography';

export default function Team() {
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
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
    },
    {
      initials: "BT",
      name: "BRUNO T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&q=80"
    },
    {
      initials: "CD",
      name: "CAMILA D.",
      role: "Personal Trainer",
      cref: "CREF 063417-G/SP",
      img: "https://images.unsplash.com/photo-1611506107472-87000d051a37?w=600&q=80"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-end mb-16">
        <div className="lg:col-span-3">
          <Eyebrow>Quem te acompanha</Eyebrow>
          <Headline text="COACHES QUE TREINAM." highlight="TREINAM." size="lg" />
        </div>
        <div className="lg:col-span-1 pb-2">
          <p className="text-[#B0B0B0] text-sm leading-relaxed border-l border-[#3A3A3A] pl-4">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coaches.map((coach, i) => (
          <div key={i} className="group relative bg-[#181818] rounded-md overflow-hidden border border-[#2A2A2A]">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={coach.img} 
                alt={coach.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <span className="text-[#E8400A] font-display font-bold text-xl block mb-1">{coach.initials}</span>
              <h4 className="font-display font-bold uppercase tracking-tight text-white text-xl mb-1">{coach.name}</h4>
              <p className="text-sm text-[#D9D9D9] mb-1">{coach.role}</p>
              <p className="text-[10px] tracking-wide text-[#6B6B6B]">{coach.cref}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}