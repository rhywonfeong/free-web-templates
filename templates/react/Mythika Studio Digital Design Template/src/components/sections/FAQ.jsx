import { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';
import Button from '../ui/Button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Como funciona o processo da Mythika?",
      a: "Seguimos o Método LÚMEN — um processo de 5 etapas: Leitura (diagnóstico), Unidade (estratégia), Materialização (design), Entrega e Norte (continuidade). Cada projeto tem início, meio e fim definidos. Sem achismo, sem surpresas."
    },
    {
      q: "Quanto tempo leva um projeto?",
      a: "Depende do escopo. Uma landing page leva em média 10 a 15 dias úteis. Um website de até 5 páginas leva aproximadamente 5 semanas. Um e-commerce varia conforme a quantidade de produtos. Na conversa inicial, definimos um prazo realista."
    },
    {
      q: "Vocês desenvolvem o site ou só fazem o design?",
      a: "Fazemos os dois — conforme a necessidade do projeto. O design é feito no Figma pela Mythika. Para desenvolvimento, contamos com parceiros especializados integrados ao nosso processo."
    },
    {
      q: "Em qual plataforma o e-commerce é criado?",
      a: "Trabalhamos principalmente com Nuvemshop, mas podemos adaptar conforme o projeto. A plataforma é a estrutura técnica — a Mythika entra com design, organização, jornada de compra e experiência visual."
    },
    {
      q: "Vocês atendem empresas de todos os tamanhos?",
      a: "Sim. Trabalhamos desde negócios solo até empresas e agências que precisam de parceiro de design. O que avaliamos é se o projeto tem fit com o nosso processo — não o tamanho da empresa."
    },
    {
      q: "Qual é o investimento?",
      a: "Depende do tipo de projeto e escopo. Não trabalhamos com tabela fixa pública — preferimos entender o que você precisa e apresentar uma proposta certeira. A conversa inicial é gratuita."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <SectionLabel text="DÚVIDAS" className="mx-auto" />
          <FormattedHeading 
            text="Perguntas *frequentes.*"
            className="text-4xl md:text-5xl font-bold text-[#F0F0F0] tracking-tight"
          />
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-b border-[#2E2E2E] pb-4 transition-all duration-300 ${openIndex === idx ? 'bg-[#111111] p-6 rounded-xl border-transparent -mx-6' : ''}`}
            >
              <button 
                className="w-full flex items-center justify-between text-left py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <h4 className={`text-base md:text-lg font-medium pr-8 ${openIndex === idx ? 'text-white' : 'text-[#F0F0F0] hover:text-white'}`}>
                  {faq.q}
                </h4>
                <iconify-icon 
                  icon={openIndex === idx ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                  class={`text-2xl shrink-0 transition-transform duration-300 ${openIndex === idx ? 'text-[#9333EA] rotate-180' : 'text-[#666666]'}`}
                ></iconify-icon>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-[#8A8A8A] leading-relaxed pb-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button icon="solar:chat-round-line-linear">Falar com a Mythika</Button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;