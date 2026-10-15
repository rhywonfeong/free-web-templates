import React from 'react';
import { Label, H2, SectionMarker } from '../../components/Typography';
import clsx from 'clsx';

export default function PlansSection() {
  const plans = [
    {
      name: 'LIVRE',
      price: '149',
      features: ['Acesso ilimitado 05H–23H', 'Avaliação física de entrada', 'Planilha de treino inicial', 'App FORGEE'],
      popular: false
    },
    {
      name: 'PLUS',
      price: '229',
      features: ['Tudo do Livre +', '2 sessões de Personal/mês', '1 aula Conditioning/semana', 'Revisão planilha 4 semanas', 'Acesso ao Mobility'],
      popular: true
    },
    {
      name: 'ELITE',
      price: '389',
      features: ['Tudo do Plus +', '4 sessões Personal/mês', 'Acesso ilimitado classes', 'Bioimpedância mensal', 'WhatsApp coach dedicado'],
      popular: false
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionMarker current="05" total="09" />
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <Label className="mb-6">Investimento</Label>
          <H2>SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.</H2>
        </div>
        <p className="text-[#6B6259] max-w-sm mt-4 lg:mt-12">
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, i) => (
          <div key={i} className={clsx(
            "border flex flex-col p-8 md:p-12 transition-all duration-300 relative",
            plan.popular ? "border-[#1A1812] shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white" : "border-[#D6CFC5] bg-[#F5F3EF]"
          )}>
            {plan.popular && (
               <div className="absolute top-0 right-0 bg-[#1A1812] text-[#F5F3EF] text-[10px] uppercase tracking-[0.2em] px-4 py-2 font-medium">
                 Mais Escolhido
               </div>
            )}
            <div className="mb-12">
              <h3 className="text-xl font-bold tracking-widest uppercase mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-[#6B6259]">R$</span>
                <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                <span className="text-sm font-medium text-[#6B6259]">/mês</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#1A1812]">
                  <iconify-icon icon="solar:check-read-linear" class="text-[#A09688] mt-0.5 shrink-0" width="18"></iconify-icon>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={clsx(
              "w-full py-4 text-xs font-semibold uppercase tracking-widest transition-colors border",
              plan.popular 
                ? "bg-[#1A1812] text-[#F5F3EF] border-[#1A1812] hover:bg-[#2D3A2E]" 
                : "bg-transparent text-[#1A1812] border-[#1A1812] hover:bg-[#1A1812] hover:text-[#F5F3EF]"
            )}>
              Quero Esse Plano
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-[#D6CFC5] bg-[#EDE9E3] gap-6">
        <div className="text-xs text-[#6B6259] uppercase tracking-wider leading-relaxed max-w-2xl">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </div>
        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-[#D6CFC5] pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
           <div>
             <span className="block text-[10px] uppercase tracking-widest text-[#6B6259]">Opção Avulsa</span>
             <span className="text-sm font-bold tracking-wider">DIÁRIA: R$ 39</span>
           </div>
           <button className="text-xs font-bold uppercase tracking-widest border-b border-[#1A1812] pb-1 hover:text-[#6B6259] hover:border-[#6B6259] transition-colors ml-auto md:ml-0">
             Agendar
           </button>
        </div>
      </div>
    </section>
  );
}