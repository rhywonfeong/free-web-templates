import React from 'react';
import { Accordion } from '../UI/Accordion';

const equipmentCategories = [
  {
    title: "01 · CARDIO & CONDITIONING",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-neutral-300">
        <li>Assault Bike Concept2 — 8 UNIDADES</li>
        <li>Remo Concept2 Model D — 6 UNIDADES</li>
        <li>SkiErg Concept2 — 4 UNIDADES</li>
        <li>Esteiras NordicTrack com inclinação negativa</li>
        <li>Cordas de batalha 15m e 20m</li>
      </ul>
    )
  },
  {
    title: "02 · FORÇA LIVRE",
    content: <p>Racks olímpicos, plataformas de LPO, barras Rogue Ohio, anilhas bumper padrão competição, halteres até 50kg.</p>
  },
  {
    title: "03 · MÁQUINAS",
    content: <p>Seleção premium Cybex e Hammer Strength focada em biometria perfeita e estabilidade sob carga máxima.</p>
  },
  {
    title: "04 · FUNCIONAL & MOBILITY",
    content: <p>Kettlebells variados, caixas pliométricas, bands, medballs, espaço aberto com piso de borracha absorvente de impacto 20mm.</p>
  },
  {
    title: "05 · INFRAESTRUTURA",
    content: <p>Vestiários premium com duchas de alta pressão, lockers individuais, climatização zonada e iluminação indireta sem ofuscamento.</p>
  }
];

export default function Structure() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Left Col - Context */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase text-neutral-50 mb-6">
            Equipamento que<br/>
            <span className="text-brand-green">Não te limita.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-10 border-l-2 border-neutral-700 pl-4">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
          
          <div className="aspect-square w-full max-w-md mx-auto lg:mx-0 overflow-hidden clip-shard border-2 border-neutral-800 relative hidden md:block">
            <div className="absolute inset-0 bg-neutral-950/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
              alt="Gym Equipment" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        {/* Right Col - Accordion */}
        <div className="lg:w-1/2 flex items-center">
          <Accordion items={equipmentCategories} />
        </div>

      </div>
    </section>
  );
}