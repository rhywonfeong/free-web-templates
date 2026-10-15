import React from 'react';
import Button from '../ui/Button';
import { clsx } from 'clsx';

export default function Pricing() {
  const plans = [
    {
      name: 'LIVRE',
      price: '149',
      features: [
        'Acesso ilimitado · 05H–23H',
        'Avaliação física de entrada',
        'Planilha de treino inicial',
        'App FORGEE'
      ],
      highlight: false
    },
    {
      name: 'PLUS',
      badge: 'MAIS ESCOLHIDO',
      price: '229',
      features: [
        'Tudo do Livre +',
        '2 sessões de Personal/mês',
        '1 aula Conditioning/semana',
        'Revisão planilha 4 semanas',
        'Acesso ao Mobility'
      ],
      highlight: true
    },
    {
      name: 'ELITE',
      price: '389',
      features: [
        'Tudo do Plus +',
        '4 sessões Personal/mês',
        'Acesso ilimitado classes',
        'Bioimpedância mensal',
        'WhatsApp coach dedicado'
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111]" id="planos">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4 text-center">INVESTIMENTO</div>
        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight text-center max-w-2xl mb-6">
          SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.
        </h2>
        <p className="text-[#CCCCCC] text-base md:text-lg font-medium text-center mb-16">
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "flex flex-col p-8 rounded-lg relative",
                plan.highlight 
                  ? "bg-[#1A1A1A] border-t-4 border-x border-b border-x-[#2C2C2C] border-b-[#2C2C2C] border-t-[#F46A17] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transform md:-translate-y-4" 
                  : "bg-[#111111] border border-[#2C2C2C]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F46A17] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="font-display font-semibold text-2xl uppercase tracking-wider text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#2C2C2C]">
                <span className="text-[#888888] font-bold">R$</span>
                <span className="font-display font-black text-5xl text-white tracking-tighter">{plan.price}</span>
                <span className="text-[#888888] font-bold">/ mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-[#CCCCCC] text-sm font-medium">
                    <span className="text-[#3DBA6F] mt-0.5">■</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button variant={plan.highlight ? 'primary' : 'outline'} className="w-full">
                QUERO ESSE PLANO
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center gap-2 text-[10px] md:text-xs font-bold text-[#888888] tracking-widest uppercase max-w-3xl border-t border-[#1F1F1F] pt-8 w-full">
          <span>PAGAMENTO VIA PIX OU CARTÃO (3× SEM JUROS) · CANCELAMENTO COM 30 DIAS DE AVISO · PLANO ANUAL COM 15% DE DESCONTO</span>
          <span>DIÁRIA: R$ 39 · ACESSO POR 1 DIA · <a href="#" className="text-[#F46A17] hover:underline">AGENDAR</a></span>
        </div>

      </div>
    </section>
  );
}