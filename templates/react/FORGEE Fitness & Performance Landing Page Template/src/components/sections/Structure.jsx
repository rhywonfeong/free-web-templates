import { useState } from 'react';
import { Eyebrow, Headline } from '../ui/Typography';

export default function Structure() {
  const [openId, setOpenId] = useState('01');

  const categories = [
    {
      id: '01',
      title: 'CARDIO & CONDITIONING',
      content: [
        'Assault Bike Concept2 — 8 UNIDADES',
        'Remo Concept2 Model D — 6 UNIDADES',
        'SkiErg Concept2 — 4 UNIDADES',
        'Esteiras NordicTrack com inclinação negativa',
        'Cordas de batalha 15m e 20m'
      ]
    },
    {
      id: '02',
      title: 'FORÇA LIVRE',
      content: [
        'Plataformas de LPO Eleiko',
        'Racks Rogue Fitness',
        'Dumbbells até 80kg',
        'Kettlebells competição'
      ]
    },
    {
      id: '03',
      title: 'MÁQUINAS',
      content: [
        'Linha Hammer Strength Plate-Loaded',
        'Cybex Eagle Series',
        'Polias duplas ajustáveis'
      ]
    },
    {
      id: '04',
      title: 'FUNCIONAL & MOBILITY',
      content: [
        'Área de tatame 200m²',
        'Caixas pliométricas soft',
        'Wall balls e slam balls',
        'Acessórios de liberação miofascial'
      ]
    },
    {
      id: '05',
      title: 'INFRAESTRUTURA',
      content: [
        'Vestiários privativos com toalhas',
        'Lounge de recuperação',
        'Wi-Fi de alta velocidade',
        'Estacionamento gratuito'
      ]
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-[#2A2A2A]">
      <div className="mb-16">
        <Eyebrow>Estrutura</Eyebrow>
        <Headline text="EQUIPAMENTO QUE NÃO TE LIMITA." highlight="EQUIPAMENTO" size="lg" />
        <p className="text-[#B0B0B0] max-w-md mt-6 text-base">
          Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
        </p>
      </div>

      {/* 2-Column Layout matching Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* Left: Big Image */}
        <div className="relative h-[500px] lg:h-[700px] w-full rounded-md overflow-hidden bg-[#181818]">
          <img 
            src="https://images.unsplash.com/photo-1434596922112-19c563067271?w=1200&q=80" 
            alt="Atleta em treinamento com cordas" 
            className="w-full h-full object-cover grayscale-[30%] contrast-125"
          />
          {/* Subtle vignette/shadow matching reference */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent"></div>
        </div>

        {/* Right: Accordion */}
        <div className="flex flex-col gap-4">
          {categories.map((cat) => {
            const isOpen = openId === cat.id;
            // Split title to color the first word orange as seen in reference
            const titleWords = cat.title.split(' ');
            const firstWord = titleWords[0];
            const restOfTitle = titleWords.slice(1).join(' ');

            return (
              <div 
                key={cat.id} 
                className={`bg-[#1E1E1E] rounded-md transition-all duration-300 overflow-hidden cursor-pointer border border-[#2A2A2A] hover:border-[#3A3A3A]`}
                onClick={() => setOpenId(isOpen ? '' : cat.id)}
              >
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                    <span className="text-[#E8400A] mr-2">{cat.id}</span>
                    <span className="text-[#E8400A]">{firstWord}</span>
                    {restOfTitle && <span className="text-white ml-2">{restOfTitle}</span>}
                  </h3>
                  <iconify-icon 
                    icon="solar:alt-arrow-right-linear" 
                    class={`text-2xl text-[#6B6B6B] transition-transform duration-300 ${isOpen ? 'rotate-90 text-white' : ''}`}
                  ></iconify-icon>
                </div>
                
                <div 
                  className={`px-6 md:px-8 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <ul className="text-[#B0B0B0] text-sm md:text-base flex flex-col gap-3">
                    {cat.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#6B6B6B] mr-3 mt-1 text-[10px]">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}