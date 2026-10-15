import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';

const Location = () => {
  return (
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading 
              eyebrow="Onde estamos"
              title="NO CORAÇÃO DE INDAIATUBA."
              highlightWords={['INDAIATUBA.']}
            />
            
            <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 mb-8">
              <p className="font-display text-2xl text-white uppercase tracking-wider mb-2">
                Rua das Esmeraldas, 742
              </p>
              <p className="text-[#B0B0B0]">
                Jardim Morada do Sol<br/>
                Indaiatuba, SP<br/>
                CEP 13.334-210
              </p>
              <div className="mt-6 pt-6 border-t border-[#2A2A2A] flex items-start text-sm text-[#6B6B6B]">
                <iconify-icon icon="solar:map-point-linear" width="20" class="text-[#E8400A] mr-2 flex-shrink-0"></iconify-icon>
                <span>Referências: 200m do Carrefour · Próximo à saída SP-075</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-sm tracking-[0.14em] uppercase text-[#6B6B6B] mb-4">Horários</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-[#2A2A2A] pb-2">
                    <span className="text-[#B0B0B0]">Seg a Sex</span>
                    <span className="text-white font-medium">05H00 – 23H00</span>
                  </li>
                  <li className="flex justify-between border-b border-[#2A2A2A] pb-2">
                    <span className="text-[#B0B0B0]">Sábado</span>
                    <span className="text-white font-medium">07H00 – 20H00</span>
                  </li>
                  <li className="flex justify-between border-b border-[#2A2A2A] pb-2">
                    <span className="text-[#B0B0B0]">Dom / Feriados</span>
                    <span className="text-white font-medium">08H00 – 14H00</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm tracking-[0.14em] uppercase text-[#6B6B6B] mb-4">Contato</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center text-[#B0B0B0]">
                    <iconify-icon icon="solar:phone-linear" width="18" class="mr-3 text-[#E8400A]"></iconify-icon>
                    (19) 98234-5678
                  </li>
                  <li className="flex items-center text-[#B0B0B0]">
                    <iconify-icon icon="solar:letter-linear" width="18" class="mr-3 text-[#E8400A]"></iconify-icon>
                    contato@forgee.academy
                  </li>
                  <li className="flex items-center text-[#B0B0B0]">
                    <iconify-icon icon="simple-icons:instagram" width="16" class="mr-3 text-[#E8400A] ml-[1px]"></iconify-icon>
                    @forgee.academy
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="flex items-center justify-center gap-2">
                <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
                Falar no WhatsApp
              </Button>
              <Button variant="secondary">Como Chegar</Button>
            </div>
          </div>

          {/* Map Placeholder (Stylized Image) */}
          <div className="h-[400px] lg:h-full min-h-[400px] relative bg-[#1E1E1E] border border-[#2A2A2A] overflow-hidden group">
             <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Mapa" 
              className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500"
            />
            {/* Fake Map Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E8400A]/20 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#E8400A] rounded-full relative z-10 shadow-[0_0_15px_#E8400A]"></div>
              <div className="mt-2 font-display font-bold text-white tracking-widest bg-[#111111] px-3 py-1 border border-[#2A2A2A] text-sm">
                FORGEE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;