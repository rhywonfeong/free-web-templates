import { clsx } from 'clsx'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-all duration-300 rounded-none whitespace-nowrap"
  
  const variants = {
    primary: "bg-[#E5C000] text-[#1A1A1A] hover:bg-[#F0D000]",
    secondary: "bg-[#FF5A1A] text-white hover:bg-[#CC3D00]",
    outline: "bg-transparent border-[1.5px] border-[#E5C000] text-[#E5C000] hover:bg-[#E5C000] hover:text-[#1A1A1A]",
    ghost: "bg-transparent text-white hover:text-[#E5C000]"
  }

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}