import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import clsx from 'clsx'

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0)

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
    <section className="py-32 bg-[#0A2E00] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          theme="dark"
          alignment="center"
          label="Dúvidas"
          title={<>PERGUNTAS<br/>DIRETAS.</>}
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={clsx(
                "border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
                openIdx === i ? "bg-[#1A5C00]/50" : "bg-transparent hover:bg-white/5"
              )}
            >
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span className="text-xl font-bold uppercase tracking-wide text-white pr-8">{faq.q}</span>
                <div className={clsx(
                  "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                  openIdx === i ? "bg-[#CCFF00] border-[#CCFF00] text-[#0A2E00]" : "border-white/30 text-white"
                )}>
                  <iconify-icon icon={openIdx === i ? "solar:minus-linear" : "solar:add-linear"}></iconify-icon>
                </div>
              </button>
              
              <div 
                className={clsx(
                  "px-8 overflow-hidden transition-all duration-300 ease-in-out",
                  openIdx === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-[#E8E8E8] text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection