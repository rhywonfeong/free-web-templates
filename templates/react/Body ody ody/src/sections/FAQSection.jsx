import { useState } from 'react'
import Eyebrow from '../components/ui/Eyebrow'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "Preciso ter experiência em academia para treinar aqui?",
      a: "Não. Recebemos alunos de todos os níveis — do iniciante ao atleta avançado. O protocolo é montado de acordo com onde você está, não onde achamos que você deveria estar."
    },
    {
      q: "Como funciona a avaliação física?",
      a: "Acontece antes do seu primeiro treino e dura cerca de 60 min. Inclui análise postural, bioimpedância, testes de força/mobilidade e conversa sobre histórico e objetivos."
    },
    {
      q: "Posso trazer acompanhante na visita?",
      a: "Sim. Incentivamos isso. A visita gratuita é para você conhecer o espaço e tirar dúvidas com calma — com quem você quiser ao lado."
    },
    {
      q: "Existe contrato de fidelidade?",
      a: "Sim, fidelidade mínima de 3 meses. Isso não é burocracia — é porque resultados reais levam tempo, e queremos que você se comprometa com o processo."
    },
    {
      q: "O que acontece se eu precisar pausar por saúde?",
      a: "Tratamos isso caso a caso, com humanidade. Com atestado médico, trabalhamos para preservar o vínculo do aluno de forma justa."
    }
  ]

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Eyebrow>Dúvidas</Eyebrow>
          </div>
          <h2 className="text-h2">
            Respondendo o que você provavelmente quer <span className="text-[#FF5A1A]">saber</span>.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border transition-colors duration-300 ${openIndex === i ? 'border-[#FF5A1A] bg-[#1A1A1A]' : 'border-[#2E2E2E] bg-transparent hover:bg-[#1A1A1A]'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full text-left px-6 py-6 flex justify-between items-center"
              >
                <span className={`font-semibold pr-8 ${openIndex === i ? 'text-white' : 'text-[#F5F5F5]'}`}>
                  {faq.q}
                </span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  class={`text-xl flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#FF5A1A]' : 'text-[#888888]'}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#2E2E2E]/50 pt-4 mt-2 mx-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}