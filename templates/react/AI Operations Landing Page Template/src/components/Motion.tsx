import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function Motion() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let frame = 0
    const scroll = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(scroll)
    }
    frame = requestAnimationFrame(scroll)
    lenis.on('scroll', () => ScrollTrigger.update())

    const context = gsap.context(() => {
      gsap.to('.mask > span', { y: 0, duration: .9, stagger: .12, ease: 'power4.out' })

      document.querySelectorAll<HTMLElement>('main section').forEach((section) => {
        if (section.hasAttribute('data-no-reveal')) return
        const targets = Array.from(section.children).filter((child): child is HTMLElement => child instanceof HTMLElement)

        if (!targets.length) return
        gsap.fromTo(targets, { autoAlpha: 0, y: 12 }, {
          autoAlpha: 1,
          y: 0,
          duration: .6,
          stagger: .08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
          },
        })
      })

      const spine = document.querySelector<HTMLElement>('.page-spine__live')
      const page = document.querySelector<HTMLElement>('.features-page')
      if (spine && page) {
        gsap.fromTo(spine, { scaleY: 0 }, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: page, start: 'top top', end: 'bottom bottom', scrub: true },
        })
      }
    })

    ScrollTrigger.refresh()
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      context.revert()
    }
  }, [pathname])

  return null
}
