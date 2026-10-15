import React, { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import clsx from 'clsx'

export default function StructureSection() {
  const [openSection, setOpenSection] = useState(0)

  const equipmentList = [
    {
      title: 'CARDIO & CONDITIONING',
      items: [
        'Assault Bike Concept2 — 8 UNIDADES',
        'Remo Concept2 Model D — 6 UNIDADES',
        'SkiErg Concept2 — 4 UNIDADES',
        'Esteiras NordicTrack com inclinação negativa',
        'Cordas de batalha 15m e 20m'
      ]
    },
    {
      title: 'FORÇA LIVRE',
      items: [
        'Racks de agachamento Rogue Fitness — 6 UNIDADES',
        'Plataformas de LPO integradas — 4 UNIDADES',
        'Halteres calibrados de 1kg a 60kg (pares duplos)',
        'Anilhas olímpicas emborrachadas Bumper Plates',
        'Bancos ajustáveis reforçados'
      ]
    },
    {
      title: 'MÁQUINAS',
      items: [
        'Linha Hammer Strength Plate-Loaded',
        'Leg Press 45º articulado de alta carga',
        'Crossover angular com polias duplas',
        'Máquinas de polia com pilha de peso 120kg+',
        'GHD (Glute Ham Developer) e Reverse Hyper'
      ]
    },
    {
      title: 'FUNCIONAL & MOBILITY',
      items: [
        'Espaço de 200m² em grama sintética',
        'Caixas pliométricas de madeira e EVA',
        'Kettlebells calibrados de 4kg a 48kg',
        'Wall balls e Slam balls',
        'Rolo de liberação miofascial e elásticos'
      ]
    },
    {
      title: 'INFRAESTRUTURA',
      items: [
        'Vestiários privativos padrão hotelaria',
        'Climatização controlada (20ºC constantes)',
        'Filtros de água gelada ozonizada',
        'Estacionamento próprio gratuito',
        'Wi-Fi de alta velocidade'
      ]
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-dot-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <SectionLabel>Estrutura</SectionLabel>
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.9] tracking-tighter uppercase text-white mb-6">
              Equipamento<br/>
              Que Não Te<br/>
              <span className="text-[#00C2E0]">Limita.</span>
            </h2>
            <p className="text-[#7A7A7A] text-base leading-relaxed mb-8">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias. Hardware industrial para corpos em transformação.
            </p>
            
            <div className="hidden lg:block relative aspect-square bg-[#141414] border border-[#1A1A1A] p-2 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1596356453261-0d268d0b670f?w=600&q=80" 
                alt="Equipamentos pesados" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-[#00C2E0]/10 mix-blend-color"></div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {equipmentList.map((category, idx) => (
                <div 
                  key={idx} 
                  className={clsx(
                    "border border-[#1A1A1A] bg-[#0A0A0A] transition-all duration-300",
                    openSection === idx ? "border-[#3D3D3D] shadow-card" : "hover:border-[#3D3D3D]"
                  )}
                >
                  <button
                    onClick={() => setOpenSection(openSection === idx ? -1 : idx)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="font-display font-bold text-lg text-[#3D3D3D]">
                        0{idx + 1}
                      </span>
                      <span className={clsx(
                        "font-display font-bold text-xl md:text-2xl tracking-wide uppercase transition-colors",
                        openSection === idx ? "text-white" : "text-[#7A7A7A]"
                      )}>
                        {category.title}
                      </span>
                    </div>
                    <iconify-icon 
                      icon="solar:alt-arrow-down-linear" 
                      width="24" 
                      className={clsx(
                        "transition-transform duration-300",
                        openSection === idx ? "text-[#E8001C] rotate-180" : "text-[#3D3D3D]"
                      )}
                    ></iconify-icon>
                  </button>
                  
                  <div className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openSection === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-6 pb-6 pt-2 ml-10">
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start text-sm text-[#C8C8C8]">
                            <span className="text-[#E8001C] mr-3 mt-1 text-[10px]">■</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}