import React from 'react';
import { clsx } from 'clsx';

export const Card = ({ children, className, ...props }) => (
  <div className={clsx("bg-[#171717] border border-[#262626] rounded-xl overflow-hidden", className)} {...props}>
    {children}
  </div>
);

Card.Header = ({ children, className, ...props }) => (
  <div className={clsx("px-6 py-4 border-b border-[#262626] flex items-center justify-between", className)} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className, ...props }) => (
  <h3 className={clsx("text-lg font-medium text-white tracking-tight", className)} {...props}>
    {children}
  </h3>
);

Card.Body = ({ children, className, ...props }) => (
  <div className={clsx("p-6", className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={clsx("px-6 py-4 border-t border-[#262626] bg-[#1a1a1a]", className)} {...props}>
    {children}
  </div>
);