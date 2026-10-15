import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter uppercase mb-16 text-center">
          PERGUNTAS<br /><span className="text-[#FF1E00]">DIRETAS.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border transition-all duration-300 cursor-pointer rounded-none bg-[#111] ${openIndex === idx ? 'border-[#FF1E00]' : 'border-[#222] hover:border-[#444]'}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <h4 className={`font-display text-xl md:text-2xl font-bold tracking-wide uppercase pr-8 ${openIndex === idx ? 'text-white' : 'text-[#D9D9D9]'}`}>
                  {faq.q}
                </h4>
                <iconify-icon 
                  icon={openIndex === idx ? "solar:minus-circle-bold" : "solar:add-circle-line-duotone"} 
                  class={`text-2xl transition-colors ${openIndex === idx ? 'text-[#FF1E00]' : 'text-[#636363]'}`}
                ></iconify-icon>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 px-6 md:px-8 ${openIndex === idx ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <p className="text-[#737069] text-base leading-relaxed">
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