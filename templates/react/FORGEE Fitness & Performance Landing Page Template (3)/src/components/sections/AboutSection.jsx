import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const AboutSection = () => {
  const pillars = [
    {
      icon: "solar:lightbulb-bolt-linear",
      title: "Intensidade",
      desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino."
    },
    {
      icon: "solar:target-linear",
      title: "Precisão",
      desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui."
    },
    {
      icon: "solar:tuning-linear",
      title: "Controle",
      desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Col */}
          <div className="flex flex-col gap-12">
            <SectionHeader 
              eyebrow="Quem somos"
              title="FORJADOS\nPELA\nDISCIPLINA."
            />
            
            <p className="text-[#888780] text-lg leading-relaxed max-w-md">
              A FORGEE nasceu de uma certeza simples:<br/>
              ambiente mediano produz resultado mediano.
              <br/><br/>
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>

            <blockquote className="pl-6 border-l-2 border-[#BFFF00] font-serif italic text-2xl md:text-3xl text-white">
              "In silence,<br/>
              the transformation<br/>
              begins."
            </blockquote>
          </div>

          {/* Right Col */}
          <div className="flex flex-col justify-center gap-16">
            <p className="text-[#888780] text-lg leading-relaxed max-w-lg">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-subtle flex items-center justify-center text-[#BFFF00] text-2xl">
                    <iconify-icon icon={pillar.icon}></iconify-icon>
                  </div>
                  <h3 className="font-semibold text-lg text-white">{pillar.title}</h3>
                  <p className="text-[#888780] text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;