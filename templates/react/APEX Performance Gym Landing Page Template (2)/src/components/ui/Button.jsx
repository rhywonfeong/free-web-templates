import { clsx } from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  href,
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 uppercase tracking-widest whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#FF4500] text-white rounded-full shadow-glow-fire hover:bg-[#FF6B35] hover:scale-[1.02]",
    outline: "border border-[#FF4500] text-[#F5F5F5] rounded-full hover:bg-[#FF4500]/10",
    ghost: "text-[#B0B0B0] hover:text-[#F5F5F5] rounded-full hover:bg-[#2E2E2E]/50",
    volt: "bg-[#AAFF00] text-[#080808] rounded-full shadow-glow-volt hover:bg-[#C6FF4D] hover:scale-[1.02]"
  };

  const sizes = {
    sm: "text-[11px] px-5 py-2.5",
    md: "text-xs px-8 py-4",
    lg: "text-sm px-10 py-5"
  };

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && <iconify-icon icon={icon} class="ml-2 text-lg"></iconify-icon>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}