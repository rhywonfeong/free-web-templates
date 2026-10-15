import clsx from 'clsx';

export default function SlideWrapper({ theme = 'dark', children, className }) {
  const themes = {
    dark: 'bg-brand-dark text-brand-text-light',
    light: 'bg-brand-light text-brand-text-dark',
    split: '', // Managed by the slide itself
  };

  return (
    <div className={clsx("w-full h-full overflow-hidden flex flex-col", themes[theme], className)}>
      {children}
    </div>
  );
}