import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "189",
      desc: "Para quem quer acesso à estrutura com liberdade total de treino.",
      features: [
        "Acesso à estrutura completa",
        "Treino livre sem supervisão",
        "App APEX para controle de frequência",
        "Wi-Fi, estacionamento e vestiários"
      ],
      notIncluded: [
        "Protocolo individualizado",
        "Acompanhamento de coach",
        "Avaliação física"
      ],
      ctaText: "Começar com Livre",
      highlight: false
    },
    {
      name: "PLUS",
      badge: "⭐ Mais Escolhido",
      price: "289",
      desc: "Para quem quer resultado de verdade, com método e acompanhamento.",
      features: [
        "Tudo do plano Livre",
        "Protocolo de treino individualizado",
        "Avaliação física bimestral",
        "2 sessões mensais com coach",
        "Revisão de protocolo a cada 4 semanas",
        "Acesso prioritário a workshops"
      ],
      notIncluded: [],
      ctaText: "Quero o Plus",
      highlight: true
    },
    {
      name: "ELITE",
      price: "489",
      desc: "A experiência máxima da APEX. Para quem não aceita menos que o seu melhor.",
      features: [
        "Tudo do plano Plus",
        "Acompanhamento ilimitado com coach",
        "Avaliação mensal InBody",
        "Planejamento nutricional integrado",
        "Acesso VIP 6h–23h (7 dias)",
        "Consulta com fisiologista",
        "Área exclusiva de recuperação"
      ],
      notIncluded: [],
      ctaText: "Quero o Elite",
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 lg:py-32 bg-white text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Badge className="mb-4 mx-auto">PLANOS</Badge>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6">
            Escolha o seu<br />nível de compromisso.
          </h2>
          <p className="text-lg text-[#5C554E]">
            Sem taxa de matrícula em qualquer plano. Sem fidelidade no primeiro mês.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 flex flex-col h-full
                ${plan.highlight 
                  ? 'border-2 border-[#FF8000] shadow-[0_8px_32px_rgba(255,128,0,0.15)] scale-100 lg:scale-105 z-10' 
                  : 'border border-gray-200 shadow-sm'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF8000] text-[#2B2B2B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xl font-medium text-[#5C554E]">R$</span>
                  <span className="font-display text-5xl font-black">{plan.price}</span>
                  <span className="text-[#5C554E]">/mês</span>
                </div>
                <p className="text-[#5C554E] text-sm h-10">{plan.desc}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <iconify-icon icon="solar:check-circle-bold" width="20" style={{ color: '#FF8000', flexShrink: 0 }}></iconify-icon>
                      <span className="text-[#2B2B2B] font-medium">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                    <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                      <iconify-icon icon="solar:close-circle-linear" width="20" style={{ color: '#9E9488', flexShrink: 0 }}></iconify-icon>
                      <span className="text-[#5C554E] line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlight ? "primary" : "outlineBlack"} 
                className="w-full"
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto border-t border-gray-200 pt-12">
          <p className="text-sm text-[#5C554E] mb-8">
            Todos os planos incluem: acesso biométrico, app de controle, Wi-Fi, estacionamento e café artesanal.<br/>
            Não há taxa de matrícula. Cancele a qualquer momento após o 1º mês.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="black">Falar com um especialista</Button>
            <Button variant="outlineBlack">Agendar visita gratuita</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;