import React from 'react';
import { clsx } from 'clsx';

const SectionHeader = ({ label, title, description, align = 'left', className }) => {
  return (
    <div className={clsx(
      "flex flex-col gap-4 max-w-3xl",
      align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
      className
    )}>
      {label && (
        <span className="text-xs font-medium uppercase tracking-widest text-acid px-3 py-1 bg-acid/10 inline-block rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-offwhite leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;