import React from 'react';
import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  fullWidth,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-white",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
    outline: "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800/50",
    ghost: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  return (
    <button 
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && <iconify-icon icon={icon} class="text-[1.2em] shrink-0" />}
      {children}
    </button>
  );
}