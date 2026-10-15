import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { clsx } from 'clsx';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência?",
      a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
    },
    {
      q: "Posso treinar sozinho?",
      a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
    },
    {
      q: "Como funciona o cancelamento?",
      a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
    },
    {
      q: "Posso visitar antes de assinar?",
      a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeading 
            label="DÚVIDAS"
            title={"PERGUNTAS\nDIRETAS."}
          />
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "border border-[#2E2E2E] bg-[#111111] transition-all duration-300",
                openIdx === idx ? "border-[#E02020]" : "hover:border-neutral-500"
              )}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className="text-lg font-bold text-white tracking-wide">{faq.q}</span>
                <iconify-icon 
                  icon={openIdx === idx ? "solar:minus-square-linear" : "solar:add-square-linear"} 
                  className={clsx("transition-colors", openIdx === idx ? "text-[#E02020]" : "text-neutral-500")}
                  width="24"
                ></iconify-icon>
              </button>
              
              <div 
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  openIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-[#2E2E2E] pt-4 mt-2 mx-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;