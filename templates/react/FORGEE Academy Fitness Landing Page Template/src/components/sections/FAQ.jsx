import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { cn } from '../../utils/cn'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(3) // Last one open by default per spec

  const faqs = [
    { q: 'PRECISO TER EXPERIÊNCIA?', a: 'Não. Nosso espaço é para quem tem intenção, independente do nível atual. Avaliamos você e prescrevemos o treino adequado ao seu ponto de partida.' },
    { q: 'POSSO TREINAR SOZINHO?', a: 'Sim. Se você assina o plano LIVRE, o espaço é seu para executar seu próprio protocolo ou a planilha inicial que fornecemos.' },
    { q: 'COMO FUNCIONA O CANCELAMENTO?', a: 'Simples e direto via aplicativo ou recepção. Solicitamos apenas 30 dias de aviso prévio para interromper as cobranças, sem taxas extras ou multas.' },
    { q: 'POSSO VISITAR ANTES DE ASSINAR?', a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.' }
  ]

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        
        <SectionLabel className="justify-center">DÚVIDAS</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter text-[#F5F5F5] mb-16">
          PERGUNTAS<br/><span className="text-[#E82020]">DIRETAS.</span>
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#2D2D2D] pt-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 group"
              >
                <span className="font-display text-lg sm:text-xl font-semibold uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#E8651A] transition-colors text-left pr-4">
                  {faq.q}
                </span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear"
                  class={cn("text-xl text-[#7A7A7A] transition-transform duration-300 flex-shrink-0", openIndex === i ? "rotate-180 text-[#E8651A]" : "")}
                ></iconify-icon>
              </button>
              
              <div className={cn("accordion-content", openIndex === i ? "open" : "")}>
                <div className="accordion-inner">
                  <p className="py-4 text-[#E5E5E5] leading-relaxed border-l-2 border-[#E8651A] pl-4 ml-2 mb-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}