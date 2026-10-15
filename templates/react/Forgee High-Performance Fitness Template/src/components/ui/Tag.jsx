import React from 'react';
import clsx from 'clsx';

const Tag = ({ children, variant = 'neutral', icon, className }) => {
  const variants = {
    orange: "bg-[#E84E0F] text-white",
    tint: "bg-[#FFF0E8] text-[#D93A00] border border-[#E84E0F]/20",
    neutral: "bg-[#F0EEEC] text-[#4A4540] border border-[#E6E3E0]",
    dark: "bg-[#0F0D0B] text-white",
    success: "bg-[#F0FDF4] text-[#16A34A]"
  };

  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[1px]",
      variants[variant],
      className
    )}>
      {icon && <span className="flex items-center opacity-80">{icon}</span>}
      {children}
    </span>
  );
};

export default Tag;