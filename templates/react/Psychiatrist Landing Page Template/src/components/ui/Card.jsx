import { clsx } from 'clsx';

export default function Card({ children, className, hover = true }) {
  return (
    <div 
      className={clsx(
        "bg-white border border-slate-100 rounded-2xl p-6 sm:p-8",
        hover && "transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}