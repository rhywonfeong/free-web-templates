import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: "border border-[#2A2A2A] text-[#F2F2F2] bg-transparent rounded-full",
    success: "bg-[rgba(34,197,94,0.15)] text-[#22C55E] rounded-full",
    brand: "border border-[#CCFF33] text-[#CCFF33] bg-[rgba(204,255,51,0.05)] rounded-full",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 font-body font-medium text-[11px] uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}