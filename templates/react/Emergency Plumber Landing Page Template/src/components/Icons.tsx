import type { IconName } from '../data'

type Props = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function PhoneIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h3l1.4 3.6-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.76 1.45 5.32L2 22l4.98-1.6a9.82 9.82 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm0 17.96h-.01a8.2 8.2 0 0 1-4.15-1.13l-.3-.18-2.95.95.96-2.88-.2-.3a8.13 8.13 0 0 1-1.25-4.35c0-4.51 3.68-8.18 8.2-8.18 2.19 0 4.24.85 5.79 2.4a8.11 8.11 0 0 1 2.4 5.79c0 4.51-3.68 8.18-8.19 8.18Zm4.5-6.12c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.13-.17.24-.64.79-.78.95-.14.16-.29.18-.53.06-.25-.13-1.04-.39-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function MailIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.6" />
      <path d="m3.6 7.2 7.3 5.1a2 2 0 0 0 2.2 0l7.3-5.1" />
    </svg>
  )
}

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export function TikTokIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 2h-3.1v13.28a2.27 2.27 0 0 1-2.28 2.26 2.27 2.27 0 0 1 0-4.53c.24 0 .46.04.68.1v-3.15a5.6 5.6 0 0 0-.68-.04A5.4 5.4 0 0 0 5.8 15.3 5.4 5.4 0 0 0 11.22 20.7a5.4 5.4 0 0 0 5.42-5.4V8.48a6.83 6.83 0 0 0 3.98 1.27V6.62a3.83 3.83 0 0 1-2.6-1.12A3.9 3.9 0 0 1 16.6 2Z" />
    </svg>
  )
}

export function CheckIcon({ className }: Props) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="m4.5 12.5 4.6 4.6L19.5 6.7" />
    </svg>
  )
}

export function ArrowIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </svg>
  )
}

export function StarIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2.8 2.83 5.9 6.42.9-4.66 4.6 1.11 6.48L12 17.63 6.3 20.68l1.1-6.48-4.65-4.6 6.42-.9L12 2.8Z" />
    </svg>
  )
}

export function PinIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function MenuIcon({ className }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function UploadIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 16V4.6" />
      <path d="m7.6 9 4.4-4.4L16.4 9" />
      <path d="M4.5 15v3.2a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V15" />
    </svg>
  )
}

export function ShieldIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.8 5 5.4v6c0 4.2 3 7.3 7 9.8 4-2.5 7-5.6 7-9.8v-6l-7-2.6Z" />
      <path d="m9 11.8 2.2 2.2L15.2 10" />
    </svg>
  )
}

const SERVICE_ICONS: Record<IconName, JSX.Element> = {
  drain: (
    <>
      <circle cx="12" cy="14.5" r="5.6" />
      <path d="M12 8.9v11.2M6.4 14.5h11.2M8 10.5l8 8M16 10.5l-8 8" />
      <path d="M9.4 4.4c0 1.6 2.6 1.9 2.6 3.5" />
    </>
  ),
  pipe: (
    <>
      <path d="M3.2 7.4h6.2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h6.4" />
      <rect x="2" y="5.4" width="3" height="4" rx="1" />
      <rect x="19" y="14.4" width="3" height="4" rx="1" />
      <path d="m14.6 6.2 2.2 2.2M17.4 4.6l2.2 2.2" />
    </>
  ),
  faucet: (
    <>
      <path d="M4.6 15.4h9.6v-2.6a4.8 4.8 0 0 0-9.6 0v2.6Z" />
      <path d="M9.4 8V5.2h5.2a3 3 0 0 1 3 3v1.6" />
      <path d="M17.6 12.6v4.2M6.8 15.4v3.8h5.2v-3.8" />
    </>
  ),
  shower: (
    <>
      <path d="M4.4 20V9.4a4.2 4.2 0 0 1 4.2-4.2h1.2" />
      <path d="M13.6 4.2h6.2l-3.1 4.6H10.5l3.1-4.6Z" />
      <path d="M12.4 12v1.6M15.6 12v1.6M18.4 12v1.6M13.8 16.4V18M17 16.4V18" />
    </>
  ),
  toilet: (
    <>
      <path d="M6.6 3.6h4.2v5.6H6.6z" />
      <path d="M4.6 9.2h13.2v2.6a6.6 6.6 0 0 1-6.6 6.6 6.6 6.6 0 0 1-6.6-6.6V9.2Z" />
      <path d="M8.6 18.4 7.8 21h7l-.8-2.6" />
    </>
  ),
  sink: (
    <>
      <path d="M3.2 11.6h17.6v2.2a5 5 0 0 1-5 5H8.2a5 5 0 0 1-5-5v-2.2Z" />
      <path d="M12 11.6V8.2a3 3 0 0 1 3-3h1.6" />
      <path d="M16.6 3.4v3.4" />
    </>
  ),
  boiler: (
    <>
      <rect x="5.4" y="2.8" width="13.2" height="14.4" rx="4" />
      <circle cx="12" cy="9.6" r="2.4" />
      <path d="M8.4 17.2V21M15.6 17.2V21" />
      <path d="M8.4 14.4h.01M15.6 14.4h.01" />
    </>
  ),
  leak: (
    <>
      <path d="M4 5.6h9.6a3 3 0 0 1 3 3v1.2" />
      <rect x="2.4" y="3.6" width="2.6" height="4" rx="1" />
      <path d="M12 13.4c-1.4 1.6-2.2 2.8-2.2 3.9a2.2 2.2 0 1 0 4.4 0c0-1.1-.8-2.3-2.2-3.9Z" />
      <path d="M18.6 13.8h.01M20 17.4h.01M17.4 19.6h.01" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4.4" width="18" height="15.2" rx="2.4" />
      <path d="M3 9.2h18M8.2 9.2v10.4" />
      <path d="M11.6 12.6h6M11.6 16h3.6" />
    </>
  ),
  emergency: (
    <>
      <path d="M12 2.8 2.8 19.2h18.4L12 2.8Z" />
      <path d="M12 9.4v4.2M12 16.6h.01" />
    </>
  ),
  bolt: (
    <>
      <path d="M13.4 2.6 4.8 13.4h5.8l-.8 8 8.6-10.8h-5.8l.8-8Z" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.6" r="5.4" />
      <path d="m9 9.6-2.6-6h11.2L15 9.6" />
      <path d="m12 12 .9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2.2" />
    </>
  ),
  tag: (
    <>
      <path d="M11.2 3.2H20a1 1 0 0 1 1 1V13a1 1 0 0 1-.3.7l-7.6 7.6a1 1 0 0 1-1.4 0L3.5 13a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 .7-.4Z" />
      <circle cx="16.4" cy="7.6" r="1.5" />
    </>
  ),
}

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg {...base} className={className}>
      {SERVICE_ICONS[name]}
    </svg>
  )
}
