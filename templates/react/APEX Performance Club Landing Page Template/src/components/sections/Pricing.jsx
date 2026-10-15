import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: "Livre",
      badge: "Essencial",
      price: "189",
      desc: "Para quem treina com autonomia e quer acesso à melhor estrutura.",
      features: [
        "Acesso à academia 6 dias/semana",
        "Todas as zonas de treino",
        "Vestiário premium",
        "App de acompanhamento",
        "Avaliação física inicial"
      ],
      notIncluded: [
        "Acompanhamento de coach",
        "Protocolo individualizado"
      ]
    },
    {
      name: "Plus",
      badge: "Mais popular",
      price: "349",
      popular: true,
      desc: "O equilíbrio entre autonomia e orientação profissional.",
      features: [
        "Acesso ilimitado 7 dias/semana",
        "Todas as zonas de treino",
        "Vestiário premium + sauna",
        "App de acompanhamento",
        "Avaliação física mensal",
        "4 sessões de coach/mês",
        "Protocolo individualizado",
        "Revisão mensal de treino"
      ],
      notIncluded: []
    },
    {
      name: "Elite",
      badge: "Experiência completa",
      price: "649",
      desc: "Para quem quer o máximo: coach dedicado, sem limite de acompanhamento.",
      features: [
        "Acesso ilimitado 7 dias/semana",
        "Todas as zonas de treino",
        "Vestiário premium, sauna e lounge",
        "App de acompanhamento",
        "Avaliação física quinzenal",
        "Coach dedicado (sessões ilimitadas)",
        "Protocolo individualizado",
        "Revisão quinzenal de treino",
        "Acesso a aulas coletivas premium",
        "Nutricionista parceiro (1/mês)",
        "Prioridade em horários peak"
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
        
        <SectionHeader 
          label="Planos"
          title="Invista no único corpo que você tem."
          description="Sem taxa de matrícula em qualquer plano. Cancele quando quiser. Temos opções para diferentes rotinas e objetivos — escolha o que faz sentido para você agora."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-[24px] text-left p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 flex flex-col ${
                plan.popular 
                  ? 'bg-[#111111] text-white shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'bg-white text-[#111111] border border-neutral-100 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-acid text-[#111111] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              {!plan.popular && (
                <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  {plan.badge}
                </div>
              )}

              <h3 className="font-display font-bold uppercase text-3xl mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-xl font-medium">R$</span>
                <span className="font-display font-black text-6xl tracking-tighter">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>/mês</span>
              </div>
              
              <p className={`text-sm font-light mb-8 h-10 ${plan.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {plan.desc}
              </p>

              <div className="flex-grow">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-light">
                      <iconify-icon icon="solar:check-circle-bold" class={`mt-0.5 text-lg shrink-0 ${plan.popular ? 'text-acid' : 'text-neutral-900'}`}></iconify-icon>
                      <span className={plan.popular ? 'text-neutral-200' : 'text-neutral-700'}>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map((feature, j) => (
                    <li key={`not-${j}`} className="flex items-start gap-3 text-sm font-light opacity-50">
                      <iconify-icon icon="solar:close-circle-linear" class="mt-0.5 text-lg shrink-0"></iconify-icon>
                      <span className="line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                to="/agendar" 
                variant={plan.popular ? 'primary' : 'outline'} 
                className={`w-full mt-auto ${!plan.popular && 'border-neutral-200 hover:border-[#111111]'}`}
              >
                Escolher {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-neutral-500 font-light max-w-2xl uppercase tracking-wider">
          Sem fidelidade obrigatória. Cancele em até 24h antes do próximo ciclo. Taxa de matrícula: isenta em todos os planos.
        </p>

      </div>
    </section>
  );
}