import { useEffect, useRef } from 'react'

function useRevealOnScroll(threshold = 0.1) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealEls = entry.target.querySelectorAll('.reveal-on-scroll')
            revealEls.forEach((revEl, i) => {
              setTimeout(() => {
                revEl.classList.add('revealed')
              }, i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return sectionRef
}

export default useRevealOnScroll