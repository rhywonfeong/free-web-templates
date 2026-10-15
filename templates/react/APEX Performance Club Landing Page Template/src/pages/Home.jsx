import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Equipment from '../components/sections/Equipment';
import Protocol from '../components/sections/Protocol';
import Pricing from '../components/sections/Pricing';
import Coaches from '../components/sections/Coaches';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-white">
      <Hero />
      <div id="about"><About /></div>
      <Stats />
      <div id="equipment"><Equipment /></div>
      <div id="protocol"><Protocol /></div>
      <div id="pricing"><Pricing /></div>
      <Coaches />
      <Testimonials />
      <div id="faq"><FAQ /></div>
      <Location />
      <FinalCTA />
    </div>
  );
}