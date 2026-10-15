import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência?",
      a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
    },
    {
      q: "Posso treinar sozinho?",
      a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
    },
    {
      q: "Como funciona o cancelamento?",
      a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
    },
    {
      q: "Posso visitar antes de assinar?",
      a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title={["PERGUNTAS", "DIRETAS."]}
          className="text-center flex flex-col items-center"
        />

        <div className="space-y-4 mt-16">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border transition-colors duration-300 ${openIdx === idx ? 'border-red-600 bg-black' : 'border-zinc-800 bg-black/40 hover:border-zinc-700'}`}
            >
              <button 
                className="w-full text-left px-8 py-6 flex items-center justify-between"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className={`text-lg md:text-xl font-bold tracking-tight uppercase ${openIdx === idx ? 'text-white' : 'text-zinc-300'}`}>
                  {faq.q}
                </span>
                <iconify-icon 
                  icon={openIdx === idx ? "solar:minus-linear" : "solar:add-linear"} 
                  className={`text-2xl transition-transform duration-300 ${openIdx === idx ? 'text-red-500 rotate-180' : 'text-zinc-600'}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-8 pb-6 text-zinc-400 font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}