import React, { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

const EquipmentSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "01 — CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 · 8 UNIDADES",
        "Remo Concept2 Model D · 6 UNIDADES",
        "SkiErg Concept2 · 4 UNIDADES",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      name: "02 — FORÇA LIVRE",
      items: [
        "Plataformas de LPO Eleiko",
        "Anilhas olímpicas calibradas",
        "Gaiolas de agachamento Rogue",
        "Dumbbells até 60kg",
        "Bancos ajustáveis pesados"
      ]
    },
    {
      name: "03 — MÁQUINAS",
      items: [
        "Linha completa Hammer Strength Plate-Loaded",
        "Máquinas de polia ajustável duplas",
        "Leg Press 45º Linear",
        "Hack Squat biomecânico",
        "Extensora/Flexora de alta precisão"
      ]
    },
    {
      name: "04 — FUNCIONAL & MOBILITY",
      items: [
        "Área de turf de 30m",
        "Trenós de tração e empurre",
        "Caixas pliométricas de madeira",
        "Kettlebells de competição (8-48kg)",
        "Restauração e liberação miofascial"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1C] relative border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5">
          <SectionHeading 
            subtitle="Estrutura"
            title="EQUIPAMENTO QUE NÃO TE *LIMITA*."
            className="mb-6"
          />
          <p className="text-[#808080] text-lg mb-12">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias. Setup brutal para execução impecável.
          </p>

          <div className="flex flex-col gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`text-left p-6 flex justify-between items-center border border-[#2E2E2E] transition-all duration-300 ${
                  activeCategory === idx 
                    ? 'bg-[#E8190F] border-[#E8190F] text-white shadow-[0_4px_20px_rgba(232,25,15,0.2)]' 
                    : 'bg-[#0D0D0D] text-[#808080] hover:border-[#FF4A1C] hover:text-white'
                }`}
              >
                <span className="font-display tracking-widest text-xl">{cat.name}</span>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-2xl"></iconify-icon>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative bg-[#0D0D0D] p-8 md:p-16 border border-[#2E2E2E] flex flex-col justify-center min-h-[500px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E2E2E] opacity-20 blur-3xl"></div>
          
          <h3 className="font-display text-4xl text-white mb-10 tracking-wide">
            {categories[activeCategory].name}
          </h3>
          
          <ul className="flex flex-col gap-6">
            {categories[activeCategory].items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-[#BFBFBF] text-lg border-b border-[#2E2E2E] pb-4 last:border-0">
                <span className="text-[#E8190F] font-display mt-1">/</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default EquipmentSection