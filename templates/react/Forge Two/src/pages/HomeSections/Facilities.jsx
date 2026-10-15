import React, { useState } from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

const Facilities = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    {
      title: "CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 — 8 UNIDADES",
        "Remo Concept2 Model D — 6 UNIDADES",
        "SkiErg Concept2 — 4 UNIDADES",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      title: "FORÇA LIVRE",
      items: [
        "Plataformas de LPO Eleiko",
        "Barras Olímpicas Rogue (20kg e 15kg)",
        "Anilhas calibradas para competição",
        "Halteres em pares até 60kg",
        "Kettlebells de 4kg a 48kg"
      ]
    },
    {
      title: "MÁQUINAS",
      items: [
        "Linha completa Hammer Strength Plate-Loaded",
        "Polias duplas ajustáveis",
        "Leg Press 45º Linear",
        "Hack Squat biomecânico",
        "Máquinas de isolamento Cybex"
      ]
    },
    {
      title: "FUNCIONAL & MOBILITY",
      items: [
        "Espaço aberto em grama sintética (200m²)",
        "Caixas pliométricas de madeira e soft",
        "Bandas elásticas de resistência variada",
        "Rolos de liberação miofascial",
        "Rig de ginástica com argolas"
      ]
    },
    {
      title: "INFRAESTRUTURA",
      items: [
        "Vestiários amplos com duchas pressurizadas",
        "Armários rotativos digitais",
        "Estação de água filtrada ozonizada",
        "Wi-Fi de alta velocidade",
        "Estacionamento próprio com valet"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <SectionHeading 
            eyebrow="Estrutura"
            title="EQUIPAMENTO QUE NÃO TE LIMITA."
            highlightWords={['LIMITA.']}
            description="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
          />
          <div className="mt-8 hidden lg:block">
             <img 
              src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=1572&auto=format&fit=crop" 
              alt="Kettlebells e estrutura da academia" 
              className="w-full h-80 object-cover rounded-md grayscale-[30%] opacity-80"
            />
          </div>
        </div>

        <div className="space-y-4">
          {categories.map((category, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-[#2A2A2A] transition-colors duration-300 ${isOpen ? 'bg-[#1E1E1E]' : 'bg-[#111111] hover:bg-[#1E1E1E]/50'}`}
              >
                <button 
                  className="w-full text-left px-6 py-6 flex items-center justify-between"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-display font-bold text-xl ${isOpen ? 'text-[#E8400A]' : 'text-[#6B6B6B]'}`}>
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl tracking-wider uppercase text-white">
                      {category.title}
                    </h3>
                  </div>
                  <iconify-icon 
                    icon={isOpen ? "solar:minus-square-linear" : "solar:add-square-linear"} 
                    width="24" 
                    height="24"
                    class={`transition-colors ${isOpen ? 'text-[#E8400A]' : 'text-[#6B6B6B]'}`}
                  ></iconify-icon>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ul className="px-6 pb-6 pt-2 space-y-3 pl-[3.5rem]">
                    {category.items.map((item, i) => {
                      const [name, qty] = item.split(' — ');
                      return (
                        <li key={i} className="text-[#B0B0B0] flex flex-col md:flex-row md:items-center md:justify-between text-sm md:text-base border-b border-[#2A2A2A]/50 pb-2 last:border-0">
                          <span>{name}</span>
                          {qty && <span className="text-[#E8400A] font-display tracking-widest text-xs uppercase mt-1 md:mt-0">{qty}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Facilities;