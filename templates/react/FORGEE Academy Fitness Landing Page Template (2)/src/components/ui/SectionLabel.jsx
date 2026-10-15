import React from 'react'
import clsx from 'clsx'

export default function SectionLabel({ children, className }) {
  return (
    <div className={clsx("flex items-center space-x-3 mb-8", className)}>
      <div className="w-8 h-px bg-[#E8001C]"></div>
      <span className="font-display text-xs md:text-sm font-medium tracking-[0.2em] text-[#00C2E0] uppercase">
        [{children}]
      </span>
    </div>
  )
}