import SectionLabel from '../ui/SectionLabel'

export default function Team() {
  const coaches = [
    { inits: 'RF', name: 'Rodrigo Farias', role: 'Head Coach', cref: 'CREF 045821-G/SP', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800' },
    { inits: 'AL', name: 'Ana Luísa', role: 'Conditioning', cref: 'CREF 078342-S/SP', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800' },
    { inits: 'BT', name: 'Bruno T.', role: 'Mobility & Rehab', cref: 'CREF 091285-G/SP', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=800' },
    { inits: 'CD', name: 'Camila D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' }
  ]

  return (
    <section id="equipe" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <SectionLabel>QUEM TE ACOMPANHA</SectionLabel>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter text-[#F5F5F5]">
              COACHES QUE<br/><span className="text-[#E8651A]">TREINAM.</span>
            </h2>
          </div>
          <p className="text-[#7A7A7A] text-sm uppercase tracking-wider max-w-sm">
            TODOS GRADUADOS EM EDUCAÇÃO FÍSICA. TODOS REGISTRADOS NO CREF-SP.<br/>
            <span className="text-[#E5E5E5] font-semibold mt-2 block">TODOS TREINANDO.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#111111] aspect-[3/4]">
              <img src={coach.img} alt={coach.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="w-10 h-10 rounded-full bg-[#E8651A] text-white flex items-center justify-center font-display font-bold text-sm mb-4">
                  {coach.inits}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-1">{coach.name}</h3>
                <p className="text-[#E8651A] font-medium text-sm mb-1">{coach.role}</p>
                <p className="text-[#5A5A5A] text-[10px] tracking-widest uppercase">{coach.cref}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}