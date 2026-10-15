import clsx from 'clsx';

export function Card({ className, children }) {
  return (
    <div className={clsx(
      "text-[#fafafa] flex flex-col gap-6 rounded-xl border py-6 border-white/10 bg-[#171717] shadow-sm",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={clsx("flex flex-col space-y-1.5 px-6", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={clsx("text-sm font-medium leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={clsx("px-6", className)}>
      {children}
    </div>
  );
}