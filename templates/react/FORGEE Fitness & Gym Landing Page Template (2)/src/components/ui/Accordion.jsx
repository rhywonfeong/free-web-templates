import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col border-t border-[#2A2A2A]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#2A2A2A]">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-6 md:py-8 flex items-center justify-between group text-left"
            >
              <h3 className={`font-display uppercase text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#E8400A]' : 'text-white group-hover:text-[#B0B0B0]'}`}>
                {String(index + 1).padStart(2, '0')} · {item.title}
              </h3>
              <div className={`text-[#6B6B6B] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E8400A]' : ''}`}>
                <iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24"></iconify-icon>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
            >
              {typeof item.content === 'string' ? (
                <p className="text-[#B0B0B0] text-[15px] leading-relaxed max-w-2xl">
                  {item.content}
                </p>
              ) : (
                <div className="text-[#B0B0B0] text-[15px] leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}