import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      '.reveal, .reveal-trigger, .reveal-para, .reveal-fade, .reveal-img, .reveal-seq'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          if (entry.target.classList.contains('reveal')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}