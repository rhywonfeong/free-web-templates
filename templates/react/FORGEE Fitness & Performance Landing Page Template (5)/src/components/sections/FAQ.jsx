import React from 'react';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const faqs = [
    { title: 'PRECISO TER EXPERIÊNCIA?', content: 'Não. Nossos protocolos são adaptáveis desde o dia zero. A avaliação física define seu ponto de partida.' },
    { title: 'POSSO TREINAR SOZINHO?', content: 'Sim. Você recebe uma planilha individualizada pelo app e pode usar o espaço livremente nos horários de funcionamento, sempre com um coach no salão para dúvidas pontuais.' },
    { title: 'COMO FUNCIONA O CANCELAMENTO?', content: 'Aviso prévio de 30 dias via e-mail ou recepção. Sem multas, sem taxas ocultas, sem retenção forçada.' },
    { title: 'POSSO VISITAR ANTES DE ASSINAR?', content: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.' }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111]">
      <div className="max-w-[800px] mx-auto flex flex-col gap-10">
        <div className="text-center">
          <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4">DÚVIDAS</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
            PERGUNTAS DIRETAS.
          </h2>
        </div>
        
        <Accordion items={faqs} />
      </div>
    </section>
  );
}