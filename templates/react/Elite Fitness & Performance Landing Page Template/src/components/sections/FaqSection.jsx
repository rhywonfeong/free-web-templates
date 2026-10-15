import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#E8201A] transition-colors pr-8">
          {question}
        </span>
        <span className={`text-[#424242] transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
          <iconify-icon icon="solar:alt-arrow-down-line-duotone" width="24"></iconify-icon>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#BDBDBD] text-base leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
    <section className="py-24 lg:py-32 bg-[#0D0D0D] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading 
              label="Dúvidas"
              title="PERGUNTAS DIRETAS."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#080808] border border-white/10 px-8">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;