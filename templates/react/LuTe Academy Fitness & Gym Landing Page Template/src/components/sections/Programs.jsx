import SectionHeading from '../ui/SectionHeading'
import { clsx } from 'clsx'

export default function Programs() {
  const programs = [
    {
      title: "LuTe STRENGTH",
      desc: "Musculação por periodização. Para iniciantes a avançados em hipertrofia.",
      freq: "3 a 5× por semana",
      icon: "solar:dumbbell-linear",
      highlight: false
    },
    {
      title: "LuTe CONDITIONING",
      desc: "Sessões de 45 min de alta intensidade. O motor do nosso espaço.",
      freq: "Horários: 06H · 07H · 12H · 18H · 19H30",
      icon: "solar:heart-pulse-linear",
      highlight: true
    },
    {
      title: "LuTe MOBILITY",
      desc: "Foco em postura e prevenção de lesões para quem treina pesado.",
      freq: "2× por semana",
      icon: "solar:accessibility-linear",
      highlight: false
    },
    {
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa e revisão mensal.",
      freq: "Horário Flexível",
      icon: "solar:user-speak-linear",
      highlight: false
    }
  ]

  return (
    <section id="programas" className="py-32 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Programas"
          title="Um protocolo para cada objetivo."
          align="center"
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog, index) => (
            <div 
              key={index}
              className={clsx(
                "p-8 md:p-10 rounded-2xl flex flex-col justify-between h-[300px] transition-all duration-300 group",
                prog.highlight 
                  ? "bg-[#121212] border border-[#00F9E4] shadow-[0_0_30px_rgba(0,249,228,0.1)] relative overflow-hidden" 
                  : "bg-[#0A0A0A] border border-[#1C1C1C] hover:border-[#2A2A2A] hover:bg-[#121212]"
              )}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[#00F9E4] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Destaque
                  </span>
                </div>
              )}

              <div>
                <div className={clsx(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
                  prog.highlight ? "bg-[#00F9E4]/10 text-[#00F9E4]" : "bg-[#1C1C1C] text-white group-hover:bg-[#2A2A2A]"
                )}>
                  <iconify-icon icon={prog.icon} width="24"></iconify-icon>
                </div>
                
                <h3 className={clsx(
                  "text-2xl font-bold tracking-tight uppercase mb-3",
                  prog.highlight ? "text-[#00F9E4]" : "text-white"
                )}>
                  {prog.title}
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <iconify-icon icon="solar:clock-circle-linear" className="text-[#6B6B6B]"></iconify-icon>
                <span className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest">
                  {prog.freq}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}