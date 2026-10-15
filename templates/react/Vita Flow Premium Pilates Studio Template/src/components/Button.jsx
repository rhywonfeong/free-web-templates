import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Button({ children, variant = 'primary', className, to, href, onClick, type = 'button', disabled }) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-ui text-[14px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ease-out px-8 py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#481315] text-white hover:bg-[#2E0C0D] hover:shadow-md",
    secondary: "bg-transparent border border-[#6F725C] text-[#6F725C] hover:bg-[#6F725C] hover:text-white",
    ghost: "bg-transparent text-[#4A4A4A] hover:text-[#481315]",
    inverse: "bg-white text-[#481315] hover:bg-[#F9F5EF]"
  };

  const classes = clsx(baseClasses, variants[variant], className);

  if (to) {
    return <Link to={to} className={classes} onClick={onClick}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} onClick={onClick}>{children}</a>;
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}