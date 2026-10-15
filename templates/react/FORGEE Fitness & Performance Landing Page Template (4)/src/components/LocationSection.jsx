import React from 'react'
import Button from './ui/Button'

const LocationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#111111] border-t border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div>
          <span className="text-eyebrow block mb-6">Onde estamos</span>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter mb-12">
            No coração<br />de <span className="text-[#E8400A]">Indaiatuba.</span>
          </h2>

          <div className="bg-[#1E1E1E] p-8 border border-[#2A2A2A] mb-12">
            <div className="flex items-start gap-4 mb-6">
              <iconify-icon icon="solar:map-point-linear" className="text-[#E8400A] text-2xl mt-1"></iconify-icon>
              <div>
                <address className="not-italic text-[#D9D9D9] text-base leading-relaxed mb-2">
                  Rua das Esmeraldas, 742<br />
                  Jardim Morada do Sol<br />
                  Indaiatuba, SP<br />
                  CEP 13.334-210
                </address>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wider">Ref: 200m do Carrefour · Próximo à saída SP-075</p>
              </div>
            </div>
            <Button variant="secondary" className="w-full">Como Chegar</Button>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-white font-display uppercase tracking-tight text-xl mb-4 border-b border-[#2A2A2A] pb-2">Horários</h4>
              <ul className="space-y-2 text-[#B0B0B0] text-sm">
                <li className="flex justify-between"><span>Segunda a Sexta</span> <span className="text-white font-medium">05H00 – 23H00</span></li>
                <li className="flex justify-between"><span>Sábado</span> <span className="text-white font-medium">07H00 – 20H00</span></li>
                <li className="flex justify-between"><span>Domingo e Feriados</span> <span className="text-white font-medium">08H00 – 14H00</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-display uppercase tracking-tight text-xl mb-4 border-b border-[#2A2A2A] pb-2">Contato</h4>
              <ul className="space-y-4 text-[#B0B0B0] text-sm">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:phone-linear" className="text-xl"></iconify-icon>
                  <span>(19) 98234-5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon>
                  <span>contato@forgee.academy</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="simple-icons:instagram" className="text-lg"></iconify-icon>
                  <span>@forgee.academy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conceptual Map Area */}
        <div className="h-[400px] lg:h-auto bg-[#1E1E1E] border border-[#2A2A2A] relative overflow-hidden group flex items-center justify-center">
           <div className="absolute inset-0 bg-grain opacity-50 z-10 pointer-events-none" />
           {/* Abstract grid simulating map focus */}
           <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           <div className="relative z-20 text-center flex flex-col items-center">
              <div className="w-4 h-4 bg-[#E8400A] rounded-full animate-pulse shadow-[0_0_20px_#E8400A] mb-4"></div>
              <span className="font-display font-bold text-white tracking-widest uppercase">Forgee HQ</span>
           </div>
        </div>

      </div>
    </section>
  )
}

export default LocationSection