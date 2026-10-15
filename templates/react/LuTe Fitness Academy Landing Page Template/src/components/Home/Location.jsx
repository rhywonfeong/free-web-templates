import React from 'react';

const Location = () => {
  return (
    <section className="py-24 bg-[#121212] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-8 uppercase">
              Localização & <span className="text-[#00F9E4]">Contato</span>
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:map-point-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Endereço</h4>
                  <p className="text-[#9A9A9A]">Rua das Esmeraldas, 742<br/>Jd. Morada do Sol, Indaiatuba, SP.</p>
                  <span className="text-[#6B6B6B] text-xs mt-1 block">(Ref: 200m do Carrefour)</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:clock-circle-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
                </div>
                <div className="w-full">
                  <h4 className="text-white font-medium mb-3">Horários</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm border-b border-[#1C1C1C] pb-2 mb-2">
                    <span className="text-[#9A9A9A]">Segunda a Sexta</span>
                    <span className="text-white font-medium text-right">05H00 — 23H00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-b border-[#1C1C1C] pb-2 mb-2">
                    <span className="text-[#9A9A9A]">Sábado</span>
                    <span className="text-white font-medium text-right">07H00 — 20H00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-[#9A9A9A]">Dom e Feriados</span>
                    <span className="text-white font-medium text-right">08H00 — 14H00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:phone-calling-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Contato</h4>
                  <p className="text-[#9A9A9A] mb-1">WhatsApp: <span className="text-white">(19) 98234-5678</span></p>
                  <p className="text-[#9A9A9A] mb-1">E-mail: <span className="text-white">contato@forgee.academy</span></p>
                  <p className="text-[#9A9A9A]">Instagram: <span className="text-[#00F9E4]">@forgee.academy</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg overflow-hidden border border-[#2A2A2A] min-h-[400px] relative flex items-center justify-center group">
             {/* Map Placeholder */}
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
               alt="Map Area" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-40 transition-opacity duration-500"
             />
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#00F9E4] rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,249,228,0.4)] animate-pulse">
                  <iconify-icon icon="solar:map-point-bold" class="text-3xl text-[#0A0A0A]"></iconify-icon>
                </div>
                <span className="bg-[#0A0A0A] px-4 py-2 rounded text-sm font-medium border border-[#2A2A2A]">FORGEE ACADEMY</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;