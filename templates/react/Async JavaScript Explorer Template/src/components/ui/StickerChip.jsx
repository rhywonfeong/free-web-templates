import { clsx } from 'clsx';

export function StickerChip({ children, color = 'yellow', className }) {
  const colorStyles = {
    yellow: "bg-accent-yellow text-black",
    lime: "bg-accent-lime text-black",
    cyan: "bg-accent-cyan text-black",
    purple: "bg-accent-purple text-white",
    pink: "bg-accent-pink text-white",
    blue: "bg-accent-blue text-white",
    red: "bg-accent-red text-white",
  };

  return (
    <div 
      className={clsx(
        "inline-flex items-center justify-center px-10 py-5 rounded-[16px] font-sans font-black uppercase text-[56px] tracking-tight leading-none shadow-lg transform hover:scale-105 transition-transform duration-300",
        colorStyles[color],
        className
      )}
    >
      {children}
    </div>
  );
}