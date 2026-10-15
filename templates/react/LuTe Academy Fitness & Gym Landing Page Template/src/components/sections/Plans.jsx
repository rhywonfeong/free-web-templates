import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { clsx } from 'clsx'

export default function Plans() {
  const plans = [
    {
      name: "Livre",
      price: "149",
      desc: "Acesso fundamental ao espaço e equipamentos.",
      features: [
        "Acesso ilimitado (05H-23H)",
        "Avaliação de entrada",
        "Planilha inicial básica",
        "Suporte pontual de salão"
      ],
      highlight: false
    },
    {
      name: "Plus",
      price: "229",
      desc: "O equilíbrio perfeito entre autonomia e orientação.",
      features: [
        "Tudo do plano Livre",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão de planilha mensal"
      ],
      highlight: true
    },
    {
      name: "Elite",
      price: "389",
      desc: "Acompanhamento total para resultados máximos.",
      features: [
        "Tudo do plano Plus",
        "4 sessões de Personal/mês",
        "Acesso ilimitado às classes",
        "Avaliação por Bioimpedância"
      ],
      highlight: false
    }
  ]

  return (
    <section id="planos" className="py-32 bg-[#0A0A0A] relative border-t border-[#1C1C1C]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00F9E4]/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <SectionHeading 
            badge="Investimento"
            title="Sem matrícula. Sem fidelidade. Sem enrolação."
            subtitle="Mude de plano quando quiser. Cancele com 30 dias de aviso prévio."
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={clsx(
                "rounded-3xl p-8 transition-all duration-300 relative",
                plan.highlight 
                  ? "bg-[#121212] border-2 border-[#00F9E4] shadow-[0_0_40px_rgba(0,249,228,0.15)] lg:-translate-y-4" 
                  : "bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#3A3A3A]"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00F9E4] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">{plan.name}</h3>
                <p className="text-[#6B6B6B] text-sm">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1 border-b border-[#1C1C1C] pb-8">
                <span className="text-xl text-[#9A9A9A] font-medium">R$</span>
                <span className={clsx("text-5xl font-bold tracking-tighter", plan.highlight ? "text-[#00F9E4]" : "text-white")}>
                  {plan.price}
                </span>
                <span className="text-[#6B6B6B] font-medium">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-bold" className={clsx("mt-0.5", plan.highlight ? "text-[#00F9E4]" : "text-[#3A3A3A]")}></iconify-icon>
                    <span className="text-[#E0E0E0] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
              >
                Selecionar {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-sm font-medium tracking-widest uppercase text-[#6B6B6B]">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:card-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
            PIX ou Cartão (3x sem juros)
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:tag-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
            Plano Anual: 15% OFF
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:calendar-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
            Diária avulsa: R$39
          </div>
        </div>
      </div>
    </section>
  )
}