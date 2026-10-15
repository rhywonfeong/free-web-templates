import React from 'react'

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-300 relative overflow-hidden"
  
  const variants = {
    primary: "bg-[#E8190F] text-white hover:bg-[#C0120A] shadow-[0_4px_16px_rgba(232,25,15,0.2)] hover:shadow-[0_8px_32px_rgba(232,25,15,0.4)]",
    secondary: "bg-[#1C1C1C] text-white hover:bg-[#2E2E2E] border border-[#2E2E2E] hover:border-[#808080]",
    outline: "bg-transparent text-white border border-[#E8190F] hover:bg-[#E8190F]/10",
    ghost: "bg-transparent text-[#BFBFBF] hover:text-white hover:bg-[#1C1C1C]"
  }

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

export default Button