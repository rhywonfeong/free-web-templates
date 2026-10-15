import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function PricingSection() {
  const plans = [
    {
      name: 'Livre',
      price: '149',
      features: [
        'Acesso ilimitado 05H–23H',
        'Avaliação física de entrada',
        'Planilha de treino inicial',
        'App FORGEE'
      ],
      highlight: false
    },
    {
      name: 'Plus',
      price: '229',
      features: [
        'Tudo do Livre +',
        '2 sessões de Personal/mês',
        '1 aula Conditioning/semana',
        'Revisão de planilha a cada 4 semanas',
        'Acesso ao Mobility'
      ],
      highlight: false
    },
    {
      name: 'Elite',
      price: '389',
      badge: 'Mais Escolhido',
      features: [
        'Tudo do Plus +',
        '4 sessões Personal/mês',
        'Acesso ilimitado a todas as classes',
        'Bioimpedância mensal',
        'WhatsApp com coach dedicado'
      ],
      highlight: true
    }
  ]

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionLabel className="justify-center">Investimento</SectionLabel>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-6">
            Sem Matrícula.<br/>
            Sem Fidelidade.<br/>
            <span className="text-[#E8001C]">Sem Enrolação.</span>
          </h2>
          <p className="text-[#C8C8C8] text-base">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#141414] border-[#E8001C] shadow-glow-red' 
                  : 'bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#3D3D3D]'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E8001C] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-[#1A1A1A] pb-8">
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-start justify-center">
                  <span className="text-sm text-[#7A7A7A] font-bold mt-2 mr-1">R$</span>
                  <span className="font-display font-black text-6xl text-white tracking-tighter">{plan.price}</span>
                  <span className="text-sm text-[#7A7A7A] self-end mb-2 ml-1">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-[#C8C8C8]">
                    <iconify-icon icon="solar:check-circle-linear" width="20" className="text-[#00C2E0] mr-3 flex-shrink-0"></iconify-icon>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                fullWidth
                className={plan.highlight ? 'shadow-none' : ''}
              >
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-[#1A1A1A] p-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2 text-[#7A7A7A] mb-4 md:mb-0">
            <iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
            <span>Pagamento via PIX ou cartão (3× sem juros) · Plano anual com 15% de desconto</span>
          </div>
          <div className="flex items-center space-x-4 bg-[#0A0A0A] px-4 py-2 border border-[#3D3D3D]">
            <span className="text-white font-bold uppercase tracking-wide text-xs">Diária Avulsa: R$ 39</span>
            <button className="text-[#E8001C] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Agendar</button>
          </div>
        </div>

      </div>
    </section>
  )
}