import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

    document.querySelectorAll('.reveal-on-scroll, .reveal-group').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-32 px-6 container mx-auto max-w-5xl">
      <div className="bg-[#f3f2ee]/80 backdrop-blur-md rounded-[2rem] p-8 md:p-16 lg:p-24 shadow-2xl reveal-on-scroll reveal-group border border-[#091728]/5">
        <div className="text-center mb-24">
          <h1 className="reveal-hero-item font-playfair text-6xl md:text-8xl tracking-tight text-[#091728] mb-10 leading-[1.1]" style={{transitionDelay: '100ms'}}>
            The Art of the Frame.
          </h1>
          <div className="reveal-item w-px h-20 bg-[#cca950] mx-auto mb-12 origin-top" style={{transitionDelay: '250ms'}}></div>
          <p className="reveal-hero-item font-sans text-xl md:text-2xl text-[#091728]/80 leading-relaxed font-light text-left md:text-center max-w-3xl mx-auto" style={{transitionDelay: '400ms'}}>
            NEXGen Films was established to bridge the gap between arthouse aesthetics and global distribution. 
            We believe that cinema is a physical medium of light, sound, and time. Our gallery curates 
            visions from auteurs who refuse to compromise, treating every frame as an exhibition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div className="reveal-item" style={{transitionDelay: '550ms'}}>
            <h3 className="font-playfair text-3xl text-[#091728] mb-6">Curatorial Vision</h3>
            <p className="font-sans text-base text-[#091728]/80 leading-relaxed">
              We seek out stories that disrupt narrative conventions. We work intimately with directors 
              from the scriptment phase through to the festival circuit, ensuring their original vision 
              is never diluted by committee decisions.
            </p>
          </div>
          <div className="reveal-item" style={{transitionDelay: '700ms'}}>
            <h3 className="font-playfair text-3xl text-[#091728] mb-6">International Reach</h3>
            <p className="font-sans text-base text-[#091728]/80 leading-relaxed">
              Great cinema knows no borders. With offices in London, New York, and Paris, we ensure 
              our independent projects find their way into prestigious international festivals and curated 
              cinemas worldwide.
            </p>
          </div>
        </div>
        
        <div className="reveal-item reveal-image-container w-full h-[50vh] md:h-[60vh] bg-[#e8e6df] overflow-hidden rounded-xl shadow-inner border border-[#091728]/10 group" style={{transitionDelay: '850ms'}}>
          <img 
            src="https://images.unsplash.com/photo-1596451676646-9d3278e2dbfa?w=1200&q=80" 
            alt="Film set working abstract" 
            className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}