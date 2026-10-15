import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Base({ size = 22, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconPhone(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M21.5 16.9v2.6a2 2 0 0 1-2.2 2 19.3 19.3 0 0 1-8.4-3 19 19 0 0 1-5.8-5.8 19.3 19.3 0 0 1-3-8.5A2 2 0 0 1 4.1 2h2.6a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.8 9.8a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.9 2.3Z" />
    </Base>
  )
}

export function IconWhatsapp({ size = 22, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M12.03 2C6.6 2 2.2 6.4 2.2 11.8c0 1.9.5 3.7 1.5 5.3L2 22.5l5.6-1.6a9.9 9.9 0 0 0 4.4 1.1c5.4 0 9.8-4.4 9.8-9.8S17.44 2 12.03 2Zm0 17.9c-1.4 0-2.8-.4-4-1.1l-.3-.2-3.3 1 .9-3.2-.2-.3a8.1 8.1 0 0 1-1.2-4.3 8.1 8.1 0 1 1 8.1 8.1Zm4.6-6c-.2-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5s0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 2.9.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.2-.2-.4-.3Z" />
    </svg>
  )
}

export function IconMail(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6 9-6" />
    </Base>
  )
}

export function IconFacebook({ size = 22, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54v-2.2c0-2.52 1.49-3.92 3.77-3.92 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06Z" />
    </svg>
  )
}

export function IconClock(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 7v5.3l3.4 2" />
    </Base>
  )
}

export function IconBolt(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M13.4 2 4.8 13.2h5.3L9.9 22l8.8-11.4h-5.5L13.4 2Z" />
    </Base>
  )
}

export function IconShield(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 2.6 4.6 5.4v5.4c0 4.7 3.1 8.6 7.4 10.6 4.3-2 7.4-5.9 7.4-10.6V5.4L12 2.6Z" />
      <path d="m8.9 12 2.1 2.1 4.1-4.2" />
    </Base>
  )
}

export function IconWrench(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M15.5 2.5a5.5 5.5 0 0 0-4.6 8.4L3 18.8 5.2 21l7.9-7.9a5.5 5.5 0 0 0 7-6.9l-2.9 2.9-2.6-.6-.6-2.6 2.9-2.9a5.6 5.6 0 0 0-1.4-.5Z" />
    </Base>
  )
}

export function IconDrain(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 3.4v17.2M3.4 12h17.2M6 6l12 12M18 6 6 18" />
    </Base>
  )
}

export function IconPipe(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3 8h5.5a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 0 3.5 3.5H21" />
      <rect x="2" y="5.5" width="4" height="5" rx="1.2" />
      <rect x="18" y="17" width="4" height="5" rx="1.2" />
    </Base>
  )
}

export function IconFaucet(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M6 20h12" />
      <path d="M9 20v-3a3 3 0 0 1 3-3h3.5V9.5" />
      <path d="M12 14V8" />
      <path d="M8.5 8h7" />
      <path d="M15.5 9.5h4" />
    </Base>
  )
}

export function IconShower(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4 21V7a3 3 0 0 1 3-3 3 3 0 0 1 3 3" />
      <path d="M10 8.5h9.5L15 14" />
      <path d="M13 17.5v1.5M16.5 17v1.5M9.5 17.5v1.5" />
    </Base>
  )
}

export function IconToilet(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M6 4h5v6H6z" />
      <path d="M4.5 10h13l-1.6 6.2A4 4 0 0 1 12 19h-1.4a4 4 0 0 1-3.9-2.8L4.5 10Z" />
      <path d="M9 19v2.5h5" />
    </Base>
  )
}

export function IconSink(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3.5 10.5h17l-1.3 6a3.5 3.5 0 0 1-3.4 2.8H8.2a3.5 3.5 0 0 1-3.4-2.8l-1.3-6Z" />
      <path d="M12 10.5V6.5A2.5 2.5 0 0 1 14.5 4h1.7" />
      <path d="M9.5 14.8h5" />
    </Base>
  )
}

export function IconBoiler(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8.5 20.5v1M15.5 20.5v1M8 17v3.5M16 17v3.5" />
    </Base>
  )
}

export function IconDrop(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 2.8s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.2 12 2.8 12 2.8Z" />
      <path d="M9.5 14.2a2.6 2.6 0 0 0 2.5 2.4" />
    </Base>
  )
}

export function IconSystem(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="2.6" y="2.6" width="7" height="7" rx="2" />
      <rect x="14.4" y="14.4" width="7" height="7" rx="2" />
      <path d="M9.6 6.1h4.4a3 3 0 0 1 3 3v5.3" />
      <path d="M6.1 9.6v4.4a3 3 0 0 0 3 3h5.3" />
    </Base>
  )
}

export function IconSiren(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M6 18v-5a6 6 0 0 1 12 0v5" />
      <path d="M4 18h16v2.5H4z" />
      <path d="M12 3.5V2M20 6.5l1.2-1M4 6.5 2.8 5.5" />
    </Base>
  )
}

export function IconStar({ size = 16, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9L12 2.6Z" />
    </svg>
  )
}

export function IconArrow(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M5 12h13.5" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </Base>
  )
}

export function IconCamera(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.6l1.2-2h6.4l1.2 2h1.6A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z" />
      <circle cx="12" cy="12.5" r="3.4" />
    </Base>
  )
}

export function IconCheckBig(p: IconProps) {
  return (
    <Base strokeWidth={2.2} {...p}>
      <path d="m4.5 12.8 5 5L20 7" />
    </Base>
  )
}

export function IconPin(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 21.5s7-6 7-11.3A7 7 0 0 0 5 10.2C5 15.5 12 21.5 12 21.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Base>
  )
}

export function IconMedal(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M8.5 9.4 6.2 3h11.6l-2.3 6.4" />
      <path d="m12 12 .9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z" />
    </Base>
  )
}
