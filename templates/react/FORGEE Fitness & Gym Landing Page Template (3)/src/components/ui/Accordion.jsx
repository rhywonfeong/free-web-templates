import React, { useState } from 'react';
import clsx from 'clsx';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col border-t border-[#2A2A2A]">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={index} className="border-b border-[#2A2A2A]">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
              <h3 className={clsx(
                "font-display text-xl md:text-2xl tracking-wide transition-colors duration-200",
                isOpen ? "text-[#E8400A]" : "text-white group-hover:text-[#B0B0B0]"
              )}>
                {item.title}
              </h3>
              <iconify-icon 
                icon={isOpen ? "solar:minus-linear" : "solar:add-linear"} 
                style={{ fontSize: '24px', color: isOpen ? '#E8400A' : '#6B6B6B' }}
                class="transition-transform duration-300"
              ></iconify-icon>
            </button>
            <div 
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="text-[#B0B0B0] text-[15px] space-y-2">
                {typeof item.content === 'string' ? (
                  <p>{item.content}</p>
                ) : (
                  <ul className="list-none space-y-3">
                    {item.content.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <iconify-icon icon="solar:arrow-right-linear" class="text-[#E8400A] mt-1 shrink-0"></iconify-icon>
                        <span dangerouslySetInnerHTML={{ __html: listItem }}></span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}