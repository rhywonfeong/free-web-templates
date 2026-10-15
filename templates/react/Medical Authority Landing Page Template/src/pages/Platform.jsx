import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';

export default function Platform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      category: "Client Architecture",
      icon: "solar:monitor-smartphone-linear",
      title: "Interactive Interfaces",
      desc: "Component-driven UIs built for high performance, smooth animations, and optimized production delivery.",
      stack: [
        { icon: "simple-icons:react", name: "React 18" },
        { icon: "simple-icons:vite", name: "Vite" },
        { icon: "simple-icons:tailwindcss", name: "Tailwind CSS" }
      ]
    },
    {
      category: "Server Operations",
      icon: "solar:server-square-linear",
      title: "Scalable Backends",
      desc: "Robust, edge-ready server logic designed for minimal latency and maximum concurrent throughput.",
      stack: [
        { icon: "simple-icons:nodedotjs", name: "Node.js" },
        { icon: "simple-icons:nextdotjs", name: "Next.js" },
        { icon: "simple-icons:express", name: "Express" }
      ]
    },
    {
      category: "Data Infrastructure",
      icon: "solar:database-linear",
      title: "Persistent Storage",
      desc: "Relational and NoSQL database structures configured for rapid querying and uncompromising data integrity.",
      stack: [
        { icon: "simple-icons:postgresql", name: "PostgreSQL" },
        { icon: "simple-icons:supabase", name: "Supabase" },
        { icon: "simple-icons:redis", name: "Redis" }
      ]
    },
    {
      category: "Deployment & Edge",
      icon: "solar:cloud-check-linear",
      title: "Global Distribution",
      desc: "Automated CI/CD pipelines deploying to edge networks for localized performance worldwide.",
      stack: [
        { icon: "simple-icons:vercel", name: "Vercel" },
        { icon: "simple-icons:amazonaws", name: "AWS" },
        { icon: "simple-icons:docker", name: "Docker" }
      ]
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
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">Platform Overview</p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              A comprehensive look at our technical foundations and structural implementations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="System Architecture & Stack" />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        TECHNOLOGY STACK GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col border border-gray-200 bg-white p-8 md:p-10 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative Number */}
              <span className="absolute top-6 right-8 text-6xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-500 pointer-events-none select-none">
                0{index + 1}
              </span>

              <div className="text-gray-900 mb-8 relative z-10">
                <iconify-icon icon={tech.icon} width="32" height="32" className="transition-transform duration-500 group-hover:scale-110 origin-left"></iconify-icon>
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">
                  {tech.category}
                </p>
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-12">
                  {tech.desc}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
                  Core Technologies
                </p>
                <ul className="flex flex-col gap-3">
                  {tech.stack.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <iconify-icon icon={item.icon} width="16" height="16" className="text-gray-400 group-hover:text-gray-900 transition-colors duration-300"></iconify-icon>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        INFRASTRUCTURE VISUAL
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full h-[60vh] bg-gray-900 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-animate" style={{ filter: 'invert(1)' }} />
          
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" 
            alt="Abstract server infrastructure visualization" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-[5000ms] ease-out group-hover:scale-105"
          />

          <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">
            <div className="w-12 h-12 border border-white/20 mb-8 flex items-center justify-center text-white backdrop-blur-sm">
              <iconify-icon icon="solar:shield-check-linear" width="24" height="24"></iconify-icon>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              Uncompromising Reliability
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Every system we engineer is backed by enterprise-grade security protocols, automated uptime monitoring, and distributed architectures ensuring zero single points of failure.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}