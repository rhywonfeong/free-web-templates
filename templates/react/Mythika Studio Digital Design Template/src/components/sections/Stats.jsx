import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const Stats = () => {
  const stats = [
    { num: "+30", label: "Projetos Entregues", desc: "Sites, lojas e landing pages no ar" },
    { num: "3", label: "Serviços principais", desc: "E-commerce, sites e landing pages" },
    { num: "5", label: "Etapas do LÚMEN", desc: "Processo fechado, com início e fim" },
    { num: "100%", label: "Foco em resultado", desc: "Design com estratégia, não só estética" }
  ];

  return (
    <section className="bg-[#0A0A0A] border-t-2 border-[#9333EA] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-16">
          <SectionLabel text="MYTHIKA EM NÚMEROS" />
          <FormattedHeading 
            text="Presença digital que *performa.*"
            className="text-3xl md:text-4xl font-bold text-[#F0F0F0] tracking-tight"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-5xl md:text-6xl font-bold text-[#9333EA] mb-4 tracking-tighter">{stat.num}</span>
              <h3 className="text-base font-semibold text-[#F0F0F0] mb-2">{stat.label}</h3>
              <p className="text-xs text-[#666666] leading-relaxed pr-4">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;