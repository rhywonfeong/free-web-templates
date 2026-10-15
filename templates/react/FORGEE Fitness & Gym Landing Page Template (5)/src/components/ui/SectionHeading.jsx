import React from 'react';
import { clsx } from 'clsx';

const SectionHeading = ({ label, title, description, align = 'left', className }) => {
  return (
    <div className={clsx(`flex flex-col gap-4 mb-16 max-w-3xl`, align === 'center' ? 'items-center text-center mx-auto' : '', className)}>
      {label && (
        <span className="text-[#E02020] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3">
          {align !== 'center' && <span className="w-8 h-px bg-[#E02020]"></span>}
          {label}
          {align === 'center' && <span className="w-8 h-px bg-[#E02020]"></span>}
        </span>
      )}
      <h2 className="text-h1 whitespace-pre-line">
        {title}
      </h2>
      {description && (
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;