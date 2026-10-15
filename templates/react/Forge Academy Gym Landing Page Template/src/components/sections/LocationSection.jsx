import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const LocationSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <SectionHeading 
            subtitle="Localização"
            title="NO CORAÇÃO DE *INDAIATUBA*."
            className="mb-10"
          />
          
          <div className="bg-[#1C1C1C] p-8 border-l-4 border-[#E8190F] mb-10">
            <h4 className="text-white font-bold text-xl mb-2">FORGEE ACADEMY</h4>
            <p className="text-[#BFBFBF] mb-4">Rua das Esmeraldas, 742<br/>Jardim Morada do Sol<br/>Indaiatuba, SP - 13.334-210</p>
            <p className="text-[#808080] text-sm flex items-center gap-2">
              <iconify-icon icon="solar:info-circle-linear" className="text-[#FF4A1C]"></iconify-icon>
              200m do Carrefour · Próximo à saída SP 075
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h5 className="text-[#808080] text-xs font-bold uppercase tracking-widest mb-4 border-b border-[#2E2E2E] pb-2">Horários</h5>
              <ul className="text-sm text-[#BFBFBF] flex flex-col gap-2">
                <li className="flex justify-between"><span>Seg a Sex</span> <span className="text-white font-medium">05H–23H</span></li>
                <li className="flex justify-between"><span>Sábados</span> <span className="text-white font-medium">07H–20H</span></li>
                <li className="flex justify-between"><span>Dom/Feriados</span> <span className="text-white font-medium">08H–14H</span></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#808080] text-xs font-bold uppercase tracking-widest mb-4 border-b border-[#2E2E2E] pb-2">Contato</h5>
              <ul className="text-sm text-[#BFBFBF] flex flex-col gap-3">
                <li className="flex items-center gap-3"><iconify-icon icon="simple-icons:whatsapp" className="text-lg"></iconify-icon> (19) 98234-5678</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:letter-linear" className="text-lg"></iconify-icon> contato@forgee.academy</li>
                <li className="flex items-center gap-3"><iconify-icon icon="simple-icons:instagram" className="text-lg"></iconify-icon> @forgee.academy</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline">Como Chegar</Button>
            <Button variant="ghost">Falar no WhatsApp</Button>
          </div>
        </div>

        <div className="relative bg-[#1C1C1C] min-h-[400px] border border-[#2E2E2E] overflow-hidden group">
          {/* Faux Map Visual - In a real app this would be a Google Maps embed */}
          <div className="absolute inset-0 bg-[#0A0A0A] bg-[radial-gradient(#2E2E2E_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#E8190F]/20 rounded-full flex items-center justify-center animate-ping"></div>
            <div className="absolute w-6 h-6 bg-[#E8190F] rounded-full border-4 border-[#0D0D0D] shadow-[0_0_20px_rgba(232,25,15,0.8)]"></div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-[#0D0D0D]/90 backdrop-blur border border-[#2E2E2E] p-4 text-center">
             <span className="text-white text-sm font-semibold tracking-widest uppercase">Visualizar no Mapa</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LocationSection