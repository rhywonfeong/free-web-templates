import React from 'react';
import { Reveal } from '../components/shared/Reveal';
import { services } from '../data';
import { Button } from '../components/ui/Button';

export function Services() {
  return (
    <div className="pt-32 pb-24 bg-warm-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        <Reveal>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Our Services</h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              We offer a comprehensive, turnkey approach to interior architecture and design. Every project is executed with exacting standards, from conceptual sketches to the final placement of art and accessories.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <Reveal key={service.title} direction="up" delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center border-t border-gray-200 pt-12">
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="text-charcoal mb-6">
                    <iconify-icon icon={service.icon} width="48" height="48" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 text-sm text-gray-500">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span> Concept Development</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span> Technical Drawings</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span> Procurement</li>
                  </ul>
                </div>
                
                <div className="md:col-span-7 order-1 md:order-2">
                  <div className="aspect-[16/9] md:aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1600000000000 + index * 1000000}?w=1200&q=80`} // Generate deterministic random unspash image base
                      alt={service.title}
                      className="w-full h-full object-cover"
                      // Fallback images since arbitrary ID math might hit 404s, use hardcoded for reliability
                      srcSet={
                        index === 0 ? "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" :
                        index === 1 ? "https://images.unsplash.com/photo-1531835551805-16d8e4f4fb38?w=1200&q=80" :
                        index === 2 ? "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80" :
                        "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?w=1200&q=80"
                      }
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-32 text-center bg-gray-100 p-16 md:p-24 rounded-sm">
           <h3 className="text-3xl font-serif tracking-tight mb-6">Discuss Your Project</h3>
           <p className="text-gray-500 mb-8 max-w-md mx-auto">We take on a limited number of projects each year to ensure uncompromising quality and attention.</p>
           <Button to="/contact" variant="primary">Inquire Now</Button>
        </Reveal>

      </div>
    </div>
  );
}