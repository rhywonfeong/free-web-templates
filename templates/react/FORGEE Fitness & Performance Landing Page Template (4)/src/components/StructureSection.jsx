import React from 'react'
import Accordion from './ui/Accordion'

const StructureSection = () => {
  const structureItems = [
    {
      title: 'Cardio & Conditioning',
      content: (
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b border-[#1E1E1E] pb-2"><span>Assault Bike Concept2</span> <span className="text-white text-xs font-bold bg-[#1E1E1E] px-2 py-1">8 UNIDADES</span></li>
          <li className="flex justify-between items-center border-b border-[#1E1E1E] pb-2"><span>Remo Concept2 Model D</span> <span className="text-white text-xs font-bold bg-[#1E1E1E] px-2 py-1">6 UNIDADES</span></li>
          <li className="flex justify-between items-center border-b border-[#1E1E1E] pb-2"><span>SkiErg Concept2</span> <span className="text-white text-xs font-bold bg-[#1E1E1E] px-2 py-1">4 UNIDADES</span></li>
          <li className="pb-2">Esteiras NordicTrack com inclinação negativa</li>
          <li className="pb-2">Cordas de batalha 15m e 20m</li>
        </ul>
      )
    },
    {
      title: 'Força Livre',
      content: <p>Plataformas de levantamento olímpico Rogue, racks de agachamento independentes, barras olímpicas com rolamento em aço zincado e anilhas bumper calibradas. Halteres sextavados até 60kg. Bancos ajustáveis ultra-pesados para estabilidade absoluta.</p>
    },
    {
      title: 'Máquinas',
      content: <p>Linha selecionada Hammer Strength e Cybex. Leg press 45º linear, Hack squat, Extensor e Flexor biomecanicamente precisos. Polias duplas ajustáveis com colunas de peso independentes de 100kg cada.</p>
    },
    {
      title: 'Funcional & Mobility',
      content: <p>Área de grama sintética de alta densidade (30m). Trenós de arrasto magnéticos. Kettlebells de competição (8kg a 48kg). Wall balls, caixas pliométricas de madeira naval e kit completo de liberação miofascial e elásticos.</p>
    },
    {
      title: 'Infraestrutura',
      content: <p>Vestiários individuais padrão clube com duchas de alta pressão. Climatização setorizada mantida a 20ºC constantes. Sistema de som ambiente acústico direcional (baixo volume). Wi-Fi dedicado e armários rotativos.</p>
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <span className="text-eyebrow block mb-6">Estrutura</span>
            <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter mb-6">
              Equipamento<br />que não te<br /><span className="text-[#E8400A]">limita.</span>
            </h2>
            <p className="text-[#B0B0B0] text-lg mb-8 max-w-sm">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion items={structureItems} />
        </div>

      </div>
    </section>
  )
}

export default StructureSection