import React from 'react'

export const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-6 h-[2px] bg-[#E8350A]"></div>
    <span className="text-[12px] font-medium tracking-wider-custom text-[#999999] uppercase">
      {text}
    </span>
  </div>
)

export const HeadlineSplit = ({ text1, highlight, text2, className = '' }) => (
  <h2 className={`font-display font-black text-display-md text-white uppercase ${className}`}>
    {text1} <span className="text-[#E8350A]">{highlight}</span> {text2}
  </h2>
)