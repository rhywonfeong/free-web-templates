import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle interactive background glow based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-[2000ms] ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(43,108,238,0.15) 0%, rgba(11,15,25,0) 70%)',
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-32">
          <Hero />
          <About />
          <TechStack />
          <Projects />
        </main>

        <Contact />
      </div>
    </div>
  );
}

export default App;