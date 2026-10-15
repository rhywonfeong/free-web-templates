import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function LocationSection() {
  const infoBlocks = [
    { label: "Endereço", content: "Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi · São Paulo — SP, 04538-133", icon: "solar:map-point-bold" },
    { label: "Horários", content: "Seg-Sex: 5h às 23h\nSáb: 7h às 20h\nDom: 8h às 18h", icon: "solar:clock-circle-bold" },
    { label: "Contato", content: "(11) 99999-0000\ncontato@forgeacademia.com.br", icon: "solar:phone-bold" },
    { label: "Como Chegar", content: "Metrô Faria Lima (Linha 4) — 3 min a pé · Estacionamento exclusivo no local", icon: "solar:routing-2-bold" }
  ]

  return (
    <section id="location" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionLabel>Localização</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            Encontre a FORGE.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoBlocks.map((block, idx) => (
              <div key={idx} className="bg-[#111111] border border-[#2A2A2A] p-6 rounded-[16px]">
                <div className="text-[#E63422] mb-4">
                  <iconify-icon icon={block.icon} width="24"></iconify-icon>
                </div>
                <h4 className="text-white font-semibold mb-2">{block.label}</h4>
                <p className="text-[#8A8A8A] text-sm whitespace-pre-line leading-relaxed">
                  {block.content}
                </p>
              </div>
            ))}
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-4">
              <Button onClick={() => alert('Modal de agendamento abriria aqui.')}>Agendar Visita Gratuita</Button>
              <Button variant="secondary" onClick={() => window.open('https://wa.me/5511999990000')}>Falar com Especialista</Button>
            </div>
          </div>

          <div className="lg:w-1/2 min-h-[400px] rounded-[24px] overflow-hidden border border-[#2A2A2A] relative bg-[#1E1E24]">
            {/* Using a placeholder map aesthetic since actual iframe requires real API key often, but stylizing it dark */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-30 grayscale mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E63422] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(230,52,34,0.5)] mb-4 animate-bounce">
                <iconify-icon icon="solar:map-point-bold" width="32" class="text-white"></iconify-icon>
              </div>
              <h3 className="text-white font-bold text-xl uppercase tracking-widest">FORGE Itaim Bibi</h3>
              <p className="text-[#D4D4D4] mt-2">Av. Brigadeiro Faria Lima, 3477</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}