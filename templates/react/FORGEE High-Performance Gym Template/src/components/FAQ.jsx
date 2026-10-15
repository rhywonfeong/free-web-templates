import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Preciso ter experiência?',
      a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.'
    },
    {
      q: 'Posso treinar sozinho?',
      a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.'
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.'
    },
    {
      q: 'Posso visitar antes de assinar?',
      a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.'
    }
  ];

  return (
    <section className="px-6 md:px-12 max-w-[800px] mx-auto w-full">
      <div className="text-center mb-12">
        <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold block mb-4">Dúvidas</span>
        <h2 className="font-display text-5xl md:text-6xl tracking-tight uppercase">Perguntas Diretas.</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#1E1E1E] rounded-xl border border-white/5 overflow-hidden">
            <button 
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-white font-semibold text-lg pr-8">{faq.q}</span>
              <iconify-icon 
                icon="solar:add-circle-linear" 
                class={`text-2xl text-[#888888] shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-[#E84A1A]' : ''}`}
              ></iconify-icon>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[#AAAAAA] leading-relaxed border-t border-white/10 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}