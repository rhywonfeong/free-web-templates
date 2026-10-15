import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const Differentiators = () => {
  const items = [
    {
      icon: "solar:target-bold-duotone",
      title: "Estratégia antes de estética",
      desc: "Cada seção, botão e texto tem um objetivo. Não fazemos bonito pelo bonito — fazemos para conduzir o seu cliente até a ação certa."
    },
    {
      icon: "solar:mouse-circle-bold-duotone",
      title: "UX/UI aplicado a projetos reais",
      desc: "Nosso background em UX/UI não fica só nos produtos digitais. Ele está em cada decisão de estrutura, navegação e hierarquia."
    },
    {
      icon: "solar:routing-2-bold-duotone",
      title: "Processo claro e previsível",
      desc: "Diagnóstico → Estratégia → Design → Entrega. Sem surpresas, sem sumiço. O Método LÚMEN garante início, meio e fim definidos."
    },
    {
      icon: "solar:network-bold-duotone",
      title: "Parceiros para escalar",
      desc: "Temos rede de parceiros de desenvolvimento, tornando possível entregar desde o design no Figma até o projeto no ar."
    }
  ];

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <SectionLabel text="POR QUE A MYTHIKA" />
          <FormattedHeading 
            text="Design bonito qualquer um promete. A Mythika organiza a experiência *inteira.*"
            className="text-3xl md:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#1A1A1A]/40 border border-[#2E2E2E] rounded-2xl p-8 flex gap-6 hover:bg-[#1A1A1A]/80 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center shrink-0 border border-[#2E2E2E]">
                <iconify-icon icon={item.icon} class="text-[#9333EA] text-2xl"></iconify-icon>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Differentiators;