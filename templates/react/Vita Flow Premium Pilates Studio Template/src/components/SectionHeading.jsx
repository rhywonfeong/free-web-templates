import React from 'react';
import { clsx } from 'clsx';

export default function SectionHeading({ title, subtitle, align = 'center', className }) {
  return (
    <div className={clsx("mb-16 md:mb-20", align === 'center' ? "text-center mx-auto" : "text-left", className)}>
      {subtitle && (
        <span className="block font-ui text-[#6F725C] text-[13px] tracking-[0.1em] uppercase font-medium mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-editorial text-[#2E2E2E] text-4xl md:text-5xl font-medium leading-[1.2] tracking-[-0.01em]">
        {title}
      </h2>
    </div>
  );
}