import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const LocationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-void relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-12">
            <SectionHeader 
              eyebrow="Onde estamos"
              title="NO CORAÇÃO\nDE INDAIATUBA."
            />
            
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-semibold text-[#888780] uppercase tracking-widest mb-3">Endereço</h4>
                <p className="text-white text-lg leading-relaxed">
                  Rua das Esmeraldas, 742<br/>
                  Jardim Morada do Sol<br/>
                  Indaiatuba, SP · CEP 13.334-210
                </p>
                <p className="text-[#888780] text-sm mt-2 flex items-center gap-2">
                  <iconify-icon icon="solar:map-point-linear" className="text-[#BFFF00]"></iconify-icon>
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-semibold text-[#888780] uppercase tracking-widest mb-3">Horários</h4>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex justify-between border-b border-subtle pb-2">
                      <span className="text-[#888780]">Seg - Sex</span>
                      <span className="font-semibold tabular-nums text-[#BFFF00]">05H00 – 23H00</span>
                    </li>
                    <li className="flex justify-between border-b border-subtle pb-2">
                      <span className="text-[#888780]">Sábado</span>
                      <span className="font-semibold tabular-nums">07H00 – 20H00</span>
                    </li>
                    <li className="flex justify-between border-b border-subtle pb-2">
                      <span className="text-[#888780]">Dom/Feriados</span>
                      <span className="font-semibold tabular-nums">08H00 – 14H00</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-[#888780] uppercase tracking-widest mb-3">Contatos</h4>
                  <ul className="space-y-3 text-sm text-white">
                    <li className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-[#BFFF00] transition-colors group-hover:bg-[#BFFF00] group-hover:text-void">
                        <iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                      </div>
                      <span className="group-hover:text-[#BFFF00] transition-colors tabular-nums">(19) 98234-5678</span>
                    </li>
                    <li className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-[#BFFF00] transition-colors group-hover:bg-[#BFFF00] group-hover:text-void">
                        <iconify-icon icon="solar:letter-linear"></iconify-icon>
                      </div>
                      <span className="group-hover:text-[#BFFF00] transition-colors">contato@forgee.academy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button>FALAR NO WHATSAPP</Button>
              <Button variant="secondary">COMO CHEGAR</Button>
            </div>
          </div>

          {/* Decorative Map/Image block */}
          <div className="w-full h-[400px] lg:h-full min-h-[500px] bg-surface rounded-2xl border border-subtle overflow-hidden relative group">
             <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" 
                alt="Gym interior view" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent"></div>
              {/* Fake Map marker pin UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#BFFF00]/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-[#BFFF00] rounded-full shadow-[0_0_20px_#BFFF00]"></div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;