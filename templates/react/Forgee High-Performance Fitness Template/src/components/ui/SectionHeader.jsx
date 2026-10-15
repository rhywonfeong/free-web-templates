import React from 'react';
import clsx from 'clsx';

const SectionHeader = ({ eyebrow, title, subtitle, theme = 'light', align = 'left', className }) => {
  return (
    <div className={clsx(
      'flex flex-col gap-4',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}>
      {eyebrow && (
        <span className={clsx(
          "font-accent text-[11px] tracking-[3px] uppercase font-semibold flex items-center gap-2",
          theme === 'light' ? 'text-[#8A837C]' : 'text-[#B0AAA4]'
        )}>
          <span className={clsx("w-1.5 h-1.5 rounded-full", theme === 'light' ? 'bg-[#E84E0F]' : 'bg-[#CC0000]')}></span>
          {eyebrow}
        </span>
      )}
      
      <h2 className={clsx(
        "font-display font-black uppercase tracking-[-1px] leading-[0.9]",
        "text-[48px] md:text-[64px] lg:text-[88px]",
        theme === 'light' ? 'text-[#0F0D0B]' : 'text-white'
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={clsx(
          "text-[17px] md:text-[18px] leading-[1.65] max-w-2xl mt-2",
          theme === 'light' ? 'text-[#4A4540]' : 'text-[#B0AAA4]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;