import React from 'react';
import { clsx } from 'clsx';

export default function Button({ children, variant = 'primary', className, icon, onClick, type = 'button' }) {
  const baseStyles = "relative inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-[#C8F135] text-black hover:shadow-[0_0_20px_rgba(200,241,53,0.35)] py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base",
    secondary: "bg-transparent border-[1.5px] border-white/20 text-white hover:border-[#C8F135] hover:text-[#C8F135] py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base",
    glass: "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base",
  };

  return (
    <button type={type} onClick={onClick} className={clsx(baseStyles, variants[variant], className)}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && (
          <span className={clsx(
            "flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 group-hover:translate-x-1",
            variant === 'primary' ? 'bg-black text-[#C8F135]' : 'bg-white/10 text-white'
          )}>
            <iconify-icon icon={icon} width="18" height="18"></iconify-icon>
          </span>
        )}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
      )}
    </button>
  );
}