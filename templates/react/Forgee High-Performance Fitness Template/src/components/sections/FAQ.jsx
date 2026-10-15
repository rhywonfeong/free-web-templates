import React, { useState } from 'react';
import clsx from 'clsx';
import SectionHeader from '../ui/SectionHeader';

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso ter experiência com treino para me matricular na Forgee?",
      a: "Não. A Forgee atende desde iniciantes completos até atletas de alto rendimento. O que muda é o protocolo prescrito. Nossa avaliação inicial identifica exatamente onde você está — e a partir daí construímos o caminho certo para o seu nível e objetivo."
    },
    {
      q: "Como funciona a visita gratuita?",
      a: "Você agenda pelo site ou WhatsApp, vem no horário combinado e faz um tour completo pela estrutura com um dos nossos coaches. Sem pitch de vendas, sem pressão. Você conhece o espaço, tira todas as dúvidas e decide com calma. A visita dura em média 40 minutos."
    },
    {
      q: "Existe contrato de fidelidade?",
      a: "Não. Nenhum plano exige contrato mínimo de permanência. Você pode cancelar a qualquer momento, sem multa e sem burocracia. Acreditamos que a Forgee deve se manter pelo resultado que entrega — não por cláusulas contratuais."
    },
    {
      q: "O plano Plus inclui personal trainer?",
      a: "O Plus inclui 4 sessões mensais de acompanhamento com um coach da equipe — que é diferente de personal trainer dedicado. Nas sessões de acompanhamento, o coach revisa sua execução, ajusta cargas e orienta a progressão. Personal trainer com dedicação exclusiva é exclusividade do plano Elite."
    },
    {
      q: "Como funciona o app Forgee?",
      a: "O app Forgee permite check-in digital, acesso ao seu protocolo de treinamento, registro de cargas e progressão, comunicação com seu coach e acompanhamento de metas. Disponível para iOS e Android, incluso em todos os planos."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0F0D0B]">
      <div className="max-w-[800px] mx-auto px-5 md:px-12">
        <SectionHeader 
          theme="dark"
          align="center"
          eyebrow="FAQ"
          title="PERGUNTAS QUE TODO MUNDO FAZ."
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={clsx(
                  "border rounded-[16px] transition-all duration-300 overflow-hidden",
                  isOpen ? "bg-[#1E1B18] border-[#E84E0F]/30" : "bg-transparent border-[#1E1B18] hover:border-white/20"
                )}
              >
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between outline-none focus-visible:bg-white/5"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <span className={clsx(
                    "font-bold text-[16px] pr-8 transition-colors",
                    isOpen ? "text-white" : "text-[#E6E3E0]"
                  )}>
                    {faq.q}
                  </span>
                  <iconify-icon 
                    icon={isOpen ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                    class={clsx(
                      "text-[24px] transition-transform duration-300 shrink-0",
                      isOpen ? "text-[#E84E0F] rotate-180" : "text-[#8A837C] rotate-0"
                    )}
                  />
                </button>
                
                <div className={clsx(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[#B0AAA4] text-[15px] leading-[1.6]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;