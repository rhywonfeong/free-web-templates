import { useEffect, useState, useRef } from 'react';
import { LayoutGrid, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

// Reusable SplitText component for stagger animations
const SplitText = ({ text, className }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word-wrap mr-[0.3em]">
          <span
            className={clsx("word-inner", isVisible && "revealed")}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </div>
  );
};

export default function App() {
  const [loadingPhase, setLoadingPhase] = useState('loading'); // 'loading', 'fading-text', 'sliding-up', 'done'
  const [progress, setProgress] = useState(0);

  const heroImgRef = useRef(null);
  const footerContentRef = useRef(null);
  const wrapperRef = useRef(null);

  // Preloader logic
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setLoadingPhase('fading-text'), 200);
        setTimeout(() => setLoadingPhase('sliding-up'), 800);
        setTimeout(() => setLoadingPhase('done'), 1800);
      }
      setProgress(Math.min(currentProgress, 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Scroll Effects (Parallax & Card Stacking)
  useEffect(() => {
    if (loadingPhase !== 'done') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Hero Parallax
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }

      // 2. Card Stack Effect
      const cards = document.querySelectorAll('.card-item');
      cards.forEach((card, i) => {
        const nextCard = cards[i + 1];
        const inner = card.querySelector('.card-inner');
        if (nextCard && inner) {
          const nextRect = nextCard.getBoundingClientRect();
          const startFade = window.innerHeight;
          const endFade = window.innerHeight * 0.1;

          let progress = 0;
          if (nextRect.top < startFade) {
            progress = 1 - (nextRect.top - endFade) / (startFade - endFade);
            progress = Math.max(0, Math.min(1, progress));
          }

          const scale = 1 - progress * 0.1;
          const opacity = 1 - progress * 0.6;
          inner.style.transform = `scale(${scale})`;
          inner.style.opacity = opacity;
        }
      });

      // 3. Footer Parallax
      if (footerContentRef.current && wrapperRef.current) {
        const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (wrapperBottom <= windowHeight) {
          const revealAmount = windowHeight - wrapperBottom;
          const progress = revealAmount / windowHeight;

          const y = 100 * (1 - progress);
          const opacity = 0.5 + 0.5 * progress;
          const scale = 0.9 + 0.1 * progress;

          footerContentRef.current.style.transform = `translateY(${y}px) scale(${scale})`;
          footerContentRef.current.style.opacity = opacity;
        } else {
          footerContentRef.current.style.transform = `translateY(100px) scale(0.9)`;
          footerContentRef.current.style.opacity = 0.5;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingPhase]);

  const cardsData = [
    {
      num: '01',
      title: 'OASIS TIBASOSA',
      subtitle: 'Entregas 2026-2027',
      desc: 'Proyecto residencial sobre planos en Tibasosa, diseñado para quienes buscan exclusividad, acabados de lujo, amplitud y una excelente oportunidad para vivir o invertir.',
      btn: 'contáctanos',
      link: 'https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa.',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee8291f-7ae3-4d42-a3cd-5daf4c55cd01_1600w.png'
    },
    {
      num: '02',
      title: 'UBICACIÓN',
      subtitle: 'A solo 5 minutos de Guátika',
      desc: 'Vive en una zona con encanto, fácil acceso y excelente proyección, en uno de los sectores más atractivos para disfrutar o invertir en Boyacá.',
      btn: 'Ver ubicación',
      link: 'https://maps.app.goo.gl/LNZfeP9j3bCCspk56',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d80df894-ec92-4775-9434-f9d03bcca8bc_1600w.png'
    },
    {
      num: '03',
      title: 'TU HOGAR',
      subtitle: 'Entrega con acabados completos',
      desc: 'Cada casa cuenta con 184 m² de área construida distribuida en 2 pisos y un altillo;  con 3 habitaciones, 4 baños, 1 parqueadero, acabados completos y personalizable según el gusto del comprador.',
      btn: 'Ver planos',
      link: 'https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58aa6982-fe12-4ec2-ad7e-c7ad22f29b7d_1600w.png'
    },
    {
      num: '04',
      title: 'HABITACIONES',
      subtitle: 'espacios que reflejan confort y elegancia',
      desc: 'Las habitaciones han sido concebidas para brindar amplitud, iluminación y una experiencia de descanso superior, con acabados de alta calidad que elevan la sensación de exclusividad en cada espacio.',
      btn: 'ver planos',
      link: 'https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bb040ec-0cb2-4131-98c1-6b302107a792_1600w.png'
    },
    {
      num: '05',
      title: 'COCINA INTEGRAL',
      subtitle: 'Diseño que conecta espacios',
      desc: 'La cocina ha sido concebida como un lugar funcional y estético, ideal para compartir, disfrutar y complementar la experiencia de un hogar.',
      btn: 'Ver planos',
      link: 'https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/309814c3-6e13-43b6-8b93-d80953748023_1600w.png'
    },
    {
      num: '06',
      title: 'ESPACIOS DE TRABAJO',
      subtitle: 'Diseño pensado para inspirar',
      desc: 'Un ambiente ideal para jornadas de trabajo o estudio, con excelente entrada de luz natural, amplitud visual y una atmósfera que equilibra funcionalidad y confort.',
      btn: 'Ver planos',
      link: 'https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab162bc6-6f67-44b5-a864-151ebe15e590_1600w.png'
    },
    {
      num: '07',
      title: 'BIENESTAR AL AIRE LIBRE',
      subtitle: 'Un entorno pensado para toda la familia',
      desc: 'Un espacio pensado para compartir y vivir mejor, con fuente, mini golf infantil y máquinas de ejercicio al aire libre dentro de un entorno exclusivo y acogedor.',
      btn: 'contáctanos',
      link: 'https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa.',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa8945c4-20a3-435b-8aff-480d05e0aa02_1600w.jpg'
    },
    {
      num: '08',
      title: 'AGENDA TU VISITA',
      subtitle: 'Conoce el proyecto de cerca',
      desc: 'Habla con nuestro equipo y descubre cada detalle de Oasis Tibasosa , recibe información sobre disponibilidad, financiación y condiciones de compra.',
      btn: 'Agendar visita',
      link: 'https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa.',
      img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5d2d36a-320d-46ac-a3d6-ed724dd8bcc8_1600w.png'
    }
  ];

  const appOpacity = loadingPhase === 'loading' || loadingPhase === 'fading-text' ? 0 : 1;

  return (
    <>
      <div className="noise-overlay"></div>

      {/* Preloader */}
      {loadingPhase !== 'done' && (
        <div className={clsx("loader", loadingPhase === 'sliding-up' && "hidden")}>
          <div className={clsx("loader-text", loadingPhase === 'fading-text' && "fade-out")}>
            AURUM
          </div>
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ opacity: appOpacity, transition: 'opacity 0.8s ease' }}>
        
        <nav className="fixed flex z-50 text-white mix-blend-difference w-full pt-8 pr-8 pb-8 pl-8 top-0 items-center justify-between pointer-events-none">
          <div className="display text-xl font-bold tracking-tighter pointer-events-auto">OASIS</div>
        </nav>

        <div className="wrapper" ref={wrapperRef}>
          
          {/* Hero */}
          <section className="h-screen relative flex items-center justify-center overflow-hidden">
            <img 
              ref={heroImgRef}
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e402578-4bd1-4d4c-b72a-1a12734e5249_1600w.png" 
              className="hero-img w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-75" 
              alt="Hero" 
            />
            <div className="text-white text-center mix-blend-difference relative">
              <h1 className="display text-[12vw] leading-none overflow-hidden">
                <span className={clsx("block transition-transform duration-1000 ease-out", loadingPhase === 'done' ? "translate-y-0" : "translate-y-full")}>OASIS</span>
              </h1>
              <h1 className="display text-[12vw] leading-none overflow-hidden">
                <span className={clsx("block transition-transform duration-1000 ease-out delay-100", loadingPhase === 'done' ? "translate-y-0" : "translate-y-full")}>TIBASOSA</span>
              </h1>
            </div>
          </section>

          {/* Intro */}
          <section className="md:px-20 grid md:grid-cols-2 max-w-[1800px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 gap-x-16 gap-y-16">
            <div>
              <SplitText 
                text="TU OASIS PERSONAL " 
                className="display text-4xl md:text-5xl leading-tight" 
              />
            </div>
            
            <a href="https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing" className="inline-flex items-center gap-6 no-underline transition-all duration-500 group">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-black/10 transition-all duration-700 group-hover:bg-[#121212] group-hover:border-[#121212] group-hover:rotate-[360deg] overflow-hidden">
                <LayoutGrid className="w-5 h-5 text-[#121212] transition-colors duration-700 group-hover:text-[#E3E1DC] z-10 relative" />
                <div className="transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 bg-orange-200 opacity-0 rounded-full absolute inset-0 scale-150 z-0"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-[#374336] tracking-[0.3em] opacity-60 mb-1">Información</span>
                <div className="flex items-center gap-2">
                  <span className="uppercase transition-all duration-500 group-hover:border-black group-hover:tracking-[0.2em] text-sm font-medium tracking-[0.15em] border-black/10 border-b pb-1">Brochure</span>
                  <ChevronRight className="w-3 h-3 translate-y-[-2px] transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </a>
            
            <a href="https://kuula.co/post/Lmr3n/collection/7MvXZ" className="inline-flex items-center gap-6 no-underline transition-all duration-500 group">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-black/10 transition-all duration-700 group-hover:bg-[#121212] group-hover:border-[#121212] group-hover:rotate-[360deg] overflow-hidden">
                <LayoutGrid className="w-5 h-5 text-[#121212] transition-colors duration-700 group-hover:text-[#E3E1DC] z-10 relative" />
                <div className="transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 bg-sky-200 opacity-0 rounded-full absolute inset-0 scale-150 z-0"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-[#374336] tracking-[0.3em] opacity-60 mb-1">vista interactiva</span>
                <div className="flex items-center gap-2">
                  <span className="uppercase transition-all duration-500 group-hover:border-black group-hover:tracking-[0.2em] text-sm font-medium tracking-[0.15em] border-black/10 border-b pb-1">Explorar Tour 3D</span>
                  <ChevronRight className="w-3 h-3 translate-y-[-2px] transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </a>
            
            <a href="https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa." className="inline-flex items-center gap-6 no-underline transition-all duration-500 group">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-black/10 transition-all duration-700 group-hover:bg-[#121212] group-hover:border-[#121212] group-hover:rotate-[360deg] overflow-hidden">
                <LayoutGrid className="w-5 h-5 text-[#121212] transition-colors duration-700 group-hover:text-[#E3E1DC] z-10 relative" />
                <div className="transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 bg-yellow-200 opacity-0 rounded-full absolute inset-0 scale-150 z-0"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-[#374336] tracking-[0.3em] opacity-60 mb-1">Agenda una visita</span>
                <div className="flex items-center gap-2">
                  <span className="uppercase transition-all duration-500 group-hover:border-black group-hover:tracking-[0.2em] text-sm font-medium tracking-[0.15em] border-black/10 border-b pb-1">contáctanos</span>
                  <ChevronRight className="w-3 h-3 translate-y-[-2px] transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          </section>

          {/* Projects Stack Section */}
          <section className="stack-section">
            <div className="text-center mb-20 px-6">
              <h2 className="display md:text-7xl text-5xl">PROYECTO</h2>
            </div>
            <div className="stack-container">
              {cardsData.map((card, idx) => (
                <div key={idx} className="card-item">
                  <div className="card-inner">
                    <div className="card-content">
                      <div>
                        <div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">{card.num}</div>
                        <h3 className="text-3xl font-bold">{card.title}</h3>
                        <p className="uppercase text-sm tracking-widest opacity-70 mt-4">{card.subtitle}</p>
                      </div>
                      <div className="font-light text-gray-400">{card.desc}</div>
                      <button 
                        className="uppercase hover:text-white transition-colors cursor-pointer text-xs tracking-widest text-left w-max border-white/30 border-b pb-2" 
                        onClick={() => window.open(card.link, '_blank')}
                      >
                        {card.btn}
                      </button>
                    </div>
                    <div className="card-img-wrap">
                      <img src={card.img} className="card-img" alt={card.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Section */}
          <section 
            className="flex flex-col cursor-pointer z-10 text-center bg-[#E3E1DC] pt-40 pb-40 relative items-center justify-center" 
            onClick={() => window.location.href='/Contacto'}
          >
            <h2 className="display md:text-5xl text-3xl mb-8" style={{ animation: "smoothEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
              Haz parte de un proyecto único 
            </h2>
            <div className="leading-relaxed font-light text-gray-600 max-w-xl mb-12" style={{ animation: "smoothEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards" }}>
              Descubre cada detalle de Oasis Tibasosa y recibe atención personalizada para encontrar la casa ideal para ti.
            </div>
            <div 
              role="button" 
              tabIndex="0" 
              className="group inline-flex overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:scale-[1.03] text-[#E3E1DC] bg-[#121212] mt-6 pt-5 pr-12 pb-5 pl-12 relative shadow-[0_20px_40px_rgba(0,0,0,0.1)] items-center justify-center" 
              style={{ animation: "buttonFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa.', '_blank');
              }}
            >
              <div className="origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100 bg-[#ffffff] w-full h-full absolute top-0 right-0 bottom-0 left-0 scale-y-0"></div>
              <span className="flex items-center gap-4 uppercase transition-all duration-500 group-hover:text-black z-10 text-xs font-medium tracking-[0.2em] relative">
                contactanos
              </span>
            </div>
          </section>

        </div> 
        {/* END WRAPPER */}

        {/* FOOTER */}
        <footer className="footer-sticky">
          <div className="z-10 text-center relative" ref={footerContentRef} style={{ transform: 'translateY(100px) scale(0.9)', opacity: 0.5 }}>
            <div className="uppercase text-xs text-gray-500 tracking-[0.3em] mb-4">invierte en el futuro</div>
            <a href="/" className="display text-[8vw] leading-none hover:text-gray-400 transition-colors">VIVE OASIS</a>
            <div className="flex gap-8 uppercase text-sm text-gray-400 tracking-widest mt-12 flex-wrap justify-center">
              <a href="https://www.instagram.com/oasiscondominiosboy/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://wa.me/573104794229?text=Hola%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20Oasis%20Tibasosa." target="_blank" rel="noreferrer" className="hover:text-white">whatsapp</a>
              <a href="mailto:oasiscondominiosboyaca@gmail.com" className="hover:text-white">email</a>
              <a href="https://drive.google.com/file/d/1I4Nj65YHOQ30luz9bWX4Rnv8WeCgyznA/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-white">Brochure</a>
            </div>
            <div className="text-[10px] text-gray-300 mt-20">Diseños sujetos a cambios</div>
          </div>
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a390cc5d-988e-43f3-a17e-a320383e6c07_3840w.png" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" 
            alt="Footer Background"
          />
        </footer>

      </div>
    </>
  );
}