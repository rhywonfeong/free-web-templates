import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center uppercase font-medium tracking-[0.08em] text-[13px] transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-transparent border-2 border-[var(--color-primary)] text-white px-8 py-4 hover:bg-[var(--color-primary)] hover:shadow-[0_0_32px_rgba(255,56,0,0.4)]",
    secondary: "bg-transparent text-[var(--color-silver)] hover:text-white px-6 py-4",
    link: "text-[var(--color-primary)] hover:text-white p-0 border-b border-[var(--color-primary)] hover:border-white pb-1"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}