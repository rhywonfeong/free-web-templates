import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      highlight: false,
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: false },
        { name: "1 aula Conditioning/semana", included: false },
        { name: "Revisão de planilha a cada 4 sem.", included: false },
        { name: "Acesso ao Mobility", included: false },
        { name: "4 sessões de Personal/mês", included: false },
        { name: "Acesso ilimitado a classes", included: false },
      ]
    },
    {
      name: "PLUS",
      price: "229",
      highlight: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: true },
        { name: "1 aula Conditioning/semana", included: true },
        { name: "Revisão de planilha a cada 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "4 sessões de Personal/mês", included: false },
        { name: "Acesso ilimitado a classes", included: false },
      ]
    },
    {
      name: "ELITE",
      price: "389",
      highlight: false,
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: true },
        { name: "1 aula Conditioning/semana", included: true },
        { name: "Revisão de planilha a cada 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "4 sessões de Personal/mês", included: true },
        { name: "Acesso ilimitado a classes", included: true },
        { name: "Bioimpedância mensal", included: true, extra: true },
        { name: "WhatsApp com coach dedicado", included: true, extra: true },
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#111111] border-y border-subtle relative">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionTitle 
            eyebrow="Investimento"
            title="COMPROMISSO"
            titleAccent="MENSAL."
            className="mb-0"
          />
          <p className="text-[#B0B0B0] max-w-sm text-sm border-l-2 border-[#E8400A] pl-4">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa. O contrato é com você mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 mt-12 items-center">
          {plans.map((plan, i) => (
            <div 
              key={plan.name} 
              className={`
                relative bg-surface border border-subtle flex flex-col
                ${plan.highlight ? 'lg:scale-105 z-10 border-[#E8400A] shadow-[0_8px_40px_rgba(232,64,10,0.1)]' : 'z-0'}
                ${i === 0 ? 'lg:border-r-0' : ''}
                ${i === 2 ? 'lg:border-l-0' : ''}
              `}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 z-20">
                  {plan.badge}
                </div>
              )}
              
              <div className={`p-8 text-center border-b ${plan.highlight ? 'border-[#E8400A]/30' : 'border-subtle'}`}>
                <h3 className="font-display uppercase tracking-tight text-xl text-[#B0B0B0] mb-2">{plan.name}</h3>
                <div className="flex items-start justify-center gap-1 text-white">
                  <span className="text-sm font-medium mt-2">R$</span>
                  <span className="font-display font-bold text-5xl tracking-tighter">{plan.price}</span>
                  <span className="text-sm text-[#6B6B6B] self-end mb-2">/mês</span>
                </div>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px]">
                      <span className={`shrink-0 mt-0.5 ${feature.included ? 'text-[#E8400A]' : 'text-[#2A2A2A]'}`}>
                        <iconify-icon icon={feature.included ? "solar:check-circle-linear" : "solar:close-circle-linear"} width="18" />
                      </span>
                      <span className={feature.included ? (feature.extra ? 'text-white font-medium' : 'text-[#B0B0B0]') : 'text-[#6B6B6B] line-through decoration-[#2A2A2A]'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button 
                  fullWidth 
                  variant={plan.highlight ? 'primary' : 'secondary'}
                >
                  Quero esse plano
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-[#6B6B6B] text-[11px] uppercase tracking-wider flex flex-col gap-4">
          <p>Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
          <div className="inline-flex items-center justify-center gap-4 bg-surface border border-subtle px-6 py-3 mx-auto">
            <span className="text-white font-bold">OPÇÃO AVULSA: DIÁRIA R$ 39</span>
            <span>·</span>
            <span>Acesso por 1 dia</span>
            <span>·</span>
            <a href="#contato" className="text-[#E8400A] hover:text-white transition-colors underline decoration-[#E8400A]/30 underline-offset-4">AGENDAR</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;