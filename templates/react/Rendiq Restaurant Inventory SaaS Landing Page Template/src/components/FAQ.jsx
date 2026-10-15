import React, { useState } from 'react'

const faqs = [
  {
    question: "Preciso instalar alguma coisa?",
    answer: "Não. O Rendiq é 100% web. Funciona em qualquer navegador no celular, tablet ou computador — sem download, sem instalação."
  },
  {
    question: "Minha equipe vai conseguir usar?",
    answer: "Sim. A tela de preenchimento foi desenhada para uso em cozinha, com toque rápido e sem treinamento extenso. Em média, novos colaboradores dominam em 1 turno."
  },
  {
    question: "Posso importar meu cardápio atual?",
    answer: "No MVP, o cadastro é manual — mas rápido. A maioria dos restaurantes conclui o setup em menos de 30 minutos. Import via planilha está no roadmap."
  },
  {
    question: "Como funciona o cancelamento?",
    answer: "Avise com 30 dias. Seus dados ficam disponíveis para exportação por 60 dias após o encerramento. Sem multa, sem justificativa obrigatória."
  },
  {
    question: "O sistema funciona offline?",
    answer: "O registro de produção requer conexão. Suporte a modo offline está no roadmap pós-MVP."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 bg-neutral-0 border-y border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Dúvidas</span>
            <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
              PERGUNTAS<br />DIRETAS.
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-lime-500 transition-colors pr-8">
                      {faq.question}
                    </h3>
                    <iconify-icon 
                      icon={openIndex === index ? "solar:minus-circle-bold" : "solar:add-circle-linear"} 
                      class={`text-2xl transition-colors ${openIndex === index ? 'text-lime-400' : 'text-neutral-300 group-hover:text-neutral-900'}`}
                    ></iconify-icon>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FAQ