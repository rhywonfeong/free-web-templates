import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  to, 
  href, 
  ...props 
}) => {
  // FOURCE Design: 0px border-radius, uppercase, tracking, brutalist colors
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-[0.1em] transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border text-lg px-8 py-4";
  
  const variants = {
    primary: "bg-[#E74C3C] border-[#E74C3C] text-white hover:bg-[#C0392B] hover:border-[#C0392B]",
    secondary: "bg-transparent border-[#2C2C2C] text-white hover:bg-[#1E1E1E] hover:border-[#CCCCCC]",
    ghost: "bg-transparent border-transparent text-[#CCCCCC] hover:text-white hover:bg-[#141414]"
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;