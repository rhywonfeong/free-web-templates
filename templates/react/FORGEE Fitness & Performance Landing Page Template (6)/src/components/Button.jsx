import clsx from 'clsx'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-full"
  
  const variants = {
    primary: "bg-[#E30000] text-white hover:bg-[#FF1A1A] hover:shadow-[0_0_24px_rgba(227,0,0,0.35)] hover:-translate-y-0.5",
    secondary: "bg-[#1A1A1A] text-white border border-[#242424] hover:border-[#6B6B6B] hover:bg-[#2E2E2E]",
    outline: "bg-transparent text-white border border-[#242424] hover:border-white",
    ghost: "bg-transparent text-[#C4C4C4] hover:text-white hover:bg-[#1A1A1A]"
  }

  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  )
}