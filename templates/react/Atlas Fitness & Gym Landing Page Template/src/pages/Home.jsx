import React from 'react';
import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Equipment from '../components/sections/Equipment';
import Protocol from '../components/sections/Protocol';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Coaches from '../components/sections/Coaches';
import FAQ from '../components/sections/FAQ';
import LocationCTA from '../components/sections/LocationCTA';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Ticker />
      <About />
      <Stats />
      <Equipment />
      <Protocol />
      <Testimonials />
      <Pricing />
      <Coaches />
      <FAQ />
      <LocationCTA />
    </div>
  );
};

export default Home;