import React, { useState } from 'react';

const faqs = [
  {
    q: 'Preciso ter experiência?',
    a: 'Não. O ponto de partida é individual através da avaliação inicial. Construímos a base que você precisa para evoluir com segurança.'
  },
  {
    q: 'Posso treinar sozinho?',
    a: 'Sim, a maioria treina de forma autônoma com planilha estruturada e suporte pontual dos coaches no salão.'
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'Aviso prévio de 30 dias diretamente pelo app ou na recepção. Sem multas, sem taxas ocultas, sem burocracia.'
  },
  {
    q: 'Posso visitar antes?',
    a: 'Sim, agende pelo site para uma visita guiada e uma aula experimental gratuita para sentir o ambiente.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center uppercase">
          Direto ao ponto.
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border transition-colors duration-300 ${
                openIdx === idx ? 'border-[#00F9E4] bg-[#121212]' : 'border-[#1C1C1C] hover:border-[#3A3A3A] bg-[#0A0A0A]'
              }`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className={`font-medium text-lg ${openIdx === idx ? 'text-[#00F9E4]' : 'text-white'}`}>
                  {faq.q}
                </span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  class={`text-xl text-[#6B6B6B] transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[#00F9E4]' : ''}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#9A9A9A] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;