import React from 'react'

export const ButtonPrimary = ({ children, className = '', ...props }) => (
  <button 
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8350A] text-white font-bold uppercase tracking-wider-custom text-sm rounded-[4px] hover:bg-[#FF2200] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(232,53,10,0.3)] hover:-translate-y-0.5 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export const ButtonSecondary = ({ children, className = '', ...props }) => (
  <button 
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider-custom text-sm rounded-[4px] hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    {...props}
  >
    {children}
  </button>
)