import React, { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

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
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1C] border-t border-[#2E2E2E]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <SectionHeading 
            title="PERGUNTAS *DIRETAS*."
            className="items-center"
          />
        </div>

        <div className="flex flex-col border-t border-[#2E2E2E]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#2E2E2E]">
              <button 
                className="w-full py-8 flex justify-between items-center text-left hover:text-[#FF4A1C] transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-display text-xl md:text-3xl tracking-wide">{faq.q}</span>
                <iconify-icon 
                  icon={openIndex === idx ? "solar:minus-square-linear" : "solar:add-square-linear"} 
                  className={`text-3xl transition-transform duration-300 ${openIndex === idx ? 'text-[#E8190F]' : 'text-[#808080]'}`}
                ></iconify-icon>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#BFBFBF] text-lg max-w-3xl pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection