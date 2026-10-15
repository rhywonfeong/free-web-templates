import React from 'react'
import { clsx } from 'clsx'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-[50px] transition-all duration-300 ease-out"
  
  const variants = {
    primary: "bg-[#E63422] text-white hover:bg-[#E8541A] hover:shadow-[0_4px_20px_rgba(232,84,26,0.4)] hover:-translate-y-0.5",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-[#0A0A0A]",
    outlineBrand: "bg-transparent text-[#E8541A] border border-[#E8541A] hover:bg-[#E8541A] hover:text-white",
    ghost: "bg-transparent text-[#D4D4D4] hover:text-white hover:bg-[#1E1E24]"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}