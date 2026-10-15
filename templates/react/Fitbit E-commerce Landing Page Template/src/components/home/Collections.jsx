import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#121212] rounded-[2.5rem] overflow-hidden border border-white/5 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Content Left */}
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-4 block">
              Spring 2024
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              New Collections
            </h2>
            <p className="text-neutral-400 text-base mb-10 leading-relaxed max-w-md">
              Refresh your look with our latest bands and accessories. From woven textiles to premium leather, find the perfect match for your style and workout.
            </p>
            
            <div>
              <Link 
                to="/collections" 
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                View All Collections
              </Link>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1555861496-faa3ceccb746?w=800&q=80" 
              alt="Wearable technology collection" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
            {/* Gradient overlay to blend image into the dark card */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121212] via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collections;