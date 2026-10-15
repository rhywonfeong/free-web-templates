import React from 'react'
import clsx from 'clsx'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  fullWidth = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
  
  const variants = {
    primary: "bg-[#E8001C] text-white hover:bg-[#B00015] hover:shadow-glow-red border border-transparent focus:ring-[#E8001C]",
    secondary: "bg-transparent text-white border border-[#3D3D3D] hover:border-white hover:bg-white/5 focus:ring-white",
    ghost: "bg-transparent text-[#C8C8C8] hover:text-white border-b-2 border-transparent hover:border-[#E8001C] pb-1",
  }
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <button 
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}