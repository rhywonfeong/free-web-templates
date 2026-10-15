import React, { useState } from 'react';
import clsx from 'clsx';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Preciso ter experiência?", a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual." },
    { q: "Posso treinar sozinho?", a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima." },
    { q: "Como funciona o cancelamento?", a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória." },
    { q: "Posso visitar antes de assinar?", a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita." }
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-4 block">Dúvidas</span>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
          Perguntas Diretas.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="border-b border-white/10 last:border-0"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <h3 className={clsx(
                "font-display uppercase tracking-widest text-lg md:text-xl transition-colors",
                openIndex === idx ? "text-[#E8280D]" : "text-white group-hover:text-neutral-300"
              )}>
                {faq.q}
              </h3>
              <div className={clsx(
                "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
                openIndex === idx ? "border-[#E8280D] bg-[#E8280D]/10 text-[#E8280D]" : "border-white/20 text-white group-hover:border-white/40"
              )}>
                <iconify-icon icon={openIndex === idx ? "solar:minus-linear" : "solar:add-linear"} class="text-lg"></iconify-icon>
              </div>
            </button>
            <div 
              className={clsx(
                "grid transition-all duration-300 ease-in-out",
                openIndex === idx ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-neutral-400 leading-relaxed pr-12">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;