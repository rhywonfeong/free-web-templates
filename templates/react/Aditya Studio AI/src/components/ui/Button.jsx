import React from 'react';
import { clsx } from 'clsx';

export const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  isLoading, 
  icon,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    secondary: "bg-[#262626] text-white hover:bg-[#3f3f46] border border-[#3f3f46] focus:ring-[#3f3f46]",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 focus:ring-red-500",
    ai: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 focus:ring-indigo-500 shadow-lg shadow-indigo-500/25 border border-indigo-400/20",
    ghost: "text-[#a1a1aa] hover:text-white hover:bg-[#262626] focus:ring-[#262626]"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      ref={ref}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <iconify-icon 
          icon="solar:refresh-linear" 
          class="animate-spin mr-2" 
          width="16" 
          height="16"
        ></iconify-icon>
      )}
      {!isLoading && icon && (
        <iconify-icon 
          icon={icon} 
          class={clsx("mr-2")} 
          width={size === 'sm' ? "14" : "18"} 
          height={size === 'sm' ? "14" : "18"}
        ></iconify-icon>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';