import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#fbfbfb] text-gray-900 font-sans antialiased selection:bg-gray-200 flex flex-col overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}