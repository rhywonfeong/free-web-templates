import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { collection, testimonials } from './data';

// --- Custom Hooks ---
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isIntersecting];
}

// --- Shared Components ---
const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const baseClasses = "transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)";
  const transforms = {
    up: "translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95"
  };

  return (
    <div
      ref={ref}
      className={clsx(
        baseClasses,
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${transforms[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={clsx(
      "fixed bottom-8 right-8 z-[100] bg-[#0A0A0A] text-white px-6 py-4 flex items-center gap-3 shadow-2xl transition-all duration-500",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
    )}>
      <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
      <span className="text-xs uppercase tracking-widest">{message}</span>
    </div>
  );
};

// --- Section Components ---

const Navbar = ({ onOpenCart, onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed w-full z-50 px-6 py-6 transition-all duration-500 flex justify-between items-center",
      scrolled ? "bg-white/90 backdrop-blur-md text-[#0A0A0A] shadow-sm py-4" : "text-white mix-blend-difference"
    )}>
      <div className="flex items-center space-x-8 hidden md:flex">
        <a href="#esencia" className="text-[11px] uppercase tracking-[0.2em] hover:text-[#C6A87C] transition-colors duration-300">Esencia</a>
        <a href="#coleccion" className="text-[11px] uppercase tracking-[0.2em] hover:text-[#C6A87C] transition-colors duration-300">Colección</a>
      </div>
      
      <a href="#" className="font-serif text-2xl tracking-tighter uppercase font-medium absolute left-1/2 transform -translate-x-1/2">
        L. Nobleza
      </a>

      <div className="flex items-center space-x-5">
        <button className="hover:text-[#C6A87C] transition-colors duration-300 flex items-center group" aria-label="Search">
          <iconify-icon icon="solar:magnifer-linear" width="22" class="group-hover:scale-110 transition-transform"></iconify-icon>
        </button>
        <button onClick={onOpenCart} className="hover:text-[#C6A87C] transition-colors duration-300 flex items-center group relative" aria-label="Cart">
          <iconify-icon icon="solar:bag-3-linear" width="22" class="group-hover:scale-110 transition-transform"></iconify-icon>
          <span className="absolute -top-1 -right-1 bg-[#C6A87C] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">0</span>
        </button>
        <button onClick={onOpenMenu} className="md:hidden hover:text-[#C6A87C] transition-colors duration-300 flex items-center">
          <iconify-icon icon="solar:hamburger-menu-linear" width="26"></iconify-icon>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] bg-grain">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract perfume glass" 
          className="w-full h-full object-cover opacity-60 animate-slow-pulse object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]"></div>
      </div>

      <div className="relative z-10 text-center text-white flex flex-col items-center px-4 max-w-4xl w-full">
        <Reveal delay={100}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A87C] mb-8 block font-medium">Maison de Parfum</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8 font-medium">
            Parfums<br/>La Nobleza
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="font-sans text-sm md:text-base font-light text-neutral-300 max-w-lg mb-14 tracking-wide leading-relaxed">
            Perfumería artesanal de lujo creada para quienes dejan huella. Un viaje olfativo a través de la elegancia contemporánea.
          </p>
        </Reveal>
        <Reveal delay={700}>
          <a href="#coleccion" className="group relative px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden hover:border-[#C6A87C] transition-colors duration-500 inline-block">
            <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-500 font-medium">Descubrir la colección</span>
            <div className="absolute inset-0 w-full h-full bg-[#C6A87C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          </a>
        </Reveal>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/40 animate-bounce">
        <iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
      </div>
    </header>
  );
};

