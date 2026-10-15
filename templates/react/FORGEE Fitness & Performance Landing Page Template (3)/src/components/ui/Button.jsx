import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 hover-scale rounded-full whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#BFFF00] text-[#0A0A0A] hover:bg-[#8FCC00]",
    secondary: "bg-transparent border-[1.5px] border-[rgba(255,255,255,0.3)] text-white hover:border-[#BFFF00] hover:text-[#BFFF00]",
    ghost: "bg-transparent text-white hover:text-[#BFFF00]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;