import React from 'react';
import Button from '../ui/Button';

export default function Location() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111] border-y border-[#1F1F1F]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
        
        {/* Info Col */}
        <div className="flex flex-col justify-center">
          <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4">ONDE ESTAMOS</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight mb-8">
            NO CORAÇÃO DE<br/>INDAIATUBA.
          </h2>
          
          <div className="flex flex-col gap-8 mb-10">
            <div>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                Rua das Esmeraldas, 742<br/>
                Jardim Morada do Sol · Indaiatuba, SP<br/>
                CEP 13.334-210
              </p>
              <p className="text-[#888888] text-xs font-bold tracking-widest uppercase mt-3">
                200M DO CARREFOUR · PRÓXIMO À SAÍDA SP-075
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex flex-col">
                <span className="text-[#888888] text-xs font-bold tracking-widest uppercase">SEGUNDA A SEXTA</span>
                <span className="text-white font-mono font-medium">05H00–23H00</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#888888] text-xs font-bold tracking-widest uppercase">SÁBADO</span>
                <span className="text-white font-mono font-medium">07H00–20H00</span>
              </div>
              <div className="flex flex-col col-span-2 mt-2 pt-2 border-t border-[#2C2C2C]">
                <span className="text-[#888888] text-xs font-bold tracking-widest uppercase">DOMINGO E FERIADOS</span>
                <span className="text-white font-mono font-medium">08H00–14H00</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-sm">
              <div className="flex gap-4"><span className="text-[#888888] w-20">WhatsApp</span><span className="text-white">(19) 98234-5678</span></div>
              <div className="flex gap-4"><span className="text-[#888888] w-20">E-mail</span><span className="text-white">contato@forgee.academy</span></div>
              <div className="flex gap-4"><span className="text-[#888888] w-20">Instagram</span><span className="text-[#F46A17]">@forgee.academy</span></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">FALAR NO WHATSAPP <iconify-icon icon="solar:arrow-right-linear" class="ml-2"></iconify-icon></Button>
            <Button variant="outline">COMO CHEGAR</Button>
          </div>
        </div>

        {/* Map Graphic Col */}
        <div className="relative min-h-[400px] bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg overflow-hidden flex items-center justify-center">
           {/* Abstract Grid Lines background */}
           <div 
             className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}
           ></div>
           
           {/* Decorative geometric circles */}
           <div className="absolute w-[80%] pt-[80%] border border-[#3A3A3A] rounded-full opacity-20"></div>
           <div className="absolute w-[40%] pt-[40%] border border-[#3A3A3A] rounded-full opacity-20"></div>

           {/* Pin & Label */}
           <div className="relative z-10 flex flex-col items-center transform -translate-y-4">
              <iconify-icon icon="solar:map-point-bold" style={{ color: '#F46A17', fontSize: '56px', filter: 'drop-shadow(0 0 12px rgba(244,106,23,0.5))' }}></iconify-icon>
              <div className="mt-2 px-4 py-1.5 bg-[#111111] border border-[#3A3A3A] text-white text-xs font-bold tracking-widest uppercase shadow-lg">
                FORGEE ACADEMY
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}