import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative border-b border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionLabel>Onde estamos</SectionLabel>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-12">
              No Coração<br/>
              De Indaiatuba.
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <iconify-icon icon="solar:map-point-bold" width="24" className="text-[#E8001C] mr-4 mt-1"></iconify-icon>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-2">Endereço</h4>
                  <p className="text-[#C8C8C8] text-sm leading-relaxed">
                    Rua das Esmeraldas, 742<br/>
                    Jardim Morada do Sol — Indaiatuba, SP<br/>
                    CEP 13.334-210
                  </p>
                  <p className="text-[#7A7A7A] text-xs mt-2 italic">
                    Referência: 200m do Carrefour · Próximo à saída SP-075
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <iconify-icon icon="solar:clock-circle-bold" width="24" className="text-[#00C2E0] mr-4 mt-1"></iconify-icon>
                <div className="w-full">
                  <h4 className="font-bold text-white uppercase tracking-wider mb-3">Horários</h4>
                  <ul className="space-y-2 w-full max-w-sm">
                    <li className="flex justify-between text-sm border-b border-[#1A1A1A] pb-2">
                      <span className="text-[#C8C8C8]">Segunda a Sexta</span>
                      <span className="text-white font-mono">05H00 – 23H00</span>
                    </li>
                    <li className="flex justify-between text-sm border-b border-[#1A1A1A] pb-2">
                      <span className="text-[#C8C8C8]">Sábado</span>
                      <span className="text-white font-mono">07H00 – 20H00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-[#C8C8C8]">Domingo / Feriados</span>
                      <span className="text-white font-mono">08H00 – 14H00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <iconify-icon icon="solar:phone-bold" width="24" className="text-[#C8C8C8] mr-4 mt-1"></iconify-icon>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-2">Contato</h4>
                  <p className="text-[#C8C8C8] text-sm mb-1">WhatsApp: <span className="font-mono">(19) 98234-5678</span></p>
                  <p className="text-[#C8C8C8] text-sm mb-1">E-mail: contato@forgee.academy</p>
                  <p className="text-[#C8C8C8] text-sm">Instagram: @forgee.academy</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button>Falar no WhatsApp</Button>
              <Button variant="secondary">Como Chegar</Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-auto bg-[#141414] border border-[#3D3D3D] shadow-card overflow-hidden group">
            {/* Fake Map Implementation for aesthetic */}
            <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
              <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="Mapa" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-overlay"></div>
              
              {/* Map Marker Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E8001C]/20 flex items-center justify-center animate-pulse shadow-glow-red">
                  <div className="w-4 h-4 bg-[#E8001C] rounded-full border-2 border-white"></div>
                </div>
                <div className="mt-2 bg-[#0A0A0A] border border-[#E8001C] px-3 py-1 font-display text-sm tracking-widest text-white uppercase">
                  FORGEE HQ
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}