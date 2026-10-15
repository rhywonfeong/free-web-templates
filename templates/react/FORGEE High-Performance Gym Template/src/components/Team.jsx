export default function Team() {
  const team = [
    { id: 'RF', name: 'RODRIGO FARIAS', role: 'Head Coach', cref: 'CREF 045821-G/SP', image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=500&q=80' },
    { id: 'AL', name: 'ANA LUÍSA', role: 'Conditioning', cref: 'CREF 078342-G/SP', image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&q=80' },
    { id: 'BT', name: 'BRUNO T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80' },
    { id: 'CD', name: 'CAMILA D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80' }
  ];

  return (
    <section className="px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold block mb-4">Quem te acompanha</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight uppercase m-0">
            Coaches Que<br />Treinam.
          </h2>
        </div>
        <p className="text-[#AAAAAA] text-lg max-w-sm md:text-right">
          Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div key={i} className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden aspect-[3/4]">
            <img 
              src={member.image} 
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[#1B40FF] font-display text-4xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{member.id}</span>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide">{member.name}</h3>
              <p className="text-[#CCFF00] text-sm font-medium mt-1 uppercase tracking-wider">{member.role}</p>
              <p className="text-[#888888] text-xs uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{member.cref}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}