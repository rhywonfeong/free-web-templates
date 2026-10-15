import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { clsx } from 'clsx';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência prévia para treinar na ATLAS?",
      a: "Não. O nosso sistema de onboarding foi desenvolvido exatamente para receber alunos em qualquer nível. O assessment inicial identifica seu ponto de partida e a prescrição de treino começa de onde você está — não de onde achamos que você deveria estar. Iniciantes, intermediários e avançados treinam com protocolos completamente diferentes."
    },
    {
      q: "Como funciona a avaliação gratuita?",
      a: "A visita gratuita inclui um tour completo pela estrutura, uma conversa de 30 minutos com um dos nossos coaches para entender seus objetivos, e uma demonstração do protocolo de assessment. Sem compromisso, sem pressão. Queremos que você entenda o sistema antes de tomar qualquer decisão."
    },
    {
      q: "Qual a diferença entre os planos Plus e Elite na prática?",
      a: "O Plus oferece acompanhamento mensal com coach e uma sessão de personal training por mês. O Elite inclui um coach dedicado exclusivo, personal training ilimitado, periodização anual completa e acesso a nutricionista parceiro. Para quem tem metas específicas e prazos definidos, o Elite entrega um acompanhamento muito mais próximo e individualizado."
    },
    {
      q: "Qual o horário de funcionamento?",
      a: "Funcionamos de segunda a sexta das 5h30 às 23h, sábados das 7h às 20h e domingos das 8h às 18h. Nos planos Plus e Elite, alunos têm acesso prioritário aos horários de pico e podem reservar equipamentos com antecedência pelo aplicativo."
    },
    {
      q: "Existe contrato de fidelidade?",
      a: "O Plano Livre não exige fidelidade — você pode cancelar a qualquer momento com 30 dias de aviso. O Plus tem fidelidade de 3 meses e o Elite de 6 meses. Os planos com fidelidade têm valores significativamente menores exatamente porque nos permitem planejar a periodização completa do seu treinamento."
    },
    {
      q: "Vocês têm estacionamento?",
      a: "Sim. Temos estacionamento próprio com 40 vagas, gratuito para todos os alunos. Basta cadastrar a placa do veículo no aplicativo da ATLAS na primeira visita. O estacionamento funciona 24h com câmeras de segurança monitoradas."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-10 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-[900px] mx-auto">
        <SectionHeader 
          label="Perguntas Frequentes"
          title="Tem dúvidas?"
          description="Reunimos as perguntas mais comuns de quem está considerando fazer parte da ATLAS. Não encontrou o que procura? Fale com a gente."
          align="center"
          className="mb-16"
        />

        <div className="flex flex-col border-y border-neutral-800 divide-y divide-neutral-800">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-6">
              <button 
                className="w-full flex items-center justify-between text-left group"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <h4 className={clsx(
                  "text-lg font-bold uppercase tracking-wide transition-colors pr-8",
                  openIdx === idx ? "text-acid" : "text-offwhite group-hover:text-neutral-300"
                )}>
                  {faq.q}
                </h4>
                <span className={clsx(
                  "text-xl transition-transform duration-300 text-neutral-500",
                  openIdx === idx ? "rotate-45 text-acid" : "rotate-0"
                )}>
                  <iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
                </span>
              </button>
              <div className={clsx(
                "grid transition-all duration-300 ease-in-out",
                openIdx === idx ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <p className="text-neutral-400 text-base leading-relaxed pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-4">
           <Button variant="outline">Falar com Especialista</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;