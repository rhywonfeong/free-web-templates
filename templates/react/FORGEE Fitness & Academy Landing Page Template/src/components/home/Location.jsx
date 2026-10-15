import React from 'react';

const Location = () => {
  return (
    <section className="py-24 md:py-32 bg-[#000000] border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter uppercase mb-12">
              NO CORAÇÃO<br />DE <span className="text-[#FF1E00]">INDAIATUBA.</span>
            </h2>

            <div className="flex flex-col gap-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <iconify-icon icon="solar:map-point-bold-duotone" class="text-3xl text-[#FF1E00] mt-1"></iconify-icon>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Endereço</h4>
                  <p className="text-[#D9D9D9] text-sm leading-relaxed font-light">
                    Rua das Esmeraldas, 742<br />
                    Jardim Morada do Sol<br />
                    Indaiatuba, SP<br />
                    CEP 13.334-210
                  </p>
                  <p className="text-[#636363] text-xs mt-3 uppercase tracking-widest">
                    — 200m do Carrefour<br />
                    — Próximo à saída SP-075
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <iconify-icon icon="solar:clock-circle-bold-duotone" class="text-3xl text-[#FF1E00] mt-1"></iconify-icon>
                <div className="w-full">
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Horários</h4>
                  <ul className="flex flex-col gap-2">
                    <li className="flex justify-between border-b border-white/10 pb-2 text-sm text-[#D9D9D9]">
                      <span>Segunda a Sexta</span>
                      <span className="font-semibold text-white">05H00–23H00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2 text-sm text-[#D9D9D9]">
                      <span>Sábado</span>
                      <span className="font-semibold text-white">07H00–20H00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2 text-sm text-[#D9D9D9]">
                      <span>Domingo e Feriados</span>
                      <span className="font-semibold text-white">08H00–14H00</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-bold tracking-widest uppercase text-xs hover:bg-[#25D366] hover:text-black transition-colors rounded-none">
                  <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon>
                  Falar no WhatsApp
                </a>
                <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/20 font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-colors rounded-none">
                  <iconify-icon icon="solar:routing-2-line-duotone" class="text-lg"></iconify-icon>
                  Como Chegar
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder Graphic */}
          <div className="aspect-square lg:aspect-auto lg:h-[600px] bg-[#111] border border-[#222] relative overflow-hidden flex items-center justify-center group">
            {/* Abstract brutalist map representation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="w-3/4 h-3/4 border border-[#FF1E00]/30 relative flex items-center justify-center">
               <div className="w-4 h-4 bg-[#FF1E00] absolute animate-ping opacity-50"></div>
               <div className="w-2 h-2 bg-[#FF1E00] absolute"></div>
               <div className="absolute w-full h-[1px] bg-[#FF1E00]/20"></div>
               <div className="absolute h-full w-[1px] bg-[#FF1E00]/20"></div>
               <div className="absolute bottom-4 right-4 text-[10px] text-[#636363] uppercase tracking-widest font-mono">
                 LAT -23.1128 // LNG -47.2185
               </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial-hero opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;