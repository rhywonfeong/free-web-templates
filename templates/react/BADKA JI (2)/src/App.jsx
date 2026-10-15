import React from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Story } from './components/Story';
import { Contact } from './components/Contact';
import { ThankYou } from './components/ThankYou';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Loader />
      <Cursor />

      {/* Background Grid & Lighting */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Story />
        <Contact />
        <ThankYou />
      </main>

      <Footer />
    </>
  );
}

export default App;