import clsx from 'clsx';

export default function GlassCard({
  children,
  className,
  onClick,
  gradient = false,
  highlight = 'blue',
  elevated = false,
}) {
  const Component = onClick ? 'button' : 'div';

  const highlightStyles = {
    blue: 'from-sky-500/12 via-blue-500/6 to-transparent',
    purple: 'from-purple-500/14 via-fuchsia-500/6 to-transparent',
    emerald: 'from-emerald-500/14 via-teal-500/6 to-transparent',
    amber: 'from-amber-500/14 via-orange-500/6 to-transparent',
    neutral: 'from-white/8 via-white/[0.03] to-transparent',
  };

  return (
    <Component
      onClick={onClick}
      className={clsx(
        'group relative w-full overflow-hidden rounded-[24px] text-left transition-all duration-300 ease-out',
        'border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl',
        'shadow-[0_10px_35px_rgba(0,0,0,0.22)]',
        onClick && 'cursor-pointer hover:-translate-y-0.5 hover:bg-white/[0.055] active:scale-[0.985]',
        elevated && 'shadow-[0_20px_50px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className={clsx('absolute inset-0 bg-gradient-to-br pointer-events-none', highlightStyles[highlight] || highlightStyles.blue)} />

      {gradient && (
        <>
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
          <div className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
        </>
      )}

      <div className="relative z-10 p-5">
        {children}
      </div>
    </Component>
  );
}