import React, { useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function FAQ() {
  const faqs = [
    {
      q: 'Preciso ter experiência prévia para me matricular?',
      a: 'Não. Nosso protocolo de avaliação inicial é justamente para entender onde você está. Temos alunos que nunca pisaram numa academia e alunos com mais de 10 anos de treino. O sistema BLK se adapta ao seu ponto de partida.'
    },
    {
      q: 'Qual é o horário de funcionamento da BLK?',
      a: 'Segunda a sexta: 5h às 23h. Sábados: 7h às 20h. Domingos e feriados: 8h às 14h. Alunos do plano Elite têm acesso 24 horas, todos os dias.'
    },
    {
      q: 'Posso cancelar o plano a qualquer momento?',
      a: 'O plano Livre não tem fidelidade — cancelamento imediato sem multa. Os planos Plus (trimestral) e Elite (semestral) têm fidelidade contratual. Consulte as condições específicas de rescisão no momento da matrícula.'
    },
    {
      q: 'O que acontece se eu faltar muitas vezes?',
      a: 'Seu coach vai perceber. Frequência é rastreada pelo app BLK e faz parte do protocolo de monitoramento. Não como punição — como dado. Se a frequência cair, o coach entra em contato para entender o que está acontecendo e ajustar o protocolo se necessário.'
    },
    {
      q: 'A avaliação física é cobrada separadamente?',
      a: 'Para alunos dos planos Plus e Elite, a avaliação física periódica está incluída na mensalidade. Para o plano Livre, a avaliação inicial pode ser contratada avulsamente. Consulte nossa equipe.'
    },
    {
      q: 'Como funciona a visita gratuita?',
      a: 'Você agenda uma visita de 60 minutos para conhecer a estrutura, conversar com um dos nossos coaches e entender qual protocolo faz mais sentido para seus objetivos. Sem pressão de vendas. Se fizer sentido para você, a matrícula acontece na hora.'
    },
    {
      q: 'Tem aulas em grupo ou somente treino individual?',
      a: 'Ambos. Oferecemos aulas coletivas de treinamento funcional, condicionamento e mobilidade como complemento ao protocolo individual. O coach define quais aulas fazem sentido dentro do seu ciclo de treinamento.'
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-graphite)] border-t border-[var(--color-ash)]/30">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel className="justify-center">Dúvidas</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-white mb-6">
            PERGUNTAS <span className="text-[var(--color-primary)]">FREQUENTES</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--color-ash)]/50 pt-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[var(--color-ash)]/50 pb-4">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className={`text-[16px] font-medium pr-8 transition-colors ${openIdx === idx ? 'text-[var(--color-primary)]' : 'text-white group-hover:text-[var(--color-primary)]'}`}>
                  {faq.q}
                </span>
                <span className={`text-[var(--color-smoke)] transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[var(--color-primary)]' : ''}`}>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24"></iconify-icon>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[15px] text-[var(--color-silver)] leading-relaxed pl-4 border-l-2 border-[var(--color-primary)]/30">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="primary">Falar com Especialista</Button>
          <Button variant="secondary">Agendar Visita Gratuita</Button>
        </div>
      </div>
    </section>
  );
}