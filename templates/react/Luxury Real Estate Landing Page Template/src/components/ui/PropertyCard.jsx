import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../data/mockProperties';

export default function PropertyCard({ property }) {
  return (
    <Link 
      to={`/properties/${property.id}`}
      className="group block bg-zinc-950 border border-zinc-900 overflow-hidden rounded-md transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-zinc-700 text-xs font-medium px-3 py-1 rounded-sm tracking-wide text-white">
            IN EVIDENZA
          </div>
        )}
        <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-zinc-800">
          <span className="text-[#DCA11D] font-medium tracking-tight">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-medium mb-2 uppercase tracking-wider">
          <iconify-icon icon="solar:map-point-linear"></iconify-icon>
          {property.location}
        </div>
        
        <h3 className="text-lg font-medium text-white mb-4 tracking-tight group-hover:text-[#DCA11D] transition-colors">
          {property.title}
        </h3>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-900">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 text-xs">Camere</span>
            <span className="text-zinc-300 text-sm font-medium flex items-center gap-1.5">
              <iconify-icon icon="solar:bed-linear" class="text-zinc-600"></iconify-icon>
              {property.beds}
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-zinc-900 pl-4">
            <span className="text-zinc-500 text-xs">Bagni</span>
            <span className="text-zinc-300 text-sm font-medium flex items-center gap-1.5">
              <iconify-icon icon="solar:bath-linear" class="text-zinc-600"></iconify-icon>
              {property.baths}
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-zinc-900 pl-4">
            <span className="text-zinc-500 text-xs">Mq</span>
            <span className="text-zinc-300 text-sm font-medium flex items-center gap-1.5">
              <iconify-icon icon="solar:ruler-linear" class="text-zinc-600"></iconify-icon>
              {property.sqm}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}