import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const EquipmentSection = () => {
  const categories = [
    {
      id: "01",
      title: "CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 — 8 unidades",
        "Remo Concept2 Model D — 6 unidades",
        "SkiErg Concept2 — 4 unidades",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      id: "02",
      title: "FORÇA LIVRE",
      items: [
        "Halteres de 2kg a 60kg (pares completos)",
        "Barras olímpicas e de powerlifting",
        "Racks de agachamento — 6 estações",
        "Plataformas de levantamento",
        "Kettlebells 8kg a 48kg",
        "Banco inclinado, reto e declinado"
      ]
    },
    {
      id: "03",
      title: "MÁQUINAS",
      items: [
        "Leg Press 45° e Hack Squat",
        "Pec Deck e Crossover a cabo",
        "Cadeira extensora e flexora",
        "Lat Pulldown e Remada baixa",
        "Smith Machine — 2 unidades",
        "Chest Press e Shoulder Press"
      ]
    },
    {
      id: "04",
      title: "FUNCIONAL & MOBILITY",
      items: [
        "Área de 200m² dedicada ao funcional",
        "Tatame e faixas de alongamento",
        "TRX e anéis de ginástica",
        "Foam rollers e bolas de mobilidade",
        "Wall balls, medicine balls e slam balls",
        "Caixas plyo 30, 45 e 60cm"
      ]
    },
    {
      id: "05",
      title: "INFRAESTRUTURA",
      items: [
        "Vestiários espaçosos com armários individuais",
        "Duchas com água quente — 24h",
        "Estacionamento gratuito",
        "Wi-Fi de alta velocidade",
        "App FORGEE com seu treino e evolução",
        "Ar condicionado em todos os ambientes"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-base relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-surface rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Header Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start flex flex-col gap-8">
            <SectionHeader 
              eyebrow="Estrutura"
              title="EQUIPAMENTO\nQUE NÃO TE\nLIMITA."
              subtitle="Cada peça selecionada com um critério: aguentar seu melhor dia — todos os dias."
            />
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4">
              <Button variant="secondary" className="w-fit">CONHECER O ESPAÇO</Button>
              <Button variant="ghost" className="w-fit !px-0">FALAR COM ESPECIALISTA</Button>
            </div>
          </div>

          {/* Lists */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12">
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-subtle pb-4">
                  <span className="text-[#888780] font-semibold tabular-nums">{cat.id}</span>
                  <h3 className="text-white font-semibold tracking-wide uppercase">{cat.title}</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#888780] text-sm">
                      <span className="text-[#BFFF00] mt-[2px]">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;