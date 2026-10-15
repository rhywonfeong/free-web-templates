import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'dark';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  // Explicitly added rounded-full here to guarantee perfectly round corners
  const baseStyle =
    'rounded-full px-6 py-3 min-h-[44px] font-semibold inline-flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95';
  const variants: Record<string, string> = {
    primary: 'bg-brand-gradient text-white hover:brightness-110 hover:shadow-md',
    accent: 'bg-brand-accent text-brand-navy hover:bg-opacity-90 hover:shadow-md',
    outline: 'bg-white text-brand-navy border border-gray-200 hover:border-brand-navy hover:shadow-md',
    ghost: 'bg-transparent text-brand-navy hover:bg-gray-100 shadow-none',
    dark: 'bg-brand-navy text-white hover:bg-[#0C0A24] hover:shadow-lg'
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
