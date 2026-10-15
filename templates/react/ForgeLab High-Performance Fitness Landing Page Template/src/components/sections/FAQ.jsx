import { useState } from 'react';
import { clsx } from 'clsx';
import SectionHeading from '../ui/SectionHeading';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso ter experiência com academia para me matricular?",
      a: "Não. A FORGELAB atende desde iniciantes absolutos até atletas de alto nível. Nossa avaliação de entrada identifica exatamente o ponto de partida de cada aluno — e o protocolo é desenhado de acordo com esse diagnóstico."
    },
    {
      q: "Como funciona a avaliação inicial?",
      a: "Ao se matricular, você passa por uma avaliação completa que inclui anamnese (histórico de saúde e objetivos), avaliação postural, teste de composição corporal via bioimpedância InBody 770 e uma conversa com seu coach dedicado. A partir daí, o protocolo é estruturado."
    },
    {
      q: "Existe fidelidade no contrato?",
      a: "Não trabalhamos com fidelidade obrigatória. Acreditamos que você deve continuar aqui porque quer — não porque é obrigado. Nosso cancelamento é feito com 30 dias de antecedência, sem multas."
    },
    {
      q: "Posso treinar mais de uma vez por dia?",
      a: "Sim. Não há restrição de acessos diários. No entanto, seu coach poderá orientar sobre a adequação de volume e frequência ao seu protocolo atual."
    },
    {
      q: "Posso fazer uma visita antes de me matricular?",
      a: "Sim — e incentivamos isso. Agende uma visita guiada sem compromisso. Você conhecerá a estrutura, conversará com um coach e entenderá como os protocolos funcionam na prática."
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#141414]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <SectionHeading 
              supertitle="FAQ"
              title="Tire suas dúvidas antes de dar o primeiro passo."
            />
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#1E1E1E] border border-white/5 rounded-xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-white md:text-lg pr-8">{faq.q}</span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={clsx(
                      "text-xl text-[#E84E1B] transition-transform duration-300 flex-shrink-0",
                      openIndex === index ? "rotate-180" : ""
                    )}
                  ></iconify-icon>
                </button>
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-6 text-neutral-400 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;