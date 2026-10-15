import React from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function Pricing() {
  const plans = [
    {
      name: "Plano FREE",
      price: "290",
      features: [
        "Acesso à área de musculação",
        "Avaliação física inicial",
        "App APEX básico",
        "Armário durante o treino",
        "Wi-Fi e vestiários"
      ],
      cta: "Começar agora",
      highlight: false
    },
    {
      name: "Plano PLUS",
      price: "490",
      features: [
        "Tudo do plano Free",
        "2 aulas em grupo por semana",
        "Coach disponível no treino",
        "Protocolo personalizado",
        "Monitoramento de progresso",
        "Armário fixo mensal"
      ],
      cta: "Quero este plano",
      highlight: true
    },
    {
      name: "Plano ELITE",
      price: "890",
      features: [
        "Tudo do plano Plus",
        "Coach exclusivo dedicado",
        "Aulas ilimitadas",
        "Nutricionista parceiro",
        "Acesso à sauna e recuperação",
        "Prioridade em horários",
        "Convidado 1× por mês gratuito"
      ],
      cta: "Assinar Elite",
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#100F0F]">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <Badge className="mb-6 mx-auto" dotColor="#C8F135">Matrículas</Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
          Escolha seu plano <span className="text-gray-500">APEX</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Sem taxa de matrícula em março. Cancele quando quiser.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-8 items-center max-w-6xl">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-[32px] p-8 md:p-10 transition-transform duration-300 ${
              plan.highlight 
                ? 'bg-[#1A1A1A] border-2 border-[#C8F135] shadow-[0_0_40px_rgba(200,241,53,0.1)] lg:-translate-y-4' 
                : 'bg-[#151515] border border-white/10 hover:border-white/30'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C8F135] text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1 shadow-lg">
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon> Mais popular
              </div>
            )}
            
            <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-2xl font-bold text-gray-400">R$</span>
              <span className="text-5xl font-black tracking-tighter text-white">{plan.price}</span>
              <span className="text-sm font-medium text-gray-500 uppercase">/mês</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#4CAF76] mt-0.5 flex-shrink-0" width="18"></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.highlight ? 'primary' : 'secondary'} 
              className="w-full"
              icon={plan.highlight ? "solar:arrow-right-line-duotone" : null}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}