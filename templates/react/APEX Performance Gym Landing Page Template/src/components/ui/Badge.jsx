import React from 'react';
import { clsx } from 'clsx';

export const Badge = ({ children, variant = 'orange', className = '' }) => {
  const variants = {
    orange: "text-[#FF8000] tracking-[0.08em]",
    solid: "bg-[#FF8000] text-[#2B2B2B] px-3 py-1 rounded-sm tracking-wider",
    dark: "bg-[#2B2B2B] text-[#FFF8F1] px-3 py-1 rounded-sm tracking-wider"
  };

  return (
    <span className={clsx("text-xs font-bold uppercase block", variants[variant], className)}>
      {children}
    </span>
  );
};