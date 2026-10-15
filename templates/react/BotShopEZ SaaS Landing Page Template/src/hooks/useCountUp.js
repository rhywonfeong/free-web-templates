import { useState, useEffect } from 'react';

export function useCountUp(end, duration = 2000, start = 0, shouldStart = true) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * eased));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, shouldStart]);

  return count;
}