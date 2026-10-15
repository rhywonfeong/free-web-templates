import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "Sessões de Personal", included: false },
        { name: "Acesso ilimitado classes", included: false }
      ],
      highlight: false
    },
    {
      name: "PLUS",
      badge: "MAIS ESCOLHIDO",
      price: "229",
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Revisão planilha 4 semanas", included: true },
        { name: "2 sessões de Personal/mês", included: true },
        { name: "1 aula Conditioning/semana", included: true },
        { name: "Acesso ao Mobility", included: true }
      ],
      highlight: true
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        { name: "Tudo do plano Plus", included: true },
        { name: "4 sessões Personal/mês", included: true },
        { name: "Acesso ilimitado classes", included: true },
        { name: "Bioimpedância mensal", included: true },
        { name: "WhatsApp coach dedicado", included: true },
        { name: "Toalha premium diária", included: false }
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block matching reference design precisely */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#FF1E00]"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E00]">
              PRICING
            </span>
            <div className="h-[1px] w-12 bg-[#FF1E00]"></div>
          </div>
          
          <h2 className="font-display text-6xl md:text-[80px] font-black leading-[0.9] tracking-tighter uppercase mb-6 flex flex-col items-center">
            <span className="text-white">CHOOSE YOUR</span>
            <span className="text-[#FF1E00]">PLAN</span>
          </h2>
          
          <p className="text-[#737069] text-base md:text-lg font-light max-w-md mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col bg-[#0c0c0c] border rounded-none p-10 ${
                plan.highlight 
                  ? 'border-[#FF1E00] bg-[#1a0502] shadow-[0_0_40px_rgba(255,30,0,0.15)] lg:scale-105 z-10' 
                  : 'border-[#222] hover:border-[#444] transition-colors'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-[10px] font-bold tracking-widest px-6 py-2 rounded-full uppercase whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[#D9D9D9] text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-display text-5xl font-black">R${plan.price}</span>
                  <span className="text-[#636363] text-sm font-medium">/mês</span>
                </div>
                <div className={`h-[1px] w-12 mt-6 ${plan.highlight ? 'bg-[#FF1E00]' : 'bg-[#333]'}`}></div>
              </div>

              <div className="flex flex-col gap-5 flex-grow mb-10">
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4">
                    {feat.included ? (
                      <iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00] text-xl flex-shrink-0"></iconify-icon>
                    ) : (
                      <iconify-icon icon="solar:close-circle-line-duotone" class="text-[#444] text-xl flex-shrink-0"></iconify-icon>
                    )}
                    <span className={`text-sm ${feat.included ? 'text-white' : 'text-[#636363] line-through decoration-[#333]'}`}>
                      {feat.name}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none ${
                  plan.highlight 
                    ? 'bg-gradient-primary text-white hover:shadow-[0_0_20px_rgba(255,30,0,0.4)]' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-black'
                }`}
              >
                QUERO ESSE PLANO
              </button>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 max-w-6xl mx-auto gap-4">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-[#636363] uppercase tracking-widest">
            <li>Pagamento via PIX ou cartão (3× sem juros)</li>
            <li>Cancelamento com 30 dias de aviso</li>
            <li className="text-white font-bold">Plano anual com 15% off</li>
          </ul>
          
          <div className="flex items-center gap-4 bg-[#111] border border-white/10 px-6 py-3 mt-4 md:mt-0">
            <span className="text-xs font-semibold text-white uppercase tracking-widest">DIÁRIA: R$ 39</span>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="#contato" className="text-xs font-bold text-[#FF1E00] uppercase tracking-widest hover:text-white transition-colors">Agendar</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;