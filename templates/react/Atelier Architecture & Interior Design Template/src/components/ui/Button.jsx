import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className, 
  onClick, 
  type = 'button',
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-in-out border";
  
  const variants = {
    primary: "bg-charcoal text-warm-white border-charcoal hover:bg-transparent hover:text-charcoal",
    secondary: "bg-transparent text-charcoal border-charcoal hover:bg-charcoal hover:text-warm-white",
    ghost: "bg-transparent text-white border-white hover:bg-white hover:text-charcoal",
    minimal: "bg-transparent text-charcoal border-transparent border-b-charcoal pb-1 px-0 py-0 hover:border-b-transparent hover:opacity-70 rounded-none",
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}