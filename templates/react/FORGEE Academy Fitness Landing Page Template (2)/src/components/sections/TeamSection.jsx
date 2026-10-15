import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function TeamSection() {
  const coaches = [
    { init: 'RF', name: 'Rodrigo Farias', role: 'Head Coach', cref: 'CREF 045821-G/SP', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80' },
    { init: 'AL', name: 'Ana Luísa', role: 'Conditioning', cref: 'CREF 078342-G/SP', image: 'https://images.unsplash.com/photo-1609899517235-c32e1e4b2818?w=500&q=80' },
    { init: 'BT', name: 'Bruno T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80' },
    { init: 'CD', name: 'Camila D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80' },
  ]

  return (
    <section id="equipe" className="py-24 md:py-32 bg-[#0A0A0A] relative border-b border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <SectionLabel>Quem te acompanha</SectionLabel>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-6">
            Coaches Que<br/>
            Treinam.
          </h2>
          <p className="text-[#C8C8C8] text-base max-w-lg">
            Todos graduados em Educação Física. Todos registrados no CREF SP. <span className="text-white font-bold">Todos treinando.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-[#141414] aspect-[3/4] border border-[#1A1A1A]">
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-display font-black text-4xl text-[#3D3D3D] group-hover:text-[#E8001C] transition-colors">
                {coach.init}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-1">
                  {coach.name}
                </h3>
                <p className="text-[#00C2E0] text-sm font-semibold uppercase tracking-wider mb-2">
                  {coach.role}
                </p>
                <div className="flex items-center text-[10px] text-[#7A7A7A] font-mono border-t border-[#3D3D3D] pt-2 mt-2">
                  <iconify-icon icon="solar:shield-check-bold" className="mr-2"></iconify-icon>
                  {coach.cref}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}