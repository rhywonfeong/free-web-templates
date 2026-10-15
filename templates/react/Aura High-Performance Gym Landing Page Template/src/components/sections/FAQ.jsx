import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#252525]">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`font-display font-bold text-xl uppercase tracking-wide pr-8 transition-colors ${isOpen ? 'text-[#AAFF00]' : 'text-white group-hover:text-[#CCCCCC]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${isOpen ? 'border-[#AAFF00] bg-[#AAFF00] text-[#0D0F0A] rotate-45' : 'border-[#333333] text-white group-hover:border-white'}`}>
          <iconify-icon icon="solar:add-linear" class="text-xl"></iconify-icon>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#CCCCCC] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência prévia para me matricular?",
      a: "Não. Temos protocolos específicos para iniciantes. A avaliação inicial determina o ponto de partida adequado para você — independentemente do nível."
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim. Nenhum dos nossos planos exige fidelidade. O cancelamento é feito pelo app ou presencialmente, sem multa e sem burocracia."
    },
    {
      q: "O coach acompanha meu treino todos os dias?",
      a: "Depende do plano. No Elite, o acompanhamento é ilimitado. No Plus, são 4 sessões mensais com coach dedicado. No Livre, o acompanhamento pode ser contratado de forma avulsa."
    },
    {
      q: "Como funciona a avaliação inicial?",
      a: "É uma sessão de 60 minutos que inclui análise de composição corporal, teste de mobilidade, avaliação de força funcional e anamnese detalhada. Com base nela, seu protocolo é construído."
    },
    {
      q: "Os planos incluem nutrição?",
      a: "A consultoria nutricional está inclusa apenas no plano Elite. Para os demais planos, oferecemos consultoria avulsa com nossa nutricionista parceira."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <SectionHeader 
          tag="FAQ" 
          title="Respostas diretas." 
          subtitle="Para quem pensa antes de decidir."
          alignment="center"
        />

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;