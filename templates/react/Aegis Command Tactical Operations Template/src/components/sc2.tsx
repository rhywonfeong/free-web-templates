import { ReactNode } from "react";

/* StarCraft II faction marks — original geometric SVGs, not game art. */

export function TerranMark({ size = 72 }: { size?: number }) {
  return (
    <svg className="sc2-mark" width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 4 74 22v36L40 76 6 58V22L40 4z" stroke="#818CF8" strokeWidth="1.4" />
      <path d="M40 16 62 28v24L40 64 18 52V28L40 16z" stroke="#818CF8" strokeWidth="1" opacity="0.45" />
      <path d="M40 28v24M28 40h24" stroke="#6366F1" strokeWidth="2" />
      <path d="M40 22 46 40 40 58 34 40z" fill="#818CF8" opacity="0.85" />
      <circle cx="40" cy="40" r="3.2" fill="#FCA311" />
    </svg>
  );
}

export function ZergMark({ size = 72 }: { size?: number }) {
  return (
    <svg className="sc2-mark" width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path
        d="M40 8c10 8 14 16 12 28-2 10 2 16 8 22-12-2-18-8-20-16-2 8-8 14-20 16 6-6 10-12 8-22-2-12 2-20 12-28z"
        stroke="#B8E04A"
        strokeWidth="1.4"
        fill="rgba(184,224,74,0.08)"
      />
      <path d="M40 22c4 6 6 12 4 20-4 2-8 2-12 0-2-8 0-14 4-20 1.2 2 2.8 2 4 0z" fill="#B8E04A" opacity="0.8" />
      <path d="M22 34c6 2 10 8 10 14M58 34c-6 2-10 8-10 14" stroke="#7CFF6B" strokeWidth="1.2" />
      <circle cx="40" cy="44" r="2.4" fill="#FCA311" />
    </svg>
  );
}

export function ProtossMark({ size = 72 }: { size?: number }) {
  return (
    <svg className="sc2-mark" width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 6 70 40 40 74 10 40z" stroke="#C9A6FF" strokeWidth="1.4" />
      <path d="M40 18 58 40 40 62 22 40z" stroke="#C9A6FF" strokeWidth="1" opacity="0.5" />
      <path d="M40 10v60M16 40h48" stroke="#8B6CFF" strokeWidth="0.8" opacity="0.55" />
      <path d="M40 26 48 40 40 54 32 40z" fill="#C9A6FF" />
      <circle cx="40" cy="40" r="3" fill="#FCA311" />
    </svg>
  );
}

export function Battlecruiser({ size = 120 }: { size?: number }) {
  return (
    <svg className="sc2-ship" width={size} height={size * 0.55} viewBox="0 0 200 110" fill="none" aria-hidden="true">
      <path d="M8 62h28l10-18h70l18 10h48l10 8H8z" fill="#1a1c36" stroke="#818CF8" strokeWidth="1.2" />
      <path d="M46 44h54l8 10H54z" fill="#242844" stroke="#818CF8" strokeWidth="0.8" />
      <path d="M18 70h150l6 10H24z" fill="#121424" stroke="#6366F1" strokeWidth="0.8" />
      <rect x="70" y="50" width="22" height="8" fill="#818CF8" opacity="0.7" />
      <rect x="148" y="58" width="16" height="6" fill="#A5B4FC" />
      <path d="M188 66h8M4 66h6" stroke="#818CF8" strokeWidth="1" />
      <circle cx="168" cy="62" r="2" fill="#818CF8" className="sc2-blink" />
    </svg>
  );
}

export function Mutalisk({ size = 110 }: { size?: number }) {
  return (
    <svg className="sc2-ship" width={size} height={size * 0.7} viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M80 58c-18 2-36 14-48 28 16-8 30-10 48-8 18-2 32 0 48 8-12-14-30-26-48-28z" fill="#243018" stroke="#B8E04A" strokeWidth="1.1" />
      <path d="M80 52c8-16 22-28 40-34-10 14-16 26-18 38-10-8-16-4-22-4z" fill="#1c2814" stroke="#7CFF6B" strokeWidth="1" />
      <path d="M80 52c-8-16-22-28-40-34 10 14 16 26 18 38 10-8 16-4 22-4z" fill="#1c2814" stroke="#7CFF6B" strokeWidth="1" />
      <ellipse cx="80" cy="60" rx="10" ry="7" fill="#B8E04A" />
      <circle cx="84" cy="58" r="1.6" fill="#09090B" />
    </svg>
  );
}

export function Carrier({ size = 120 }: { size?: number }) {
  return (
    <svg className="sc2-ship" width={size} height={size * 0.62} viewBox="0 0 180 112" fill="none" aria-hidden="true">
      <path d="M90 14 150 56 90 98 30 56z" fill="#1a1428" stroke="#C9A6FF" strokeWidth="1.2" />
      <path d="M90 28 132 56 90 84 48 56z" stroke="#8B6CFF" strokeWidth="0.8" />
      <path d="M90 40 114 56 90 72 66 56z" fill="#C9A6FF" opacity="0.75" />
      <path d="M20 56h22M138 56h22" stroke="#C9A6FF" strokeWidth="1" />
      <circle cx="42" cy="56" r="3" fill="#FCA311" className="sc2-blink" />
      <circle cx="138" cy="56" r="3" fill="#FCA311" className="sc2-blink" />
    </svg>
  );
}

export function Mineral({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4 40 16 34 40 14 40 8 16z" fill="#1a1844" stroke="#818CF8" strokeWidth="1.2" />
      <path d="M24 10 34 18 30 34H18L14 18z" fill="#818CF8" opacity="0.35" />
      <path d="M24 10v24M14 18l10 16 10-16" stroke="#C7D2FE" strokeWidth="0.7" />
    </svg>
  );
}

export function Vespene({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="30" rx="16" ry="8" fill="#1a2410" stroke="#B8E04A" strokeWidth="1.1" />
      <path d="M12 28c2-10 8-16 12-16s10 6 12 16" fill="#243018" stroke="#7CFF6B" strokeWidth="1" />
      <path d="M20 18c1 6 2 10 4 14M28 18c-1 6-2 10-4 14" stroke="#B8E04A" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

export function PsiBlade({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 3 22 16 18 33 14 16z" fill="#C9A6FF" />
      <path d="M8 18h20" stroke="#FCA311" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="3" stroke="#C9A6FF" />
    </svg>
  );
}

export function FactionCard({
  faction,
  code,
  title,
  copy,
  children,
  accent,
}: {
  faction: string;
  code: string;
  title: string;
  copy: string;
  children: ReactNode;
  accent: "terran" | "zerg" | "protoss";
}) {
  return (
    <article className={`sc2-card sc2-card--${accent} reveal`}>
      <div className="sc2-card__glow" aria-hidden="true" />
      <header className="sc2-card__head">
        <span className="sc2-card__code mono">{code}</span>
        <span className="sc2-card__faction">{faction}</span>
      </header>
      <div className="sc2-card__art">{children}</div>
      <h3 className="sc2-card__title">{title}</h3>
      <p className="sc2-card__copy">{copy}</p>
    </article>
  );
}
