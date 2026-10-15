import SectionHeading from '../ui/SectionHeading'

export default function Structure() {
  const areas = [
    {
      title: "CARDIO & CONDITIONING",
      items: "Assault Bike Concept2 (8 un), Remo Concept2 Model D (6 un), SkiErg Concept2 (4 un), Esteiras NordicTrack, Cordas de batalha."
    },
    {
      title: "FORÇA LIVRE",
      items: "Plataformas de LPO Eleiko, Racks Rogue, Halteres calibrados até 60kg, Anilhas olímpicas bumper."
    },
    {
      title: "MÁQUINAS",
      items: "Seleção premium com biomecânica avançada para isolamento e hipertrofia focada."
    },
    {
      title: "FUNCIONAL & MOBILITY",
      items: "Área de grama sintética, caixas pliométricas, kettlebells de competição, acessórios de mobilidade."
    },
    {
      title: "INFRAESTRUTURA",
      items: "Vestiários climatizados, armários rotativos, lounges de descompressão, Wi-Fi de alta velocidade."
    }
  ]

  return (
    <section id="espaco" className="py-32 bg-[#0A0A0A] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Estrutura"
          title="Equipamento que não te limita."
          subtitle="Cada peça selecionada com um critério: aguentar seu melhor dia — todos os dias."
          className="mb-20"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" 
              alt="Gym Equipment" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="grid grid-rows-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80" 
                alt="Weights" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] flex items-center justify-center p-8 text-center flex-col gap-4 group hover:border-[#00F9E4]/50 transition-colors">
                <iconify-icon icon="solar:camera-linear" className="text-4xl text-[#3A3A3A] group-hover:text-[#00F9E4] transition-colors"></iconify-icon>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] group-hover:text-white transition-colors">Ver Galeria Completa</span>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="space-y-6">
            {areas.map((area, index) => (
              <div key={index} className="group border-b border-[#1C1C1C] pb-6 last:border-0 hover:border-[#00F9E4]/30 transition-colors">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[#3A3A3A] font-bold text-sm tracking-widest group-hover:text-[#00F9E4] transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                    {area.title}
                  </h3>
                </div>
                <p className="text-[#9A9A9A] pl-10 leading-relaxed">
                  {area.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}