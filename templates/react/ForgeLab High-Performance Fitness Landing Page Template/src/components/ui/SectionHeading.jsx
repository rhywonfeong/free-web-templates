import { clsx } from 'clsx';

const SectionHeading = ({ supertitle, title, subtitle, alignment = 'left', className }) => {
  return (
    <div className={clsx(
      "flex flex-col gap-4",
      alignment === 'center' && "items-center text-center",
      alignment === 'right' && "items-end text-right",
      className
    )}>
      {supertitle && (
        <span className="text-[#E84E1B] font-bold text-xs md:text-sm tracking-[0.15em] uppercase flex items-center gap-2">
          {alignment === 'left' && <span className="w-8 h-[2px] bg-[#E84E1B]"></span>}
          {supertitle}
          {alignment === 'right' && <span className="w-8 h-[2px] bg-[#E84E1B]"></span>}
        </span>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[1.1]">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;