import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MaskedText({ text, className = "", delay = 0, as: Component = "div" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll('.masked-word');
      
      gsap.fromTo(words,
        { y: '120%' },
        {
          y: '0%',
          duration: 1.2,
          stagger: 0.05,
          delay: delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component ref={containerRef} className={`flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex">
          <span className="masked-word inline-block origin-bottom-left will-change-transform pb-1">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}