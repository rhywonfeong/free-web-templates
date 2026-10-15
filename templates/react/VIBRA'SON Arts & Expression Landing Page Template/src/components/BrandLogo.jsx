export default function BrandLogo({ size = 56, withWordmark = true }) {
  return (
    <span className="brand-logo" style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        role="img"
        aria-label="VIBRA'SON logo"
        style={{ display: "block", flexShrink: 0 }}
      >
        <defs>
          {/* Iridescent pastel gradient: mint, sky blue, lavender, dusty rose */}
          <linearGradient id="vbsIri" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cdeedd" />
            <stop offset="28%" stopColor="#bcd8f2" />
            <stop offset="55%" stopColor="#d3c6ee" />
            <stop offset="80%" stopColor="#e9c9d4" />
            <stop offset="100%" stopColor="#f2ddda" />
          </linearGradient>
          <radialGradient id="vbsGlow" cx="35%" cy="28%" r="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          {/* Mask that breaks the concentric rings horizontally for the waveform */}
          <mask id="vbsRingBreak">
            <rect x="0" y="0" width="120" height="120" fill="#fff" />
            <rect x="16" y="38" width="88" height="14" fill="#000" />
          </mask>
          <clipPath id="vbsCircle">
            <circle cx="60" cy="60" r="60" />
          </clipPath>
        </defs>

        {/* Circular holographic background */}
        <g clipPath="url(#vbsCircle)">
          <rect x="0" y="0" width="120" height="120" fill="url(#vbsIri)" />
          <rect x="0" y="0" width="120" height="120" fill="url(#vbsGlow)" />
        </g>

        {/* Concentric black rings, broken by the pulse line */}
        <g
          mask="url(#vbsRingBreak)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
        >
          <circle cx="60" cy="45" r="10" />
          <circle cx="60" cy="45" r="17.5" />
          <circle cx="60" cy="45" r="25" />
        </g>

        {/* Jagged waveform / pulse line crossing the rings */}
        <polyline
          points="26,45 40,45 45,36 50,54 55,30 60,58 65,32 70,52 75,38 80,45 94,45"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Brand text anchored at the lower center of the circle */}
        <text
          x="60"
          y="93"
          textAnchor="middle"
          fill="#000"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="15.5"
          letterSpacing="-0.3"
        >
          VIBRA'SON
        </text>
      </svg>
      {withWordmark && (
        <span
          className="brand-logo_wordmark"
          style={{
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: "1.4rem",
            letterSpacing: "-0.02em",
            color: "#000",
            whiteSpace: "nowrap",
          }}
        >
          VIBRA'SON
        </span>
      )}
    </span>
  );
}
