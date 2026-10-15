import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const Location = () => {
  return (
    <section id="localizacao" className="py-24 bg-white text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Badge className="mb-6">ONDE ESTAMOS</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-10">
              Venha nos<br />conhecer.
            </h2>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="mt-1 text-[#FF8000]"><iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon></div>
                <div>
                  <h5 className="font-bold uppercase tracking-wider mb-1">Endereço</h5>
                  <p className="text-[#5C554E]">Av. Brigadeiro Faria Lima, 4440 — Itaim Bibi<br/>São Paulo, SP — CEP 04538-132</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-[#FF8000]"><iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon></div>
                <div>
                  <h5 className="font-bold uppercase tracking-wider mb-1">Horários</h5>
                  <ul className="text-[#5C554E]">
                    <li>Seg a Sex: 5h30 às 23h</li>
                    <li>Sábado: 7h às 20h</li>
                    <li>Dom e feriados: 8h às 14h</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-[#FF8000]"><iconify-icon icon="solar:bus-bold" width="24"></iconify-icon></div>
                <div>
                  <h5 className="font-bold uppercase tracking-wider mb-1">Como chegar</h5>
                  <ul className="text-[#5C554E]">
                    <li>Metrô Faria Lima (linha 4-amarela) — 5 min a pé</li>
                    <li>Estacionamento privativo — 2h gratuitas para visitantes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-200 pt-10">
              <Button variant="primary">Como Chegar</Button>
              <Button variant="outlineBlack">Agendar Visita Gratuita</Button>
            </div>
          </div>

          <div className="h-[500px] bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200">
            {/* Map Placeholder - In a real app, this would be a Google Maps iframe or Mapbox component */}
            <div className="absolute inset-0 bg-[#2B2B2B]/5 flex items-center justify-center">
              <div className="text-center">
                <iconify-icon icon="solar:map-bold-duotone" width="64" style={{ color: '#FF8000', marginBottom: '16px' }}></iconify-icon>
                <p className="font-bold uppercase tracking-widest text-[#9E9488] text-sm">Mapa Interativo APEX</p>
              </div>
            </div>
            {/* Simulated Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF8000] animate-bounce">
              <iconify-icon icon="solar:map-point-bold" width="48"></iconify-icon>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;