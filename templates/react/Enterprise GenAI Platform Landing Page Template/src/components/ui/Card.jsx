import clsx from 'clsx';

export default function Card({ children, className, hover = true }) {
  return (
    <div 
      className={clsx(
        "bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8",
        hover && "hover:border-[#4862ff]/30 hover:shadow-xl hover:shadow-[#4862ff]/5 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}