const Essence = () => {
  return (
    <section id="esencia" className="py-24 md:py-40 bg-[#FDFBF7] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
        
        <div className="md:col-span-5 relative">
          <Reveal direction="left">
            <div className="relative w-full aspect-[3/4] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop" 
                alt="Artesanía" 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 border border-[#0A0A0A]/10 m-4 pointer-events-none transition-all duration-700 group-hover:m-2"></div>
            </div>
          </Reveal>
          <div className="absolute -bottom-8 -right-8 w-48 aspect-square bg-[#C6A87C]/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A87C] mb-6 block font-medium">Nuestra Esencia</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-10 font-medium text-[#0A0A0A]">
              Artesanía pura<br/>en cada gota.
            </h2>
            <div className="space-y-6 text-sm text-neutral-600 leading-relaxed max-w-lg font-light">
              <p>
                En el corazón de París, nuestros maestros perfumistas destilan la memoria en aromas. Cada frasco de La Nobleza es el resultado de un proceso meticuloso y paciente, donde ingredientes selectos de todo el mundo se entrelazan.
              </p>
              <p>
                No creamos simplemente fragancias; componemos sinfonías líquidas. Rechazamos la producción masiva para abrazar el arte de la perfumería de autor, garantizando una exclusividad que se siente en la piel.
              </p>
            </div>
            <div className="mt-14">
              <a href="#" className="inline-flex items-center space-x-3 text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A] hover:text-[#C6A87C] transition-colors duration-300 group font-medium">
                <span>Conoce nuestro atelier</span>
                <iconify-icon icon="solar:arrow-right-linear" class="transform group-hover:translate-x-2 transition-transform duration-300" width="18"></iconify-icon>
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

const Collection = ({ onAddToCart }) => {
  return (
    <section id="coleccion" className="py-24 md:py-40 bg-white px-6 border-t border-[#0A0A0A]/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-24 relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Le Parfum</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-[#0A0A0A] font-medium">Colección Exclusiva</h2>
            <div className="w-px h-12 bg-[#C6A87C]/30 mx-auto mt-8"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {collection.map((product, index) => (
            <Reveal key={product.id} delay={index * 150}>
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="relative w-full aspect-[4/5] bg-neutral-50 overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/10 transition-colors duration-500"></div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      onAddToCart(product.name);
                    }}
                    className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-white/95 backdrop-blur-sm text-[#0A0A0A] text-[10px] uppercase tracking-[0.2em] py-4 font-medium hover:bg-[#0A0A0A] hover:text-white"
                  >
                    Añadir al carrito
                  </button>
                </div>
                <div className="text-center flex-grow flex flex-col justify-end">
                  <h3 className="font-serif text-xl tracking-tight text-[#0A0A0A] mb-2 font-medium group-hover:text-[#C6A87C] transition-colors">{product.name}</h3>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-3">{product.notes}</p>
                  <p className="text-sm text-[#0A0A0A] font-light mt-auto">€{product.price}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={200}>
          <div className="mt-24 text-center">
            <a href="#" className="inline-block border-b border-[#0A0A0A] pb-1 text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A] hover:text-[#C6A87C] hover:border-[#C6A87C] transition-colors duration-300 font-medium">
              Ver toda la colección
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ParallaxQuote = () => {
  return (
    <section className="relative py-40 md:py-56 flex items-center justify-center px-6 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-[#0A0A0A]/70 mix-blend-multiply"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Reveal>
          <iconify-icon icon="solar:stars-linear" width="36" class="text-[#C6A87C] mb-10 mx-auto opacity-80"></iconify-icon>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter leading-[1.1] font-light italic mb-10">
            "Un aroma no se huele, se recuerda. Es la arquitectura invisible de nuestra memoria."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#C6A87C]"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A87C]">Le Manifeste</p>
            <div className="w-8 h-[1px] bg-[#C6A87C]"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 200}>
              <div className="flex flex-col items-start h-full p-8 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] border border-neutral-100 group hover:border-[#C6A87C]/30 transition-colors duration-500">
                <iconify-icon icon="solar:quote-left-bold-duotone" width="32" class="text-[#C6A87C]/40 mb-8 group-hover:text-[#C6A87C] transition-colors"></iconify-icon>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8 flex-grow">"{t.quote}"</p>
                <div className="w-full flex items-center justify-between border-t border-neutral-100 pt-6 mt-auto">
                  <p className="text-[11px] font-serif uppercase tracking-widest text-[#0A0A0A] font-medium">{t.author}</p>
                  <iconify-icon icon="solar:verified-check-linear" class="text-[#C6A87C]"></iconify-icon>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 border-t border-white/5 bg-grain">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24 relative z-10">
        
        <div className="md:col-span-4 pr-8">
          <a href="#" className="font-serif text-3xl tracking-tighter uppercase font-medium block mb-6">
            L. Nobleza
          </a>
          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
            Maison de Parfum Parisienne.<br/>Artesanía, exclusividad y vanguardia olfativa.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C6A87C] hover:text-[#C6A87C] transition-colors"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon></a>
             <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C6A87C] hover:text-[#C6A87C] transition-colors"><iconify-icon icon="simple-icons:pinterest" width="14"></iconify-icon></a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-8 font-medium">Boutique</h4>
          <ul className="space-y-4 text-xs font-light text-neutral-300">
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">La Colección</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Ediciones Limitadas</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Set de Muestras</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Tarjetas Regalo</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-8 font-medium">Maison</h4>
          <ul className="space-y-4 text-xs font-light text-neutral-300">
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Nuestra Historia</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">El Atelier</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Ingredientes</a></li>
            <li><a href="#" className="hover:text-[#C6A87C] transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-8 font-medium">Le Cercle Privé</h4>
          <p className="text-xs text-neutral-300 font-light mb-6 leading-relaxed">Suscríbase para acceder a prelanzamientos, eventos exclusivos y ventajas de la Maison.</p>
          <form className="flex items-end mt-4 relative group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Su correo electrónico" 
              className="bg-transparent border-b border-neutral-700 pb-3 px-0 text-sm focus:outline-none focus:border-[#C6A87C] w-full text-white placeholder:text-neutral-600 transition-colors font-light" 
              required
            />
            <button type="submit" className="absolute right-0 bottom-3 text-neutral-500 group-hover:text-[#C6A87C] transition-colors">
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 uppercase tracking-[0.2em] relative z-10">
        <p>© {new Date().getFullYear()} Parfums La Nobleza.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [toastConfig, setToastConfig] = useState({ isVisible: false, message: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productName) => {
    setToastConfig({
      isVisible: true,
      message: `${productName} añadido al carrito`
    });
  };

  // Prevent scroll when modals are open
  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isCartOpen]);

  return (
    <div className="relative font-sans text-[#0A0A0A] selection:bg-[#C6A87C] selection:text-white">
      
      <Navbar 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Mobile Menu Overlay */}
      <div className={clsx(
        "fixed inset-0 bg-[#0A0A0A] z-[60] flex flex-col justify-center px-10 transition-transform duration-700 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-white p-2">
          <iconify-icon icon="solar:close-linear" width="32"></iconify-icon>
        </button>
        <div className="flex flex-col space-y-8 text-white">
          <a href="#esencia" onClick={() => setIsMenuOpen(false)} className="font-serif text-4xl tracking-tighter hover:text-[#C6A87C] transition-colors">Esencia</a>
          <a href="#coleccion" onClick={() => setIsMenuOpen(false)} className="font-serif text-4xl tracking-tighter hover:text-[#C6A87C] transition-colors">Colección</a>
          <a href="#" className="font-serif text-4xl tracking-tighter hover:text-[#C6A87C] transition-colors">Maison</a>
          <a href="#" className="font-serif text-4xl tracking-tighter hover:text-[#C6A87C] transition-colors">Contacto</a>
        </div>
      </div>

      {/* Cart Drawer Overlay */}
      <div className={clsx(
        "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500",
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsCartOpen(false)}></div>
      
      <div className={clsx(
        "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
          <h2 className="font-serif text-2xl tracking-tighter">Tu Bolsa</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-[#0A0A0A] hover:text-[#C6A87C] transition-colors">
            <iconify-icon icon="solar:close-linear" width="24"></iconify-icon>
          </button>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center text-neutral-400">
          <iconify-icon icon="solar:bag-3-linear" width="48" class="mb-4 opacity-50"></iconify-icon>
          <p className="font-light text-sm">Tu bolsa está vacía.</p>
          <button onClick={() => setIsCartOpen(false)} className="mt-8 text-[10px] uppercase tracking-[0.2em] border-b border-[#0A0A0A] text-[#0A0A0A] pb-1 hover:text-[#C6A87C] hover:border-[#C6A87C] transition-colors">
            Continuar comprando
          </button>
        </div>
      </div>

      <main>
        <Hero />
        <Essence />
        <Collection onAddToCart={handleAddToCart} />
        <ParallaxQuote />
        <TestimonialsSection />
      </main>

      <Footer />

      <Toast 
        message={toastConfig.message} 
        isVisible={toastConfig.isVisible} 
        onClose={() => setToastConfig(prev => ({ ...prev, isVisible: false }))} 
      />
    </div>
  );
}