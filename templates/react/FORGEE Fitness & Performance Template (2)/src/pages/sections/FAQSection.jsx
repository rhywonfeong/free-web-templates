import React, { useState } from 'react';
import { Label, H2, SectionMarker } from '../../components/Typography';
import clsx from 'clsx';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Preciso ter experiência?',
      a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.'
    },
    {
      q: 'Posso treinar sozinho?',
      a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.'
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.'
    },
    {
      q: 'Posso visitar antes de assinar?',
      a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-[#F5F3EF]">
      <div className="max-w-[1600px] mx-auto">
        <SectionMarker current="07" total="09" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <Label className="mb-6">Dúvidas</Label>
            <H2>PERGUNTAS<br/>DIRETAS</H2>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-[#1A1812]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#D6CFC5]">
                  <button 
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[#6B6259] transition-colors pr-8">
                      {faq.q}
                    </span>
                    <iconify-icon 
                      icon={openIdx === i ? "solar:minus-linear" : "solar:add-linear"} 
                      class="text-2xl shrink-0 transition-transform duration-300"
                    ></iconify-icon>
                  </button>
                  <div className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openIdx === i ? "max-h-[200px] pb-8 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-[#6B6259] text-sm md:text-base leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}