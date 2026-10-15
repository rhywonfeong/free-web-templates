import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function PlansSection() {
  const plans = [
    {
      name: "Livre",
      badge: "Essencial",
      price: "290",
      target: "Para quem quer autonomia com estrutura",
      includes: [
        "Acesso em horário comercial",
        "Avaliação física de entrada",
        "Protocolo de treino inicial",
        "App de acompanhamento",
        "1 revisão por trimestre"
      ],
      excludes: ["Acompanhamento presencial", "Aulas em grupo"],
      highlight: false
    },
    {
      name: "Plus",
      badge: "Mais escolhido",
      price: "490",
      target: "Para quem quer resultado com acompanhamento",
      includes: [
        "Acesso em horário completo",
        "Protocolo individual personalizado",
        "4 sessões mensais com coach",
        "Acesso a aulas em grupo",
        "Revisão a cada 6 semanas",
        "Acesso prioritário"
      ],
      excludes: [],
      highlight: true
    },
    {
      name: "Elite",
      badge: "Alto desempenho",
      price: "890",
      target: "Para quem não aceita menos que o máximo",
      includes: [
        "Acesso 24h à academia",
        "Protocolo de periodização avançada",
        "Acompanhamento ilimitado",
        "Coach exclusivo para sessões",
        "Análise de bioimpedância mensal",
        "Área de recuperação VIP",
        "Estacionamento reservado"
      ],
      excludes: [],
      highlight: false
    }
  ]

  return (
    <section id="planos" className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-4">
            <Eyebrow>Planos</Eyebrow>
          </div>
          <h2 className="text-h2 mb-6">
            Escolha o plano que combina com seu <span className="text-[#FF5A1A]">comprometimento</span>.
          </h2>
          <p className="text-[#888888] text-lg">
            Todos os planos incluem avaliação física, protocolo individual e acesso a toda a estrutura da academia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-[#1A1A1A] p-10 flex flex-col h-full ${
                plan.highlight 
                  ? 'border-[1.5px] border-[#FF5A1A] lg:-my-8 py-14 shadow-[0_0_40px_rgba(255,90,26,0.1)] z-10' 
                  : 'border border-[#2E2E2E]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5A1A] text-white text-xs font-bold uppercase tracking-widest py-2 px-4 whitespace-nowrap">
                  Mais Escolhido
                </div>
              )}
              
              <div className="mb-8">
                <span className={`text-[11px] font-semibold uppercase tracking-widest mb-3 block ${plan.highlight ? 'text-[#FF5A1A]' : 'text-[#888888]'}`}>
                  {plan.badge}
                </span>
                <h3 className="font-display text-4xl text-white mb-2 tracking-wide uppercase">{plan.name}</h3>
                <p className="text-[#888888] text-sm">{plan.target}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-2 border-b border-[#2E2E2E] pb-8">
                <span className="text-[#888888] text-lg font-medium">R$</span>
                <span className="font-display text-6xl text-white">{plan.price}</span>
                <span className="text-[#888888] text-sm">/mês</span>
              </div>

              <div className="flex-grow space-y-6 mb-10">
                <ul className="space-y-4">
                  {plan.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#F5F5F5]">
                      <iconify-icon icon="solar:check-circle-linear" class={`mt-0.5 mr-3 text-lg flex-shrink-0 ${plan.highlight ? 'text-[#FF5A1A]' : 'text-[#E5C000]'}`}></iconify-icon>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {plan.excludes.length > 0 && (
                  <ul className="space-y-4 pt-4 border-t border-[#2E2E2E]/50">
                    {plan.excludes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#888888]">
                        <iconify-icon icon="solar:close-circle-linear" class="mt-0.5 mr-3 text-lg flex-shrink-0 opacity-50"></iconify-icon>
                        <span className="line-through opacity-70">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button 
                variant={plan.highlight ? 'secondary' : 'outline'} 
                className="w-full mt-auto"
              >
                Quero o plano {plan.name}
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[#888888] text-xs mt-12 uppercase tracking-widest">
          Fidelidade mínima de 3 meses. Pagamento mensal, trimestral ou anual.
        </p>
      </div>
    </section>
  )
}