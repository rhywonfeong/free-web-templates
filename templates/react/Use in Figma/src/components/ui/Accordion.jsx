import { useState } from 'react';
import { cn } from '../../utils/cn';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-subtle last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
        onClick={onClick}
      >
        <h4 className={cn(
          "font-display uppercase tracking-tight text-xl md:text-2xl transition-colors",
          isOpen ? "text-[#E8400A]" : "text-white group-hover:text-[#B0B0B0]"
        )}>
          {title}
        </h4>
        <div className={cn(
          "w-8 h-8 flex items-center justify-center border transition-all duration-300",
          isOpen ? "border-[#E8400A] text-[#E8400A] rotate-45" : "border-subtle text-white group-hover:border-[#B0B0B0]"
        )}>
          <iconify-icon icon="solar:add-linear" width="20" />
        </div>
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-[#B0B0B0] text-sm md:text-base leading-relaxed pl-0 md:pl-4 border-l-2 border-[#2A2A2A]">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;