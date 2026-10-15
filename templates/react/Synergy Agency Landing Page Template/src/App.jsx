import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Addons from './components/Addons';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Ambient Background Effect */}
      <div className="ambient-glow"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <Addons />
      </main>

      <Footer />
    </>
  );
}

export default App;