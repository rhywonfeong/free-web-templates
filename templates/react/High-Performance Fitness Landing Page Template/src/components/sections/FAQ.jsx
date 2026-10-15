import React, { useState } from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';
import { clsx } from 'clsx';

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso ter experiência prévia para treinar na Forge?",
      a: "Não. Atendemos desde iniciantes até atletas de alta performance. A avaliação inicial define o ponto de partida certo para cada perfil."
    },
    {
      q: "Como funciona a visita gratuita?",
      a: "Você agenda online ou por telefone, visita o espaço com um de nossos coaches, conhece a estrutura e entende como o protocolo funciona — sem compromisso."
    },
    {
      q: "Posso trocar de plano depois de me matricular?",
      a: "Sim. O upgrade ou downgrade pode ser feito a qualquer momento, com ajuste proporcional na próxima cobrança."
    },
    {
      q: "A academia tem horário fixo de funcionamento?",
      a: "Funcionamos de segunda a sexta das 5h30 às 23h, sábado das 7h às 20h e domingo das 8h às 14h. Alunos Elite têm acesso estendido via app."
    },
    {
      q: "Os planos têm fidelidade?",
      a: "Não. Todos os planos são mensais e sem multa de cancelamento. Acreditamos que você deve ficar por resultado, não por contrato."
    },
    {
      q: "O protocolo inclui orientação nutricional?",
      a: "O plano Elite inclui orientação de suplementação e estratégias nutricionais. Para acompanhamento nutricional completo, trabalhamos com nutricionistas parceiros com condições especiais para alunos."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <Eyebrow className="justify-center">Perguntas frequentes</Eyebrow>
          <Headline>Respondemos as principais dúvidas.</Headline>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={clsx(
                  "border rounded-lg overflow-hidden transition-all duration-300",
                  isOpen ? "bg-[#181818] border-[#FF3A00]" : "bg-[#111111] border-[#2A2A2A] hover:border-[#3D3D3D]"
                )}
              >
                <button 
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <span className={clsx("font-display uppercase tracking-wide", isOpen ? "text-[#F5F5F5]" : "text-[#CCCCCC]")}>
                    {faq.q}
                  </span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={clsx("text-xl transition-transform duration-300", isOpen ? "rotate-180 text-[#FF3A00]" : "text-[#888888]")}
                  ></iconify-icon>
                </button>
                <div 
                  className={clsx(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-[#888888] text-sm leading-relaxed border-l-2 border-[#FF5A1A] pl-4">
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