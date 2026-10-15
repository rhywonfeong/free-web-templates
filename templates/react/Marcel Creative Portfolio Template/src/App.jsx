import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full bg-[#0A0A0A] text-[#F0F0F0] selection:bg-[#F0F0F0] selection:text-[#0A0A0A]">
      <Nav />
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;