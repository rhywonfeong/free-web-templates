import React from 'react';
import Accordion from '../ui/Accordion';

export default function Equipment() {
  const equipmentItems = [
    {
      number: '01',
      title: 'CARDIO & CONDITIONING',
      content: (
        <ul className="space-y-3 font-mono text-sm tracking-wide">
          <li className="flex justify-between border-b border-[#2C2C2C] pb-2"><span>&gt; Assault Bike Concept2</span><span className="text-white">8 UNIDADES</span></li>
          <li className="flex justify-between border-b border-[#2C2C2C] pb-2"><span>&gt; Remo Concept2 Model D</span><span className="text-white">6 UNIDADES</span></li>
          <li className="flex justify-between border-b border-[#2C2C2C] pb-2"><span>&gt; SkiErg Concept2</span><span className="text-white">4 UNIDADES</span></li>
          <li className="flex justify-between border-b border-[#2C2C2C] pb-2"><span>&gt; Esteiras NordicTrack inclinação negativa</span><span className="text-white"></span></li>
          <li className="flex justify-between"><span>&gt; Cordas de batalha 15m e 20m</span><span className="text-white"></span></li>
        </ul>
      )
    },
    { number: '02', title: 'FORÇA LIVRE', content: 'Equipamentos de musculação pesada, racks olímpicos e anilhas calibradas.' },
    { number: '03', title: 'MÁQUINAS', content: 'Máquinas seletorizadas de última geração com polias suaves e biomecânica perfeita.' },
    { number: '04', title: 'FUNCIONAL & MOBILITY', content: 'Espaço aberto para calistenia, kettlebells pesados e ferramentas de recuperação.' },
    { number: '05', title: 'INFRAESTRUTURA', content: 'Vestiários premium, climatização setorizada e iluminação focada.' }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col gap-10">
          <div>
            <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4">ESTRUTURA</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight mb-4">
              EQUIPAMENTO QUE NÃO TE LIMITA.
            </h2>
            <p className="text-[#888888] font-bold tracking-widest text-xs uppercase leading-relaxed max-w-md">
              CADA PEÇA SELECIONADA COM UM CRITÉRIO: AGUENTAR SEU MELHOR DIA — TODOS OS DIAS.
            </p>
          </div>
          
          <Accordion items={equipmentItems} />
        </div>

        <div className="relative h-[600px] lg:h-[800px] w-full hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
            alt="Gym structure" 
            className="w-full h-full object-cover rounded-lg filter grayscale opacity-70"
          />
          <div className="absolute inset-0 border border-[#2C2C2C] rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}