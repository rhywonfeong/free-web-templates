import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const Methodology = () => {
  const steps = [
    {
      letter: "L",
      name: "Leitura",
      sub: "(Diagnóstico)",
      desc: "Mergulhamos no seu negócio, público, oferta e momento atual. Só depois definimos o caminho."
    },
    {
      letter: "U",
      name: "Unidade",
      sub: "(Estratégia e Estrutura)",
      desc: "Definimos o que comunicar, em que ordem e por onde o usuário navega — tudo antes de abrir o Figma."
    },
    {
      letter: "M",
      name: "Materialização",
      sub: "(Design)",
      desc: "Criamos o visual final com estética premium, identidade aplicada e responsividade."
    },
    {
      letter: "E",
      name: "Entrega",
      sub: "(Handoff & Organização)",
      desc: "Entregamos o projeto organizado, documentado e pronto para usar."
    },
    {
      letter: "N",
      name: "Norte",
      sub: "(Decisão & Continuidade)",
      desc: "Documentamos as decisões para que sua marca evolua com consistência."
    }
  ];

  return (
    <section id="metodo" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 glow-center-dark pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <SectionLabel text="MÉTODO" />
          <h2 className="text-7xl md:text-[120px] font-bold text-[#C9A84C] tracking-tighter leading-none mb-6 font-serif italic pr-4">
            LÚMEN™
          </h2>
          <p className="text-lg md:text-xl text-[#F0F0F0] font-medium max-w-2xl mb-2">
            O método da Mythika para criar presença digital clara, bonita e que performa.
          </p>
          <p className="text-sm text-[#666666]">Um processo fechado, com início, meio e fim.</p>
        </div>

        {/* Connecting Line background for desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E2E2E] to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#111111] border border-[#2E2E2E] rounded-2xl p-6 relative group hover:-translate-y-2 transition-transform duration-300">
                {/* Visual anchor point */}
                <div className="hidden lg:block absolute -top-[25px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9A84C] border-[4px] border-[#0A0A0A] box-content opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <span className="block text-4xl font-serif italic text-[#C9A84C] mb-4">{step.letter}</span>
                <h4 className="text-lg font-bold text-white mb-1">{step.name}</h4>
                <span className="block text-xs text-[#666666] mb-4">{step.sub}</span>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;