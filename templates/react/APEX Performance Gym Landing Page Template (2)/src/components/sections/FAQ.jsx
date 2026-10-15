import { useState } from 'react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência para me matricular?",
      a: "Não. Atendemos alunos de todos os níveis — do iniciante absoluto ao atleta de competição. Nossa avaliação inicial identifica exatamente onde você está e traça o protocolo adequado ao seu perfil."
    },
    {
      q: "Como funciona o período de avaliação?",
      a: "A avaliação inicial acontece em até 48h após a matrícula. Inclui bioimpedância, teste cardiovascular, análise postural e entrevista com coach. Nos planos Plus e Elite ela está inclusa; no Livre pode ser adquirida separadamente por R$89."
    },
    {
      q: "Posso mudar de plano a qualquer momento?",
      a: "Sim. Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, com ajuste proporcional de cobrança. Não há multa nem burocracia — apenas uma solicitação no app ou pelo WhatsApp."
    },
    {
      q: "Quais são os horários de funcionamento?",
      a: "Segunda a sexta: 5h30 às 23h. Sábados: 7h às 20h. Domingos e feriados: 8h às 15h. Alunos Elite têm acesso estendido com entrada a partir das 5h em dias úteis."
    },
    {
      q: "Há aulas em grupo disponíveis?",
      a: "Sim. Temos mais de 30 modalidades de aulas coletivas por semana, incluindo funcional, spinning, yoga, boxe e HIIT. As aulas são inclusas em todos os planos e podem ser reservadas pelo app com até 7 dias de antecedência."
    },
    {
      q: "Como funciona a política de cancelamento?",
      a: "Você pode cancelar sua matrícula a qualquer momento com aviso de 15 dias. Sem multa, sem retenção. Nosso compromisso é que você fique porque quer, não porque é obrigado."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4 flex flex-col items-start">
          <Tag className="mb-6">Perguntas Frequentes</Tag>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-6">
            Ainda tem <br/>
            <span className="text-[#FF4500]">dúvidas?</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg mb-8">
            Se sua pergunta não está aqui, nosso time responde em minutos via WhatsApp.
          </p>
          <Button href="https://wa.me/5541999999999" variant="outline" icon="solar:chat-round-dots-linear">
            Falar com especialista
          </Button>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-[#111111] border-[#FF4500]/50' : 'bg-[#1A1A1A] border-[#2E2E2E] hover:border-[#666666]'}`}
            >
              <button 
                className="w-full text-left p-6 flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <h3 className="font-medium text-white text-lg md:text-xl pr-8">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? 'bg-[#FF4500] rotate-45' : 'bg-[#2E2E2E]'}`}>
                  <iconify-icon icon="solar:add-linear" class="text-white text-xl"></iconify-icon>
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="p-6 pt-0 text-[#B0B0B0] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}