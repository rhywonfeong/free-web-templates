import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  onClick 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-display font-bold tracking-[0.1em] uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D] px-8 py-4 text-sm md:text-base",
    secondary: "bg-transparent text-white border border-[#2A2A2A] hover:border-[#E8400A] hover:text-[#E8400A] px-8 py-4 text-sm md:text-base",
    ghost: "bg-transparent text-[#B0B0B0] hover:text-white px-0 py-2",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;