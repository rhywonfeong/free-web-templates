import React, { useState } from 'react';
import clsx from 'clsx';

const faqs = [
  {
    q: "O que é o Brasea?",
    a: "Uma plataforma de aprendizado culinário profissional que combina aulas técnicas gravadas por chef com um assistente de IA disponível 24h para tirar dúvidas."
  },
  {
    q: "Quando o Brasea será lançado?",
    a: "Estamos em fase final de desenvolvimento. Quem entrar na lista espera será o primeiro a saber e terá acesso antecipado."
  },
  {
    q: "O que é preço fundador?",
    a: "Um preço especial de R$29,90/mês exclusivo para quem entrar na lista de espera. Esse valor fica travado para sempre enquanto a assinatura estiver ativa. O preço normal será R$39,90/mês."
  },
  {
    q: "Preciso instalar algum app?",
    a: "Não. O Brasea funciona direto no navegador do celular como um app. Sem download, sem ocupar espaço."
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Além disso, nos primeiros 7 dias você pode cancelar sem custo algum; garantia total."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-subtle last:border-0">
      <button 
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <h4 className={clsx("font-display font-medium text-lg transition-colors duration-200", isOpen ? "text-brand" : "text-light group-hover:text-brand/80")}>
          {question}
        </h4>
        <div className={clsx("w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ml-4", isOpen ? "border-brand text-brand rotate-180 bg-brand/10" : "border-strong text-muted")}>
          <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
        </div>
      </button>
      <div 
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted text-[15px] leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  // Original design requested all open on landing, but accordion is better UX for a full site. 
  // We'll leave the first one open by default.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-dark py-24 px-6 border-t border-subtle">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-light mb-10 text-center">
          Perguntas Frequentes
        </h2>
        
        <div className="bg-card rounded-2xl border-strong p-2 md:p-6 shadow-soft">
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