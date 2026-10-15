import React from 'react';
import { clsx } from 'clsx';

export default function Badge({ children, variant = 'neutral', className }) {
  const variants = {
    neutral: "bg-[#2A2A2A] text-[#AAAAAA]",
    primary: "bg-[#E53935]/15 text-[#E53935]",
    success: "bg-[#22C55E]/15 text-[#22C55E]",
    warning: "bg-[#EAB308]/15 text-[#EAB308]",
  };

  return (
    <span className={clsx(
      "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em]",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}