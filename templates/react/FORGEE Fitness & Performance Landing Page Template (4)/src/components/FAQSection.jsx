import React from 'react'
import Accordion from './ui/Accordion'

const FAQSection = () => {
  const faqs = [
    {
      title: 'Preciso ter experiência?',
      content: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.'
    },
    {
      title: 'Posso treinar sozinho?',
      content: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.'
    },
    {
      title: 'Como funciona o cancelamento?',
      content: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.'
    },
    {
      title: 'Posso visitar antes de assinar?',
      content: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 max-w-4xl">
        
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-eyebrow block mb-6">Dúvidas</span>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter">
            Perguntas<br /><span className="text-[#E8400A]">diretas.</span>
          </h2>
        </div>

        <Accordion items={faqs} />

      </div>
    </section>
  )
}

export default FAQSection