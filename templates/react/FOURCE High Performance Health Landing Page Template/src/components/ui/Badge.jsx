import clsx from 'clsx'

const Badge = ({ children, variant = 'solid', className }) => {
  return (
    <span className={clsx(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
      variant === 'solid' && "bg-[#CCFF00] text-[#0A2E00]",
      variant === 'outline' && "border border-[#CCFF00] text-[#CCFF00]",
      className
    )}>
      {children}
    </span>
  )
}

export default Badge