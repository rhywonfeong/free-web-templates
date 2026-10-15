import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { clsx } from 'clsx';

const Equipment = () => {
  const [openIdx, setOpenIdx] = useState(0); // Accordion state, defaults to first open

  const categories = [
    {
      name: "01 · CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 — 8 UNIDADES",
        "Remo Concept2 Model D — 6 UNIDADES",
        "SkiErg Concept2 — 4 UNIDADES",
        "Esteiras NordicTrack (inclinação negativa)",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      name: "02 · FORÇA LIVRE",
      items: [
        "Plataformas de LPO Eleiko",
        "Anilhas Olímpicas Bumpers",
        "Halteres de 1kg a 60kg (pares triplos)",
        "Gaiolas de Agachamento Rogue",
        "Bancos ajustáveis pesados"
      ]
    },
    {
      name: "03 · MÁQUINAS",
      items: [
        "Linha Cybex Prestige",
        "Leg Press 45° Articulado",
        "Crossover duplo com polias ajustáveis",
        "Hack Squat Linear",
        "Extensora e Flexora isoladas"
      ]
    },
    {
      name: "04 · FUNCIONAL & MOBILITY",
      items: [
        "Kettlebells de 4kg a 40kg",
        "Caixas Pliométricas soft",
        "Bolas Medicinais Dinâmicas",
        "Tatame de alta densidade 50m²",
        "Acessórios de liberação miofascial"
      ]
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <SectionHeading 
              label="ESTRUTURA"
              title={"EQUIPAMENTO\nQUE NÃO TE\nLIMITA."}
              description="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
            />
            
            <div className="relative w-full h-64 lg:h-[400px] mt-12 overflow-hidden border border-[#2E2E2E]">
               <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" 
                alt="Gym equipment" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="border-t border-[#2E2E2E] pt-6 group">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={clsx(
                    "text-xl font-bold tracking-widest transition-colors",
                    openIdx === idx ? "text-[#E02020]" : "text-white group-hover:text-[#E02020]"
                  )}>
                    {cat.name}
                  </h3>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    width="20" 
                    className={clsx(
                      "transition-all duration-300",
                      openIdx === idx ? "text-[#E02020] rotate-180" : "text-neutral-600 group-hover:text-[#E02020]"
                    )}
                  ></iconify-icon>
                </button>
                
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openIdx === idx ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  <ul className="flex flex-col gap-3 pb-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                        <div className="w-1.5 h-1.5 rounded-none bg-[#E02020] mt-1.5 opacity-50"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;