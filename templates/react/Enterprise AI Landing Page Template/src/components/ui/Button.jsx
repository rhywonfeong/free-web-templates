import React from 'react'
import clsx from 'clsx'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-[#4ba8ed] text-white hover:bg-[#398dcc] focus:ring-[#4ba8ed] shadow-sm hover:shadow",
    secondary: "bg-transparent text-[#0a1433] border border-gray-200 hover:border-[#4ba8ed] hover:text-[#4ba8ed] focus:ring-[#4ba8ed]",
    white: "bg-white text-[#0a1433] hover:bg-gray-50 focus:ring-white shadow-sm"
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button