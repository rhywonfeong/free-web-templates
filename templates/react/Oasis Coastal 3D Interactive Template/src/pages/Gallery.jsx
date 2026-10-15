import React from 'react';

export default function Gallery() {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', title: 'Serene Sands' },
    { id: 2, url: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&q=80', title: 'Golden Hour' },
    { id: 3, url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', title: 'Tropical Escape' },
    { id: 4, url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80', title: 'Ocean Waves' },
    { id: 5, url: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&q=80', title: 'Coastal Path' },
    { id: 6, url: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80', title: 'Sunset Silhouette' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <header className="mb-12">
        <h1 className="text-4xl tracking-tight font-medium text-slate-900 mb-4">Coastal Inspiration</h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          A curated collection of breathtaking coastal photography that inspired the visual direction of our 3D environment.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm mt-1">High-resolution reference</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}