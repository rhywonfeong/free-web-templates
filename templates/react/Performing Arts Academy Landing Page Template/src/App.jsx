import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Disciplines from './components/Disciplines';
import Marquee from './components/Marquee';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="p-2 md:p-4 lg:p-6 w-full max-w-[1800px] mx-auto">
      {/* Main Container */}
      <div className="bg-[#Fdfcf8] rounded-[2rem] w-full min-h-[95vh] relative flex flex-col border border-[#e5e2dd] shadow-sm overflow-hidden">
        <Navbar />
        <Hero />
        <Philosophy />
        <Disciplines />
        <Marquee />
        <Pricing />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;