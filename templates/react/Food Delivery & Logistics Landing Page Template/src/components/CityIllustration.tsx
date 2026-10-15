import React from 'react';

export type CityName =
  | 'Jamaica'
  | 'New York'
  | 'Los Angeles'
  | 'Houston'
  | 'Atlanta'
  | 'Southern Florida';

type Props = {
  city: CityName;
  className?: string;
};

/**
 * Hand-crafted scenic illustrations for each delivery hub.
 * Rendered as inline SVG so they're crisp at any size and need no external assets.
 */

const Palm = ({ x, y, scale = 1, dark = '#0E5A46' }: { x: number; y: number; scale?: number; dark?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 0 Q3 -22 1 -40" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M1 -40 Q-16 -46 -26 -38 Q-12 -40 1 -34 Z" fill={dark} />
    <path d="M1 -40 Q18 -46 28 -38 Q14 -40 1 -34 Z" fill={dark} />
    <path d="M1 -40 Q-10 -54 -22 -54 Q-8 -48 2 -38 Z" fill={dark} />
    <path d="M1 -40 Q12 -54 24 -54 Q10 -48 0 -38 Z" fill={dark} />
    <path d="M1 -40 Q0 -56 -4 -60 Q3 -52 3 -38 Z" fill={dark} />
  </g>
);

const Windows = ({
  x,
  y,
  cols,
  rows,
  gapX = 7,
  gapY = 9,
  w = 3.4,
  h = 4.4,
  color = '#FFD166',
  skip = 3,
}: {
  x: number;
  y: number;
  cols: number;
  rows: number;
  gapX?: number;
  gapY?: number;
  w?: number;
  h?: number;
  color?: string;
  skip?: number;
}) => {
  const cells: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r * cols + c) % skip === 0) continue; // leave some windows dark
      cells.push(<rect key={`${r}-${c}`} x={x + c * gapX} y={y + r * gapY} width={w} height={h} rx="0.8" fill={color} opacity="0.9" />);
    }
  }
  return <>{cells}</>;
};

const JamaicaScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Jamaica beach with palm trees and mountains">
    <defs>
      <linearGradient id="ja-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8AE0F5" />
        <stop offset="100%" stopColor="#FFF3C4" />
      </linearGradient>
      <linearGradient id="ja-sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0FB5A6" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#ja-sky)" />
    <circle cx="330" cy="42" r="22" fill="#FFC93C" />
    <circle cx="330" cy="42" r="30" fill="#FFC93C" opacity="0.25" />
    {/* Blue Mountains */}
    <path d="M0 110 L70 62 L130 104 L190 70 L260 112 L400 84 L400 130 L0 130 Z" fill="#2E7D6B" opacity="0.55" />
    <path d="M0 120 L90 84 L170 118 L250 92 L330 120 L400 104 L400 140 L0 140 Z" fill="#1F6B58" opacity="0.7" />
    {/* Sea */}
    <rect y="118" width="400" height="34" fill="url(#ja-sea)" />
    <path d="M0 122 Q50 118 100 122 T200 122 T300 122 T400 122" stroke="#E0FBF4" strokeWidth="2" fill="none" opacity="0.6" />
    {/* Sand */}
    <path d="M0 148 Q120 136 240 148 T400 146 L400 180 L0 180 Z" fill="#F7E1A8" />
    <Palm x={52} y={152} scale={1.25} />
    <Palm x={352} y={150} scale={1.05} />
    <ellipse cx="52" cy="154" rx="26" ry="4" fill="#D9B96E" opacity="0.5" />
    <ellipse cx="352" cy="152" rx="22" ry="4" fill="#D9B96E" opacity="0.5" />
  </svg>
);

const NewYorkScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="New York City skyline at dusk">
    <defs>
      <linearGradient id="ny-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#141238" />
        <stop offset="70%" stopColor="#4B2C86" />
        <stop offset="100%" stopColor="#F0148C" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#ny-sky)" />
    <circle cx="60" cy="34" r="1.6" fill="#fff" opacity="0.9" />
    <circle cx="140" cy="22" r="1.2" fill="#fff" opacity="0.7" />
    <circle cx="250" cy="30" r="1.4" fill="#fff" opacity="0.8" />
    <circle cx="330" cy="18" r="1.2" fill="#fff" opacity="0.7" />
    <circle cx="368" cy="48" r="1.6" fill="#fff" opacity="0.9" />
    <circle cx="316" cy="44" r="12" fill="#FDF3D8" opacity="0.95" />
    {/* Back row */}
    <g fill="#241C55">
      <rect x="0" y="86" width="42" height="94" />
      <rect x="58" y="72" width="34" height="108" />
      <rect x="128" y="80" width="40" height="100" />
      <rect x="238" y="74" width="36" height="106" />
      <rect x="300" y="90" width="44" height="90" />
      <rect x="360" y="70" width="40" height="110" />
    </g>
    {/* Empire State style tower */}
    <g fill="#3A2B78">
      <rect x="184" y="60" width="36" height="120" />
      <rect x="192" y="42" width="20" height="20" />
      <rect x="198" y="28" width="8" height="16" />
      <rect x="201" y="14" width="2.5" height="16" />
    </g>
    {/* Front row */}
    <g fill="#312566">
      <rect x="30" y="104" width="40" height="76" />
      <rect x="96" y="96" width="36" height="84" />
      <rect x="156" y="108" width="34" height="72" />
      <rect x="226" y="100" width="42" height="80" />
      <rect x="282" y="108" width="34" height="72" />
      <rect x="336" y="98" width="36" height="82" />
    </g>
    <Windows x={36} y={110} cols={4} rows={7} />
    <Windows x={102} y={102} cols={4} rows={8} skip={4} />
    <Windows x={190} y={66} cols={4} rows={12} gapY={9} skip={5} />
    <Windows x={232} y={106} cols={5} rows={7} />
    <Windows x={288} y={114} cols={4} rows={6} skip={4} />
    <Windows x={342} y={104} cols={4} rows={8} />
    <rect y="176" width="400" height="4" fill="#0D0B26" />
  </svg>
);

const LosAngelesScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Los Angeles palm trees against a sunset">
    <defs>
      <linearGradient id="la-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF8A5C" />
        <stop offset="55%" stopColor="#F0148C" />
        <stop offset="100%" stopColor="#7B2FD6" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#la-sky)" />
    <circle cx="200" cy="96" r="34" fill="#FFD166" />
    <circle cx="200" cy="96" r="46" fill="#FFD166" opacity="0.3" />
    {/* Hills */}
    <path d="M0 128 L80 96 L150 126 L240 100 L320 130 L400 108 L400 180 L0 180 Z" fill="#3B1160" />
    {/* Distant skyline strip */}
    <g fill="#2A0C49">
      <rect x="150" y="118" width="10" height="26" />
      <rect x="164" y="110" width="12" height="34" />
      <rect x="180" y="120" width="9" height="24" />
      <rect x="212" y="112" width="12" height="32" />
      <rect x="228" y="120" width="10" height="24" />
    </g>
    <path d="M0 144 Q100 132 200 144 T400 142 L400 180 L0 180 Z" fill="#26083F" />
    {/* Palm silhouettes */}
    <Palm x={60} y={170} scale={1.7} dark="#170426" />
    <Palm x={340} y={168} scale={1.5} dark="#170426" />
    <Palm x={300} y={174} scale={1.1} dark="#170426" />
    {/* Road */}
    <path d="M170 180 L200 148 L230 180 Z" fill="#3D1B63" />
    <path d="M199 178 L200 156 L201 178 Z" fill="#FFD166" opacity="0.8" />
  </svg>
);

const HoustonScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Houston skyline with a rocket launching">
    <defs>
      <linearGradient id="ho-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#ho-sky)" />
    <circle cx="52" cy="36" r="1.6" fill="#fff" opacity="0.8" />
    <circle cx="118" cy="20" r="1.2" fill="#fff" opacity="0.7" />
    <circle cx="356" cy="28" r="1.5" fill="#fff" opacity="0.8" />
    {/* Rocket + trail */}
    <g>
      <path d="M312 92 Q318 70 314 34" stroke="#FDE68A" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M312 96 Q320 72 315 30" stroke="#FFF7E0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <g transform="translate(314 30) rotate(6)">
        <path d="M0 -14 Q6 -6 6 4 L-6 4 Q-6 -6 0 -14 Z" fill="#F1F5F9" />
        <circle cx="0" cy="-2" r="2.6" fill="#60A5FA" />
        <path d="M-6 4 L-10 10 L-5 8 Z" fill="#F0148C" />
        <path d="M6 4 L10 10 L5 8 Z" fill="#F0148C" />
        <path d="M-3 8 Q0 16 3 8 Z" fill="#FFC93C" />
      </g>
    </g>
    {/* Skyline */}
    <g fill="#12275E">
      <rect x="0" y="92" width="34" height="88" />
      <rect x="46" y="76" width="30" height="104" />
      <rect x="88" y="98" width="34" height="82" />
      <rect x="134" y="64" width="34" height="116" />
      <path d="M134 64 L151 46 L168 64 Z" />
      <rect x="182" y="86" width="30" height="94" />
      <rect x="224" y="72" width="34" height="108" />
      <rect x="270" y="96" width="30" height="84" />
      <rect x="340" y="84" width="34" height="96" />
      <rect x="384" y="100" width="16" height="80" />
    </g>
    <Windows x={51} y={82} cols={3} rows={9} />
    <Windows x={139} y={70} cols={4} rows={10} skip={4} />
    <Windows x={229} y={78} cols={4} rows={9} />
    <Windows x={345} y={90} cols={4} rows={8} skip={4} />
    <rect y="176" width="400" height="4" fill="#0B1B44" />
  </svg>
);

const AtlantaScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Atlanta skyline at sunrise with peach trees">
    <defs>
      <linearGradient id="at-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDBA74" />
        <stop offset="60%" stopColor="#FB7185" />
        <stop offset="100%" stopColor="#E85D8A" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#at-sky)" />
    <circle cx="86" cy="52" r="20" fill="#FFF7ED" opacity="0.9" />
    {/* Skyline */}
    <g fill="#7C2D4E">
      <rect x="20" y="96" width="30" height="84" />
      <rect x="62" y="82" width="32" height="98" />
      <rect x="140" y="92" width="30" height="88" />
      <rect x="248" y="88" width="34" height="92" />
      <rect x="330" y="94" width="32" height="86" />
    </g>
    {/* Signature spire tower */}
    <g fill="#5D2140">
      <rect x="188" y="62" width="34" height="118" />
      <path d="M188 62 L205 40 L222 62 Z" />
      <rect x="203.5" y="26" width="3" height="16" />
      <rect x="104" y="76" width="26" height="104" />
      <path d="M104 76 Q117 62 130 76 Z" />
      <rect x="292" y="72" width="28" height="108" />
      <path d="M292 72 Q306 58 320 72 Z" />
    </g>
    <Windows x={67} y={88} cols={4} rows={9} color="#FFE1B8" />
    <Windows x={193} y={68} cols={4} rows={11} color="#FFE1B8" skip={4} />
    <Windows x={296} y={78} cols={3} rows={10} color="#FFE1B8" skip={4} />
    {/* Tree canopy — the city in a forest */}
    <g>
      <circle cx="16" cy="168" r="20" fill="#166534" />
      <circle cx="48" cy="174" r="16" fill="#15803D" />
      <circle cx="150" cy="176" r="18" fill="#166534" />
      <circle cx="252" cy="174" r="16" fill="#15803D" />
      <circle cx="352" cy="172" r="18" fill="#166534" />
      <circle cx="388" cy="176" r="16" fill="#15803D" />
    </g>
    <rect y="176" width="400" height="4" fill="#4A1B33" />
  </svg>
);

const FloridaScene = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="South Florida art deco beachfront with palms">
    <defs>
      <linearGradient id="fl-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7DD3FC" />
        <stop offset="100%" stopColor="#FBCFE8" />
      </linearGradient>
      <linearGradient id="fl-sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22D3EE" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#fl-sky)" />
    <circle cx="70" cy="40" r="16" fill="#FFE08A" />
    {/* Art deco pastel buildings */}
    <g>
      <rect x="150" y="78" width="44" height="70" rx="4" fill="#F9A8D4" />
      <rect x="158" y="66" width="28" height="14" rx="3" fill="#F472B6" />
      <rect x="204" y="90" width="40" height="58" rx="4" fill="#A5F3FC" />
      <rect x="212" y="80" width="24" height="12" rx="3" fill="#67E8F9" />
      <rect x="254" y="72" width="46" height="76" rx="4" fill="#C4B5FD" />
      <rect x="264" y="58" width="26" height="16" rx="3" fill="#A78BFA" />
      <rect x="310" y="86" width="38" height="62" rx="4" fill="#FDE68A" />
    </g>
    <Windows x={156} y={84} cols={4} rows={5} gapX={9} gapY={11} color="#FFFFFF" skip={5} />
    <Windows x={210} y={96} cols={3} rows={4} gapX={11} gapY={11} color="#FFFFFF" skip={5} />
    <Windows x={260} y={78} cols={4} rows={6} gapX={10} gapY={10} color="#FFFFFF" skip={5} />
    <Windows x={316} y={92} cols={3} rows={4} gapX={11} gapY={11} color="#FFFFFF" skip={5} />
    {/* Sea + beach */}
    <rect y="140" width="400" height="22" fill="url(#fl-sea)" />
    <path d="M0 144 Q60 140 120 144 T240 144 T360 144 T400 143" stroke="#E0FBFF" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M0 158 Q130 150 260 160 T400 156 L400 180 L0 180 Z" fill="#FBE7B2" />
    <Palm x={44} y={162} scale={1.35} dark="#0F766E" />
    <Palm x={104} y={166} scale={1.05} dark="#0F766E" />
    {/* Umbrella */}
    <g transform="translate(370 160)">
      <path d="M0 0 L0 -18" stroke="#B45309" strokeWidth="2" />
      <path d="M-14 -16 Q0 -30 14 -16 Z" fill="#F0148C" />
      <path d="M-14 -16 Q-7 -22 0 -16 Q7 -22 14 -16" fill="#FFF" opacity="0.35" />
    </g>
  </svg>
);

const scenes: Record<CityName, () => React.ReactElement> = {
  Jamaica: JamaicaScene,
  'New York': NewYorkScene,
  'Los Angeles': LosAngelesScene,
  Houston: HoustonScene,
  Atlanta: AtlantaScene,
  'Southern Florida': FloridaScene,
};

export default function CityIllustration({ city, className = '' }: Props) {
  const Scene = scenes[city] ?? JamaicaScene;
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <Scene />
    </div>
  );
}
