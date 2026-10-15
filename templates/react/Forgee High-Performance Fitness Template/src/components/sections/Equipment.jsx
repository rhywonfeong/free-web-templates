import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import CTAGroup from '../ui/CTAGroup';

const Equipment = () => {
  const categories = [
    {
      icon: "solar:heart-pulse-linear",
      name: "CARDIO",
      desc: "Zona dedicada ao condicionamento aeróbico com equipamentos de última geração.",
      items: ["Esteiras profissionais (inclinação 15%)", "Bikes ergométricas magnéticas", "Rowers Concept2", "Skierg e Air Bike"]
    },
    {
      icon: "solar:dumbbell-large-linear",
      name: "FORÇA",
      desc: "Área de levantamento com plataformas e estrutura completa para potência máxima.",
      items: ["Plataformas olímpicas", "Rack de agachamento", "Bancos de supino multi-ângulo", "Dumbbells 2kg a 60kg"]
    },
    {
      icon: "solar:settings-bold-duotone",
      name: "MÁQUINAS",
      desc: "Linha completa de equipamentos de resistência selecionados para eficiência biomecânica.",
      items: ["Leg press 45°", "Cadeira extensora e flexora", "Hack squat e Smith", "Polias e cabos de alta tensão"]
    },
    {
      icon: "solar:stopwatch-linear",
      name: "CONDICIONAMENTO",
      desc: "Zona de alta intensidade para protocolos de resistência e trabalho metabólico.",
      items: ["Cordas battle rope", "Kettlebells (6kg a 48kg)", "Sandbags e medicine balls", "Sleds e prowlers"]
    },
    {
      icon: "solar:accessibility-linear",
      name: "FUNCIONAL",
      desc: "Área aberta para treinos multiplanares e movimentos que replicam padrões atléticos reais.",
      items: ["Rig modular de 8 posições", "Caixas pliométricas", "Faixas de resistência", "Espaço de 320m² livre"]
    },
    {
      icon: "solar:building-linear",
      name: "INFRAESTRUTURA",
      desc: "O ambiente foi projetado como parte do protocolo. Cada detalhe suporta a performance.",
      items: ["Vestiários premium com biometria", "Área de hidratação e suplementação", "Estacionamento privativo", "App Forgee integrado"]
    }
  ];

  return (
    <section id="estrutura" className="py-24 md:py-32 bg-[#F0EEEC]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <SectionHeader 
          eyebrow="ESTRUTURA"
          title="TUDO QUE A ALTA PERFORMANCE EXIGE."
          subtitle="2.400m² de infraestrutura projetada para quem leva o treinamento a sério. Cada zona, cada equipamento, cada detalhe — com intenção."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] border border-[#E6E3E0] shadow-sm hover:shadow-md hover:border-[#E84E0F]/40 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#F8F7F6] flex items-center justify-center group-hover:bg-[#FFF0E8] transition-colors">
                  <iconify-icon icon={cat.icon} width="28" class="text-[#0F0D0B] group-hover:text-[#E84E0F] transition-colors" />
                </div>
                <h3 className="font-display font-bold text-[24px] uppercase tracking-tight text-[#0F0D0B]">
                  {cat.name}
                </h3>
              </div>
              <p className="text-[#4A4540] text-[15px] mb-6 min-h-[45px]">
                {cat.desc}
              </p>
              <ul className="space-y-3 border-t border-[#F0EEEC] pt-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#1E1B18]">
                    <span className="text-[#E84E0F] mt-1 text-[10px]">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[#D4D0CC]">
          <p className="font-display font-bold text-[20px] uppercase text-[#0F0D0B] mb-6">
            Quer ver pessoalmente? A visita é gratuita e sem compromisso.
          </p>
          <CTAGroup />
        </div>
      </div>
    </section>
  );
};

export default Equipment;