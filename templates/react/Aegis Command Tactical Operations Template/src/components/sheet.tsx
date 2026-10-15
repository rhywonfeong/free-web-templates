import { ReactNode } from "react";

/* Sourced from StarCraft Sci-Fi UI Asset Sheet:
   brass console frames, portrait plate, command grid, wireframe
   wire, resource cluster, faction glyphs. Original geometry. */

export function SheetFrame({
  children,
  className = "",
  tone = "brass",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brass" | "blue" | "green" | "red";
}) {
  return (
    <div className={`sheet-frame sheet-frame--${tone} ${className}`}>
      <span className="sheet-frame__cap sheet-frame__cap--l" aria-hidden="true" />
      <span className="sheet-frame__cap sheet-frame__cap--r" aria-hidden="true" />
      <span className="sheet-frame__rivet sheet-frame__rivet--tl" aria-hidden="true" />
      <span className="sheet-frame__rivet sheet-frame__rivet--tr" aria-hidden="true" />
      <span className="sheet-frame__rivet sheet-frame__rivet--bl" aria-hidden="true" />
      <span className="sheet-frame__rivet sheet-frame__rivet--br" aria-hidden="true" />
      <div className="sheet-frame__inner">{children}</div>
    </div>
  );
}

export function ResourceCluster({
  minerals = "1,840",
  gas = "620",
  supply = "48/60",
  compact,
}: {
  minerals?: string;
  gas?: string;
  supply?: string;
  compact?: boolean;
}) {
  return (
    <div className={`res-cluster${compact ? " res-cluster--compact" : ""}`} aria-label="Resource cluster">
      <div className="res-cluster__cell">
        <MineralCrystal />
        <div>
          <span className="res-cluster__k">MINERALS</span>
          <span className="res-cluster__v mono">{minerals}</span>
        </div>
      </div>
      <div className="res-cluster__cell">
        <GasCanister />
        <div>
          <span className="res-cluster__k">VESPENE</span>
          <span className="res-cluster__v mono">{gas}</span>
        </div>
      </div>
      <div className="res-cluster__cell">
        <SupplyPips used={48} cap={60} />
        <div>
          <span className="res-cluster__k">SUPPLY</span>
          <span className="res-cluster__v mono">{supply}</span>
        </div>
      </div>
    </div>
  );
}

export function MineralCrystal() {
  return (
    <svg className="sheet-ico" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2 28 10 24 28H8L4 10z" fill="#16324a" stroke="#7ec8ff" strokeWidth="1.1" />
      <path d="M16 6 24 12 21 24H11L8 12z" fill="#3aa0e8" opacity="0.55" />
      <path d="M16 6v18M8 12l8 12 8-12" stroke="#d7f1ff" strokeWidth="0.7" />
      <path d="M12 14h8" stroke="#fff" strokeWidth="0.6" opacity="0.7" />
    </svg>
  );
}

export function GasCanister() {
  return (
    <svg className="sheet-ico" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M10 8h8l2 3v15H8V11z" fill="#1a2a12" stroke="#b6e36a" strokeWidth="1.1" />
      <path d="M18 8h4l2 4v6h-6" stroke="#d4f59a" strokeWidth="1" />
      <rect x="11" y="14" width="6" height="8" fill="#7CFF6B" opacity="0.55" />
      <path d="M12 6h4" stroke="#b6e36a" strokeWidth="1.2" />
    </svg>
  );
}

export function SupplyPips({ used, cap }: { used: number; cap: number }) {
  const n = 8;
  const lit = Math.round((used / cap) * n);
  return (
    <span className="supply-pips" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <i key={i} className={i < lit ? "on" : ""} />
      ))}
    </span>
  );
}

