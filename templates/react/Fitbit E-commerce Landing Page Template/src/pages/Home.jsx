import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Collections from '../components/home/Collections';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>
      </div>
      
      <FeaturedProducts />
      
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>
      </div>
      
      <Collections />
      <CtaSection />
    </div>
  );
};

export default Home;