import React from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function Location() {
  return (
    <section id="contato" className="py-24 bg-[#1A1A1A] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Badge className="mb-6" dotColor="#C8F135">Onde estamos</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-10">
              Venha nos <span className="text-[#C8F135]">conhecer</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#100F0F] border border-white/10 flex items-center justify-center text-[#B8CFEE]">
                  <iconify-icon icon="solar:map-point-bold-duotone" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Endereço</h4>
                  <p className="text-white text-base">Av. Brigadeiro Faria Lima, 3477 — 4º andar<br/>Itaim Bibi, São Paulo — SP</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#100F0F] border border-white/10 flex items-center justify-center text-[#B8CFEE]">
                  <iconify-icon icon="solar:clock-circle-bold-duotone" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Horários</h4>
                  <p className="text-white text-base">Seg–Sex: 5h30 às 23h<br/>Sábado: 7h às 20h<br/>Domingo e feriados: 8h às 14h</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#100F0F] border border-white/10 flex items-center justify-center text-[#B8CFEE]">
                  <iconify-icon icon="solar:routing-2-bold-duotone" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Como chegar</h4>
                  <p className="text-white text-base">Metrô Faria Lima (200m)<br/>Estacionamento conveniado no edifício<br/>Bicicletário disponível</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#100F0F] border border-white/10 flex items-center justify-center text-[#B8CFEE]">
                  <iconify-icon icon="solar:phone-bold-duotone" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Contato</h4>
                  <p className="text-white text-base">(11) 99000-0000<br/>apex@academia.com.br</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon="solar:calendar-bold-duotone">Agendar visita gratuita</Button>
              <Button variant="secondary">Falar com especialista</Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden border border-white/10">
            {/* Placeholder for map - using an abstract gym architectural image */}
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
              alt="Fachada APEX" 
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100F0F] to-transparent mix-blend-multiply"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-[#C8F135]/20 rounded-full animate-ping"></div>
                <div className="w-12 h-12 bg-[#C8F135] rounded-full flex items-center justify-center text-black shadow-lg z-10">
                  <iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}