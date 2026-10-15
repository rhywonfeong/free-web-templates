import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Trigger reveal for elements already in view on load
    const timeoutId = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="text-[#333333] antialiased overflow-x-hidden selection:bg-[#FDE2E4] selection:text-[#E76F9B] bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Testimonials />
        <FAQ />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;