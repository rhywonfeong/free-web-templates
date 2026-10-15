import { useState } from 'react';
import { cn } from '../../utils/cn';

export function Accordion({ items, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col border-t border-zinc-800 w-full">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={index} className="border-b border-zinc-800">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-zinc-100 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h3>
              <div className="flex-shrink-0 ml-4 text-zinc-500 group-hover:text-amber-500 transition-colors">
                <iconify-icon 
                  icon={isOpen ? "solar:minus-linear" : "solar:add-linear"} 
                  width="24" 
                  height="24"
                />
              </div>
            </button>
            <div 
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}