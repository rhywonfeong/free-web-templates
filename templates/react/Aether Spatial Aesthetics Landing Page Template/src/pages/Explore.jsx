import RevealText from '../components/RevealText';

export default function Explore() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto flex flex-col">
      <RevealText 
        text="Explore the Network." 
        className="text-4xl md:text-[5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-6" 
        as="h1" 
      />
      <p className="text-zinc-400 max-w-2xl text-lg mb-12">
        Discover active nodes, spatial configurations, and digital ecosystems currently operating within the Aether framework.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group relative aspect-square rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden cursor-pointer">
            <div className="absolute inset-[1px] bg-zinc-900 rounded-[calc(2rem-1px)] overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop&sig=${i}`} 
                alt="Abstract Spatial Data" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
              <span className="text-xs font-medium text-indigo-300 mb-2">Sector {i}</span>
              <h3 className="text-xl font-medium tracking-tight text-white">Quantum Cluster Alpha</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}