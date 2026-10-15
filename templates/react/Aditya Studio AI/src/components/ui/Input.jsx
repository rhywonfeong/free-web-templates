import React from 'react';
import { clsx } from 'clsx';

export const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          "w-full bg-[#171717] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={clsx(
          "w-full bg-[#171717] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all min-h-[100px] resize-y",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';