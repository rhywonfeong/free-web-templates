import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Protocol from './components/Protocol';
import Equipment from './components/Equipment';
import Pricing from './components/Pricing';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] bg-noise relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Protocol />
        <Equipment />
        <Pricing />
        <Coaches />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;