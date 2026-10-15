import React, { useState } from 'react';
import clsx from 'clsx';

const Structure = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const equipment = [
    {
      title: "CARDIO & CONDITIONING",
      items: ["Assault Bike Concept2 · 8 UNIDADES", "Remo Concept2 Model D · 6 UNIDADES", "SkiErg Concept2 · 4 UNIDADES", "Esteiras NordicTrack com inclinação negativa", "Cordas de batalha 15m e 20m"]
    },
    {
      title: "FORÇA LIVRE",
      items: ["Racks Eleiko Half & Full", "Plataformas de LPO", "Dumbbells calibrados até 60kg", "Kettlebells de competição"]
    },
    {
      title: "MÁQUINAS",
      items: ["Linha completa Hammer Strength Plate-Loaded", "Cabos e polias duplas ajustáveis", "Máquinas isoladoras biomecânicas"]
    },
    {
      title: "FUNCIONAL & MOBILITY",
      items: ["Área de grama sintética 30m", "Caixas pliométricas soft e wood", "Faixas elásticas, rolos de soltura, mat", "Espaldar e barras de alongamento"]
    },
    {
      title: "INFRAESTRUTURA",
      items: ["Vestiários premium com toalhas", "Climatização setorizada", "Wi-Fi dedicado para alunos", "Estacionamento conveniado"]
    }
  ];

  return (
    <section className="py-24 bg-[#0F1420] border-y border-white/5 relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none whitespace-nowrap overflow-hidden">
        <h2 className="font-display font-black text-[20vw] leading-none uppercase">Structure</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#8ADB00]"></div>
            <span className="text-[#8ADB00] uppercase tracking-widest text-xs font-bold">Estrutura</span>
          </div>
          <h2 className="font-display font-black text-5xl uppercase tracking-tighter leading-[0.9] mb-6">
            Equipamento <br/>Que Não Te <br/>Limita.
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias. Sem máquinas da moda, apenas o essencial levado ao nível máximo.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          {equipment.map((cat, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "border border-white/10 rounded-xl overflow-hidden transition-all duration-300 bg-[#131313]",
                openIndex === idx ? "border-[#4A4A4A]" : "hover:border-white/20"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-neutral-600 font-display font-bold text-xl">0{idx + 1}</span>
                  <span className={clsx(
                    "font-display uppercase tracking-widest text-lg transition-colors",
                    openIndex === idx ? "text-white" : "text-neutral-400"
                  )}>{cat.title}</span>
                </div>
                <iconify-icon 
                  icon="solar:alt-arrow-down-line-duotone" 
                  class={clsx(
                    "text-xl transition-transform duration-300",
                    openIndex === idx ? "rotate-180 text-[#8ADB00]" : "text-neutral-500"
                  )}
                ></iconify-icon>
              </button>
              
              <div 
                className={clsx(
                  "grid transition-all duration-300 ease-in-out px-6",
                  openIndex === idx ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <ul className="overflow-hidden flex flex-col gap-3 pl-10 border-l border-white/10 ml-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-300 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8280D] shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Structure;