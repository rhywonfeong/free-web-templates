import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, variant = 'primary', className, icon, ...props }) => {
  const baseStyles = "inline-flex items-center gap-2 font-body font-semibold uppercase tracking-widest text-sm py-3 px-6 rounded transition-all duration-300";
  
  const variants = {
    primary: "bg-[#FF3A00] text-[#F5F5F5] hover:bg-[#FF5A1A] hover:shadow-[0_0_24px_rgba(255,58,0,0.35)]",
    voltage: "bg-[#C8F200] text-[#111111] hover:bg-[#D4F533] hover:shadow-[0_0_24px_rgba(200,242,0,0.35)]",
    outline: "bg-transparent border-[1.5px] border-[#FF3A00] text-[#FF3A00] hover:bg-[#FF3A00]/10",
    ghost: "bg-transparent text-[#CCCCCC] hover:text-[#F5F5F5] hover:bg-[#181818]"
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
      {icon && <iconify-icon icon={icon} class="text-lg"></iconify-icon>}
    </button>
  );
};

export default Button;