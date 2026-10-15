import React from 'react';
import clsx from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center uppercase font-medium tracking-[0.1em] transition-all duration-200";
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] active:bg-[#C03200] border border-transparent",
    secondary: "bg-transparent text-[#FFFFFF] border border-[#2A2A2A] hover:border-[#E8400A] hover:text-[#E8400A]",
    ghost: "bg-transparent text-[#B0B0B0] hover:text-[#FFFFFF]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-[13px]",
    lg: "px-8 py-4 text-[14px]",
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}