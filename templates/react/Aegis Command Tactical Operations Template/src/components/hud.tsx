import { ReactNode } from "react";

/* ---------------------------------------------------------------- */
/* Corner target brackets — wraps a panel with L-shaped markers      */
/* ---------------------------------------------------------------- */
export function Corners({ tone = "cyan" }: { tone?: "cyan" | "indigo" | "amber" | "red" }) {
  return (
    <span className={`hud-corners hud-corners--${tone}`} aria-hidden="true">
      <i className="c tl" />
      <i className="c tr" />
      <i className="c bl" />
      <i className="c br" />
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* Panel header with technical underline + optional meta tag         */
/* ---------------------------------------------------------------- */
export function PanelHeader({
  title,
  meta,
  tone,
}: {
  title: string;
  meta?: string;
  tone?: "warn" | "crit" | "ok";
}) {
  return (
    <header className={`panel-header${tone ? ` panel-header--${tone}` : ""}`}>
      <span className="panel-header__tick" aria-hidden="true" />
      <h2 className="panel-header__title">{title}</h2>
      {meta && <span className="panel-header__meta mono">{meta}</span>}
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* Segmented mechanical readiness bar                                 */
/* ---------------------------------------------------------------- */
export function SegBar({
  label,
  value,
  segments = 20,
  display,
}: {
  label: string;
  value: number; // 0-100
  segments?: number;
  display?: string;
}) {
  const lit = Math.round((value / 100) * segments);
  const tone = value < 40 ? "crit" : value < 75 ? "warn" : "ok";
  return (
    <div className={`segbar segbar--${tone}`}>
      <span className="segbar__label">{label}</span>
      <span className="segbar__track" role="img" aria-label={`${label} ${value}%`}>
        {Array.from({ length: segments }, (_, i) => (
          <i key={i} className={`segbar__seg${i < lit ? " on" : ""}`} />
        ))}
      </span>
      <span className="segbar__value mono">{display ?? `${value}%`}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Command button system                                              */
/* ---------------------------------------------------------------- */
export function CmdButton({
  children,
  variant = "secondary",
  small,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  small?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cmd cmd--${variant}${small ? " cmd--small" : ""}`}
    >
      <span className="cmd__chevron" aria-hidden="true">
        ▸
      </span>
      {children}
    </button>
  );
}

/* ---------------------------------------------------------------- */
/* Micro status dot                                                   */
/* ---------------------------------------------------------------- */
export function StatusDot({
  tone,
  pulse,
}: {
  tone: "ok" | "warn" | "crit" | "idle" | "cyan" | "indigo";
  pulse?: boolean;
}) {
  return <i className={`dot dot--${tone}${pulse ? " dot--pulse" : ""}`} aria-hidden="true" />;
}

/* ---------------------------------------------------------------- */
/* Key/value telemetry cell                                           */
/* ---------------------------------------------------------------- */
export function Telemetry({
  label,
  value,
  tone,
  dot,
}: {
  label: string;
  value: string;
  tone?: "ok" | "warn" | "crit" | "cyan";
  dot?: boolean;
}) {
  return (
    <div className="telemetry">
      <span className="telemetry__label">{label}</span>
      <span className={`telemetry__value mono${tone ? ` tone-${tone}` : ""}`}>
        {dot && tone && <StatusDot tone={tone} pulse={tone === "crit"} />}
        {value}
      </span>
    </div>
  );
}
