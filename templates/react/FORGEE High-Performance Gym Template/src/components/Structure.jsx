import { useState } from 'react';

export default function Structure() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: '01',
      name: 'CARDIO & CONDITIONING',
      items: [
        'Assault Bike Concept2 — 8 UNIDADES',
        'Remo Concept2 Model D — 6 UNIDADES',
        'SkiErg Concept2 — 4 UNIDADES',
        'Esteiras NordicTrack com inclinação negativa',
        'Cordas de batalha 15m e 20m'
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'
    },
    {
      id: '02',
      name: 'FORÇA LIVRE',
      items: [
        'Plataformas de LPO Eleiko',
        'Racks de Agachamento Rogue Fitness',
        'Halteres calibrados até 60kg',
        'Anilhas Bumpers de competição',
        'Bancos ajustáveis pesados'
      ],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    },
    {
      id: '03',
      name: 'MÁQUINAS',
      items: [
        'Leg Press 45º Linear',
        'Hack Squat Pendulum',
        'Máquinas Hammer Strength isolaterais',
        'Crossover duplo com polias ajustáveis',
        'Cadeiras extensoras e flexoras de alta carga'
      ],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80'
    }
  ];

  return (
    <section className="px-6 md:px-12 max-w-[1280px] mx-auto mt-32">
      <div className="mb-4">
        <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold">Estrutura</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight mb-6 uppercase">
            Equipamento<br />Que Não Te<br /><span className="text-[#1B40FF]">Limita.</span>
          </h2>
          <p className="text-[#888888] text-lg">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[500px]">
        {/* Accordion List */}
        <div className="flex flex-col gap-2">
          {categories.map((cat, index) => (
            <div 
              key={cat.id}
              className={`border-b border-white/10 transition-all ${activeTab === index ? 'pb-8' : 'pb-0'}`}
            >
              <button 
                onClick={() => setActiveTab(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className={`font-display text-2xl ${activeTab === index ? 'text-[#E84A1A]' : 'text-[#444444] group-hover:text-white transition-colors'}`}>{cat.id}</span>
                  <h3 className={`text-xl font-bold uppercase tracking-wider ${activeTab === index ? 'text-white' : 'text-[#888888] group-hover:text-white transition-colors'}`}>{cat.name}</h3>
                </div>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  class={`text-2xl transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-white' : 'text-[#444444]'}`}
                ></iconify-icon>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col gap-3 pl-14">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-[#CCCCCC] flex items-start gap-3">
                      <span className="text-[#E84A1A] mt-1 text-xs">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Image Display */}
        <div className="relative rounded-2xl overflow-hidden hidden lg:block bg-[#1E1E1E]">
          {categories.map((cat, index) => (
            <img 
              key={cat.id}
              src={cat.image} 
              alt={cat.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}