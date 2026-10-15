import React from 'react';

type LogoProps = {
  /**
   * 'dark'  -> for light backgrounds (scrolled navbar)
   * 'light' -> for dark / gradient backgrounds (hero, footer)
   * The chrome mark works on both; the variant tunes the drop shadow.
   */
  variant?: 'dark' | 'light';
  size?: 'md' | 'lg';
  className?: string;
};

/** A single stylized palm tree (light brown trunk + tropical green fronds + coconuts). */
const PalmTree = ({
  x,
  y,
  scale = 1,
  flip = false
}: {
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
}) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
    {/* Trunk (drops down behind the RUN lettering) */}
    <path
      d="M0 0 C 3 18 -2 40 2 62"
      fill="none"
      stroke="#C08A52"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M0 0 C 3 18 -2 40 2 62"
      fill="none"
      stroke="#A66F3B"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="1 9"
    />
    {/* Fronds */}
    {[-160, -125, -88, -50, -15].map((a, i) => (
      <g key={a} transform={`rotate(${a})`}>
        <path
          d="M4 0 C 16 -13, 36 -17, 52 -8 C 36 -8, 18 -3, 4 2 Z"
          fill={i % 2 === 0 ? '#2FA84F' : '#3DBE5B'}
        />
        <path
          d="M4 0 C 16 -13, 36 -17, 52 -8 C 40 -11, 20 -8, 4 0 Z"
          fill="#FFFFFF"
          opacity="0.18"
        />
      </g>
    ))}
    {/* Coconuts */}
    <circle cx="-4" cy="4" r="3.4" fill="#8A5A2E" />
    <circle cx="4" cy="6" r="3.4" fill="#7A4E26" />
  </g>
);

/**
 * ISLAND RUN brand logo, faithfully recreated from the reference artwork as a
 * self-contained inline SVG so it can never appear broken:
 *  - Two-line stacked chrome-beveled wordmark ("ISLAND" over "RUN")
 *  - Four palm trees sprouting from behind the second line
 *  - Hot pink retro scooter in the foreground, overlapping the "R" and "U"
 *  - Soft 45-degree drop shadow lifting the whole assembly
 */
