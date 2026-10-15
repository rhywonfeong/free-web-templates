import React from 'react';
import { Accordion } from '../UI/Accordion';

const faqItems = [
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

export default function FAQ() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase text-neutral-50 sticky top-32">
            Perguntas<br/>
            <span className="text-brand-purple">Diretas.</span>
          </h2>
        </div>
        <div className="md:w-2/3">
          <Accordion items={faqItems} className="border-t-0" />
        </div>
      </div>
    </section>
  );
}