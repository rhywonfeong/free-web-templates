export default function Pricing() {
  const plans = [
    {
      name: 'LIVRE',
      price: '149',
      desc: 'Para quem treina de forma autônoma.',
      features: [
        'Acesso ilimitado 05H–23H',
        'Avaliação física de entrada',
        'Planilha de treino inicial',
        'App FORGEE'
      ],
      featured: false,
      ctaLabel: 'Quero esse plano'
    },
    {
      name: 'PLUS',
      badge: 'MAIS ESCOLHIDO',
      price: '229',
      desc: 'O equilíbrio perfeito entre autonomia e direção.',
      features: [
        'Tudo do Livre +',
        '2 sessões de Personal/mês',
        '1 aula Conditioning/semana',
        'Revisão planilha 4 semanas',
        'Acesso ao Mobility'
      ],
      featured: true,
      ctaLabel: 'Quero esse plano'
    },
    {
      name: 'ELITE',
      price: '389',
      desc: 'Acompanhamento total e acesso irrestrito.',
      features: [
        'Tudo do Plus +',
        '4 sessões Personal/mês',
        'Acesso ilimitado classes',
        'Bioimpedância mensal',
        'WhatsApp coach dedicado'
      ],
      featured: false,
      ctaLabel: 'Quero esse plano'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold block mb-4">Investimento</span>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight mb-6 uppercase flex flex-col items-center">
          <span>SEM MATRÍCULA.</span>
          <span className="text-[#888888]">SEM FIDELIDADE.</span>
          <span>SEM ENROLAÇÃO.</span>
        </h2>
        <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, idx) => (
          <div 
            key={idx}
            className={`rounded-2xl p-8 flex flex-col h-full border ${
              plan.featured 
                ? 'bg-[#3D1208] border-[#E84A1A]/50 transform md:-translate-y-4 shadow-[0_20px_40px_rgba(232,74,26,0.15)] relative' 
                : 'bg-[#1E1E1E] border-white/5 hover:border-white/20 transition-colors'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#E84A1A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                {plan.badge}
              </div>
            )}
            
            <h3 className={`text-2xl font-display tracking-wide mb-2 ${plan.featured ? 'text-white' : 'text-white'}`}>Plano {plan.name}</h3>
            <p className="text-sm text-[#888888] h-10">{plan.desc}</p>
            
            <div className="my-8 pb-8 border-b border-white/10">
              <span className="text-lg text-[#888888] font-medium mr-1">R$</span>
              <span className="font-display text-6xl text-white tracking-tighter">{plan.price}</span>
              <span className="text-[#888888] text-sm"> / mês</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#CCCCCC]">
                  <iconify-icon icon="solar:check-circle-bold" class="text-[#4CAF72] text-lg shrink-0 mt-0.5"></iconify-icon>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                plan.featured 
                  ? 'bg-[#E84A1A] text-white hover:bg-white hover:text-[#E84A1A]' 
                  : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {plan.ctaLabel}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto mt-16 text-center">
        <p className="text-sm text-[#888888] uppercase tracking-wider mb-4">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </p>
        <div className="inline-flex items-center gap-4 bg-[#1E1E1E] border border-white/10 px-6 py-3 rounded-full">
          <span className="text-sm text-[#CCCCCC]"><strong className="text-white">DIÁRIA: R$ 39</strong> · Acesso por 1 dia</span>
          <button className="text-xs font-bold text-[#CCFF00] uppercase tracking-widest hover:text-white transition-colors">Agendar</button>
        </div>
      </div>
    </section>
  );
}