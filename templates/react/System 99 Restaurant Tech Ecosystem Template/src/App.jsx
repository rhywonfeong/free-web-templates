import React from 'react';
import Hero from './components/sections/Hero';
import Warning from './components/sections/Warning';
import AuditChecklist from './components/sections/AuditChecklist';
import Features from './components/sections/Features';
import Prototype from './components/sections/Prototype';
import Pricing from './components/sections/Pricing';
import MarketingGrid from './components/sections/MarketingGrid';
import ROI from './components/sections/ROI';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-800/20 blur-[120px] pointer-events-none" />
      
      <Header />
      
      <main className="flex-1 flex flex-col md:gap-40 pb-32 gap-x-24 gap-y-24">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-24 md:gap-40">
          <Warning />
          <AuditChecklist />
          <Features />
          <Prototype />
          <Pricing />
          <MarketingGrid />
          <ROI />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;