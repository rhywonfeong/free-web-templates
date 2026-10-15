import BikeSchema from '../components/interactive/BikeSchema';

export default function Home() {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-medium mb-8 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Introducing Model 2024
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pure Speed.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-10">
          Experience the pinnacle of aerodynamic design and carbon fiber engineering. 
          Interact with the schema below to discover the technology that powers your next podium finish.
        </p>

        {/* Scroll down indicator */}
        <div className="animate-bounce mt-8 flex justify-center text-zinc-600 hidden md:flex">
          <iconify-icon icon="solar:mouse-minimalistic-linear" width="28"></iconify-icon>
        </div>
      </section>

      {/* Interactive Schema Section */}
      <section id="schema" className="w-full pb-24">
        <BikeSchema />
      </section>

    </div>
  );
}