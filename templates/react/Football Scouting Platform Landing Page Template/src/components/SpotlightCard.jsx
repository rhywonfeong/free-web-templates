import React, { useRef, useState } from 'react';
import clsx from 'clsx';

export default function SpotlightCard({ children, className = '', onClick }) {
  const divRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={divRef}
      onClick={onClick}
      onMouseMove={(e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        "group relative overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition-shadow dark:border-slate-800 dark:bg-slate-900/50",
        onClick && "cursor-pointer hover:shadow-md",
        className
      )}
    >
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(7,167,81,0.06), transparent 40%)`,
        }}
      />
      {/* Border overlay gradient with masking */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          padding: '1px',
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(7,167,81,0.5), transparent 40%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}