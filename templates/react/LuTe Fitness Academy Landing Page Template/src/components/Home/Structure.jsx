import React from 'react';

const areas = [
  {
    id: '01',
    title: 'CARDIO & CONDITIONING',
    desc: 'Assault Bike Concept2 (8 un), Remo Concept2 Model D (6 un), SkiErg Concept2 (4 un), Esteiras NordicTrack, Cordas de batalha.',
    icon: 'solar:heart-pulse-linear'
  },
  {
    id: '02',
    title: 'FORÇA LIVRE',
    desc: 'Plataformas de LPO, Racks de agachamento Rogue, Anilhas olímpicas calibradas, Halteres até 60kg.',
    icon: 'solar:dumbbell-large-linear'
  },
  {
    id: '03',
    title: 'MÁQUINAS',
    desc: 'Equipamentos articulados e de polia com biomecânica avançada para isolamento muscular preciso.',
    icon: 'solar:settings-linear'
  },
  {
    id: '04',
    title: 'FUNCIONAL & MOBILITY',
    desc: 'Área livre com piso absorvente, kettlebells, medicine balls, elásticos e rolos de liberação.',
    icon: 'solar:accessibility-linear'
  },
];

const Structure = () => {
  return (
    <section id="estrutura" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 uppercase">
            Equipamento que <span className="text-[#00F9E4]">não te limita.</span>
          </h2>
          <p className="text-[#9A9A9A] text-lg">
            Cada peça selecionada com um critério: aguentar seu melhor dia — todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C1C1C] border border-[#1C1C1C]">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-8 md:p-12 group hover:bg-[#121212] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center group-hover:bg-[#00F9E4]/10 transition-colors">
                  <iconify-icon icon={area.icon} class="text-2xl text-[#9A9A9A] group-hover:text-[#00F9E4] transition-colors"></iconify-icon>
                </div>
                <span className="text-[#6B6B6B] font-mono text-sm">{area.id}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">{area.title}</h3>
              <p className="text-[#6B6B6B] leading-relaxed group-hover:text-[#9A9A9A] transition-colors">
                {area.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Structure;