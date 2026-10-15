import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function PlansSection() {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      popular: false,
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: false },
        { name: "1 aula Conditioning/semana", included: false },
        { name: "Revisão de planilha 4 sem.", included: false },
        { name: "Acesso ao Mobility", included: false },
        { name: "4 sessões de Personal/mês", included: false },
        { name: "Acesso ilimitado a classes", included: false },
        { name: "Bioimpedância mensal", included: false },
        { name: "WhatsApp coach dedicado", included: false }
      ]
    },
    {
      name: "PLUS",
      price: "229",
      popular: true,
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: true },
        { name: "1 aula Conditioning/semana", included: true },
        { name: "Revisão de planilha 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "4 sessões de Personal/mês", included: false },
        { name: "Acesso ilimitado a classes", included: false },
        { name: "Bioimpedância mensal", included: false },
        { name: "WhatsApp coach dedicado", included: false }
      ]
    },
    {
      name: "ELITE",
      price: "389",
      popular: false,
      features: [
        { name: "Acesso ilimitado 05H–23H", included: true },
        { name: "Avaliação física de entrada", included: true },
        { name: "Planilha de treino inicial", included: true },
        { name: "App FORGEE", included: true },
        { name: "2 sessões de Personal/mês", included: false }, // Replaced by 4
        { name: "1 aula Conditioning/semana", included: false }, // Replaced by unlimited
        { name: "Revisão de planilha 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "4 sessões de Personal/mês", included: true },
        { name: "Acesso ilimitado a classes", included: true },
        { name: "Bioimpedância mensal", included: true },
        { name: "WhatsApp coach dedicado", included: true }
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 px-6 border-t border-[#1E1E1E]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeader 
            eyebrow="Investimento" 
            title={<>SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/><span className="text-[#E8400A]">SEM ENROLAÇÃO.</span></>}
            description="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
          />
          
          <div className="bg-[#111111] border border-[#2A2A2A] p-4 flex items-center justify-between gap-6 min-w-[300px]">
            <div>
              <p className="text-[10px] text-[#E8400A] uppercase tracking-widest font-medium mb-1">Opção Avulsa</p>
              <p className="text-white font-display text-xl">DIÁRIA: R$ 39</p>
              <p className="text-[#6B6B6B] text-[12px]">Acesso completo por 1 dia</p>
            </div>
            <Button variant="ghost" size="sm" className="border border-[#2A2A2A]">Agendar</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`flex flex-col bg-[#111111] p-8 border relative transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-[#E8400A]' : 'border-[#1E1E1E]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3">
                  Mais Escolhido
                </div>
              )}
              
              <div className="mb-8 border-b border-[#1E1E1E] pb-8">
                <h3 className="text-white font-display text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#B0B0B0] text-sm">R$</span>
                  <span className="text-white font-display text-5xl">{plan.price}</span>
                  <span className="text-[#6B6B6B] text-sm">/mês</span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 flex-grow mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <iconify-icon 
                      icon={feat.included ? "solar:check-circle-bold" : "solar:close-circle-linear"} 
                      class={feat.included ? "text-[#E8400A] text-lg shrink-0" : "text-[#2A2A2A] text-lg shrink-0"}
                    ></iconify-icon>
                    <span className={`text-[13px] ${feat.included ? "text-[#B0B0B0]" : "text-[#6B6B6B] line-through decoration-[#2A2A2A]"}`}>
                      {feat.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-[#6B6B6B] text-[12px] flex flex-wrap justify-center gap-2">
          <span>Pagamento via PIX ou cartão (3× sem juros)</span>
          <span className="hidden sm:inline">·</span>
          <span>Cancelamento com 30 dias de aviso</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-[#B0B0B0]">Plano anual com 15% de desconto</span>
        </div>
      </div>
    </section>
  );
}