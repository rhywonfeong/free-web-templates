import { clsx } from 'clsx'

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  href, 
  onClick, 
  type = 'button',
  icon 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold tracking-widest uppercase text-xs px-6 py-4 rounded-full transition-all duration-300"
  
  const variants = {
    primary: "bg-[#00F9E4] text-[#0A0A0A] hover:bg-[#33FFEE] hover:shadow-[0_0_20px_rgba(0,249,228,0.4)]",
    secondary: "bg-[#1C1C1C] text-white hover:bg-[#2A2A2A] border border-[#2A2A2A]",
    outline: "bg-transparent text-[#00F9E4] border border-[#00F9E4] hover:bg-[#00F9E4]/10",
    ghost: "bg-transparent text-white hover:text-[#00F9E4]"
  }

  const combinedClasses = clsx(baseStyles, variants[variant], className)

  const content = (
    <>
      {children}
      {icon && <iconify-icon icon={icon} width="16"></iconify-icon>}
    </>
  )

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  )
}