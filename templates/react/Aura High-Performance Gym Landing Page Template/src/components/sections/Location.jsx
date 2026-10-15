import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Location = () => {
  return (
    <section className="py-24 bg-[#111111] border-y border-[#1A1A1A]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeader 
              tag="Localização" 
              title="Estamos onde você precisa estar." 
            />
            
            <div className="space-y-8 mt-10">
              <div>
                <h4 className="font-display font-bold text-xl uppercase text-white mb-2">Endereço</h4>
                <p className="text-[#CCCCCC] leading-relaxed">
                  Rua Fictícia de Alta Performance, 1000<br/>
                  Vila Olímpia — São Paulo — SP<br/>
                  CEP: 00000-000
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl uppercase text-white mb-4">Acesso</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#CCCCCC]">
                    <iconify-icon icon="solar:routing-2-bold" class="text-[#AAFF00] text-xl"></iconify-icon>
                    <span>A 5 minutos da Av. Faria Lima</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#CCCCCC]">
                    <iconify-icon icon="solar:bus-bold" class="text-[#AAFF00] text-xl"></iconify-icon>
                    <span>A 300m da estação Vila Olímpia</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#CCCCCC]">
                    <iconify-icon icon="solar:parking-bold" class="text-[#AAFF00] text-xl"></iconify-icon>
                    <span>Estacionamento próprio coberto (40 vagas)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl uppercase text-white mb-4">Horários</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#1A1A1A] p-4 border border-[#252525]">
                    <p className="text-[#666666] uppercase font-bold mb-1">Seg - Sex</p>
                    <p className="text-white font-display text-lg tracking-wide">05h30 - 22h00</p>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 border border-[#252525]">
                    <p className="text-[#666666] uppercase font-bold mb-1">Sábados</p>
                    <p className="text-white font-display text-lg tracking-wide">07h00 - 16h00</p>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 border border-[#252525]">
                    <p className="text-[#666666] uppercase font-bold mb-1">Domingos</p>
                    <p className="text-white font-display text-lg tracking-wide">08h00 - 13h00</p>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 border border-[#252525]">
                    <p className="text-[#AAFF00] uppercase font-bold mb-1">Plano Elite</p>
                    <p className="text-white font-display text-lg tracking-wide">Acesso 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] bg-[#1A1A1A] border border-[#252525] relative overflow-hidden flex items-center justify-center group">
            {/* Fake Map Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-luminosity"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#AAFF00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(170,255,0,0.4)] mb-4 animate-bounce">
                <iconify-icon icon="solar:map-point-bold" class="text-3xl text-[#0D0F0A]"></iconify-icon>
              </div>
              <a href="#" className="bg-[#111111] text-white px-6 py-3 font-display uppercase tracking-widest font-bold text-sm border border-[#333333] hover:border-[#AAFF00] transition-colors">
                Abrir no Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;