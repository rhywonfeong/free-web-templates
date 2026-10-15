import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';

export default function FAQSection() {
  const faqs = [
    {
      title: "Preciso ter experiência?",
      content: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
    },
    {
      title: "Posso treinar sozinho?",
      content: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
    },
    {
      title: "Como funciona o cancelamento?",
      content: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
    },
    {
      title: "Posso visitar antes de assinar?",
      content: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 border-t border-[#1E1E1E]">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader 
          eyebrow="Dúvidas" 
          title={<>PERGUNTAS<br/><span className="text-[#E8400A]">DIRETAS.</span></>}
          align="center"
        />
        <div className="mt-16">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}