import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const FAQSection = () => {
  const faqs = [
    {
      q: "Preciso ter experiência para treinar aqui?",
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
    },
    {
      q: "Os planos têm fidelidade?",
      a: "Nenhuma. Você assina, cancela e muda de plano sem contrato mínimo. Só pedimos 30 dias de aviso."
    },
    {
      q: "Tem estacionamento?",
      a: "Sim. Estacionamento gratuito para todos os alunos, disponível durante todo o horário de funcionamento."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        
        <SectionHeader 
          eyebrow="Dúvidas"
          title="PERGUNTAS\nDIRETAS."
          align="center"
          className="mb-16"
        />

        <div className="flex flex-col gap-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border border-subtle rounded-2xl overflow-hidden transition-all duration-300 bg-void ${
                  isOpen ? 'border-[#BFFF00]/30 shadow-[0_4px_20px_rgba(191,255,0,0.03)]' : ''
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? 'text-[#BFFF00]' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`text-xl text-[#888780] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#BFFF00]' : ''}`}
                  ></iconify-icon>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 border-l-2 border-[#BFFF00] mx-6">
                      <p className="text-[#888780] text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button>FALAR COM ESPECIALISTA</Button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;