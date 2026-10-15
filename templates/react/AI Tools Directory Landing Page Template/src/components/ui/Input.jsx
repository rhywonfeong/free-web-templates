import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

const Input = forwardRef(({ className, icon, error, ...props }, ref) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
          <iconify-icon icon={icon} class="text-lg" />
        </div>
      )}
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-zinc-900 transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-500",
          "dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500",
          icon && "pl-10",
          error 
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
            : "border-zinc-200 focus:border-blue-500 focus:ring-blue-500/20 dark:focus:border-blue-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;