import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { cn } from '../../utils/cn'

export default function Equipment() {
  const [openIndex, setOpenIndex] = useState(0)

  const categories = [
    {
      title: '01 — CARDIO & CONDITIONING',
      items: [
        { name: 'Assault Bike Concept2', qty: '8 UNIDADES' },
        { name: 'Remo Concept2 Model D', qty: '6 UNIDADES' },
        { name: 'SkiErg Concept2', qty: '4 UNIDADES' },
        { name: 'Esteiras NordicTrack com inclinação negativa', qty: null },
        { name: 'Cordas de batalha 15m e 20m', qty: null }
      ]
    },
    { title: '02 — FORÇA LIVRE', items: [{ name: 'Racks Eleiko', qty: '6 UNIDADES' }, { name: 'Anilhas Bumpers', qty: '2000KG' }] },
    { title: '03 — MÁQUINAS', items: [{ name: 'Cybex Plate Loaded', qty: 'Completo' }] },
    { title: '04 — FUNCIONAL & MOBILITY', items: [{ name: 'Kettlebells Competição', qty: '8-32KG' }] },
    { title: '05 — INFRAESTRUTURA', items: [{ name: 'Vestiários Premium', qty: null }, { name: 'Recovery Room', qty: null }] }
  ]

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <SectionLabel>ESTRUTURA</SectionLabel>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter mb-6 text-[#F5F5F5]">
              EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.
            </h2>
            <p className="text-[#7A7A7A] text-sm uppercase tracking-wider max-w-sm mb-12">
              CADA PEÇA SELECIONADA COM UM CRITÉRIO: AGUENTAR SEU MELHOR DIA — TODOS OS DIAS.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-video hidden lg:block">
               <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470" alt="Equipamentos Forgee" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            {categories.map((cat, i) => (
              <div key={i} className="border-b border-[#2D2D2D] pb-4">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className={cn(
                    "font-display text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors",
                    openIndex === i ? "text-[#E82020]" : "text-[#F5F5F5] group-hover:text-[#E8651A]"
                  )}>
                    {cat.title}
                  </span>
                  <iconify-icon 
                    icon={openIndex === i ? "solar:minus-circle-linear" : "solar:add-circle-linear"}
                    class={cn("text-2xl transition-transform", openIndex === i ? "text-[#E82020]" : "text-[#5A5A5A]")}
                  ></iconify-icon>
                </button>
                
                <div className={cn("accordion-content", openIndex === i ? "open" : "")}>
                  <div className="accordion-inner">
                    <ul className="py-4 space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex justify-between items-center text-sm border border-[#1E1E1E] bg-[#181818] p-4 rounded-lg">
                          <span className="text-[#E5E5E5] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8651A]"></span>
                            {item.name}
                          </span>
                          {item.qty && (
                            <span className="text-xs font-semibold tracking-wider text-[#7A7A7A]">
                              {item.qty}
                            </span>
                          )}
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
    </section>
  )
}