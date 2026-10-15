import React from 'react'

const TeamSection = () => {
  const team = [
    { name: 'Rodrigo Farias', initials: 'RF', role: 'Head Coach', cref: 'CREF 045821-G/SP', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80' },
    { name: 'Ana Luísa', initials: 'AL', role: 'Conditioning', cref: 'CREF 078342-G/SP', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80' },
    { name: 'Bruno T.', initials: 'BT', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
    { name: 'Camila D.', initials: 'CD', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80' },
  ]

  return (
    <section id="equipe" className="py-24 md:py-32 bg-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 relative">
        
        {/* Background typographic noise */}
        <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03] overflow-hidden">
          <span className="font-display font-black text-[300px] leading-none text-white whitespace-nowrap -ml-32">TEAM</span>
        </div>

        <div className="mb-16 md:mb-24 relative z-10">
          <span className="text-eyebrow block mb-6">Quem te acompanha</span>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter mb-6 text-white">
            Coaches que<br /><span className="text-[#E8400A]">treinam.</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-md">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-full aspect-[3/4] mb-4 bg-[#1E1E1E] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-display font-black text-4xl text-white/20 group-hover:text-[#E8400A] transition-colors duration-500">{member.initials}</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-[#E8400A] transition-colors">{member.name}</h3>
                <p className="text-[#D9D9D9] text-sm mb-1">{member.role}</p>
                <p className="text-[#6B6B6B] text-[10px] uppercase tracking-widest">{member.cref}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamSection