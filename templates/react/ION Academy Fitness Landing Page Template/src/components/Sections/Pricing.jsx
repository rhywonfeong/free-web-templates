import React from 'react';
import Button from '../UI/Button';

const plans = [
  {
    name: "Livre",
    price: "149",
    features: [
      "Acesso ilimitado 05H–23H",
      "Avaliação física de entrada",
      "Planilha de treino inicial",
      "App ION"
    ]
  },
  {
    name: "Plus",
    price: "229",
    highlight: true,
    tag: "Mais Escolhido",
    features: [
      "Tudo do Livre +",
      "2 sessões de Personal/mês",
      "1 aula Conditioning/semana",
      "Revisão de planilha a cada 4 semanas",
      "Acesso ao Mobility"
    ]
  },
  {
    name: "Elite",
    price: "389",
    features: [
      "Tudo do Plus +",
      "4 sessões Personal/mês",
      "Acesso ilimitado às classes",
      "Bioimpedância mensal",
      "WhatsApp com coach dedicado"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter uppercase text-neutral-50 mb-6 leading-[1.1]">
            Sem matrícula. Sem fidelidade.<br/>
            <span className="text-brand-green">Sem enrolação.</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            // Enforcing DS: 16px radius for cards, primary glow
            <div 
              key={idx} 
              className={`relative bg-neutral-950 p-8 rounded-2xl flex flex-col h-full border transition-all duration-300 ${
                plan.highlight 
                  ? 'border-brand-green shadow-glow-primary md:-translate-y-4' 
                  : 'border-neutral-800 hover:border-neutral-600'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-neutral-950 text-[11px] font-bold uppercase px-4 py-1.5 tracking-widest rounded-[4px]">
                  {plan.tag}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-display font-extrabold uppercase tracking-tighter text-neutral-200 mb-2">Plano {plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-brand-green font-black text-2xl">R$</span>
                  <span className="text-6xl font-display font-black text-neutral-50 tracking-tighter">{plan.price}</span>
                  <span className="text-neutral-500 text-sm font-medium">/mês</span>
                </div>
              </div>
              
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-200">
                    <iconify-icon icon="solar:check-circle-linear" class="text-brand-green shrink-0 mt-0.5" width="20"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
              >
                Quero Esse Plano
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-xs text-center md:text-left leading-relaxed">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </p>
          <div className="bg-neutral-850 px-6 py-3 rounded-[24px] border border-neutral-800 flex items-center gap-4 text-sm hover:border-brand-blue transition-colors">
            <span className="text-neutral-400 uppercase tracking-widest text-[10px] font-semibold">Opção Avulsa:</span>
            <span className="text-neutral-50 font-black tracking-tight">DIÁRIA: R$ 39</span>
            <a href="#" className="text-brand-blue font-bold tracking-widest text-[11px] hover:text-brand-blue/80 hover:underline transition-colors">AGENDAR</a>
          </div>
        </div>
      </div>
    </section>
  );
}