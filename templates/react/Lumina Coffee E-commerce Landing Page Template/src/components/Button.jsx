import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className, 
  icon = true,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-amber-700 text-white hover:bg-amber-800 hover:shadow-lg shadow-amber-900/20",
    secondary: "bg-white text-stone-900 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 hover:shadow-md",
    dark: "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-xl",
  };

  const IconComponent = icon ? (
    <span className={clsx(
      "flex items-center justify-center w-6 h-6 rounded-full",
      variant === 'primary' ? "bg-white/20 text-white" : "bg-stone-100 text-stone-900"
    )}>
      <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
    </span>
  ) : null;

  const classes = clsx(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {IconComponent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {IconComponent}
    </button>
  );
}