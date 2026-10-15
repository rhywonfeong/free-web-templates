import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archives = [
    {
      id: "01",
      client: "Nova Financial",
      role: "Digital Platform & Design System",
      year: "2023",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9afda788-a78c-479d-a8cb-229418c32677_1600w.webp",
      description: "A complete architectural overhaul of Nova's core banking interface, transitioning millions of daily active users to a more intuitive, high-performance React application utilizing real-time web sockets for market data.",
      tags: ["FinTech", "Web App", "Real-time Data"]
    },
    {
      id: "02",
      client: "Aura Commerce",
      role: "Headless E-Commerce Architecture",
      year: "2023",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c12ef2d1-a1ea-498b-89b3-e39e9d4f91a5_1600w.webp",
      description: "Implemented a fully decoupled storefront relying on Next.js and Shopify's Storefront API. The resulting platform reduced load times by 65% and significantly increased conversion rates across global markets.",
      tags: ["Retail", "Headless", "Performance"]
    },
    {
      id: "03",
      client: "Synthetix AI",
      role: "Product Design & Front-end Engineering",
      year: "2024",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1eebdfa6-c306-4fe4-8f5e-ec8b55af1018_1600w.webp",
      description: "Designed and engineered the central dashboard for a machine learning operations platform. Features complex data visualization tools and drag-and-drop workflow builders using custom WebGL and React.",
      tags: ["SaaS", "Artificial Intelligence", "Data Visualization"]
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
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">Selected Archives</p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Documented case studies and technical implementations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Engineering Digital Progress" />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        PROJECTS LIST
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-32 md:gap-48">
        {archives.map((project, index) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 group cursor-pointer">
            
            {/* Meta Data (Left Column) */}
            <div className="col-span-1 md:col-span-3 flex flex-col relative">
              <div className="sticky top-32">
                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-200 group-hover:text-gray-900 transition-colors duration-700 block mb-8">
                  {project.id}
                </span>
                
                <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">
                  {project.client}
                </h2>
                
                <ul className="flex flex-col gap-6 mb-8 border-t border-gray-200 pt-6">
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Role</span>
                    <span className="text-sm text-gray-700 font-medium">{project.role}</span>
                  </li>
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Year</span>
                    <span className="text-sm text-gray-700 font-medium">{project.year}</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual & Description (Right Column) */}
            <div className="col-span-1 md:col-span-9 flex flex-col">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-100 relative overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gray-900/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                />
                
                {/* Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-gray-900 scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <span className="text-[10px] uppercase tracking-widest font-bold mb-1">View</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24"></iconify-icon>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 lg:col-start-3">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 
        CTA SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <Link to="/contact" className="block w-full bg-gray-900 text-white p-12 md:p-24 flex flex-col md:flex-row items-center justify-between group transition-colors duration-500 hover:bg-black outline-none focus-visible:ring-4 focus-visible:ring-gray-300">
          <div className="max-w-2xl mb-12 md:mb-0">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">Next Steps</p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 group-hover:translate-x-4 transition-transform duration-500">
              Ready to start your next infrastructure build?
            </h2>
          </div>
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 border border-gray-700 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
            <iconify-icon icon="solar:arrow-right-up-linear" width="40" height="40" className="group-hover:rotate-45 transition-transform duration-500"></iconify-icon>
          </div>
        </Link>
      </section>

    </main>
  );
}