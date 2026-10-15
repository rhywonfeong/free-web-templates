export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1532298229144-0ec0c57415cb?w=800&q=80",
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    "https://images.unsplash.com/photo-1501147836916-345f128fd3b7?w=800&q=80",
    "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    "https://images.unsplash.com/photo-1622055621644-8d9600f14d8d?w=800&q=80"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 w-full animate-fade-in">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Gallery</h1>
        <p className="text-zinc-400 max-w-xl">A closer look at the craftsmanship and environments where the AeroX truly shines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900">
            <img 
              src={src} 
              alt={`Gallery image ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}