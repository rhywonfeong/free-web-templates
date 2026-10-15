import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] border-t border-[#1E1E1E]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col">
            <SectionHeader 
              eyebrow="Onde estamos" 
              title={<>NO CORAÇÃO<br/>DE <span className="text-[#E8400A]">INDAIATUBA.</span></>}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              {/* Address block */}
              <div>
                <h4 className="text-[#6B6B6B] text-[10px] uppercase tracking-widest font-medium mb-4">Endereço</h4>
                <address className="text-white text-[15px] not-italic leading-loose font-mono">
                  Rua das Esmeraldas, 742<br/>
                  Jardim Morada do Sol<br/>
                  Indaiatuba, SP<br/>
                  CEP 13.334-210
                </address>
                <p className="text-[#E8400A] text-[12px] mt-4 flex items-center gap-2">
                  <iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  200m do Carrefour · Saída SP-075
                </p>
              </div>

              {/* Contact block */}
              <div>
                <h4 className="text-[#6B6B6B] text-[10px] uppercase tracking-widest font-medium mb-4">Contato</h4>
                <ul className="flex flex-col gap-4 text-[15px] font-mono text-white">
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:phone-calling-linear" class="text-[#6B6B6B]"></iconify-icon>
                    (19) 98234-5678
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:letter-linear" class="text-[#6B6B6B]"></iconify-icon>
                    contato@forgee.academy
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="simple-icons:instagram" class="text-[#6B6B6B]"></iconify-icon>
                    @forgee.academy
                  </li>
                </ul>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-12 pt-12 border-t border-[#1E1E1E]">
              <h4 className="text-[#6B6B6B] text-[10px] uppercase tracking-widest font-medium mb-6">Horários</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px]">
                <div>
                  <p className="text-[#B0B0B0] mb-1">Segunda a Sexta</p>
                  <p className="text-white font-mono">05H00 – 23H00</p>
                </div>
                <div>
                  <p className="text-[#B0B0B0] mb-1">Sábado</p>
                  <p className="text-white font-mono">07H00 – 20H00</p>
                </div>
                <div>
                  <p className="text-[#B0B0B0] mb-1">Dom / Feriados</p>
                  <p className="text-white font-mono">08H00 – 14H00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button>Falar no WhatsApp</Button>
              <Button variant="secondary">Como Chegar</Button>
            </div>
          </div>

          {/* Map Placeholder Image */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] border border-[#1E1E1E] bg-[#111111] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ objectPosition: 'center 30%' }}
            />
            {/* Map UI Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#E8400A]/20 flex items-center justify-center backdrop-blur-sm border border-[#E8400A]/50 animate-pulse">
                <div className="w-4 h-4 rounded-full bg-[#E8400A] shadow-[0_0_20px_#E8400A]"></div>
              </div>
            </div>
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] mix-blend-overlay"></div>
          </div>

        </div>
      </div>
    </section>
  );
}