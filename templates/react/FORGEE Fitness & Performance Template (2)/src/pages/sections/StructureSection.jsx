import React from 'react';
import { Label, H2, BodyText, SectionMarker } from '../../components/Typography';
import clsx from 'clsx';

export default function StructureSection() {
  const categories = [
    {
      title: 'CARDIO & CONDITIONING',
      items: ['Assault Bike Concept2 — 8 UNIDADES', 'Remo Concept2 Model D — 6 UNIDADES', 'SkiErg Concept2 — 4 UNIDADES', 'Esteiras NordicTrack com inclinação negativa', 'Cordas de batalha 15m e 20m']
    },
    {
      title: 'FORÇA LIVRE',
      items: ['Racks Eleiko Customizados', 'Anilhas de Competição Rogue', 'Halteres Urethane até 60kg', 'Bancos Reguláveis Heavyduty']
    },
    {
      title: 'MÁQUINAS',
      items: ['Linha Cybex Eagle NX', 'Leg Press Linear Hammer Strength', 'Cabos Crossover Duplos']
    },
    {
      title: 'FUNCIONAL & MOBILITY',
      items: ['Área de Grama Sintética 30m', 'Kettlebells Competição', 'Caixas Pliométricas Soft', 'Acessórios de Liberação Miofascial']
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionMarker current="03" total="09" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <Label className="mb-6">Estrutura</Label>
          <H2 className="mb-8">EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.</H2>
          <BodyText className="mb-12 max-w-md">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </BodyText>
          
          <div className="w-full aspect-square bg-[#D6CFC5]">
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" alt="Gym weights" className="w-full h-full object-cover grayscale" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-12">
            {categories.map((cat, i) => (
              <div key={i} className={clsx("border-t border-[#D6CFC5] pt-6", i === 0 && "border-t-2 border-[#1A1812]")}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1812] mb-6 flex justify-between">
                  <span>0{i+1} — {cat.title}</span>
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-[#6B6259] text-sm flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#1A1812] mt-2 block shrink-0"></span>
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
}