import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';

export default function StructureSection() {
  const equipmentData = [
    {
      title: "01 · CARDIO & CONDITIONING",
      content: [
        "Assault Bike Concept2 — <strong class='text-white'>8 UNIDADES</strong>",
        "Remo Concept2 Model D — <strong class='text-white'>6 UNIDADES</strong>",
        "SkiErg Concept2 — <strong class='text-white'>4 UNIDADES</strong>",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    {
      title: "02 · FORÇA LIVRE",
      content: [
        "Plataformas de LPO Eleiko — <strong class='text-white'>4 ESTAÇÕES</strong>",
        "Barras Olímpicas Rogue Ohio Bar",
        "Anilhas Bumper Competition Rogue",
        "Halteres sextavados de 1kg a 60kg",
        "Bancos ajustáveis Heavy Duty"
      ]
    },
    {
      title: "03 · MÁQUINAS",
      content: [
        "Leg Press 45° Cybex Squat",
        "Hack Machine Hammer Strength",
        "Extensora/Flexora isolada articulada",
        "Crossover de polias duplas ajustáveis",
        "Smith Machine com contrapeso nulo"
      ]
    },
    {
      title: "04 · FUNCIONAL & MOBILITY",
      content: [
        "Rig central Rogue Monster Lite 24'",
        "Kettlebells competição 8kg a 40kg",
        "Caixas pliométricas de madeira",
        "Bolas medicinais D-Ball",
        "Área de tatame de alta densidade 50m²"
      ]
    },
    {
      title: "05 · INFRAESTRUTURA",
      content: [
        "Vestiários individuais climatizados",
        "Toalhas fornecidas sem custo extra",
        "Estação de hidratação dupla e isotônicos",
        "Wi-Fi dedicado para alunos (Sem bloqueios)",
        "Estacionamento privativo (40 vagas)"
      ]
    }
  ];

  return (
    <section id="estrutura" className="py-24 md:py-32 px-6 border-t border-[#1E1E1E] relative overflow-hidden">
      {/* Decorative side text */}
      <div className="absolute top-0 right-[-100px] h-full flex items-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-display text-[300px] tracking-tight whitespace-nowrap rotate-90 text-white">
          HARDWARE
        </span>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image side */}
        <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-colors duration-500 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
            alt="Equipamentos Forgee" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          {/* Tech crosshair decoration */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#E8400A] z-20"></div>
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#E8400A] z-20"></div>
        </div>

        {/* Content side */}
        <div className="order-1 lg:order-2 flex flex-col">
          <SectionHeader 
            eyebrow="Estrutura" 
            title={<>EQUIPAMENTO<br/>QUE NÃO TE<br/><span className="text-[#E8400A]">LIMITA.</span></>}
            description="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
          />
          
          <div className="mt-8">
            <Accordion items={equipmentData} />
          </div>
        </div>
      </div>
    </section>
  );
}