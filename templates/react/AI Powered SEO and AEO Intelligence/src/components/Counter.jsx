import React, { useEffect, useRef, useState } from 'react';

export function Counter({ target, suffix = '', className = '' }) {
  const [count, setCount] = useState('0' + suffix);
  const counterRef = useRef(null);
  const targetNum = parseFloat(target);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, suffix]);

  const startAnimation = () => {
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      let current;
      if (suffix === '%') {
        current = (targetNum * easeOutQuart).toFixed(2);
      } else if (suffix === 'M+') {
        current = (targetNum / 1000000 * easeOutQuart).toFixed(1);
      } else {
        current = Math.floor(targetNum * easeOutQuart);
      }

      setCount(current + suffix);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={counterRef} className={`counter ${className}`}>
      {count}
    </div>
  );
}