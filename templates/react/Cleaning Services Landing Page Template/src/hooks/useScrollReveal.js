import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".service-catalog-reveal, .standard-care-reveal, .process-reveal, .lifestyle-reveal, .testimonials-reveal, .final-conversion-reveal"
    );
    
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}