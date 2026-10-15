import Eyebrow from '../components/ui/Eyebrow'

export default function NumbersSection() {
  const stats = [
    { number: "+1.200", title: "Alunos ativos", desc: "Pessoas transformando seus corpos todo mês" },
    { number: "94%", title: "Taxa de frequência", desc: "Dos nossos alunos treinam pelo menos 4x por semana" },
    { number: "12", title: "Anos de operação", desc: "De experiência em treinamento de alta performance" },
    { number: "18", title: "Coaches certificados", desc: "Profissionais especializados e continuamente atualizados" }
  ]

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 border-y border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex justify-center mb-4">
            <Eyebrow>Em dados</Eyebrow>
          </div>
          <h2 className="text-h2">
            Resultados que falam por <span className="text-[#E5C000]">si</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2E2E2E]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center pt-8 sm:pt-0 sm:px-6">
              <span className="font-display text-5xl md:text-7xl text-white mb-4 tracking-tight">
                {stat.number}
              </span>
              <h4 className="font-display text-xl text-[#E5C000] tracking-wider mb-3">
                {stat.title}
              </h4>
              <p className="text-[#888888] text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}