import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Features from './components/Features';
import DataAdvantage from './components/DataAdvantage';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <LogoStrip />
        <Features />
        <DataAdvantage />
        <Integrations />
        <Testimonials />
        <CtaSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;