export function WireframeUnit({ kind = "marine" }: { kind?: "marine" | "stalker" | "hydra" }) {
  if (kind === "stalker") {
    return (
      <svg className="wire-unit" viewBox="0 0 80 96" fill="none" aria-hidden="true">
        <path d="M40 8 62 22v28L40 64 18 50V22z" stroke="#9ecbff" strokeWidth="1" />
        <path d="M28 50 18 78M52 50 62 78M32 78h16" stroke="#9ecbff" strokeWidth="1" />
        <path d="M40 22v20M30 32h20" stroke="#5aa0e8" strokeWidth="0.8" />
        <circle cx="40" cy="34" r="4" stroke="#cfe6ff" />
        <path d="M22 40h-8M58 40h8" stroke="#7eb6ff" />
      </svg>
    );
  }
  if (kind === "hydra") {
    return (
      <svg className="wire-unit" viewBox="0 0 80 96" fill="none" aria-hidden="true">
        <path d="M40 70c-14 0-22 10-24 18h48c-2-8-10-18-24-18z" stroke="#b6e36a" />
        <path d="M40 68V40" stroke="#b6e36a" />
        <path d="M40 42c-10-8-16-20-14-30M40 42c10-8 16-20 14-30M40 46c-16 2-22 14-18 24M40 46c16 2 22 14 18 24" stroke="#d4f59a" />
        <circle cx="40" cy="44" r="3" fill="#b6e36a" />
      </svg>
    );
  }
  return (
    <svg className="wire-unit" viewBox="0 0 80 96" fill="none" aria-hidden="true">
      <path d="M28 22h24l6 10v18l-6 8H28l-6-8V32z" stroke="#9ecbff" strokeWidth="1.1" />
      <path d="M32 22 36 10h8l4 12" stroke="#9ecbff" />
      <circle cx="40" cy="36" r="5" stroke="#d7ecff" />
      <path d="M22 40 10 48v16M58 40l12 8v16" stroke="#7eb6ff" />
      <path d="M30 58v22M50 58v22M26 80h8M46 80h8" stroke="#9ecbff" />
      <path d="M54 34h16" stroke="#cfe6ff" />
      <rect x="34" y="40" width="12" height="8" stroke="#5aa0e8" />
    </svg>
  );
}

export function PortraitPlate({
  callsign,
  faction,
  kind,
}: {
  callsign: string;
  faction: string;
  kind: "marine" | "stalker" | "hydra";
}) {
  return (
    <div className={`portrait portrait--${kind}`}>
      <div className="portrait__bezel">
        <span className="portrait__notch portrait__notch--tl" />
        <span className="portrait__notch portrait__notch--tr" />
        <span className="portrait__notch portrait__notch--bl" />
        <span className="portrait__notch portrait__notch--br" />
        <div className="portrait__well">
          <WireframeUnit kind={kind} />
          <span className="portrait__scan" />
        </div>
      </div>
      <div className="portrait__tag">
        <span className="mono">{callsign}</span>
        <span>{faction}</span>
      </div>
    </div>
  );
}

const CMDS: { hot: string; name: string; tone: "blue" | "amber" | "green" | "red" | "idle"; glyph: string }[] = [
  { hot: "A", name: "ATTACK", tone: "red", glyph: "cross" },
  { hot: "M", name: "MOVE", tone: "green", glyph: "arrow" },
  { hot: "H", name: "HOLD", tone: "amber", glyph: "stop" },
  { hot: "P", name: "PATROL", tone: "blue", glyph: "loop" },
  { hot: "S", name: "STIM", tone: "amber", glyph: "bolt" },
  { hot: "B", name: "BUILD", tone: "blue", glyph: "block" },
  { hot: "R", name: "REPAIR", tone: "green", glyph: "wrench" },
  { hot: "C", name: "CLOAK", tone: "blue", glyph: "eye" },
  { hot: "T", name: "TRAIN", tone: "green", glyph: "plus" },
  { hot: "U", name: "UPGRADE", tone: "amber", glyph: "up" },
  { hot: "D", name: "DETECT", tone: "blue", glyph: "radar" },
  { hot: "X", name: "CANCEL", tone: "red", glyph: "x" },
];

