import React from 'react'
import Button from './ui/Button'
import clsx from 'clsx'

const PricingSection = () => {
  const plans = [
    {
      name: 'Livre',
      price: '149',
      highlight: false,
      features: [
        { name: 'Acesso ilimitado 05H–23H', included: true },
        { name: 'Avaliação física de entrada', included: true },
        { name: 'Planilha de treino inicial', included: true },
        { name: 'App FORGEE', included: true },
        { name: '2 sessões de Personal/mês', included: false },
        { name: '1 aula Conditioning/semana', included: false },
        { name: 'Revisão de planilha a cada 4 sem', included: false },
        { name: 'Acesso ao Mobility', included: false },
      ]
    },
    {
      name: 'Plus',
      price: '229',
      highlight: true,
      badge: 'Mais Escolhido',
      features: [
        { name: 'Acesso ilimitado 05H–23H', included: true },
        { name: 'Avaliação física de entrada', included: true },
        { name: 'Planilha de treino inicial', included: true },
        { name: 'App FORGEE', included: true },
        { name: '2 sessões de Personal/mês', included: true },
        { name: '1 aula Conditioning/semana', included: true },
        { name: 'Revisão de planilha a cada 4 sem', included: true },
        { name: 'Acesso ao Mobility', included: true },
      ]
    },
    {
      name: 'Elite',
      price: '389',
      highlight: false,
      features: [
        { name: 'Acesso ilimitado 05H–23H', included: true },
        { name: 'Avaliação física de entrada', included: true },
        { name: 'Planilha de treino inicial', included: true },
        { name: 'App FORGEE', included: true },
        { name: '4 sessões de Personal/mês', included: true, highlightText: true },
        { name: 'Acesso ilimitado a classes', included: true, highlightText: true },
        { name: 'Bioimpedância mensal', included: true, highlightText: true },
        { name: 'WhatsApp com coach dedicado', included: true, highlightText: true },
      ]
    }
  ]

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-eyebrow block mb-6">Investimento</span>
          <h2 className="font-display font-black text-[40px] md:text-[64px] leading-[0.9] uppercase tracking-tighter mb-6">
            Sem matrícula.<br />
            Sem fidelidade.<br />
            <span className="text-[#E8400A]">Sem enrolação.</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-md mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-16">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={clsx(
                "bg-[#1E1E1E] p-8 border relative",
                plan.highlight ? "border-[#E8400A] md:-mt-4 md:mb-[-1rem] z-10 shadow-2xl shadow-[#E8400A]/5" : "border-[#2A2A2A]"
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-[#2A2A2A] pb-8">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white mb-2">{plan.name}</h3>
                <div className="flex justify-center items-start">
                  <span className="text-[#6B6B6B] text-sm mt-2 mr-1">R$</span>
                  <span className="font-display font-black text-6xl text-white tracking-tighter">{plan.price}</span>
                  <span className="text-[#6B6B6B] text-sm mt-auto mb-2 ml-1">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[320px]">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className={clsx(
                    "flex items-start text-sm",
                    feat.included ? "text-[#D9D9D9]" : "text-[#6B6B6B] opacity-50",
                    feat.highlightText && "font-medium text-[#E8400A]"
                  )}>
                    <iconify-icon 
                      icon={feat.included ? "solar:check-circle-linear" : "solar:close-circle-linear"} 
                      className={clsx("mr-3 mt-0.5 text-lg", feat.included ? "text-[#E8400A]" : "text-[#6B6B6B]")}
                    ></iconify-icon>
                    <span>{feat.name}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
              >
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center bg-[#181818] border border-[#2A2A2A] p-6 gap-6">
          <p className="text-[#6B6B6B] text-xs uppercase tracking-wider text-center md:text-left">
            Pagamento via PIX ou cartão (3× sem juros) <span className="hidden md:inline mx-2">·</span><br className="md:hidden"/> Cancelamento com 30 dias de aviso <span className="hidden md:inline mx-2">·</span><br className="md:hidden"/> Plano anual com 15% de desconto
          </p>
          <div className="flex items-center gap-4 border-t md:border-t-0 border-[#2A2A2A] pt-4 md:pt-0 w-full md:w-auto justify-between md:justify-end">
            <div>
              <span className="block font-display font-bold text-white uppercase tracking-tight">Diária: R$ 39</span>
              <span className="block text-[#6B6B6B] text-[10px] uppercase tracking-widest">Acesso por 1 dia</span>
            </div>
            <Button variant="ghost" className="!px-0 hover:!bg-transparent border-b border-[#E8400A] pb-1">Agendar</Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PricingSection