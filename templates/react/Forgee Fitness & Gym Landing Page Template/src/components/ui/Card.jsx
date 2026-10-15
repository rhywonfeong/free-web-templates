import React from 'react';
import { clsx } from 'clsx';

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div 
      className={clsx(
        "bg-[#1A1A1A] rounded-xl overflow-hidden flex flex-col",
        hover && "transition-transform duration-300 hover:-translate-y-1 hover:bg-[#1E1E1E]",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className }) {
  return <div className={clsx("p-6 pb-4", className)}>{children}</div>;
}

Card.Body = function CardBody({ children, className }) {
  return <div className={clsx("p-6 pt-0 flex-grow", className)}>{children}</div>;
}

Card.Footer = function CardFooter({ children, className }) {
  return <div className={clsx("p-6 pt-4 border-t border-[#2A2A2A] mt-auto", className)}>{children}</div>;
}