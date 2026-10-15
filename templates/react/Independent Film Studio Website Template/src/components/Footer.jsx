import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.reveal-on-scroll, .reveal-item');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="pt-24 pb-16 border-t border-[#091728]/10 bg-[#f3f2ee]/80 backdrop-blur-md mt-auto reveal-group">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start mb-24">
          
          {/* Navigation */}
          <div className="flex flex-col gap-5 reveal-item" style={{transitionDelay: '100ms'}}>
            <h4 className="text-lg uppercase tracking-[0.15em] font-medium text-[#8a9db5] mb-4">Exhibition</h4>
            <Link to="/features" className="text-base font-sans text-[#091728] hover:text-[#cca950] transition-colors w-fit">Current Films</Link>
            <Link to="/pricing" className="text-base font-sans text-[#091728] hover:text-[#cca950] transition-colors w-fit">Contact</Link>
            <Link to="/about" className="text-base font-sans text-[#091728] hover:text-[#cca950] transition-colors w-fit">About the Gallery</Link>
          </div>
          
          {/* Center Logo */}
          <div className="flex justify-center text-center reveal-item" style={{transitionDelay: '200ms'}}>
            <Link to="/" className="font-playfair text-4xl md:text-5xl tracking-tight text-[#cca950]">
              NEXGen Films
            </Link>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col md:items-end gap-5 text-left md:text-right reveal-item" style={{transitionDelay: '300ms'}}>
             <h4 className="text-lg uppercase tracking-[0.15em] font-medium text-[#8a9db5] mb-4">Inquiries</h4>
             <a href="mailto:curator@nexgenfilms.co" className="text-base font-sans text-[#091728] hover:text-[#cca950] transition-colors duration-300">
               curator@nexgenfilms.co
             </a>
             <a href="#" className="text-base font-sans text-[#091728] hover:text-[#cca950] transition-colors duration-300">
               Press Resources
             </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#091728]/10 pt-8 reveal-item" style={{transitionDelay: '400ms'}}>
          <p className="text-sm uppercase tracking-[0.1em] text-[#8a9db5]">
            © {new Date().getFullYear()} NEXGen Films.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0 text-sm uppercase tracking-[0.1em] text-[#8a9db5]">
            <a href="#" className="hover:text-[#091728] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#091728] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}