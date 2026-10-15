import React, { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { clsx } from 'clsx'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "Existe fidelidade ou multa de cancelamento?",
      a: "Não. Todos os nossos planos são mensais e podem ser cancelados a qualquer momento sem custo adicional. Acreditamos que você fica porque quer — e porque entregamos resultado."
    },
    {
      q: "Posso experimentar antes de assinar?",
      a: "Sim. Oferecemos uma visita gratuita com tour completo pelas instalações e uma conversa com um de nossos coaches. Basta agendar pelo botão abaixo."
    },
    {
      q: "O Protocolo FORGE funciona para iniciantes?",
      a: "Absolutamente. O protocolo é adaptado ao nível atual de cada aluno — seja iniciante completo ou atleta avançado. A avaliação inicial determina o ponto de partida ideal."
    },
    {
      q: "Quais são os horários de funcionamento?",
      a: "Segunda a sexta das 5h às 23h. Sábados das 7h às 20h. Domingos e feriados das 8h às 18h. Alunos Elite têm acesso diferenciado mediante agendamento."
    },
    {
      q: "Há estacionamento disponível?",
      a: "Sim. Contamos com estacionamento exclusivo com 40 vagas para alunos. Basta apresentar o cartão de acesso na entrada do estacionamento."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-[#111111] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            Temos as respostas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx} 
                className={clsx(
                  "border rounded-[16px] overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-[#1E1E24] border-[#E8541A]" : "bg-[#0A0A0A] border-[#2A2A2A] hover:border-[#4A4A4A]"
                )}
              >
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="text-lg font-semibold text-white">{faq.q}</span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={clsx("text-2xl transition-transform duration-300", isOpen ? "text-[#E8541A] rotate-180" : "text-[#8A8A8A]")}
                  ></iconify-icon>
                </button>
                <div 
                  className={clsx(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-[#D4D4D4]">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}