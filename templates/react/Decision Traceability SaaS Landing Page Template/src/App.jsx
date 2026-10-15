import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Lifecycle from './components/Lifecycle';
import Features from './components/Features';
import DefensibleProcess from './components/DefensibleProcess';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full relative bg-canvas min-h-screen">
      <div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
      <ThreeBackground />
      
      <Header />
      
      <div className="z-10 flex flex-col w-full relative">
        <Hero />
        <LogoStrip />
        <Lifecycle />
        <Features />
        <DefensibleProcess />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;