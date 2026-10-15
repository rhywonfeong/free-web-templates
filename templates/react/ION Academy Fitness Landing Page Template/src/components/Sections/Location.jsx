import React from 'react';
import Button from '../UI/Button';

export default function Location() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase text-neutral-50 mb-10">
            No Coração de<br/>
            Indaiatuba.
          </h2>

          <div className="space-y-10">
            <div>
              <div className="text-brand-blue text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Endereço
              </div>
              <p className="text-neutral-200 text-lg leading-relaxed">
                Rua das Esmeraldas, 742<br/>
                Jardim Morada do Sol — Indaiatuba, SP<br/>
                CEP 13.334-210
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                200m do Carrefour · Próximo à saída SP-075
              </p>
            </div>

            <div>
              <div className="text-brand-blue text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon> Horários
              </div>
              <ul className="text-neutral-300 text-sm space-y-2">
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Segunda a Sexta</span> <span className="text-neutral-50 font-medium">05H00 – 23H00</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Sábado</span> <span className="text-neutral-50 font-medium">07H00 – 20H00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Domingo e Feriados</span> <span className="text-neutral-50 font-medium">08H00 – 14H00</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue">
                <iconify-icon icon="simple-icons:whatsapp" width="20" class="mr-2"></iconify-icon> Falar no WhatsApp
              </Button>
              <Button variant="secondary">Como Chegar</Button>
            </div>
          </div>
        </div>

        {/* Info Cards / Map Placeholder */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="bg-neutral-900 border border-neutral-800 p-8 flex items-center gap-6 group hover:border-neutral-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center text-brand-blue rounded-full group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest mb-1">WhatsApp</div>
              <div className="text-neutral-50 text-xl font-semibold">(19) 98234-5678</div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 flex items-center gap-6 group hover:border-neutral-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center text-brand-blue rounded-full group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest mb-1">E-mail</div>
              <div className="text-neutral-50 text-xl font-semibold">contato@ion.academy</div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 flex items-center gap-6 group hover:border-neutral-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center text-brand-blue rounded-full group-hover:scale-110 transition-transform">
              <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest mb-1">Instagram</div>
              <div className="text-neutral-50 text-xl font-semibold">@ion.academy</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}