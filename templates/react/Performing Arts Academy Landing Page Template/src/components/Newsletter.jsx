import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#Fdfcf8] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-serif-display text-6xl md:text-7xl text-[#1a1a1a] mb-6 italic">Stay Inspired</h2>
        <p className="text-stone-500 font-light mb-10">Join our newsletter for workshop notices, gallery exhibition dates, and summer intensive updates.</p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-1 bg-transparent border-b border-stone-300 py-3 px-2 text-sm focus:outline-none focus:border-black transition-colors font-light placeholder:text-stone-400" 
          />
          <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}