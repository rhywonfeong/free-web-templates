import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const PricingSection = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      period: "/mês",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ],
      featured: false
    },
    {
      name: "PLUS",
      price: "229",
      period: "/mês",
      badge: "Mais Escolhido",
      features: [
        "Tudo do plano Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão planilha a cada 4 semanas",
        "Acesso ao Mobility"
      ],
      featured: true
    },
    {
      name: "ELITE",
      price: "389",
      period: "/mês",
      features: [
        "Tudo do plano Plus +",
        "4 sessões Personal/mês",
        "Acesso ilimitado a classes",
        "Bioimpedância mensal",
        "WhatsApp com coach dedicado"
      ],
      featured: false
    }
  ]

  return (
    <section id="planos" className="py-32 px-6 md:px-12 bg-[#1C1C1C]">
      <div className="max-w-[1440px] mx-auto text-center mb-20">
        <SectionHeading 
          subtitle="Investimento"
          title="SEM MATRÍCULA. *SEM FIDELIDADE.* SEM ENROLAÇÃO."
          className="items-center mb-6"
        />
        <p className="text-[#BFBFBF] max-w-xl mx-auto">
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa. O foco aqui é o treino, não o contrato.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col p-8 transition-transform duration-300 ${
              plan.featured 
                ? 'bg-[#0D0D0D] border-t-4 border-[#E8190F] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:-translate-y-4 z-10' 
                : 'bg-[#0D0D0D] border border-[#2E2E2E] mt-0'
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0 bg-[#E8190F] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 -translate-y-full">
                {plan.badge}
              </div>
            )}
            
            <h3 className="font-display text-3xl tracking-widest text-white mb-2">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-xl text-[#808080] font-bold pb-2">R$</span>
              <span className="font-display text-6xl text-white">{plan.price}</span>
              <span className="text-[#808080] font-medium pb-2">{plan.period}</span>
            </div>

            <div className="flex-grow">
              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#BFBFBF]">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#E8190F] text-lg shrink-0 mt-0.5"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
              Quero esse plano
            </Button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center border-t border-[#2E2E2E] pt-8">
        <p className="text-[#808080] text-sm mb-4">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </p>
        <div className="inline-flex items-center gap-4 bg-[#0D0D0D] px-6 py-3 border border-[#2E2E2E]">
          <span className="font-bold text-white tracking-widest text-sm uppercase">Opção Avulsa: Diária R$39</span>
          <span className="w-1 h-1 bg-[#808080] rounded-full"></span>
          <a href="#" className="text-[#E8190F] text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">Agendar</a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection