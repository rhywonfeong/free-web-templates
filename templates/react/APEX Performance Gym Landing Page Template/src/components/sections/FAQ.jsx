import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso ter experiência prévia para treinar na APEX?",
      a: "Não. Nosso protocolo de avaliação identifica exatamente onde você está e constrói um caminho seguro e eficiente independentemente do seu histórico. Atendemos do iniciante ao atleta de alto rendimento."
    },
    {
      q: "Como funciona o período de teste?",
      a: "Oferecemos uma visita guiada gratuita com avaliação física sem compromisso. Você conhece a estrutura, conversa com um coach e, se quiser, experimenta um treino experimental. Sem pressão de venda."
    },
    {
      q: "Qual é o horário de funcionamento?",
      a: "Segunda a sexta: 5h30 às 23h. Sábados: 7h às 20h. Domingos e feriados: 8h às 14h. Plano Elite tem acesso estendido das 6h às 23h nos 7 dias."
    },
    {
      q: "Posso congelar o plano em caso de viagem ou cirurgia?",
      a: "Sim. Permitimos congelamento de até 60 dias por ano para viagens e ilimitado para indicação médica. Sem burocracia, sem multa."
    },
    {
      q: "Os coaches estão disponíveis em todos os turnos?",
      a: "Sim. Temos coaches presentes em todos os turnos de funcionamento. Nos planos Plus e Elite, você ainda tem sessões agendadas com seu coach responsável."
    },
    {
      q: "Existe limite de vagas?",
      a: "Sim. Para garantir a qualidade do ambiente e do atendimento, trabalhamos com número controlado de alunos por turno. Recomendamos garantir sua vaga com antecedência."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-[#FFF8F1] text-[#2B2B2B]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Badge className="mb-6 mx-auto">PERGUNTAS FREQUENTES</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Respondemos<br />o que você<br />ainda não perguntou.
          </h2>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl overflow-hidden transition-colors ${openIdx === idx ? 'border-[#FF8000] bg-white shadow-sm' : 'border-[#2B2B2B]/10 bg-transparent'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <span className={`text-[#FF8000] transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <iconify-icon icon="solar:alt-arrow-down-bold" width="24"></iconify-icon>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <p className="text-[#5C554E] leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="black">Ainda tem dúvidas? Fale conosco</Button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;