import React from 'react';
import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-sm";
  
  const variants = {
    primary: "bg-[#DCA11D] text-black hover:bg-[#e0b040] hover:shadow-[0_0_20px_rgba(220,161,29,0.3)]",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700",
    outline: "bg-transparent text-[#DCA11D] border border-[#DCA11D] hover:bg-[#DCA11D]/10",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-8 py-4 gap-3"
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && (
        <iconify-icon icon={icon} class="text-[1.2em]"></iconify-icon>
      )}
    </button>
  );
}