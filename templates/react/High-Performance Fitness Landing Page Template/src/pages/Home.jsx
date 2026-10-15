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

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;