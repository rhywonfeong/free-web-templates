import { clsx } from 'clsx';

export default function Tag({ children, className, variant = 'neutral' }) {
  const variants = {
    neutral: "bg-white/5 border border-[#2E2E2E] text-[#B0B0B0]",
    fire: "bg-[#FF4500]/10 border border-[#FF4500]/30 text-[#FF4500]",
    volt: "bg-[#AAFF00]/10 border border-[#AAFF00]/30 text-[#AAFF00]"
  };

  return (
    <span className={clsx(
      "inline-flex items-center px-3 py-1.5 rounded-sm text-[11px] font-medium uppercase tracking-[0.12em]",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}