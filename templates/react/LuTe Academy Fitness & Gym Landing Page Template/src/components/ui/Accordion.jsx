import { useState } from 'react'
import { clsx } from 'clsx'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <div 
            key={index} 
            className={clsx(
              "border rounded-2xl transition-colors duration-300 overflow-hidden",
              isOpen ? "bg-[#121212] border-[#00F9E4]/30" : "bg-transparent border-[#2A2A2A] hover:border-[#3A3A3A]"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={clsx(
                "font-semibold text-lg transition-colors",
                isOpen ? "text-[#00F9E4]" : "text-white"
              )}>
                {item.question}
              </span>
              <iconify-icon 
                icon="solar:alt-arrow-down-linear" 
                width="24"
                className={clsx(
                  "transition-transform duration-300 text-[#6B6B6B]",
                  isOpen && "rotate-180 text-[#00F9E4]"
                )}
              ></iconify-icon>
            </button>
            
            <div 
              className={clsx(
                "grid transition-all duration-300 ease-in-out px-6",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
              )}
            >
              <div className="overflow-hidden text-[#9A9A9A] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}