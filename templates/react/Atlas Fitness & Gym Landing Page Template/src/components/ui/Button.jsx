import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-200 ease-out";
  
  const variants = {
    primary: "bg-acid text-neutral-950 hover:bg-acid-hover hover:shadow-[0_0_20px_rgba(200,244,0,0.35)] rounded-none",
    secondary: "bg-neutral-900 text-offwhite hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-none",
    danger: "bg-fire text-offwhite hover:bg-fire-hover hover:shadow-[0_0_24px_rgba(232,32,10,0.4)] rounded-none",
    outline: "bg-transparent text-offwhite border border-neutral-700 hover:border-acid hover:text-acid rounded-none",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-xs md:text-sm px-6 py-3",
    lg: "text-sm md:text-base px-8 py-4",
  };

  return (
    <button 
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;