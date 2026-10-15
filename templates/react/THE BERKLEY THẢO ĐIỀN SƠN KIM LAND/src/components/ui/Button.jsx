import React from 'react';
import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  fullWidth = false,
  icon = null,
  pulse = false,
  type = 'button'
}) {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-all duration-300 ease-out border focus:outline-none";
  
  const variants = {
    primary: "bg-[#58A0C8] text-white border-[#58A0C8] hover:bg-[#4A8EB4] hover:shadow-lg hover:shadow-[#58A0C8]/20",
    secondary: "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/5",
    dark: "bg-[#0B2D72] text-white border-[#0B2D72] hover:bg-[#082052]",
    outlineAccent: "bg-transparent text-[#58A0C8] border-[#58A0C8] hover:bg-[#58A0C8]/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyle,
        variants[variant],
        fullWidth && "w-full",
        pulse && "animate-pulse-ring",
        className
      )}
    >
      {icon && <iconify-icon icon={icon} class="text-lg"></iconify-icon>}
      {children}
    </button>
  );
}