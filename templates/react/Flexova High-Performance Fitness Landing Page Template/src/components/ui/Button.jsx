import React from 'react'

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-heading uppercase text-[13px] tracking-[0.1em] font-bold transition-all duration-300 rounded-none px-8 py-4";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-pressed)]",
    ghost: "bg-transparent border border-[var(--color-border)] text-white hover:bg-[var(--color-surface)] hover:border-[var(--color-primary)]",
    nav: "bg-transparent text-[var(--color-text-secondary)] hover:text-white px-4 py-2 tracking-normal font-medium text-[14px] capitalize"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}