import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/ui/PropertyCard';
import { properties, formatPrice } from '../data/mockProperties';

export default function Properties() {
  const [filter, setFilter] = useState({
    type: 'Tutte',
    priceSort: 'default'
  });
  const [hoveredPropertyId, setHoveredPropertyId] = useState(null);

  const propertyTypes = ['Tutte', ...new Set(properties.map(p => p.type))];

  const filteredProperties = useMemo(() => {
    let result = [...properties];
    
    if (filter.type !== 'Tutte') {
      result = result.filter(p => p.type === filter.type);
    }

    if (filter.priceSort === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filter.priceSort === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-[calc(100vh-6rem)] overflow-hidden bg-black">
      
      {/* Left Column: List View */}
      <div className="w-full lg:w-[55%] xl:w-[50%] h-full overflow-y-auto px-6 py-8 flex flex-col custom-scrollbar">
        <div className="mb-8">
          <h1 className="text-3xl font-medium tracking-tight mb-2">Soggiorni in Location Premium</h1>
          <p className="text-zinc-400 text-sm">Scopri la nostra selezione verificata. Prenota direttamente per saltare le commissioni.</p>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-900">
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilter(prev => ({ ...prev, type }))}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-colors border ${
                  filter.type === type 
                    ? 'bg-white text-black border-white' 
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select 
              className="bg-zinc-950 border border-zinc-800 text-white text-xs rounded-full px-4 py-2 focus:outline-none focus:border-[#DCA11D] appearance-none cursor-pointer"
              value={filter.priceSort}
              onChange={(e) => setFilter(prev => ({ ...prev, priceSort: e.target.value }))}
            >
              <option value="default">Ordina per: In Evidenza</option>
              <option value="asc">Prezzo: Crescente</option>
              <option value="desc">Prezzo: Decrescente</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
            {filteredProperties.map(property => (
              <div 
                key={property.id} 
                onMouseEnter={() => setHoveredPropertyId(property.id)}
                onMouseLeave={() => setHoveredPropertyId(null)}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-zinc-900 rounded-md bg-zinc-950/50">
            <iconify-icon icon="solar:home-smile-linear" class="text-4xl text-zinc-700 mb-4"></iconify-icon>
            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Nessuna proprietà trovata</h3>
            <p className="text-zinc-500 text-sm">Modifica i filtri per scoprire gli annunci disponibili.</p>
          </div>
        )}
      </div>

      {/* Right Column: Interactive Map Placeholder */}
      <div className="hidden lg:block lg:w-[45%] xl:w-[50%] h-full bg-zinc-900 relative border-l border-zinc-800">
        <div className="absolute inset-0 bg-[#0a0a0c]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCA11D]/5 to-transparent pointer-events-none" />
        
        {/* Map Controls Mockup */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
          <button className="w-10 h-10 bg-white text-black rounded-md shadow-lg flex items-center justify-center hover:bg-zinc-200 transition-colors">
            <iconify-icon icon="solar:add-linear" class="text-xl"></iconify-icon>
          </button>
          <button className="w-10 h-10 bg-white text-black rounded-md shadow-lg flex items-center justify-center hover:bg-zinc-200 transition-colors">
            <iconify-icon icon="solar:minus-linear" class="text-xl"></iconify-icon>
          </button>
        </div>

        {filteredProperties.map(property => (
          <div 
            key={property.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 cursor-pointer group`}
            style={{ 
              left: `${property.mapX}%`, 
              top: `${property.mapY}%`,
              zIndex: hoveredPropertyId === property.id ? 50 : 10
            }}
            onMouseEnter={() => setHoveredPropertyId(property.id)}
            onMouseLeave={() => setHoveredPropertyId(null)}
          >
            <div className={`px-3 py-1.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 ${
              hoveredPropertyId === property.id 
                ? 'bg-black text-white scale-110 border-2 border-[#DCA11D]' 
                : 'bg-white text-black border border-zinc-200 hover:scale-105'
            }`}>
              {formatPrice(property.price)}
            </div>

            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 origin-bottom ${
              hoveredPropertyId === property.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <img src={property.image} alt={property.title} className="w-full h-24 object-cover" />
              <div className="p-3">
                <div className="flex items-center gap-1 text-xs text-[#DCA11D] mb-1">
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  <span>{property.rating}</span>
                </div>
                <h4 className="text-sm font-medium text-white truncate">{property.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}