const Logo = ({ variant = 'dark', size = 'md', className = '' }: LogoProps) => {
  const isLight = variant === 'light';
  const heightClass = size === 'lg' ? 'h-28' : 'h-14 sm:h-16';
  const chromeFont = '"Arial Black","Helvetica Neue",Arial,sans-serif';

  const chromeText = (
    label: string,
    xCenter: number,
    baseline: number,
    fontSize: number
  ) => (
    <g>
      {/* Bevel base (soft grey shadow face beneath the chrome) */}
      <text
        x={xCenter}
        y={baseline + 3.5}
        textAnchor="middle"
        fontFamily={chromeFont}
        fontWeight={900}
        fontSize={fontSize}
        letterSpacing="2"
        fill="#7E8895"
      >
        {label}
      </text>
      {/* Chrome face */}
      <text
        x={xCenter}
        y={baseline}
        textAnchor="middle"
        fontFamily={chromeFont}
        fontWeight={900}
        fontSize={fontSize}
        letterSpacing="2"
        fill="url(#ir-chrome)"
        stroke="#5B6672"
        strokeWidth="1.4"
        paintOrder="stroke"
      >
        {label}
      </text>
      {/* Top highlight glint */}
      <text
        x={xCenter - 1}
        y={baseline - 1.5}
        textAnchor="middle"
        fontFamily={chromeFont}
        fontWeight={900}
        fontSize={fontSize}
        letterSpacing="2"
        fill="#FFFFFF"
        opacity="0.35"
      >
        {label}
      </text>
    </g>
  );

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 236"
        className={`${heightClass} w-auto shrink-0`}
        role="img"
        aria-label="Island Run"
        focusable="false"
      >
        <defs>
          {/* Polished chrome / silver gradient for the lettering */}
          <linearGradient id="ir-chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E9EDF3" />
            <stop offset="48%" stopColor="#AEB8C4" />
            <stop offset="55%" stopColor="#8E99A6" />
            <stop offset="62%" stopColor="#D9DFE7" />
            <stop offset="82%" stopColor="#F6F8FB" />
            <stop offset="100%" stopColor="#B9C2CD" />
          </linearGradient>
          {/* Hot pink scooter body gloss */}
          <linearGradient id="ir-pink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF56AC" />
            <stop offset="45%" stopColor="#FF1E8E" />
            <stop offset="100%" stopColor="#D8107B" />
          </linearGradient>
          {/* Soft 45-degree drop shadow lifting the whole badge */}
          <filter id="ir-lift" x="-15%" y="-15%" width="135%" height="135%">
            <feDropShadow
              dx="4"
              dy="5"
              stdDeviation="4.5"
              floodColor="#0B1224"
              floodOpacity={isLight ? 0.45 : 0.28}
            />
          </filter>
        </defs>

        <g filter="url(#ir-lift)">
          {/* ------ Background: four palm trees sprouting from behind "RUN" ------ */}
          <PalmTree x={58} y={86} scale={0.92} flip />
          <PalmTree x={128} y={76} scale={1.05} />
          <PalmTree x={212} y={78} scale={1.05} flip />
          <PalmTree x={284} y={88} scale={0.92} />

          {/* ------ Middle layer: chrome-beveled stacked wordmark ------ */}
          {chromeText('ISLAND', 170, 62, 56)}
          {chromeText('RUN', 170, 164, 82)}

          {/* ------ Foreground: hot pink retro scooter, facing right, ------
               ------ overlapping the bottom half of the "R" and "U"  ------ */}
          <g transform="translate(80 130) scale(0.96)">
            {/* Rear wheel */}
            <circle cx="28" cy="56" r="17" fill="#2E2A33" />
            <circle cx="28" cy="56" r="7.5" fill="#E6E9EE" stroke="#9AA4B0" strokeWidth="1.5" />
            <circle cx="28" cy="56" r="2.6" fill="#D8107B" />
            {/* Front wheel */}
            <circle cx="142" cy="56" r="17" fill="#2E2A33" />
            <circle cx="142" cy="56" r="7.5" fill="#E6E9EE" stroke="#9AA4B0" strokeWidth="1.5" />
            <circle cx="142" cy="56" r="2.6" fill="#D8107B" />

            {/* Floorboard bridging rear cowl to front shield */}
            <path d="M58 46 L108 46 L116 57 L62 57 Z" fill="#C40E74" />

            {/* Rear cowl over rear wheel */}
            <path
              d="M9 56 Q3 30 26 20 Q46 12 60 24 L68 42 Q69 50 62 56 L45 56 A17 17 0 0 0 11 56 Z"
              fill="url(#ir-pink)"
              stroke="#A50B62"
              strokeWidth="1.5"
            />
            {/* Cowl gloss highlight */}
            <path d="M16 34 Q22 22 40 19 Q30 28 26 40 Z" fill="#FFFFFF" opacity="0.5" />
            {/* Tail light */}
            <circle cx="8" cy="34" r="3" fill="#FFD34D" stroke="#A50B62" strokeWidth="1.2" />

            {/* Matte seat */}
            <rect x="16" y="8" width="46" height="12" rx="6" fill="#3A3440" />
            <rect x="20" y="10" width="30" height="3.5" rx="1.75" fill="#57505F" />

            {/* Front leg shield rising to the handlebars */}
            <path
              d="M104 57 L124 12 Q126 7 131 8.5 L135 10 Q137 11 136 15 L122 57 Z"
              fill="url(#ir-pink)"
              stroke="#A50B62"
              strokeWidth="1.5"
            />
            <path d="M118 40 L128 14 L132 15 L123 41 Z" fill="#FFFFFF" opacity="0.45" />

            {/* Front fender over the front wheel */}
            <path
              d="M126 46 A19 19 0 0 1 160 50 L150 52 A11 11 0 0 0 134 49 Z"
              fill="url(#ir-pink)"
              stroke="#A50B62"
              strokeWidth="1.5"
            />

            {/* Handlebar, grip and mirror */}
            <path d="M128 10 L150 4" stroke="#3A3440" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M126 10 L120 2" stroke="#3A3440" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="119" cy="0.5" r="4" fill="#E6E9EE" stroke="#3A3440" strokeWidth="1.5" />

            {/* Headlight */}
            <circle cx="146" cy="13" r="6" fill="#FFE9A8" stroke="#A50B62" strokeWidth="1.6" />
            <circle cx="144.5" cy="11.5" r="1.8" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default Logo;
