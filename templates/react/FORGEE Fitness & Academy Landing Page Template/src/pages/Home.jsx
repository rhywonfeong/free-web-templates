import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Space from '../components/home/Space';
import Programs from '../components/home/Programs';
import Pricing from '../components/home/Pricing';
import Team from '../components/home/Team';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Space />
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