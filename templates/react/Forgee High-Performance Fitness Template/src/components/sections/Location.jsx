import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Location = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1E1B18]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Map Placeholder */}
          <div className="bg-[#0F0D0B] w-full h-[400px] lg:h-[600px] rounded-[24px] overflow-hidden border border-white/10 relative group">
            {/* Simulated Map aesthetic for the tech-gym vibe */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-[#E84E0F]/20 rounded-full animate-ping absolute -inset-2" />
                <div className="w-8 h-8 bg-[#E84E0F] rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(232,78,15,0.5)]">
                  <span className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-6 left-6 font-accent text-[#8A837C] text-[11px] tracking-[2px] uppercase bg-[#0F0D0B]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
              ◈ 23.5°S 46.6°W · SÃO PAULO
            </div>
            
            <div className="absolute bottom-6 inset-x-6">
              <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-semibold uppercase tracking-[1px] hover:bg-white/20 transition-colors text-[13px]">
                Abrir no Google Maps
              </button>
            </div>
          </div>

          {/* Info */}
          <div>
            <SectionHeader 
              theme="dark"
              eyebrow="ONDE ESTAMOS"
              title="VENHA CONHECER."
              className="mb-12"
            />

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <iconify-icon icon="solar:map-point-bold" class="text-[#E84E0F] text-[24px]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[16px] uppercase tracking-wide mb-2">Endereço</h4>
                  <p className="text-[#B0AAA4] text-[15px] leading-[1.5]">
                    Av. Brigadeiro Faria Lima, 3.900 — 4º andar<br/>
                    Itaim Bibi · São Paulo — SP<br/>
                    CEP 04538-132
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <iconify-icon icon="solar:clock-circle-bold" class="text-[#E84E0F] text-[24px]" />
                </div>
                <div className="w-full">
                  <h4 className="text-white font-bold text-[16px] uppercase tracking-wide mb-4">Horário de Funcionamento</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-[#E6E3E0] text-[14px]">Segunda a Sexta</span>
                      <span className="text-[#B0AAA4] font-accent tracking-wider">05h00 – 23h00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-[#E6E3E0] text-[14px]">Sábado</span>
                      <span className="text-[#B0AAA4] font-accent tracking-wider">07h00 – 17h00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-[#E6E3E0] text-[14px]">Domingo e Feriados</span>
                      <span className="text-[#B0AAA4] font-accent tracking-wider">08h00 – 14h00</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="text-[#E84E0F] font-semibold text-[14px]">Membros Elite (24/7)</span>
                      <span className="text-[#E84E0F] text-[12px] uppercase">Acesso via biometria</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;