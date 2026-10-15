import React from 'react';
import { clsx } from 'clsx';

export default function Badge({ children, variant = 'default', className, icon }) {
  const variants = {
    default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    primary: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  };

  return (
    <span className={clsx(
      "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border border-transparent",
      variants[variant],
      className
    )}>
      {icon && <iconify-icon icon={icon} />}
      {children}
    </span>
  );
}