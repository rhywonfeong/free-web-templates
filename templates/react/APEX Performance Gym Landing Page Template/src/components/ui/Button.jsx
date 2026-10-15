import React from 'react';
import { clsx } from 'clsx';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300";
  
  const variants = {
    primary: "bg-[#FF8000] text-[#2B2B2B] hover:bg-[#CC6600] hover:text-white hover:scale-105 shadow-[0_4px_24px_rgba(255,128,0,0.25)] px-8 py-4",
    secondary: "bg-transparent text-[#FFF8F1] border-[1.5px] border-[#FFF8F1]/30 hover:border-[#FF8000] hover:text-[#FF8000] px-8 py-4",
    outlineOrange: "bg-transparent text-[#FF8000] border-[1.5px] border-[#FF8000] hover:bg-[#FF8000] hover:text-[#2B2B2B] px-8 py-4",
    black: "bg-[#2B2B2B] text-[#FFF8F1] hover:bg-black hover:scale-105 px-8 py-4",
    outlineBlack: "bg-transparent text-[#2B2B2B] border-[1.5px] border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FF8000] px-8 py-4"
  };

  const classes = clsx(baseStyle, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};