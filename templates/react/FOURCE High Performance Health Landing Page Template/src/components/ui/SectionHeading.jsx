import clsx from 'clsx'

const SectionHeading = ({ 
  label, 
  title, 
  description, 
  theme = 'dark', 
  alignment = 'left',
  className 
}) => {
  const isDark = theme === 'dark'
  
  return (
    <div className={clsx(
      "flex flex-col gap-6 max-w-3xl", 
      alignment === 'center' && "items-center text-center mx-auto",
      className
    )}>
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full border border-current font-medium text-xs tracking-widest uppercase text-[#CCFF00]">
          {label}
        </span>
      )}
      
      {title && (
        <h2 className={clsx(
          "text-5xl md:text-6xl lg:text-7xl font-display uppercase tracking-wide leading-[0.9]",
          isDark ? "text-white" : "text-[#0A2E00]"
        )}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={clsx(
          "text-lg max-w-xl font-medium",
          isDark ? "text-[#9E9E9E]" : "text-[#4A4A4A]"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading