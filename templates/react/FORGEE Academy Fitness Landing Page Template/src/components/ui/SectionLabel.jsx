import { cn } from '../../utils/cn'

export default function SectionLabel({ children, className }) {
  return (
    <span className={cn(
      "flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-[#E82020] mb-4",
      className
    )}>
      <span className="w-4 h-px bg-[#E82020]"></span>
      {children}
    </span>
  )
}