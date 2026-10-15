import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowUpRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>
}

export function RouteIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 18h2.25a2 2 0 0 0 2-2v-8a2 2 0 0 1 2-2h.75" /></svg>
}

export function LayersIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>
}

export function ShieldIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3 4.5 6v5.3c0 4.6 3.1 8.4 7.5 9.7 4.4-1.3 7.5-5.1 7.5-9.7V6L12 3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>
}

export function ClockIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
}

export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 8h16M4 16h16" /></svg>
}

export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>
}
