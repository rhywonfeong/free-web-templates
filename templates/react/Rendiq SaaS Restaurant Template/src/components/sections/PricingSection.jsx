const PricingSection = () => {
  const plans = [
    {
      name: "BÁSICO",
      price: "97",
      highlight: false,
      features: [
        { name: "Dashboard de margem diária", included: true },
        { name: "Preenchimento de produção", included: true },
        { name: "Gestão de categorias e itens", included: true },
        { name: "App mobile (PWA)", included: true },
        { name: "Até 2 usuários (admin + 1 staff)", included: true },
        { name: "Usuários ilimitados", included: false },
        { name: "Histórico + exportação CSV", included: false },
        { name: "Colunas customizadas", included: false },
        { name: "Alertas de validade", included: false },
        { name: "Metas configuráveis", included: false },
        { name: "Suporte prioritário", included: false },
        { name: "Relatório mensal", included: false },
      ],
      ctaText: "COMEÇAR GRÁTIS",
      ctaStyle: "secondary"
    },
    {
      name: "PRO",
      price: "197",
      highlight: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        { name: "Dashboard de margem diária", included: true },
        { name: "Preenchimento de produção", included: true },
        { name: "Gestão de categorias e itens", included: true },
        { name: "App mobile (PWA)", included: true },
        { name: "Até 2 usuários (admin + 1 staff)", included: true },
        { name: "Usuários ilimitados", included: true },
        { name: "Histórico + exportação CSV", included: true },
        { name: "Colunas customizadas", included: true },
        { name: "Alertas de validade", included: true },
        { name: "Metas configuráveis", included: true },
        { name: "Suporte prioritário", included: false },
        { name: "Relatório mensal", included: false },
      ],
      ctaText: "COMEÇAR GRÁTIS",
      ctaStyle: "primary"
    },
    {
      name: "PREMIUM",
      price: "347",
      highlight: false,
      features: [
        { name: "Dashboard de margem diária", included: true },
        { name: "Preenchimento de produção", included: true },
        { name: "Gestão de categorias e itens", included: true },
        { name: "App mobile (PWA)", included: true },
        { name: "Até 2 usuários (admin + 1 staff)", included: true },
        { name: "Usuários ilimitados", included: true },
        { name: "Histórico + exportação CSV", included: true },
        { name: "Colunas customizadas", included: true },
        { name: "Alertas de validade", included: true },
        { name: "Metas configuráveis", included: true },
        { name: "Suporte prioritário via WhatsApp", included: true },
        { name: "Relatório mensal consolidado", included: true },
      ],
      ctaText: "FALAR COM A GENTE",
      ctaStyle: "secondary"
    }
  ];

  return (
    <section id="planos" className="bg-[#FCFBFC] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#F0EFF0] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C] mb-6">
            SEM CONTRATO.<br />SEM TAXA DE<br />IMPLANTAÇÃO.
          </h2>
          <p className="text-base text-[#8A898A] max-w-lg mx-auto">
            Cancele quando quiser com 30 dias de aviso. Troque de plano a qualquer momento. Sem justificativa.
          </p>
        </div>

        {/* Free Trial Banner */}
        <div className="max-w-3xl mx-auto bg-[#0C0C0C] text-[#FCFBFC] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <iconify-icon icon="solar:gift-bold" className="text-[#CEFE00] text-xl"></iconify-icon>
              <h4 className="text-base font-semibold">TESTE GRÁTIS: 14 DIAS</h4>
            </div>
            <p className="text-sm text-[#8A898A]">Sem cartão de crédito · Acesso completo ao plano PRO</p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-[#0C0C0C] bg-[#CEFE00] rounded-full hover:bg-[#DEFF4D] transition-colors">
            COMEÇAR AGORA
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all ${
                plan.highlight 
                  ? 'border-[#0C0C0C] shadow-xl bg-[#FCFBFC] z-10 md:-mt-4 md:-mb-4' 
                  : 'border-[#E2E1E2] bg-[#FCFBFC] hover:border-[#0C0C0C]'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#0C0C0C] text-[#CEFE00] text-[10px] font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-base font-semibold tracking-wide text-[#8A898A] mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-semibold text-[#3D3C3D]">R$</span>
                <span className="text-5xl font-semibold tracking-tight text-[#0C0C0C]">{plan.price}</span>
                <span className="text-sm text-[#8A898A]">/mês</span>
              </div>

              <div className="flex-grow">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className={`flex items-start gap-3 text-sm ${feat.included ? 'text-[#3D3C3D]' : 'text-[#B8B7B8] opacity-60'}`}>
                      <iconify-icon 
                        icon={feat.included ? "solar:check-circle-bold" : "solar:close-circle-linear"} 
                        className={`mt-0.5 text-lg ${feat.included ? 'text-[#63AC39]' : 'text-[#B8B7B8]'}`}
                      ></iconify-icon>
                      {feat.name}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 text-sm font-semibold rounded-full transition-colors mt-auto ${
                  plan.ctaStyle === 'primary' 
                    ? 'bg-[#CEFE00] text-[#0C0C0C] hover:bg-[#DEFF4D]' 
                    : 'bg-[#F0EFF0] text-[#0C0C0C] hover:bg-[#E2E1E2]'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#8A898A] flex flex-col gap-1">
          <p>Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso</p>
          <p className="text-[#3D3C3D] font-medium">Economize 20% optando pelo plano anual.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;