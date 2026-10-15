import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { clsx } from 'clsx';

const Pricing = () => {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ],
      highlight: false
    },
    {
      name: "PLUS",
      badge: "MAIS ESCOLHIDO",
      price: "229",
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal / mês",
        "1 aula Conditioning / semana",
        "Revisão planilha 4 semanas",
        "Acesso ao Mobility"
      ],
      highlight: true
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        "Tudo do Plus +",
        "4 sessões Personal / mês",
        "Acesso ilimitado classes",
        "Bioimpedância mensal",
        "WhatsApp coach dedicado"
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading 
          label="INVESTIMENTO"
          title={"SEM MATRÍCULA.\nSEM FIDELIDADE.\nSEM ENROLAÇÃO."}
          description="Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "flex flex-col p-8 lg:p-10 relative",
                plan.highlight 
                  ? "bg-[#1A1A1A] border-t-4 border-[#E02020] shadow-2xl scale-100 md:scale-105 z-10" 
                  : "bg-[#111111] border border-[#2E2E2E]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E02020] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold tracking-widest text-neutral-400 mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl text-white font-bold">R$</span>
                <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                <span className="text-neutral-500 font-medium">/mês</span>
              </div>

              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#E02020]" width="18"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full py-4 text-xs"
              >
                QUERO ESSE PLANO
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-6 border border-[#2E2E2E] bg-[#111111] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm text-neutral-400 tracking-wide">
              Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso
            </p>
            <p className="text-xs text-[#E02020] font-bold tracking-widest">
              * PLANO ANUAL COM 15% DE DESCONTO
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 border border-[#2E2E2E]">
            <div>
              <span className="block text-[10px] text-neutral-500 tracking-widest uppercase mb-1">Opção Avulsa</span>
              <span className="text-white font-bold text-sm tracking-widest">DIÁRIA: R$ 39</span>
            </div>
            <Button variant="ghost" className="border-l border-[#2E2E2E] pl-4 py-0 text-xs text-[#E02020]">AGENDAR</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;