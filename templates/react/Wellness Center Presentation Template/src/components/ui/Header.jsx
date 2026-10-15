import clsx from 'clsx';

export default function Header({ title, subtitle, theme = 'dark', align = 'left', className }) {
  return (
    <div className={clsx("mb-12", align === 'center' && 'text-center', className)}>
      {subtitle && (
        <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={clsx(
        "font-serif text-5xl md:text-6xl tracking-tight leading-tight",
        theme === 'dark' ? 'text-white' : 'text-brand-dark'
      )}>
        {title}
      </h2>
    </div>
  );
}