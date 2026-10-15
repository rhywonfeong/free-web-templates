import React, { useState } from 'react'
import clsx from 'clsx'

const AccordionItem = ({ title, content, number, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[#2A2A2A]">
      <button
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6">
          {number && <span className="text-[#6B6B6B] font-display font-bold text-xl group-hover:text-[#E8400A] transition-colors">{number}</span>}
          <h3 className={clsx(
            "font-display text-2xl md:text-3xl font-semibold uppercase tracking-tight transition-colors",
            isOpen ? "text-[#E8400A]" : "text-white group-hover:text-white/80"
          )}>
            {title}
          </h3>
        </div>
        <iconify-icon 
          icon="solar:alt-arrow-down-linear" 
          className={clsx(
            "text-2xl transition-transform duration-300",
            isOpen ? "rotate-180 text-[#E8400A]" : "text-[#6B6B6B]"
          )}
        />
      </button>
      <div 
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-[#B0B0B0] text-base md:text-lg max-w-3xl pl-12 md:pl-[3.25rem]">
          {content}
        </div>
      </div>
    </div>
  )
}

export const Accordion = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem 
          key={index}
          number={`0${index + 1}`}
          title={item.title}
          content={item.content}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  )
}

export default Accordion