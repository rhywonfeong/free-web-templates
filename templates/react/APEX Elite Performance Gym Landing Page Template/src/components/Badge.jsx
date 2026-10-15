import React from 'react';
import { clsx } from 'clsx';

export default function Badge({ children, className, dotColor = "#C8F135" }) {
  return (
    <div className={clsx(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/10 text-xs font-medium tracking-[0.08em] uppercase text-white w-max",
      className
    )}>
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }}></span>
      {children}
    </div>
  );
}