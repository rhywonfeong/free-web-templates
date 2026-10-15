import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  to,
  href,
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold uppercase tracking-[0.1em] transition-all duration-200 rounded-lg whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#E53935] text-white hover:bg-[#B71C1C] shadow-[0_0_12px_rgba(229,57,53,0.15)] hover:shadow-[0_0_16px_rgba(229,57,53,0.3)]",
    secondary: "bg-[#1E1E1E] text-white hover:bg-[#2A2A2A] border border-[#3A3A3A]",
    ghost: "bg-transparent text-[#E53935] hover:bg-[#E53935]/10",
    outline: "bg-transparent text-white border border-[#3A3A3A] hover:border-[#E53935] hover:text-[#E53935]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon && <iconify-icon icon={icon} class="ml-2 text-lg" />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{content}</a>;
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}