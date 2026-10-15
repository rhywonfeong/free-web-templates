import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E2E1E2]">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEFE00] rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#0C0C0C] pr-8">{question}</span>
        <iconify-icon 
          icon={isOpen ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
          width="24"
          className="text-[#8A898A] flex-shrink-0"
        ></iconify-icon>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-[#3D3C3D] leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Preciso instalar alguma coisa?",
      a: "Não. O Rendiq é 100% web. Funciona em qualquer navegador no celular, tablet ou computador — sem download, sem instalação."
    },
    {
      q: "Minha equipe vai conseguir usar?",
      a: "Sim. A tela de preenchimento foi desenhada para uso em cozinha, com toque rápido e sem treinamento extenso. Em média, novos colaboradores dominam em 1 turno."
    },
    {
      q: "Posso importar meu cardápio atual?",
      a: "No MVP, o cadastro é manual — mas rápido. A maioria dos restaurantes conclui o setup em menos de 30 minutos. Importação via planilha está no roadmap."
    },
    {
      q: "Como funciona o cancelamento?",
      a: "Avise com 30 dias. Seus dados ficam disponíveis para exportação por 60 dias após o encerramento. Sem multa, sem justificativa obrigatória."
    },
    {
      q: "O sistema funciona offline?",
      a: "O registro de produção requer conexão de internet. Suporte a modo offline completo está planejado no roadmap pós-MVP."
    }
  ];

  return (
    <section id="faq" className="bg-[#FCFBFC] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-[#F0EFF0] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C]">
            PERGUNTAS<br />DIRETAS.
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;