import SectionHeading from '../ui/SectionHeading'

const TeamSection = () => {
  const coaches = [
    { name: "RODRIGO FARIAS", role: "Head Coach", ref: "CREF 045821-G/SP", initials: "RF" },
    { name: "ANA LUÍSA", role: "Conditioning", ref: "CREF 078342-G/SP", initials: "AL" },
    { name: "BRUNO T.", role: "Mobility & Rehab", ref: "CREF 091205-G/SP", initials: "BT" },
    { name: "CAMILA D.", role: "Personal Trainer", ref: "CREF 063417-G/SP", initials: "CD" }
  ]

  return (
    <section className="py-32 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          theme="light"
          label="Quem te acompanha"
          title={<>COACHES QUE<br/>TREINAM.</>}
          description="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#F5F5F5] rounded-[32px] mb-6 overflow-hidden relative flex items-center justify-center border border-[#E8E8E8] group-hover:border-[#0A2E00] transition-colors">
                {/* Fallback pattern/initials for photo placeholder */}
                <span className="text-[120px] font-display text-[#E8E8E8] group-hover:text-[#CCFF00] transition-colors opacity-50">
                  {coach.initials}
                </span>
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E00]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <iconify-icon icon="solar:arrow-right-up-linear" className="text-[#CCFF00] text-3xl ml-auto"></iconify-icon>
                </div>
              </div>
              <h3 className="text-xl font-display uppercase tracking-wide text-[#0A2E00]">{coach.name}</h3>
              <p className="font-bold text-[#4A4A4A] mt-1">{coach.role}</p>
              <p className="text-sm text-[#9E9E9E] mt-1">{coach.ref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection