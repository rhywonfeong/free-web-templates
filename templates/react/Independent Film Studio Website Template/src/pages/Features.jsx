import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });
    
    document.querySelectorAll('.reveal-on-scroll, .reveal-group').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const exhibitions = [
    {
      id: 1,
      status: "In Theaters",
      title: "The Silent Orbit",
      director: "Mia Kovac",
      desc: "A breathtaking visual poem about isolation aboard a commercial space freighter. Winner of the Un Certain Regard.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      id: 2,
      status: "Coming Soon",
      title: "Velvet Underground",
      director: "Marcus Thorne",
      desc: "An immersive dive into the underground jazz scene of 1970s Chicago. A rhythmic masterpiece.",
      img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80"
    },
    {
      id: 3,
      status: "In Theaters",
      title: "Dune Drifters",
      director: "Sarah Jenkins",
      desc: "A gritty, modern western set against the sweeping dunes of the Namib Desert.",
      img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80"
    },
    {
      id: 4,
      status: "Restoration",
      title: "Tokyo Neon",
      director: "Kenji Sato",
      desc: "The 4K restoration of Sato's 1988 cyberpunk classic, featuring previously unreleased footage.",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
    },
    {
      id: 5,
      status: "Festival Circuit",
      title: "The Glass House",
      director: "Elena Rostova",
      desc: "A psychological thriller that unravels over a single weekend in a modernist architectural marvel.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      id: 6,
      status: "Limited Release",
      title: "Ocean's Edge",
      director: "David Chen",
      desc: "A meditative documentary capturing the perilous lives of deep-sea fishermen off the coast of Maine.",
      img: "https://images.unsplash.com/photo-1518182170546-076616fdacaf?w=800&q=80"
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-32 px-6 container mx-auto max-w-6xl">
      <div className="bg-[#f3f2ee]/80 backdrop-blur-md rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl reveal-on-scroll reveal-group border border-[#091728]/5">
        <div className="text-center mb-24 reveal-hero-item" style={{transitionDelay: '100ms'}}>
          <h1 className="font-playfair text-6xl md:text-8xl tracking-tight text-[#091728] mb-8">
            Current Exhibitions
          </h1>
          <p className="font-sans text-base uppercase tracking-widest text-[#8a9db5]">
            A catalog of our latest theatrical releases
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
           {exhibitions.map((film, idx) => (
             <div 
               key={film.id} 
               className="flex flex-col group cursor-pointer reveal-item"
               style={{transitionDelay: `${(idx % 3) * 150 + 200}ms`}}
             >
                <div 
                  className="reveal-image-container overflow-hidden mb-8 bg-[#091728] aspect-[4/5] rounded-xl shadow-md relative"
                  style={{transitionDelay: `${(idx % 3) * 150 + 350}ms`}}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                  <img 
                    src={film.img} 
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col border-l-2 border-[#cca950]/30 pl-6 flex-grow transition-colors duration-700 group-hover:border-[#cca950]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#8a9db5]">
                      {film.status}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-[#091728]">
                      Dir. {film.director}
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl text-[#091728] mb-4">
                    {film.title}
                  </h3>
                  <p className="font-sans text-base text-[#091728]/70 flex-grow mb-8 leading-relaxed">
                    {film.desc}
                  </p>
                  <div className="flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-[#091728] group-hover:text-[#cca950] group-hover:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mt-auto">
                    <span>View Details</span>
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}