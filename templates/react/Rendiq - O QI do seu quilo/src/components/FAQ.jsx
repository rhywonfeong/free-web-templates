import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Preciso instalar alguma coisa?',
      a: 'Não. O Rendiq é 100% web. Funciona em qualquer navegador no celular, tablet ou computador — sem download, sem instalação.'
    },
    {
      q: 'Minha equipe vai conseguir usar?',
      a: 'Sim. A tela de preenchimento foi desenhada para uso em cozinha, com toque rápido e sem treinamento extenso. Em média, novos colaboradores dominam em 1 turno.'
    },
    {
      q: 'Posso importar meu cardápio atual?',
      a: 'No MVP, o cadastro é manual — mas rápido. A maioria dos restaurantes conclui o setup em menos de 30 minutos. Import via planilha está no roadmap.'
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Avise com 30 dias. Seus dados ficam disponíveis para exportação por 60 dias após o encerramento. Sem multa, sem justificativa obrigatória.'
    },
    {
      q: 'O sistema funciona offline?',
      a: 'O registro de produção requer conexão. Suporte a modo offline está no roadmap pós-MVP.'
    }
  ];

  return (
    <section id="faq" className="bg-neutral-50 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">Dúvidas</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 leading-tight flex flex-col">
            <span>PERGUNTAS</span>
            <span>DIRETAS.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-neutral-0 rounded-2xl border ${openIndex === i ? 'border-neutral-300' : 'border-neutral-100'} overflow-hidden transition-colors`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="text-sm font-label text-neutral-900">{faq.q}</span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  class={`text-xl text-neutral-500 transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                ></iconify-icon>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm font-body text-neutral-700">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;