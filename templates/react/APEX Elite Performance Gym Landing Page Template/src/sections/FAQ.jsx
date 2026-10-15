import React, { useState } from 'react';
import Badge from '../components/Badge';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full text-left py-6 flex justify-between items-center group focus:outline-none"
        onClick={onClick}
      >
        <h3 className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-[#C8F135]' : 'text-white group-hover:text-gray-300'}`}>
          {question}
        </h3>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C8F135] border-[#C8F135] text-black rotate-45' : 'text-white group-hover:border-white/50'}`}>
          <iconify-icon icon="solar:add-outline" width="20"></iconify-icon>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 text-sm leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência prévia para me matricular?",
      a: "Não. Recebemos alunos de todos os níveis — desde iniciantes absolutos até atletas experientes. Nossa avaliação de entrada é justamente para entendermos seu ponto de partida e construir o protocolo adequado para você."
    },
    {
      q: "Como funciona a visita gratuita?",
      a: "Você agenda pelo WhatsApp ou pelo site, visita a academia em um horário de sua escolha, conhece a estrutura, conversa com um de nossos coaches e, se quiser, faz um treino experimental. Sem compromisso e sem pressão."
    },
    {
      q: "Posso cancelar o plano quando quiser?",
      a: "Sim. Todos os nossos planos são mensais e sem fidelidade. Pedimos apenas 30 dias de aviso prévio para o cancelamento, conforme a legislação vigente."
    },
    {
      q: "A academia tem estacionamento?",
      a: "Sim. Temos convênio com o estacionamento do edifício, com valor especial para alunos APEX. Também temos bicicletário e fácil acesso ao metrô (Estação Faria Lima, a 200m)."
    },
    {
      q: "Qual o horário de funcionamento?",
      a: "Segunda a sexta das 5h30 às 23h. Sábados das 7h às 20h. Domingos e feriados das 8h às 14h."
    },
    {
      q: "Oferecem acompanhamento nutricional?",
      a: "O plano Elite inclui acesso à nossa rede de nutricionistas parceiros com condições exclusivas. Nos demais planos, podemos indicar profissionais de confiança com quem trabalhamos regularmente."
    }
  ];

  return (
    <section className="py-24 bg-[#100F0F]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-6" dotColor="#B8CFEE">Dúvidas frequentes</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Perguntas & Respostas
          </h2>
        </div>

        <div className="bg-[#1A1A1A] rounded-[32px] p-8 md:p-12 border border-white/5">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}