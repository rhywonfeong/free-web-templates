import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-black tracking-tighter uppercase text-stone-900 mb-8">Our Story</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-12">
          Founded in 2024, Lumina was born from a simple frustration: coffee that goes cold too fast, and gear that looks like it belongs in a laboratory rather than a kitchen.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80" 
          alt="Coffee Shop" 
          className="rounded-[3rem] w-full aspect-video object-cover mb-16 shadow-2xl"
        />
        <div className="grid md:grid-cols-2 gap-12 text-left">
           <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Design First. Function Always.</h2>
              <p className="text-stone-500 leading-relaxed">We believe everyday objects should bring joy. We spent two years engineering our flagship temperature-control mug to hide complex technology inside a beautifully minimalist silhouette.</p>
           </div>
           <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Sustainable Future</h2>
              <p className="text-stone-500 leading-relaxed">Quality means longevity. Our products are designed to last a lifetime, replacing thousands of single-use cups. Our packaging is 100% recyclable, and our beans are strictly fair-trade.</p>
           </div>
        </div>
      </div>
    </div>
  );
}