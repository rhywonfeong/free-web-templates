import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Facilities from '../components/sections/Facilities';
import Methodology from '../components/sections/Methodology';
import Pricing from '../components/sections/Pricing';
import Coaches from '../components/sections/Coaches';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import ClosingCTA from '../components/sections/ClosingCTA';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Stats />
      <Facilities />
      <Methodology />
      <Pricing />
      <Coaches />
      <Testimonials />
      <FAQ />
      <Location />
      <ClosingCTA />
    </div>
  );
};

export default Home;