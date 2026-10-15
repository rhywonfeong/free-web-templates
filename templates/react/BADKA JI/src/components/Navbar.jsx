import React from 'react';
import { Aperture, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed z-50 flex bg-zinc-950/50 border-white/5 border-b pt-6 pr-8 pb-6 pl-8 top-0 right-0 left-0 backdrop-blur-md items-center justify-between">
      <div className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 group cursor-none">
        <Aperture className="text-red-500 group-hover:rotate-90 transition-transform duration-500" />
        <span className="font-playfair font-medium">MY PORTFOLIO</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold tracking-tight">
        <a href="#about" className="hover:text-red-400 transition-colors cursor-none font-geist">ABOUT</a>
        <a href="#services" className="hover:text-red-400 transition-colors cursor-none font-geist">SERVICES</a>
        <a href="#story" className="hover:text-red-400 transition-colors cursor-none font-geist">STORY</a>
        <a href="#contact" className="hover:text-red-400 transition-colors cursor-none font-geist">CONTACT</a>
      </div>
      <button className="md:hidden text-white cursor-none"><Menu /></button>
    </nav>
  );
}