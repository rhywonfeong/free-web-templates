import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import clsx from 'clsx'

const StructureSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      name: "CARDIO & CONDITIONING",
      items: [
        { name: "Assault Bike Concept2", qty: "8 UNIDADES" },
        { name: "Remo Concept2 Model D", qty: "6 UNIDADES" },
        { name: "SkiErg Concept2", qty: "4 UNIDADES" },
        { name: "Esteiras NordicTrack com inclinação negativa", qty: "—" },
        { name: "Cordas de batalha 15m e 20m", qty: "—" },
      ]
    },
    {
      name: "FORÇA LIVRE",
      items: [
        { name: "Gaiolas de Agachamento Eleiko", qty: "6 UNIDADES" },
        { name: "Plataformas LPO", qty: "4 UNIDADES" },
        { name: "Halteres até 60kg", qty: "PARES DUPLOS" },
        { name: "Anilhas Bumper Competition", qty: "+1000KG" },
      ]
    },
    {
      name: "MÁQUINAS",
      items: [
        { name: "Leg Press 45º Arsenal", qty: "2 UNIDADES" },
        { name: "Hack Squat", qty: "1 UNIDADE" },
        { name: "Crossover Multi-Station", qty: "2 ESTAÇÕES" },
        { name: "Máquinas Isoladas Hammer Strength", qty: "COMPLETO" },
      ]
    },
    {
      name: "FUNCIONAL & MOBILITY",
      items: [
        { name: "Turf track 25 metros", qty: "1 ÁREA" },
        { name: "Sled push/pull", qty: "2 UNIDADES" },
        { name: "Wall balls, Kettlebells variados", qty: "COMPLETO" },
        { name: "Área de soltura e mobilidade dedicada", qty: "100M²" },
      ]
    }
  ]

  return (
    <section className="py-32 bg-[#0A2E00] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <SectionHeading 
          theme="dark"
          label="Estrutura"
          title={<>EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.</>}
          description="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tabs Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={clsx(
                  "text-left px-6 py-5 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group",
                  activeTab === i 
                    ? "bg-[#CCFF00] text-[#0A2E00]" 
                    : "bg-[#1A5C00]/50 text-white hover:bg-[#1A5C00]"
                )}
              >
                {cat.name}
                <iconify-icon 
                  icon="solar:alt-arrow-right-linear" 
                  className={clsx(
                    "text-xl transition-transform", 
                    activeTab === i ? "translate-x-1" : "opacity-50 group-hover:opacity-100 group-hover:translate-x-1"
                  )}
                ></iconify-icon>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8">
            <div className="bg-[#1A5C00]/30 border border-white/10 rounded-3xl p-8 lg:p-12 min-h-[400px]">
              <h3 className="text-2xl font-display uppercase tracking-widest text-[#CCFF00] mb-8">
                {categories[activeTab].name}
              </h3>
              
              <ul className="flex flex-col gap-4">
                {categories[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                    <span className="text-lg text-white font-medium">{item.name}</span>
                    <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full text-[#9E9E9E]">
                      {item.qty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StructureSection