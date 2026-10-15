import React from 'react';

export default function Brands() {
  const brands = [
    { name: 'Afterpay', url: 'https://digital-arc.vercel.app/images/svgs/after-pay.svg' },
    { name: 'Basecamp', url: 'https://digital-arc.vercel.app/images/svgs/basecamp.svg' },
    { name: 'Ghost', url: 'https://digital-arc.vercel.app/images/svgs/ghost.svg' },
    { name: 'Splunk', url: 'https://digital-arc.vercel.app/images/svgs/splunk.svg' },
  ];

  return (
    <section className="border-b">
      <div className="container grid grid-cols-2 md:grid-cols-4 border-x divide-x divide-y md:divide-y-0 border-border">
        {brands.map((brand, i) => (
          <div key={i} className="flex items-center justify-center py-12 px-8 group">
            <img 
              src={brand.url} 
              alt={brand.name} 
              className="h-8 opacity-50 invert brightness-0 transition-all duration-300 group-hover:opacity-100 group-hover:invert-0 group-hover:brightness-100" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}