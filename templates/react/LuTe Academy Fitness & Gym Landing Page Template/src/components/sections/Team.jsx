import SectionHeading from '../ui/SectionHeading'

export default function Team() {
  const team = [
    {
      name: "Rodrigo Farias",
      role: "Head Coach",
      cref: "CREF 045821-G/SP",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80"
    },
    {
      name: "Ana Luísa",
      role: "Conditioning",
      cref: "CREF 078342-G/SP",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
    },
    {
      name: "Bruno T.",
      role: "Mobility & Rehab",
      cref: "CREF 091205-G/SP",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
    },
    {
      name: "Camila D.",
      role: "Personal Trainer",
      cref: "CREF 063417-G/SP",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    }
  ]

  return (
    <section id="equipe" className="py-32 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="A Equipe"
          title="Coaches que treinam."
          subtitle="A teoria é fundamental, mas o respeito é conquistado na prática. Nossa equipe vive o que ensina."
          className="mb-20"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((coach, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#121212]">
              <div className="aspect-[3/4] relative">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[#00F9E4] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {coach.cref}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-1">{coach.name}</h3>
                <p className="text-[#9A9A9A] text-sm uppercase tracking-widest">{coach.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}