import React from 'react';
import { clsx } from 'clsx';

const Eyebrow = ({ children, className }) => {
  return (
    <div className={clsx("font-body text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#888888] flex items-center gap-3 mb-4", className)}>
      <span className="w-8 h-[1px] bg-[#FF3A00]"></span>
      {children}
    </div>
  );
};

export default Eyebrow;