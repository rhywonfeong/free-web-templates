import { cn } from '../../utils/cn'

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const baseStyles = "inline-flex items-center justify-center uppercase font-medium transition-all duration-300 whitespace-nowrap"
  
  const variants = {
    primary: "bg-[#E8651A] text-white rounded-full hover:bg-[#F07A30] hover:shadow-[0_4px_16px_rgba(232,101,26,0.35)]",
    secondary: "bg-transparent border border-[#2D2D2D] text-white rounded-lg hover:border-[#E8651A] hover:bg-[#252525]",
    danger: "bg-[#E82020] text-white rounded-full hover:bg-[#FF3B3B]",
    ghost: "bg-transparent text-[#E5E5E5] hover:text-[#E8651A]"
  }

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  )
}