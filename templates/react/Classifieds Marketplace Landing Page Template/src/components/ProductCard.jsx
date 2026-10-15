import React, { useState } from 'react';

export default function ProductCard({ title, price, location, image, isIndica }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative flex flex-col bg-white border border-[#D8DAE0] rounded-lg overflow-hidden group hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-300 h-full cursor-pointer hover:-translate-y-1">
      
      {/* Badge */}
      {isIndica && (
        <div className="absolute top-3 left-3 bg-[#DF3333] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm z-10 tracking-wider">
          INDICA
        </div>
      )}

      {/* Image container */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[#18181A] font-normal text-sm leading-snug line-clamp-2 mb-2" title={title}>
          {title}
        </h3>
        
        <p className="text-[#18181A] font-semibold text-lg mt-auto tracking-tight">
          {price}
        </p>
        
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#F5F5F6]">
          <span className="text-[#58585E] text-xs font-light truncate pr-2">
            {location}
          </span>
          <button 
            onClick={(e) => { e.preventDefault(); setIsFavorite(!isFavorite); }}
            className={`flex-shrink-0 transition-colors ${isFavorite ? 'text-[#DF3333]' : 'text-[#58585E] hover:text-[#DF3333]'}`}
            aria-label="Favoritar"
          >
            <iconify-icon 
              icon={isFavorite ? "solar:heart-bold" : "solar:heart-linear"} 
              width="20"
            ></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
}