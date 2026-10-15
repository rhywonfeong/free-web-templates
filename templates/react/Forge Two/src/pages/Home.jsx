import React from 'react';
import Hero from './HomeSections/Hero';
import About from './HomeSections/About';
import Facilities from './HomeSections/Facilities';
import Programs from './HomeSections/Programs';
import Pricing from './HomeSections/Pricing';
import Team from './HomeSections/Team';
import FAQ from './HomeSections/FAQ';
import Location from './HomeSections/Location';
import FinalCTA from './HomeSections/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
};

export default Home;