function Glyph({ name }: { name: string }) {
  const p = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };
  switch (name) {
    case "cross":
      return (
        <svg {...p}>
          <path d="M12 3v18M3 12h18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...p}>
          <path d="M4 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "stop":
      return (
        <svg {...p}>
          <rect x="5" y="5" width="14" height="14" />
        </svg>
      );
    case "loop":
      return (
        <svg {...p}>
          <path d="M7 8a6 6 0 1 1-1 6" />
          <path d="M7 4v4H3" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...p}>
          <path d="M13 2 5 14h6l-1 8 8-12h-6z" />
        </svg>
      );
    case "block":
      return (
        <svg {...p}>
          <path d="M4 8 12 4l8 4v8l-8 4-8-4z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...p}>
          <path d="M14 6a3 3 0 0 0 4 4L8 20l-4-4L14 6z" />
        </svg>
      );
    case "eye":
      return (
        <svg {...p}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "plus":
      return (
        <svg {...p}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "up":
      return (
        <svg {...p}>
          <path d="M6 14 12 6l6 8" />
          <path d="M8 18h8" />
        </svg>
      );
    case "radar":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 12 18 7" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
  }
}

export function CommandCard({
  active,
  onPick,
}: {
  active?: string;
  onPick?: (name: string) => void;
}) {
  return (
    <div className="cmd-card" role="group" aria-label="Command card">
      <div className="cmd-card__label mono">COMMAND CARD // 4×3</div>
      <div className="cmd-card__grid">
        {CMDS.map((c) => (
          <button
            key={c.name}
            type="button"
            className={`cmd-slot cmd-slot--${c.tone}${active === c.name ? " is-on" : ""}`}
            onClick={() => onPick?.(c.name)}
          >
            <span className="cmd-slot__hot mono">{c.hot}</span>
            <Glyph name={c.glyph} />
            <span className="cmd-slot__name">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function MinimapFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mini-frame">
      <div className="mini-frame__tabs" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="mini-frame__bezel">{children}</div>
      <div className="mini-frame__foot mono">
        <span>GRID</span>
        <span>A-17</span>
        <span>LIVE</span>
      </div>
    </div>
  );
}

export function WireButton({
  children,
  onClick,
  hot,
}: {
  children: ReactNode;
  onClick?: () => void;
  hot?: string;
}) {
  return (
    <button type="button" className="wire-btn" onClick={onClick}>
      {hot && <span className="wire-btn__hot mono">{hot}</span>}
      {children}
    </button>
  );
}

export function FactionGlyph({ faction }: { faction: "terran" | "zerg" | "protoss" }) {
  if (faction === "zerg") {
    return (
      <svg className="faction-glyph" viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
        <path d="M20 4c6 6 8 12 6 18 4 2 6 6 6 10-6-2-10-6-12-10-2 4-6 8-12 10 0-4 2-8 6-10-2-6 0-12 6-18z" fill="#1c2810" stroke="#b6e36a" />
      </svg>
    );
  }
  if (faction === "protoss") {
    return (
      <svg className="faction-glyph" viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
        <path d="M20 3 36 20 20 37 4 20z" fill="#1a1428" stroke="#c9a6ff" />
        <path d="M20 12 28 20 20 28 12 20z" fill="#c9a6ff" />
      </svg>
    );
  }
  return (
    <svg className="faction-glyph" viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
      <path d="M20 3 35 12v16L20 37 5 28V12z" fill="#12182a" stroke="#7ec8ff" />
      <path d="M20 12v16M12 20h16" stroke="#f0b429" strokeWidth="1.6" />
    </svg>
  );
}

export function SheetBanner() {
  return (
    <div className="sheet-banner" aria-hidden="true">
      <FactionGlyph faction="terran" />
      <FactionGlyph faction="zerg" />
      <FactionGlyph faction="protoss" />
      <div className="sheet-banner__rule" />
      <span className="mono">ASSET SHEET // FRAMES · WIRE · COMMAND · RESOURCES</span>
    </div>
  );
}
