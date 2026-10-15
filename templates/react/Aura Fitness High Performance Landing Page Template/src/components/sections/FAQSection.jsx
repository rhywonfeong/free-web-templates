import { useState } from 'react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência em treino para me matricular?",
      a: "Não. Recebemos alunos de todos os níveis — do iniciante absoluto ao atleta. A avaliação inicial é justamente para mapear seu ponto de partida e prescrever o treino correto."
    },
    {
      q: "Como funciona o primeiro mês sem fidelidade?",
      a: "No primeiro mês você experimenta a academia sem qualquer compromisso de permanência. Caso decida continuar, os planos partem para mensalidades normais sem taxas adicionais."
    },
    {
      q: "Posso mudar de plano ao longo do tempo?",
      a: "Sim. O upgrade ou downgrade de plano pode ser feito mensalmente, sem burocracia. Muitos alunos começam no Livre e migram para Plus ou Elite conforme avançam."
    },
    {
      q: "Qual o horário de funcionamento?",
      a: "Segunda a sexta: 5h30 às 23h. Sábados: 7h às 19h. Domingos e feriados: 8h às 14h."
    },
    {
      q: "A avaliação física está inclusa em todos os planos?",
      a: "Sim. Todos os planos incluem avaliação inicial completa com bioimpedância. Reavaliações periódicas fazem parte dos planos Plus e Elite."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Tire suas dúvidas</span>
          <h2 className="font-display text-5xl md:text-6xl text-white">Tudo que você precisa saber antes de começar.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-[#1A1A1A]' : 'bg-[#111111] hover:border-white/30'}`}
            >
              <button 
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className="text-white font-semibold text-lg pr-8">{faq.q}</span>
                <iconify-icon 
                  icon={openIdx === idx ? "solar:minus-circle-bold" : "solar:add-circle-linear"} 
                  class={`text-2xl shrink-0 transition-transform duration-300 ${openIdx === idx ? 'text-[#FF5500] rotate-180' : 'text-[#888888]'}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out`}
                style={{ maxHeight: openIdx === idx ? '200px' : '0', paddingBottom: openIdx === idx ? '24px' : '0', opacity: openIdx === idx ? 1 : 0 }}
              >
                <p className="text-[#AAAAAA] leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#888888] text-sm mb-4">Ainda tem dúvidas?</p>
          <a href="#contato" className="inline-flex items-center gap-2 bg-[#222222] hover:bg-[#2C2C2C] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors">
            Falar com especialista
            <iconify-icon icon="solar:chat-line-linear"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}