import { useEffect } from 'react'

/**
 * Adds `.is-in` to every `.reveal` element once it scrolls into view.
 * Falls back to showing everything when IntersectionObserver is missing.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (nodes.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

/** Tracks whether the page has been scrolled past `offset` pixels. */
export function useScrolled(offset = 24) {
  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return

    const onScroll = () => {
      header.classList.toggle('header--solid', window.scrollY > offset)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
}
