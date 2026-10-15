import React from 'react';
import clsx from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as: Component = 'button',
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300";
  
  const variants = {
    primary: "bg-[#E8193C] text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(232,25,60,0.4)]",
    accent: "bg-[#C5F500] text-black hover:bg-[#a8d100]",
    outline: "bg-transparent text-white border border-[#2B3045] hover:border-[#E8193C] hover:bg-[#12151F]",
    ghost: "bg-transparent text-[#94A3B8] hover:text-white hover:bg-[#181C28]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs radius-sm",
    md: "px-6 py-3 text-sm rounded-sm",
    lg: "px-8 py-4 text-base rounded-sm w-full md:w-auto"
  };

  return (
    <Component 
      className={clsx(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </Component>
  );
}