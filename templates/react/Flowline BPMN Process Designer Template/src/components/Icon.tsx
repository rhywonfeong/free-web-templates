import type { CSSProperties, ReactNode } from "react";

/**
 * Self-contained icon set for Flowline.
 *
 * No runtime CDN, no icon package: every glyph is inline SVG drawn on a
 * consistent 24x24 grid so the whole UI shares one optical weight. Sizing is
 * done with real width/height attributes instead of utility classes, so the
 * icons render correctly with plain CSS.
 */

const ICONS: Record<string, ReactNode> = {
  /* ---------------------------------------------------------------- chrome */
  "panel-left": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </>
  ),
  "panel-right": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 3v18" />
    </>
  ),
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <path d="M5 12h14M12 5v14" />,
  minus: <path d="M5 12h14" />,
  circle: <circle cx="12" cy="12" r="9" />,
  hexagon: (
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.9-3.9" />
    </>
  ),
  "undo-2": (
    <>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </>
  ),
  "redo-2": (
    <>
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
      <path d="M5 3v4M19 17v4M3 5h4M17 19h4" />
    </>
  ),
  plug: <path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" />,
  "grip-vertical": (
    <>
      <circle cx="9" cy="5" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="9" cy="12" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="9" cy="19" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="15" cy="5" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="15" cy="19" r="1.35" fill="currentColor" stroke="none" />
    </>
  ),

  /* ------------------------------------------------------- canvas / tools */
  "mouse-pointer-2": (
    <path d="M4.04 4.69a.5.5 0 0 1 .65-.65l16 6.5a.5.5 0 0 1-.06.95l-6.13 1.58a2 2 0 0 0-1.43 1.43l-1.58 6.13a.5.5 0 0 1-.95.06z" />
  ),
  hand: (
    <>
      <path d="M18 11V6a2 2 0 0 0-4 0" />
      <path d="M14 10V4a2 2 0 0 0-4 0v2" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </>
  ),
  spline: (
    <>
      <path d="M5 17c0-7 4-11 12-11" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
    </>
  ),
  type: <path d="M4 7V4h16v3M9 20h6M12 4v16" />,
  "message-circle": <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />,
  maximize: (
    <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
  ),

  /* --------------------------------------------------------------- events */
  play: (
    <path d="M6 4.6v14.8a1 1 0 0 0 1.52.86l12.34-7.4a1 1 0 0 0 0-1.72L7.52 3.74A1 1 0 0 0 6 4.6z" />
  ),
  square: <rect x="4" y="4" width="16" height="16" rx="2.5" />,
  mail: (
    <>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
      <path d="m2.8 6.3 8.17 5.62a2 2 0 0 0 2.06 0L21.2 6.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.4 2" />
    </>
  ),
  zap: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  radio: (
    <>
      <path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.5" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
    </>
  ),

  /* ----------------------------------------------------------- activities */
  /* Generic task: BPMN rounded activity rectangle with content lines. */
  task: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3.5" />
      <path d="M6.5 10.5h11M6.5 14h6.5" />
    </>
  ),
  /* User task: BPMN "human" marker. */
  "user-round": (
    <>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.8 20.5a7.5 7.5 0 0 1 14.4 0" />
    </>
  ),
  /* Service task: BPMN gear marker. */
  cog: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  /* Script task: BPMN scroll marker. */
  "scroll-text": (
    <>
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
      <path d="M15 8h-5M15 12h-5" />
    </>
  ),
  /* Business rule task: BPMN decision-table marker. */
  "decision-table": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M9 9.5V20" />
    </>
  ),
  /* Send / receive task: BPMN message marker. */
  send: (
    <>
      <path d="M21.4 2.6 11 13.9" />
      <path d="M21.4 2.6 15.2 21a.6.6 0 0 1-1.12.05L11 13.9 3.9 10.82A.6.6 0 0 1 3.95 9.7z" />
    </>
  ),
  /* Sub-process: BPMN collapsed sub-process marker (plus in a box). */
  "square-plus": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8.5 12h7M12 8.5v7" />
    </>
  ),
  /* Call activity / manual task extras used by the canvas cards. */
  inbox: (
    <>
      <path d="M22 12h-5.5l-1.6 2.6a1 1 0 0 1-.85.4h-4.1a1 1 0 0 1-.85-.4L7.5 12H2" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,

  /* ------------------------------------------------------ data & artifacts */
  "file-text": (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
      <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" />
      <path d="M8.5 13h7M8.5 17h4.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8.5" ry="3" />
      <path d="M3.5 5.5v13c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3v-13" />
      <path d="M3.5 12c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3" />
    </>
  ),
  "rows-3": (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M3 9.16h18M3 14.83h18" />
    </>
  ),
  "message-square-text": (
    <>
      <path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H7.8L3 21V5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5z" />
      <path d="M7.5 8h9M7.5 11.8h5.5" />
    </>
  ),
  group: (
    <>
      <path d="M3 7.5V5.5A2.5 2.5 0 0 1 5.5 3h2M16.5 3h2A2.5 2.5 0 0 1 21 5.5v2M21 16.5v2a2.5 2.5 0 0 1-2.5 2.5h-2M7.5 21h-2A2.5 2.5 0 0 1 3 18.5v-2" />
      <rect x="7.5" y="8.5" width="9" height="7" rx="1.5" />
    </>
  ),

  /* --------------------------------------------------- export & publish */
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5" />
    </>
  ),
  braces: (
    <>
      <path d="M8.5 3A2.5 2.5 0 0 0 6 5.5v3A2.5 2.5 0 0 1 3.5 11 2.5 2.5 0 0 1 6 13.5v3A2.5 2.5 0 0 0 8.5 19" />
      <path d="M15.5 3A2.5 2.5 0 0 1 18 5.5v3a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="8.8" cy="8.8" r="1.6" />
      <path d="m3.5 17 4.6-4.6a2 2 0 0 1 2.8 0L20.5 21" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9h17.6M3.2 15h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  server: (
    <>
      <rect x="2.5" y="3" width="19" height="7" rx="2" />
      <rect x="2.5" y="14" width="19" height="7" rx="2" />
      <path d="M6.5 6.5h.01M6.5 17.5h.01" />
    </>
  ),
  "alert-triangle": (
    <>
      <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4.5M12 17.2h.01" />
    </>
  ),
  "circle-check": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </>
  ),
  "circle-x": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.8h.01" />
    </>
  ),
  "external-link": (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.5" />
    </>
  ),
  "refresh-cw": (
    <>
      <path d="M20.5 11a8.5 8.5 0 0 0-14.6-4.6L2.5 9.5" />
      <path d="M2.5 4.5v5h5" />
      <path d="M3.5 13a8.5 8.5 0 0 0 14.6 4.6l3.4-3.1" />
      <path d="M21.5 19.5v-5h-5" />
    </>
  ),
  terminal: <path d="m5 8 4 4-4 4M12.5 16.5h6" />,
  "file-code": (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
      <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" />
      <path d="m10 12-2 2.2L10 16.5M14 12l2 2.2-2 2.3" />
    </>
  ),
};

export const iconNames = Object.keys(ICONS);

export type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  filled?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  filled = false,
  className = "",
  style,
}: IconProps) {
  const glyph = ICONS[name];
  if (!glyph) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon${filled ? " icon--filled" : ""}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      {glyph}
    </svg>
  );
}
