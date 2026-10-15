import clsx from 'clsx'

const Button = ({ children, variant = 'primary', size = 'md', className, icon, iconPosition = 'right', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
  
  const variants = {
    primary: "bg-[#CCFF00] text-[#0A2E00] hover:bg-[#AAEE00] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]",
    secondary: "bg-[#1A5C00] text-white hover:bg-[#2A7C00] hover:scale-105 active:scale-95",
    outline: "border-2 border-white/20 text-white hover:bg-white/10 active:bg-white/20",
    ghost: "bg-transparent text-current hover:bg-white/5",
    dark: "bg-[#1A1A1A] text-white hover:bg-black",
  }

  const sizes = {
    sm: "text-xs px-5 py-2.5 gap-2",
    md: "text-sm px-8 py-4 gap-2",
    lg: "text-base px-10 py-5 gap-3",
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <iconify-icon icon={icon} width="20"></iconify-icon>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <iconify-icon icon={icon} width="20"></iconify-icon>
      )}
    </button>
  )
}

export default Button