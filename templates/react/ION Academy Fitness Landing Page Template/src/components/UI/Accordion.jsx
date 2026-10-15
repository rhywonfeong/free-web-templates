import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full divide-y divide-neutral-800 border-t border-b border-neutral-800", className)}>
      {items.map((item, index) => (
        <div key={index} className="py-2">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
            aria-expanded={openIndex === index}
          >
            {/* DS: H3 level - Extrabold/Bold text */}
            <span className={cn(
              "text-lg md:text-xl font-display font-extrabold tracking-tighter uppercase transition-colors",
              openIndex === index ? "text-brand-green" : "text-neutral-50 group-hover:text-brand-green"
            )}>
              {item.title}
            </span>
            <span className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 transition-colors",
              openIndex === index ? "text-brand-green border-brand-green" : "text-neutral-400 group-hover:text-brand-green group-hover:border-brand-green"
            )}>
              <iconify-icon icon={openIndex === index ? "solar:minus-linear" : "solar:add-linear"} width="18" />
            </span>
          </button>
          
          <div 
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="text-neutral-300 text-sm leading-relaxed pr-8 font-regular">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}