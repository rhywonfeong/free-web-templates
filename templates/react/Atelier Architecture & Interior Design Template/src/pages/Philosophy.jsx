import React from 'react';
import { Reveal } from '../components/shared/Reveal';

export function Philosophy() {
  return (
    <div className="pt-32 pb-24 bg-warm-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-32">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Our Ethos</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight">
              Designing for permanence in a transient world.
            </h1>
          </div>
        </Reveal>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <Reveal direction="right">
            <div className="aspect-square bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80" 
                alt="Craftsmanship detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="max-w-md">
              <h2 className="text-3xl font-serif mb-6 tracking-tight">Material Truth</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We believe in the inherent beauty of natural materials—stone that patinas, timber that warms with touch, and metals that oxidize gracefully over time. We do not disguise materials; we celebrate their imperfections.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Quote Break */}
        <Reveal>
          <div className="py-24 border-y border-gray-200 my-32 text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-5xl font-serif italic text-gray-400 leading-tight">
              "Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep."
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest font-medium">— Le Corbusier</p>
          </div>
        </Reveal>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal delay={200} className="order-2 md:order-1">
            <div className="max-w-md ml-auto">
              <h2 className="text-3xl font-serif mb-6 tracking-tight">Spatial Restraint</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                True luxury is found in space and silence. We employ restraint in our designs, stripping away the unnecessary to reveal the essential structure and flow of a room. It is about what you leave out, as much as what you put in.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" className="order-1 md:order-2">
            <div className="aspect-[4/5] bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80" 
                alt="Minimal interior space" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}