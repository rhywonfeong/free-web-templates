import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState('00')
  const preloaderRef = useRef(null)

  useGSAP(() => {
    let n = 0
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 12) + 4)
      setCount(String(n).padStart(2, '0'))
      if (n >= 100) clearInterval(tick)
    }, 55)

    const chars = preloaderRef.current.querySelectorAll('.pre-char')
    
    gsap.to(chars, { y: '0%', duration: 0.55, ease: 'power3.out', stagger: 0.06, delay: 0.15 })
    
    const tl = gsap.timeline({ delay: 1.5 })
    tl.to('.pre-bar', {
      scaleX: 0, duration: 0.65, ease: 'power3.inOut',
      stagger: { each: 0.07, from: 'center' }, transformOrigin: 'right center'
    }, 0)
    tl.to(['.pre-center', '.pre-counter'], { opacity: 0, duration: 0.3 }, 0.1)
    tl.add(() => {
      if (preloaderRef.current) {
        preloaderRef.current.style.pointerEvents = 'none'
      }
      onComplete()
    }, 0.25)
    tl.set(preloaderRef.current, { display: 'none' })

    return () => clearInterval(tick)
  }, { scope: preloaderRef })

  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="pre-bar"></div>
      <div className="pre-bar"></div>
      <div className="pre-bar"></div>
      <div className="pre-bar"></div>
      <div className="pre-bar"></div>
      
      <div className="pre-center">
        <span className="pre-wordmark">
          {'Monograph'.split('').map((char, i) => (
            <span key={i} className="pre-char">{char}</span>
          ))}
        </span>
      </div>
      <div className="pre-counter">{count}</div>
    </div>
  )
}

export default Preloader