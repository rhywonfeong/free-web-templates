import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const PricingSection = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ]
    },
    {
      name: "PLUS",
      price: "229",
      highlight: true,
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão de planilha a cada 4 semanas",
        "Acesso ao Mobility"
      ]
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        "Tudo do Plus +",
        "4 sessões de Personal/mês",
        "Acesso ilimitado a todas as classes",
        "Bioimpedância mensal",
        "WhatsApp com coach dedicado"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <SectionHeader 
          eyebrow="Investimento"
          title="SEM MATRÍCULA.\nSEM FIDELIDADE.\nSEM ENROLAÇÃO."
          subtitle="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlight 
                  ? 'border-2 border-[#BFFF00] bg-surface shadow-[0_8px_32px_rgba(191,255,0,0.05)] md:-translate-y-4' 
                  : 'border border-subtle bg-void'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="acid" className="px-4">MAIS ESCOLHIDO</Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold tracking-wide uppercase text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-medium text-[#888780]">R$</span>
                  <span className="text-5xl font-semibold tabular-nums text-white tracking-tight">{plan.price}</span>
                </div>
                <span className="text-[#888780] text-sm">por mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#BFFF00] text-lg shrink-0 mt-[-1px]"></iconify-icon>
                    <span className="text-white/90">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">
                QUERO ESSE PLANO
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-subtle">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-[#888780] text-sm">
            <span>Pagamento via PIX ou cartão (3× sem juros)</span>
            <span className="hidden md:inline">·</span>
            <span>Cancelamento com 30 dias de aviso</span>
            <span className="hidden md:inline">·</span>
            <span>Plano anual com 15% de desconto</span>
          </div>

          <div className="flex items-center gap-4 bg-surface px-6 py-3 rounded-full border border-subtle">
            <span className="text-sm text-white font-medium">DIÁRIA: R$39</span>
            <span className="w-px h-4 bg-white/20"></span>
            <button className="text-[#BFFF00] text-sm font-semibold hover:text-white transition-colors">AGENDAR DIÁRIA</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;