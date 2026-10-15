import React, { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import clsx from 'clsx'

export default function FAQSection() {
  const [openQ, setOpenQ] = useState(0)

  const faqs = [
    {
      q: 'Preciso ter experiência?',
      a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual. O sistema se adapta a você, não o contrário.'
    },
    {
      q: 'Posso treinar sozinho?',
      a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima, respeitando seu espaço de concentração.'
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Avise com 30 dias de antecedência. Seu plano será encerrado no próximo ciclo de faturamento. Sem multas escondidas, sem necessidade de justificativa obrigatória.'
    },
    {
      q: 'Posso visitar antes de assinar?',
      a: 'Sim — e incentivamos fortemente. Agende pelo site. Você conhece o espaço físico, conversa com um de nossos coaches e faz uma aula experimental gratuita para sentir o ambiente.'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">Dúvidas</SectionLabel>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.9] tracking-tighter uppercase text-white">
            Perguntas<br/>
            Diretas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "border-b transition-colors duration-300",
                openQ === idx ? "border-[#E8001C]" : "border-[#3D3D3D] hover:border-white"
              )}
            >
              <button
                onClick={() => setOpenQ(openQ === idx ? -1 : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={clsx(
                  "font-display font-bold text-xl md:text-2xl tracking-wide uppercase transition-colors pr-8",
                  openQ === idx ? "text-white" : "text-[#C8C8C8] group-hover:text-white"
                )}>
                  {faq.q}
                </span>
                <div className={clsx(
                  "w-8 h-8 flex items-center justify-center border transition-all duration-300 shrink-0",
                  openQ === idx ? "border-[#E8001C] bg-[#E8001C] text-white rotate-45" : "border-[#3D3D3D] text-[#7A7A7A] group-hover:border-white group-hover:text-white"
                )}>
                  <iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
                </div>
              </button>
              
              <div className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openQ === idx ? "max-h-48 opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
              )}>
                <p className="text-[#7A7A7A] text-base leading-relaxed pr-12">
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