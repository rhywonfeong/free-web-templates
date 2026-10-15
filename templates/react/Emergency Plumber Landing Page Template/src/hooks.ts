import { useEffect, useRef, useState } from 'react'

/** GA4 Measurement ID. */
export const GA_MEASUREMENT_ID = 'G-MC86RMZD3X'

const GTAG_SRC = 'https://www.googletagmanager.com/gtag/js'

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
  __gaBootstrapped?: boolean
}

/**
 * Loads gtag.js from the application bundle instead of relying on `index.html`.
 *
 * The hosting layer serves its own HTML shell on published/custom domains, so any
 * <script> added to the project's index.html <head> is not part of the delivered
 * document. The JS bundle IS always delivered, so the tag is bootstrapped here.
 *
 * Safe to call more than once, and a no-op when the HTML already contains gtag.js
 * (local dev / any host that does preserve index.html), so hits are never doubled.
 */
export function initGa(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  const w = window as GtagWindow
  if (w.__gaBootstrapped) return
  w.__gaBootstrapped = true

  // gtag.js already present in the served HTML — it has configured itself already.
  if (document.querySelector(`script[src^="${GTAG_SRC}"]`)) return

  const dataLayer = w.dataLayer || (w.dataLayer = [])

  let gtag = w.gtag
  if (typeof gtag !== 'function') {
    const fn: (...args: unknown[]) => void = function () {
      // GA requires the raw `arguments` object to be pushed, not an array.
      dataLayer.push(arguments)
    }
    w.gtag = fn
    gtag = fn
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `${GTAG_SRC}?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', measurementId)
}

/**
 * Sends a GA4 `page_view` on client-side route changes.
 * The initial page view is already sent by the `gtag('config', ...)` call,
 * so the first render is skipped to avoid duplicate hits. Renders nothing.
 */
export function useGaPageview(path: string) {
  const first = useRef(true)
  useEffect(() => {
    initGa()

    if (first.current) {
      first.current = false
      return
    }
    const gtag = (window as GtagWindow).gtag
    if (typeof gtag !== 'function') return
    gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    })
  }, [path])
}

/**
 * Sends a GA4 event. Completely safe when gtag has not loaded (ad-blockers,
 * SSR, offline) — it simply does nothing instead of throwing.
 *
 * Never pass personally identifiable information (name, phone, email, message
 * body, form field values) into `params`.
 */
export function sendGaEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const gtag = (window as GtagWindow).gtag
  if (typeof gtag !== 'function') return
  try {
    // No `send_to`: the event goes to every configured measurement ID, so it is
    // recorded whichever Google tag the served HTML shell initialised.
    gtag('event', name, params)
  } catch {
    /* analytics must never break the UI */
  }
}

/** Anchor-ish element that exposes an href. */
type Linkish = HTMLAnchorElement | (HTMLElement & { href?: string })

const WHATSAPP_HOSTS = /(^|\.)(wa\.me|whatsapp\.com)$/i

/** True when the href is a `tel:` link. */
function isPhoneHref(href: string) {
  return /^tel:/i.test(href.trim())
}

/** True when the href points at WhatsApp (wa.me / whatsapp.com, any subdomain). */
function isWhatsAppHref(href: string) {
  const value = href.trim()
  if (!value) return false
  try {
    const url = new URL(value, window.location.href)
    if (WHATSAPP_HOSTS.test(url.hostname)) return true
  } catch {
    /* fall through to the plain string check below */
  }
  return /(?:^|\/\/|\.)(?:wa\.me|(?:[\w-]+\.)*whatsapp\.com)(?:[/?#]|$)/i.test(value)
}

/**
 * Tracks every `tel:` and WhatsApp click anywhere in the app with a single
 * delegated listener on `document`, so header, hero, urgent strips, contact
 * page, footer, floating CTA and mobile navigation are all covered without
 * touching their markup.
 *
 * Duplicate protection:
 *  - only one listener is ever attached (guarded on mount + cleanup),
 *  - each native click event object is processed at most once,
 *  - a link is either a phone click OR a WhatsApp click, never both.
 */
export function useOutboundClickTracking() {
  useEffect(() => {
    const seen = new WeakSet<Event>()

    const onClick = (event: MouseEvent) => {
      // Ignore modified / non-primary clicks handled by the browser itself.
      if (event.button !== 0 && event.type === 'click') return
      if (seen.has(event)) return

      const path = typeof event.composedPath === 'function' ? event.composedPath() : []
      let link: Linkish | null = null

      // Nearest ancestor that actually carries an href — anchors and any
      // button/element rendered with an href attribute both qualify.
      for (const node of path) {
        if (node instanceof HTMLElement && node.hasAttribute('href')) {
          link = node as Linkish
          break
        }
      }

      if (!link) {
        const target = event.target
        link = target instanceof Element ? target.closest<HTMLAnchorElement>('a[href], [href]') : null
      }
      if (!link) return

      const href = link.getAttribute('href') || link.href || ''
      if (!href) return

      // `link.href` resolves to the absolute URL; fall back to the raw attribute.
      const linkUrl = typeof link.href === 'string' && link.href ? link.href : href

      if (isPhoneHref(href)) {
        seen.add(event)
        sendGaEvent('phone_click', { link_url: linkUrl })
        return
      }

      if (isWhatsAppHref(href)) {
        seen.add(event)
        sendGaEvent('whatsapp_click', { link_url: linkUrl })
      }
    }

    // Capture phase so the event is still recorded if a handler stops propagation.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
}

/**
 * Adds `.is-in` to every `.reveal` element as it scrolls into view.
 * Pass a `key` (eg. the current pathname) so the observer is rebuilt on route change.
 */
export function useScrollReveal(key: string = '') {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [key])
}

/** True once the page has scrolled past `offset` pixels. */
export function useStuck(offset = 12) {
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return stuck
}

/** Locks body scroll while a drawer/modal is open. */
export function useBodyLock(locked: boolean) {
  useEffect(() => {
    document.body.classList.toggle('nav-open', locked)
    return () => document.body.classList.remove('nav-open')
  }, [locked])
}
