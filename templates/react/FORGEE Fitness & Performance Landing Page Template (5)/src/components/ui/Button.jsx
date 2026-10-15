import React from 'react';
import { clsx } from 'clsx';

export default function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest text-xs md:text-sm uppercase transition-all duration-300 rounded-full px-6 py-3";
  
  const variants = {
    primary: "bg-[#F46A17] text-white hover:bg-[#FF7C2A] hover:shadow-[0_0_12px_rgba(244,106,23,0.25)]",
    secondary: "bg-[#222222] text-white border border-[#3A3A3A] hover:bg-[#2C2C2C]",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}