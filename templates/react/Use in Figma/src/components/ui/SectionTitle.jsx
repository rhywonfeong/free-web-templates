import { cn } from '../../utils/cn';

const SectionTitle = ({ 
  eyebrow, 
  title, 
  titleAccent, 
  description, 
  className,
  align = 'left' 
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-16",
      align === 'center' ? "items-center text-center" : "items-start text-left",
      className
    )}>
      {eyebrow && (
        <span className="text-[#E8400A] text-[11px] font-bold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter uppercase text-white">
        {title} {titleAccent && <span className="text-accent block mt-1">{titleAccent}</span>}
      </h2>
      {description && (
        <p className="text-[#B0B0B0] max-w-2xl text-base md:text-lg leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;