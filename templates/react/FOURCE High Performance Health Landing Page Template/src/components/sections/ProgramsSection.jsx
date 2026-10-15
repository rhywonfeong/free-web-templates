import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import clsx from 'clsx'

const ProgramsSection = () => {
  const programs = [
    {
      name: "FOURCE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana.",
      icon: "solar:dumbbell-large-linear",
      highlight: false
    },
    {
      name: "FOURCE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      icon: "solar:heart-pulse-linear",
      highlight: true
    },
    {
      name: "FOURCE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Recuperação, prevenção de lesões.",
      freq: "2-3x por semana.",
      icon: "solar:accessibility-linear",
      highlight: false
    },
    {
      name: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Foco total, reabilitação, performance.",
      freq: "Agendamento livre.",
      icon: "solar:users-group-two-rounded-linear",
      highlight: false
    }
  ]

  return (
    <section className="py-32 bg-[#F5F5F5] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          theme="light"
          alignment="center"
          label="O que oferecemos"
          title={<>UM PROTOCOLO<br/>PARA CADA OBJETIVO.</>}
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <div 
              key={i} 
              className={clsx(
                "p-10 rounded-[32px] transition-all duration-300 relative overflow-hidden group",
                prog.highlight 
                  ? "bg-[#0A2E00] text-white shadow-xl hover:-translate-y-2" 
                  : "bg-white border border-[#E8E8E8] hover:border-[#0A2E00] hover:shadow-lg"
              )}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 p-8">
                  <Badge>DESTAQUE</Badge>
                </div>
              )}
              
              <div className={clsx(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8",
                prog.highlight ? "bg-[#CCFF00] text-[#0A2E00]" : "bg-[#F5F5F5] text-[#0A2E00] group-hover:bg-[#CCFF00] transition-colors"
              )}>
                <iconify-icon icon={prog.icon} width="32"></iconify-icon>
              </div>

              <h3 className={clsx("text-3xl font-display uppercase tracking-wider mb-4", prog.highlight ? "text-white" : "text-[#0A2E00]")}>
                {prog.name}
              </h3>
              
              <p className={clsx("mb-8 leading-relaxed", prog.highlight ? "text-white/80" : "text-[#4A4A4A]")}>
                {prog.desc}
              </p>

              <div className="space-y-4 pt-6 border-t border-current opacity-60">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold mb-1">Para quem é:</span>
                  <span className="font-medium">{prog.target}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold mb-1">Frequência/Horários:</span>
                  <span className="font-medium">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection