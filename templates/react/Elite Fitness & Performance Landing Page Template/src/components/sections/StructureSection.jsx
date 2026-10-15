import SectionHeading from '../ui/SectionHeading';

const StructureSection = () => {
  const equipment = [
    {
      category: "01 · CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 — 8 UNIDADES",
        "Remo Concept2 Model D — 6 UNIDADES",
        "SkiErg Concept2 — 4 UNIDADES",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      category: "02 · FORÇA LIVRE",
      items: ["Plataformas de LPO Eleiko", "Racks de agachamento Rogue", "Halteres de 1kg a 60kg", "Anilhas olímpicas calibradas"]
    },
    {
      category: "03 · MÁQUINAS",
      items: ["Linha completa Hammer Strength", "Polias duplas ajustáveis", "Máquinas isoladoras articuladas"]
    },
    {
      category: "04 · FUNCIONAL & MOBILITY",
      items: ["Kettlebells de 4kg a 40kg", "Caixas pliométricas ajustáveis", "Tatame para mobilidade", "Rolos de soltura miofascial"]
    },
    {
      category: "05 · INFRAESTRUTURA",
      items: ["Vestiários premium privativos", "Iluminação direcionada", "Climatização esportiva", "Estacionamento com manobrista"]
    }
  ];

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-[#080808] border-b border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionHeading 
                label="Estrutura"
                title="EQUIPAMENTO QUE NÃO TE LIMITA."
                subtitle="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
              />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipamentos Forgee" 
                className="w-full h-64 object-cover grayscale opacity-60 border border-white/10 hidden lg:block"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12">
            {equipment.map((group, idx) => (
              <div key={idx} className="border-b border-white/10 pb-12 last:border-0">
                <h3 className="text-[#E8201A] font-black text-xl uppercase tracking-wide mb-6">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-4 text-[#BDBDBD] text-sm">
                      <iconify-icon icon="solar:check-circle-bold" className="text-[#424242] mt-0.5 text-lg"></iconify-icon>
                      {item}
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

export default StructureSection;