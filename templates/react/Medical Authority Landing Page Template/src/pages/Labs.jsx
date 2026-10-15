import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';

export default function Labs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiments = [
    {
      id: "01",
      title: "Neural Interface Patterns",
      description: "Exploring predictive UI components that adapt to user behavior through client-side ML models.",
      status: "Active Prototype",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/beb639b1-8f5c-47cc-9b57-744e55e55b95_1600w.webp",
      tech: ["React", "TensorFlow.js"]
    },
    {
      id: "02",
      title: "Spatial Typography",
      description: "Three-dimensional text rendering architectures utilizing custom WebGL shaders for immersive reading.",
      status: "Archived",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ba1c110-6848-402a-9880-c2d6e2bb71b6_1600w.webp",
      tech: ["Three.js", "GLSL"]
    },
    {
      id: "03",
      title: "Algorithmic Motion",
      description: "Physics-based animation libraries designed for highly complex, fluid micro-interactions.",
      status: "In Development",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ef0d443-2992-4554-852d-3c740be46c15_1600w.webp",
      tech: ["WebGL", "Canvas API"]
    },
    {
      id: "04",
      title: "Generative Environments",
      description: "Procedurally generated 3D landscapes built dynamically from real-time data inputs.",
      status: "Concept",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c12ef2d1-a1ea-498b-89b3-e39e9d4f91a5_1600w.webp",
      tech: ["React Three Fiber", "WebGPU"]
    }
  ];

  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">Experimental Labs</p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Internal prototypes and cutting-edge interaction models in development.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Applied Research & Innovation" />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        EXPERIMENTS GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {experiments.map((exp) => (
            <div key={exp.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative overflow-hidden mb-8 border border-gray-200 bg-gray-100">
                <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-gray-900">
                    {exp.status}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20"></iconify-icon>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col relative">
                <div className="flex items-end justify-between border-b border-gray-200 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-3">
                      EXP — {exp.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  <div className="col-span-1 sm:col-span-8">
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>
                  <div className="col-span-1 sm:col-span-4 flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                      Core Tech
                    </span>
                    <ul className="flex flex-col gap-1">
                      {exp.tech.map((t, i) => (
                        <li key={i} className="text-xs text-gray-700 font-medium">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* 
        CALL TO ACTION / LABS FOOTER
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full bg-[#f4f4f5] border border-gray-200 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-grid-static" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-gray-900 mb-8 transition-transform duration-700 group-hover:rotate-180">
              <iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24" height="24"></iconify-icon>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              Pushing the boundaries of web experiences.
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-10">
              Our lab serves as an incubator for unconventional ideas. Many of these concepts eventually evolve into robust tools and patterns utilized in our client projects.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
              View Open Source Repos
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}