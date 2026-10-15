import React from 'react';
import clsx from 'clsx';

const Badge = ({ children, variant = 'default', className }) => {
  const baseStyles = "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase";
  
  const variants = {
    default: "bg-[#C56D3B]/15 text-[#CF875E] border border-[#C56D3B]/25",
    founder: "bg-[linear-gradient(135deg,rgba(197,109,59,0.2),rgba(224,180,99,0.2))] text-[#E0B463] border border-[#E0B463]/30",
    neutral: "bg-card text-muted border-strong"
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;