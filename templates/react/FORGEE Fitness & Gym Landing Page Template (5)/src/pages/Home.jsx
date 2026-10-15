import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Equipment from '../components/sections/Equipment';
import Programs from '../components/sections/Programs';
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Equipment />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </div>
  );
};

export default Home;