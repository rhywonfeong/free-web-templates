import { clsx } from 'clsx'

export default function SectionHeading({ badge, title, subtitle, align = 'left', className }) {
  return (
    <div className={clsx(
      "max-w-3xl mb-16",
      align === 'center' ? 'mx-auto text-center' : '',
      className
    )}>
      {badge && (
        <div className={clsx(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2A2A] bg-[#121212] mb-6",
          align === 'center' ? 'mx-auto' : ''
        )}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00F9E4] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9A9A]">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-tight mb-6">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-[#9A9A9A] text-lg md:text-xl leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}