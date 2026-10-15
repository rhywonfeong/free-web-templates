import React from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: "bg-[#1A1A1A] text-[#888780] border border-[rgba(255,255,255,0.1)]",
    acid: "bg-[#BFFF00] text-[#0A0A0A]",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;