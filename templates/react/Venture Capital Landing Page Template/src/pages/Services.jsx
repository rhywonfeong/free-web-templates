import React from 'react';
import SpotlightGrid from '../components/SpotlightGrid';
import { servicesData } from '../data/portfolio';

export default function Services() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 min-h-screen">
      <div className="mb-20">
        <div className="text-[10px] font-mono text-neutral-400 uppercase mb-4">
          03 — Capabilities
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-6">
          Zakres Usług
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl font-light">
          Holistyczne podejście do finansowania innowacji. Od pierwszego biznesplanu po finalizację umowy inwestycyjnej.
        </p>
      </div>

      <SpotlightGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 overflow-hidden">
        {servicesData.map((service, index) => (
          <div key={service.id} className="group bg-white p-10 hover:bg-neutral-50 transition-colors relative spotlight-card min-h-[250px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="mb-8 text-neutral-300 group-hover:text-black transition-colors">
              <iconify-icon icon={service.icon} width="40"></iconify-icon>
            </div>
            
            <div>
              <div className="text-[10px] font-mono text-neutral-400 mb-2">{(index + 1).toString().padStart(2, '0')}</div>
              <h3 className="text-lg font-medium text-black">{service.name}</h3>
            </div>
          </div>
        ))}
      </SpotlightGrid>
    </div>
  );
}