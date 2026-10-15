import React from 'react'
import SectionHeading from '../ui/SectionHeading'

const TeamSection = () => {
  const team = [
    { name: "Rodrigo Farias", role: "Head Coach", reg: "CREF 045821-G/SP", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&q=80" },
    { name: "Ana Luísa", role: "Conditioning", reg: "CREF 078342-G/SP", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" },
    { name: "Bruno T.", role: "Mobility & Rehab", reg: "CREF 091205-G/SP", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80" },
    { name: "Camila D.", role: "Personal Trainer", reg: "CREF 063417-G/SP", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80" }
  ]

  return (
    <section id="equipe" className="py-32 px-6 md:px-12 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-2xl mb-16">
          <SectionHeading 
            subtitle="Equipe"
            title="COACHES QUE *TREINAM*."
            className="mb-6"
          />
          <p className="text-[#808080] text-lg">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos vivem a disciplina que pregam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[#1C1C1C]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity opacity-80"
                />
                {/* Red color bleed effect on hover */}
                <div className="absolute inset-0 bg-[#E8190F] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              
              <div className="border-l-2 border-[#E8190F] pl-4 transition-all duration-300 group-hover:border-[#FF4A1C]">
                <h4 className="font-display text-2xl text-white tracking-wide mb-1">{member.name}</h4>
                <p className="text-[#FF4A1C] text-sm font-bold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-[#404040] text-xs font-mono tracking-widest">{member.reg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection