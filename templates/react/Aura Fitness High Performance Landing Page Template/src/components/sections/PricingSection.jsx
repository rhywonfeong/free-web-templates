export default function PricingSection() {
  const plans = [
    {
      name: "Plano Livre",
      price: "189",
      features: [
        { text: "Acesso completo à estrutura", included: true },
        { text: "Avaliação inicial", included: true },
        { text: "Treino prescrito", included: true },
        { text: "Coach dedicado", included: false },
        { text: "Acompanhamento mensal", included: false }
      ]
    },
    {
      name: "Plano Plus",
      price: "289",
      popular: true,
      features: [
        { text: "Tudo do Livre", included: true },
        { text: "Coach dedicado", included: true },
        { text: "Acompanhamento mensal", included: true },
        { text: "Ajuste de treino quinzenal", included: true },
        { text: "Nutrição básica", included: false }
      ]
    },
    {
      name: "Plano Elite",
      price: "429",
      features: [
        { text: "Tudo do Plus", included: true },
        { text: "Orientação nutricional", included: true },
        { text: "Acesso ilimitado a coaches", included: true },
        { text: "Área VIP e recuperação", included: true },
        { text: "Reavaliação semanal", included: true }
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Escolha seu plano</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Invista onde o retorno é garantido.</h2>
          <p className="text-[#AAAAAA] text-lg">
            Três planos desenhados para diferentes estágios de comprometimento. Sem letras miúdas, sem cobranças surpresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#111111] rounded-3xl p-8 border transition-all duration-300
                ${plan.popular ? 'border-[#FF5500] shadow-[0_0_30px_rgba(255,85,0,0.15)] md:-translate-y-4' : 'border-white/10 hover:border-white/30'}`
              }
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(255,85,0,0.4)]">
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  Mais Popular
                </div>
              )}

              <h3 className="text-white text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[#AAAAAA] font-medium">R$</span>
                <span className="font-display text-6xl text-white">{plan.price}</span>
                <span className="text-[#AAAAAA]">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <iconify-icon 
                      icon={feat.included ? "solar:check-circle-bold" : "solar:close-circle-linear"} 
                      class={`text-xl ${feat.included ? (plan.popular ? "text-[#FF5500]" : "text-[#3DFF6E]") : "text-[#555555]"}`}
                    ></iconify-icon>
                    <span className={feat.included ? "text-white" : "text-[#555555]"}>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300
                ${plan.popular 
                  ? 'bg-[#FF5500] hover:bg-[#FF6B2B] text-white shadow-[0_4px_14px_rgba(255,85,0,0.4)]' 
                  : 'bg-[#1A1A1A] hover:bg-[#222222] text-white border border-white/10 hover:border-white/30'}`}
              >
                Selecionar {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-[#888888] text-sm">Dúvidas sobre qual escolher?</p>
          <a href="#contato" className="text-[#FF5500] hover:text-white font-semibold text-sm transition-colors border-b border-[#FF5500] hover:border-white pb-0.5">
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}