import React from 'react'
import clsx from 'clsx'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as: Component = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase transition-all duration-200 tracking-wider"
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] active:bg-[#C03200] rounded-none",
    secondary: "bg-transparent text-white border border-[#2A2A2A] hover:border-[#E8400A] hover:text-[#E8400A] rounded-none",
    ghost: "bg-transparent text-white hover:text-[#E8400A] rounded-none",
  }

  const sizes = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-[13px]",
    lg: "px-8 py-4 text-[15px]",
  }

  return (
    <Component 
      className={clsx(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button