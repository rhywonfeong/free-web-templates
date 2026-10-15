import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Testimonials from '../components/Home/Testimonials';
import Structure from '../components/Home/Structure';
import Programs from '../components/Home/Programs';
import Pricing from '../components/Home/Pricing';
import Team from '../components/Home/Team';
import FAQ from '../components/Home/FAQ';
import Location from '../components/Home/Location';
import CTASection from '../components/Home/CTASection';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Testimonials />
      <Structure />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <CTASection />
    </div>
  );
};

export default Home;