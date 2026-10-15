import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <div 
            key={index} 
            className={`border border-[#242424] rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#1A1A1A]' : 'bg-transparent'}`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className={`font-bold tracking-tight text-lg ${isOpen ? 'text-white' : 'text-[#C4C4C4]'}`}>
                {item.question}
              </span>
              <iconify-icon 
                icon="solar:alt-arrow-down-linear" 
                class={`text-xl text-[#6B6B6B] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E30000]' : ''}`}
              ></iconify-icon>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[#6B6B6B] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}