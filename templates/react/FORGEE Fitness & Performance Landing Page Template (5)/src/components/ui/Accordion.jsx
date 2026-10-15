import React, { useState } from 'react';

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices(prev => prev.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className={`border border-[#2C2C2C] rounded-lg overflow-hidden transition-colors ${isOpen ? 'bg-[#1A1A1A]' : 'bg-[#111111] hover:bg-[#1A1A1A]'}`}>
            <button 
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                {item.number && (
                  <span className={`font-display font-bold text-xl ${isOpen ? 'text-[#F46A17]' : 'text-[#888888]'}`}>
                    {item.number}
                  </span>
                )}
                <span className={`font-display font-semibold tracking-widest uppercase text-lg md:text-xl ${isOpen ? 'text-white' : 'text-[#CCCCCC]'}`}>
                  {item.title}
                </span>
              </div>
              <iconify-icon 
                icon="solar:alt-arrow-down-linear" 
                style={{ 
                  color: isOpen ? '#F46A17' : '#888888',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </button>
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="p-6 pt-0 text-[#CCCCCC] font-medium leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}