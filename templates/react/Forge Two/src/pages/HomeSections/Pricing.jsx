import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';

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
        { name: "Revisão planilha cada 4 sem.", included: false },
        { name: "Acesso ao Mobility", included: false },
        { name: "WhatsApp com coach dedicado", included: false },
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
        { name: "Revisão planilha cada 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "WhatsApp com coach dedicado", included: false },
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
        { name: "4 sessões de Personal/mês", included: true },
        { name: "Acesso ilimitado a classes", included: true },
        { name: "Revisão planilha cada 4 sem.", included: true },
        { name: "Acesso ao Mobility", included: true },
        { name: "WhatsApp com coach dedicado", included: true },
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading 
            eyebrow="Investimento"
            title="SEM MATRÍCULA. SEM FIDELIDADE. SEM ENROLAÇÃO."
            highlightWords={['ENROLAÇÃO.']}
          />
          <p className="text-[#B0B0B0] text-lg mt-[-1rem]">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 border ${
                plan.highlight 
                  ? 'bg-[#1E1E1E] border-[#E8400A] shadow-2xl shadow-[#E8400A]/5' 
                  : 'bg-[#111111] border-[#2A2A2A]'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] text-white text-[10px] uppercase font-bold tracking-widest py-1 px-4">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8 border-b border-[#2A2A2A] pb-8">
                <h3 className="font-display text-2xl uppercase tracking-widest text-[#B0B0B0] mb-4">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-start">
                  <span className="text-[#6B6B6B] font-display text-xl mt-2 mr-1">R$</span>
                  <span className="font-display font-bold text-6xl text-white tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-[#6B6B6B] text-sm self-end mb-2 ml-1">/mês</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    {feature.included ? (
                      <iconify-icon icon="solar:check-circle-linear" width="20" class="text-[#E8400A] mr-3 flex-shrink-0"></iconify-icon>
                    ) : (
                      <iconify-icon icon="solar:close-circle-linear" width="20" class="text-[#3A3A3A] mr-3 flex-shrink-0"></iconify-icon>
                    )}
                    <span className={feature.included ? 'text-[#D9D9D9]' : 'text-[#6B6B6B] line-through'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full text-sm py-4"
              >
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#2A2A2A] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6B6B6B] text-xs uppercase tracking-widest text-center md:text-left">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias · Plano anual 15% OFF
          </p>
          <div className="flex items-center space-x-4 bg-[#1E1E1E] px-6 py-3 border border-[#2A2A2A]">
            <span className="font-display text-[#E8400A] font-bold text-xl tracking-wider">DIÁRIA: R$ 39</span>
            <span className="text-[#6B6B6B] text-xs uppercase tracking-widest border-l border-[#3A3A3A] pl-4">Acesso por 1 dia</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;