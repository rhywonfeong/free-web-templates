import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const Location = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#111111] border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading 
              label="ONDE ESTAMOS"
              title={"NO CORAÇÃO\nDE INDAIATUBA."}
            />

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <iconify-icon icon="solar:map-point-bold" className="text-[#E02020] mt-1" width="24"></iconify-icon>
                <div>
                  <p className="text-white font-bold tracking-wide">Rua das Esmeraldas, 742</p>
                  <p className="text-neutral-400 text-sm mt-1">Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
                  <p className="text-[10px] text-[#E02020] font-bold tracking-widest uppercase mt-3">200m do Carrefour · Próximo à saída SP-075</p>
                </div>
              </div>

              <div className="border-y border-[#2E2E2E] py-8 my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">HORÁRIOS</h4>
                  <ul className="text-sm text-neutral-400 flex flex-col gap-2">
                    <li className="flex justify-between"><span className="text-white">Seg – Sex</span> <span>05H – 23H</span></li>
                    <li className="flex justify-between"><span className="text-white">Sábado</span> <span>07H – 20H</span></li>
                    <li className="flex justify-between"><span className="text-white">Dom & Fer</span> <span>08H – 14H</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">CONTATO</h4>
                  <ul className="text-sm text-neutral-400 flex flex-col gap-2">
                    <li className="flex gap-2 items-center"><iconify-icon icon="simple-icons:whatsapp" width="14"></iconify-icon> (19) 98234-5678</li>
                    <li className="flex gap-2 items-center"><iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> contato@forgee.academy</li>
                    <li className="flex gap-2 items-center"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon> @forgee.academy</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button icon="simple-icons:whatsapp">FALAR NO WHATSAPP</Button>
                <Button variant="outline">COMO CHEGAR</Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] min-h-[400px] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0A0A0A]/50 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            {/* Using a dark map image representation */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Map view" 
              className="w-full h-full object-cover grayscale contrast-150 opacity-40"
            />
            <div className="absolute z-20 w-12 h-12 bg-[#E02020] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(224,32,32,0.6)]">
              <iconify-icon icon="solar:target-bold" className="text-white" width="24"></iconify-icon>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;