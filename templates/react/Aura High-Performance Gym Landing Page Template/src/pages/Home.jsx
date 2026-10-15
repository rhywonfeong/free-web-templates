import React from 'react';
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
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="bg-[#111111] overflow-hidden">
      <Hero />
      <About />
      <Stats />
      <Equipment />
      <Protocol />
      <Pricing />
      <Coaches />
      <Testimonials />
      <FAQ />
      <Location />
      <CTASection />
    </div>
  );
};

export default Home;