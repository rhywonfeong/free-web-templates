import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

export const Input = forwardRef(({ 
  label, 
  error, 
  icon,
  className, 
  fullWidth = true,
  ...props 
}, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1.5', fullWidth && 'w-full', className)}>
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-slate-400 flex items-center">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20',
            icon && 'pl-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';