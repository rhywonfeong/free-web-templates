import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-black overflow-hidden">
      
      {/* Subtle liquid blob acting as a spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 mix-blend-screen blur-[120px] animate-liquid pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="group relative rounded-[32px] p-px overflow-hidden transition-all duration-700 hover:-translate-y-2">
            {/* Animated flowing border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-zinc-500/10 to-white/5 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 animate-pulse"></div>
            
            {/* Card Content with Liquid Glass */}
            <div className="relative liquid-glass rounded-[31px] p-8 md:p-14 h-full glass-shine-effect">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 drop-shadow-xl">
                    Crafting digital <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">experiences.</span>
                  </h2>
                  <p className="text-zinc-300 leading-relaxed mb-6 font-light text-lg drop-shadow-sm">
                    I specialize in transforming raw ideas into polished visual narratives. With a keen eye for detail and a strict adherence to minimalist, monochrome aesthetics, I bring a unique edge to every project.
                  </p>
                  <p className="text-zinc-400 leading-relaxed font-light text-lg">
                    Whether it's high-end video editing, striking thumbnails, or full-scale creative direction, my goal is to make your content not just seen, but deeply felt.
                  </p>
                </div>
                
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group/image z-10">
                  {/* Liquid background glow behind image */}
                  <div className="absolute -inset-4 bg-zinc-500/30 blur-2xl animate-liquid z-0 opacity-50 group-hover/image:opacity-80 transition-opacity duration-700"></div>
                  
                  <div className="absolute inset-0 bg-black/30 mix-blend-overlay z-20 transition-opacity duration-700 group-hover/image:opacity-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1605340011500-1c8816c7a7ea?q=80&w=800&auto=format&fit=crop" 
                    alt="Abstract dark monochrome texture" 
                    className="relative z-10 object-cover w-full h-full scale-110 group-hover/image:scale-100 transition-transform duration-[1.5s] ease-out grayscale"
                  />
                  {/* Soft inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] z-30 pointer-events-none rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}