import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import UseCases from './components/UseCases';
import VideoSection from './components/VideoSection';
import RealExample from './components/RealExample';
import WhyItMatters from './components/WhyItMatters';

function App() {
  return (
    <div className="bg-[#FBFBFE] text-[#1A1A22] font-['Inter',sans-serif] antialiased selection:bg-[#F3EDFF] selection:text-[#8624FF]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <UseCases />
      <VideoSection />
      <RealExample />
      <WhyItMatters />
    </div>
  );
}

export default App;