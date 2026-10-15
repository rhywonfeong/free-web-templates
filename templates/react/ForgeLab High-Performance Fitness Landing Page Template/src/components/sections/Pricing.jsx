import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "Livre",
      price: "297",
      desc: "Acesso total à academia no seu próprio ritmo.",
      features: [
        "Acesso à estrutura completa 6h–23h",
        "App FORGELAB com treinos",
        "Avaliação física de entrada",
        "Orientação inicial com coach (1x)",
        "Acesso à zona de recovery"
      ],
      notIncluded: [
        "Acompanhamento contínuo",
        "Protocolo individualizado"
      ],
      cta: "Começar com Livre",
      highlight: false
    },
    {
      name: "Plus",
      badge: "Mais Popular",
      price: "597",
      desc: "Treinamento com direção. Para quem quer resultado.",
      features: [
        "Tudo do plano Livre",
        "Protocolo individualizado",
        "4 sessões mensais com coach",
        "Bioimpedância mensal",
        "Revisão de protocolo (4 semanas)",
        "Relatório digital de evolução"
      ],
      notIncluded: [
        "Monitoramento HRV",
        "Sessões de EMS"
      ],
      cta: "Escolher Plus",
      highlight: true
    },
    {
      name: "Elite",
      icon: "solar:crown-bold",
      price: "1.197",
      desc: "O maior nível de acompanhamento disponível.",
      features: [
        "Tudo do plano Plus",
        "Coach dedicado (WhatsApp)",
        "Sessões ilimitadas com supervisão",
        "Monitoramento HRV semanal",
        "2 sessões mensais de EMS",
        "Acesso VIP (6h-8h / 21h-23h)",
        "Protocolo nutricional integrado"
      ],
      notIncluded: [],
      cta: "Quero o Elite",
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 lg:py-32 bg-[#141414]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading 
          supertitle="Nossos Planos"
          title="Escolha o nível certo para o seu objetivo."
          subtitle="Todos os planos incluem acesso à estrutura completa. O que muda é o nível de acompanhamento e personalização."
          alignment="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#1E1E1E] border-2 border-[#F5C518] shadow-[0_8px_32px_rgba(245,197,24,0.1)] z-10 scale-100 lg:scale-105' 
                  : 'bg-[#0D0D0D] border border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5C518] text-[#141414] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                  {plan.name}
                  {plan.icon && <iconify-icon icon={plan.icon} class="text-[#F5C518]"></iconify-icon>}
                </h3>
                <p className="text-neutral-400 text-sm mt-2 min-h-[40px]">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-neutral-400">R$</span>
                  <span className="text-5xl font-extrabold text-white tracking-tighter">{plan.price}</span>
                  <span className="text-sm font-medium text-neutral-500">/mês</span>
                </div>
              </div>

              <div className="flex-grow space-y-6 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <iconify-icon icon="solar:check-circle-bold" class="text-green-500 text-lg shrink-0 mt-0.5"></iconify-icon>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <ul className="space-y-3 pt-6 border-t border-white/10 opacity-60">
                    {plan.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                        <iconify-icon icon="solar:close-circle-linear" class="text-neutral-500 text-lg shrink-0 mt-0.5"></iconify-icon>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button 
                variant={plan.highlight ? 'amber' : 'outline'} 
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-xl mx-auto p-6 border border-white/10 rounded-2xl bg-[#0D0D0D]">
          <p className="text-white font-medium mb-4">💬 Não sabe qual plano é o certo pra você?</p>
          <p className="text-neutral-400 text-sm mb-6">Fale com um especialista — sem compromisso, sem pressão.</p>
          <a href="#" className="text-[#E84E1B] font-bold uppercase text-sm tracking-wide hover:underline flex items-center justify-center gap-2">
            Falar com um Especialista <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;