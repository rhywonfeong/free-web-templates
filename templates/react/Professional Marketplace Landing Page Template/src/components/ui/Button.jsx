import React from 'react';
import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  fullWidth,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md focus:ring-indigo-500',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  return (
    <button 
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
    </button>
  );
}