import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  useEffect(() => {
    // Optimized for mobile-first scrolling: triggers slightly before element enters to avoid blank spaces
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Only animate once for better performance
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

    document.querySelectorAll('.reveal-on-scroll, .reveal-group').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "The Midnight Sonata",
      director: "Directed by A. Tark / 2023",
      award: "Festival Cannes — Best Picture",
      desc: "A haunting exploration of sound and silence across the winter landscapes of northern Europe. A masterclass in minimalist cinema.",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1000&q=80",
      offset: false
    },
    {
      title: "Echoes of the Valley",
      director: "Directed by S. Coppola / 2024",
      award: "Sundance — Grand Jury Prize",
      desc: "Generations collide in this stark, beautiful portrait of a family grappling with modern isolation in the California desert.",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1000&q=80",
      offset: true
    },
    {
      title: "Neon Labyrinth",
      director: "Directed by W. Kar / 2024",
      award: "Venice Film Festival — Golden Lion",
      desc: "An atmospheric thriller soaked in the electric hues of a sleepless metropolis. An unapologetic visual triumph.",
      img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1000&q=80",
      offset: false
    },
    {
      title: "Shadows of Kyoto",
      director: "Directed by R. Hamaguchi / 2024",
      award: "Berlinale — Silver Bear",
      desc: "A mesmerizing journey through the hidden alleyways of Kyoto, where ancient traditions meet the relentless march of modernity.",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=80",
      offset: true
    }
  ];

  const news = [
    { date: "Oct 12, 2024", title: "NEXGen Films acquires distribution rights for 'Neon Labyrinth'." },
    { date: "Sep 04, 2024", title: "'Echoes of the Valley' sweeps major categories at Sundance." },
    { date: "Aug 19, 2024", title: "Announcing our Fall Retrospective: The French New Wave." },
  ];

  return (
    <div className="w-full flex flex-col pb-20 md:pb-32">
      
      {/* Hero Container */}
      <section aria-label="Hero" className="w-full min-h-[100dvh] flex items-center justify-center relative bg-[#f3f2ee]/70 backdrop-blur-md border-b border-[#091728]/10 overflow-hidden px-6 py-32">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center reveal-on-scroll reveal-group mt-10 md:mt-0">
          <h1 className="reveal-hero-item md:text-[8rem] leading-[1.1] text-6xl text-[#cca950] tracking-tight font-playfair mb-8" style={{transitionDelay: '100ms'}}>
            Cinema for the bold.
          </h1>
          <p className="reveal-hero-item font-sans text-xl md:text-2xl text-[#091728] max-w-2xl mx-auto mb-12 font-medium leading-relaxed" style={{transitionDelay: '250ms'}}>
            Curating and producing striking, uncompromising independent films that challenge the boundaries of visual storytelling.
          </p>
          <div className="reveal-hero-item w-full sm:w-auto" style={{transitionDelay: '400ms'}}>
            <Link to="/about">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-sm backdrop-blur-sm bg-transparent">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Page Content Spacing Wrapper */}
      <div className="flex flex-col gap-20 md:gap-32 pt-20 md:pt-32">
        {/* Gallery Container */}
        <section aria-label="Selected Projects" className="container max-w-5xl mx-auto px-6">
          <div className="bg-[#f3f2ee]/70 backdrop-blur-md rounded-[2rem] p-8 md:p-16 lg:p-24 shadow-2xl reveal-on-scroll reveal-group border border-[#091728]/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-32">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className={`reveal-item flex flex-col group/card ${project.offset ? 'md:mt-32' : ''}`}
                  style={{transitionDelay: `${(idx % 2) * 200 + 100}ms`}}
                >
                  <div 
                    className="reveal-image-container overflow-hidden mb-8 bg-[#091728] rounded-xl shadow-lg relative cursor-pointer"
                    style={{transitionDelay: `${(idx % 2) * 200 + 300}ms`}}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-[50vh] md:h-[60vh] object-cover transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-110 opacity-90 group-hover/card:opacity-100"
                    />
                  </div>
                  
                  <div className="flex flex-col border-l-2 border-[#cca950]/30 pl-6 space-y-4 transition-colors duration-700 group-hover/card:border-[#cca950]">
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#8a9db5]">
                      {project.director}
                    </p>
                    <h3 className="font-playfair text-4xl md:text-5xl text-[#091728] tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#cca950] font-medium pt-1 pb-2">
                      {project.award}
                    </p>
                    <p className="font-sans text-base md:text-lg text-[#091728]/80 leading-relaxed max-w-md">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Container */}
        <section aria-label="Latest News" className="container max-w-5xl mx-auto px-6">
          <div className="bg-[#f3f2ee]/70 backdrop-blur-md rounded-[2rem] p-8 md:p-16 shadow-2xl reveal-on-scroll reveal-group border border-[#091728]/5">
            <div className="text-center mb-16 reveal-item" style={{transitionDelay: '100ms'}}>
              <h2 className="font-playfair text-5xl md:text-6xl text-[#091728] tracking-tight mb-4">
                News & Journals
              </h2>
            </div>

            <div className="flex flex-col">
              {news.map((item, idx) => (
                <div 
                  key={idx} 
                  className="reveal-item flex flex-col md:flex-row items-baseline justify-between py-10 border-t border-[#091728]/10 group cursor-pointer"
                  style={{transitionDelay: `${idx * 150 + 200}ms`}}
                >
                  <span className="font-sans text-sm uppercase tracking-[0.15em] text-[#8a9db5] mb-4 md:mb-0 w-48 transition-colors duration-500 group-hover:text-[#cca950]">
                    {item.date}
                  </span>
                  <h4 className="font-playfair text-2xl md:text-3xl text-[#091728] group-hover:translate-x-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex-1 leading-snug">
                    {item.title}
                  </h4>
                  <span className="hidden md:flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-[#091728] ml-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    Read <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                  </span>
                </div>
              ))}
              <div className="border-t border-[#091728]/10 reveal-item" style={{transitionDelay: `${news.length * 150 + 200}ms`}}></div>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}