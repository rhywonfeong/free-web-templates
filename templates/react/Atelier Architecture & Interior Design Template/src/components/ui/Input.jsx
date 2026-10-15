import React from 'react';
import { clsx } from 'clsx';

export function Input({ label, error, className, ...props }) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && <label className="text-xs uppercase tracking-widest text-gray-500">{label}</label>}
      <input 
        className={clsx(
          "w-full bg-transparent border-b border-gray-300 py-3 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors duration-300",
          error && "border-red-500 focus:border-red-500"
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
}

export function Textarea({ label, error, className, ...props }) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && <label className="text-xs uppercase tracking-widest text-gray-500">{label}</label>}
      <textarea 
        className={clsx(
          "w-full bg-transparent border-b border-gray-300 py-3 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors duration-300 resize-none",
          error && "border-red-500 focus:border-red-500"
        )}
        rows={4}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
}