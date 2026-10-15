import React, { useState } from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

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
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#2A2A2A]">
      <div className="max-w-[768px] mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <SectionHeading 
            eyebrow="Dúvidas"
            title="PERGUNTAS DIRETAS."
            highlightWords={['DIRETAS.']}
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-b border-[#2A2A2A] pb-4 transition-colors duration-300`}
              >
                <button 
                  className="w-full text-left py-4 flex items-center justify-between group"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <h3 className={`font-display text-xl md:text-2xl tracking-wide uppercase transition-colors ${isOpen ? 'text-[#E8400A]' : 'text-white group-hover:text-[#B0B0B0]'}`}>
                    {faq.q}
                  </h3>
                  <iconify-icon 
                    icon={isOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} 
                    width="24" 
                    class={`transition-transform duration-300 ${isOpen ? 'text-[#E8400A]' : 'text-[#6B6B6B]'}`}
                  ></iconify-icon>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#B0B0B0] text-base leading-relaxed pl-2 border-l-2 border-[#E8400A]">
                    {faq.a}
                  </p>
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