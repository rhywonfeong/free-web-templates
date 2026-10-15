import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Features from './components/Features';
import Blogs from './components/Blogs';
import Team from './components/Team';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <Brands />
        <Services />
        <Features />
        <Blogs />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;