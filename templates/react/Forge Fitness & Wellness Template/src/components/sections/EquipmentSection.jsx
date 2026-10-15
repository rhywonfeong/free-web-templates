import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function EquipmentSection() {
  const zones = [
    { cat: "Cardio", name: "Zona Cardio", icon: "solar:heart-pulse-bold", items: ["Esteiras com inclinação inteligente", "Elípticos ergonômicos", "Bikes de alta resistência", "Escadas climber", "Remos de competição"] },
    { cat: "Condicionamento", name: "Performance Zone", icon: "solar:running-bold", items: ["Cordas de battle rope", "Trenós de arrasto", "Sleds de empurrar", "Kettlebells de 4 a 60kg", "Caixas pliométricas"] },
    { cat: "Força", name: "Powerlifting Area", icon: "solar:dumbell-bold", items: ["Plataformas de levantamento", "Barras olímpicas certificadas", "Anilhas calibradas", "Racks de agachamento", "GHD e glute-ham"] },
    { cat: "Livre", name: "Free Weight Zone", icon: "solar:armchair-bold", items: ["Halteres de 2 a 80kg", "Barras EZ e W", "Bancos ajustáveis", "Cabos e polia dupla", "Anilhas de borracha"] },
    { cat: "Máquinas", name: "Machine Floor", icon: "solar:settings-bold", items: ["Linha completa Life Fitness e Technogym", "Leg press 45º", "Prensa horizontal", "Hack squat", "Cadeiras articuladas", "Pec deck"] },
    { cat: "Funcional", name: "Functional Studio", icon: "solar:yoga-bold", items: ["Rig multifuncional", "TRX e anéis de ginástica", "Bosus e discos de propriocepção", "Colchonetes", "Faixas elásticas graduadas"] },
  ]

  const infra = [
    "Vestiários premium com armários individuais",
    "Duchas com controle de temperatura",
    "Sala de recuperação com crioterapia e terapeuta",
    "Lounge de descanso",
    "Estacionamento exclusivo",
    "Wi-Fi de alta velocidade",
    "Sistema de ar-condicionado de precisão",
    "Loja de suplementos on-site"
  ]

  return (
    <section id="structure" className="py-24 bg-[#111111] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionLabel>Estrutura</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            Equipamentos à Altura do Seu Esforço.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {zones.map((zone, idx) => (
            <div key={idx} className="bg-[#1E1E24] p-8 rounded-[16px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-[#E8541A]">
                  <iconify-icon icon={zone.icon} width="20"></iconify-icon>
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider">{zone.cat}</span>
                  <h3 className="text-xl font-bold text-white">{zone.name}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {zone.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#D4D4D4] text-sm">
                    <iconify-icon icon="solar:alt-arrow-right-line-duotone" class="text-[#E63422] mt-0.5 text-lg flex-shrink-0"></iconify-icon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Infra Geral */}
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-[24px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <span className="text-xs font-semibold text-[#E63422] uppercase tracking-wider mb-2 block">Infraestrutura</span>
              <h3 className="text-3xl font-bold text-white tracking-tight">Além do Salão</h3>
              <p className="text-[#8A8A8A] mt-4">Comodidade total para que o seu único foco seja o treinamento.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infra.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#D4D4D4] bg-[#111111] px-4 py-3 rounded-lg border border-[#1E1E24]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#22C55E] flex-shrink-0"></iconify-icon>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}