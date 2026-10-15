import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import MaskedText from '../../components/MaskedText';

export default function Hero() {
  const revealRef = useReveal();
  const [activeImage, setActiveImage] = useState(0);

  const heroImages = useMemo(() => [
    {
      label: 'Salones de belleza',
      caption: 'Menos inasistencias',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      alt: 'Salón de belleza moderno con agenda de reservas activa'
    },
    {
      label: 'Clínicas dentales',
      caption: 'Más confirmaciones',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
      alt: 'Clínica dental moderna usando sistema de reservas'
    },
    {
      label: 'Spa y bienestar',
      caption: 'Clientes recurrentes',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      alt: 'Centro de spa y bienestar con reservas organizadas'
    },
    {
      label: 'Centros fitness',
      caption: 'Agenda siempre llena',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      alt: 'Centro fitness moderno gestionando clases y reservas'
    }
  ], []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section 
      ref={revealRef}
      className="w-full max-w-7xl min-h-[90vh] relative flex items-center border-b border-white/[0.05] overflow-hidden"
    >
      {/* Corner Brackets */}
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 z-20"></div>

      <div className="absolute inset-0 grid grid-cols-12 gap-6 px-6 h-full items-center">
        
        {/* Left Visual Area */}
        <div className="col-span-12 md:col-span-7 flex h-full relative items-center justify-center clip-slide delay-200">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-rose-500 opacity-5 blur-3xl animate-pulse"></div>
            
            {/* Layer 1: Outer framing ring */}
            <div 
              className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent" 
              style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5)" }}
            ></div>
            
            {/* Layer 2: Inner image area */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/10 skeuo-card flex items-center justify-center relative overflow-hidden group">
              {heroImages.map((item, index) => (
                <img 
                  key={item.label}
                  src={item.image}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out grayscale-[10%] group-hover:grayscale-0 ${
                    activeImage === index
                      ? 'opacity-85 scale-100 blur-0'
                      : 'opacity-0 scale-110 blur-sm'
                  }`}
                  alt={item.alt}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-transparent to-black/50 mix-blend-overlay"></div>

              <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                {heroImages.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Mostrar imagen de ${item.label}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? 'w-6 bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                        : 'w-1.5 bg-white/35 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements & Arrows to match composition */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setActiveImage((current) => (current + 1) % heroImages.length)}
                aria-label="Cambiar imagen principal"
                className="w-10 h-10 border border-pink-500/50 bg-pink-500/10 flex items-center justify-center rounded-sm hover:bg-pink-500/30 transition-colors cursor-pointer"
              >
                <iconify-icon icon="solar:calendar-mark-linear" class="text-white text-xl"></iconify-icon>
              </button>
            </div>
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex -space-x-2 z-10 animate-bounce">
              <iconify-icon icon="solar:check-read-linear" class="text-6xl text-rose-500 opacity-80"></iconify-icon>
              <iconify-icon icon="solar:check-read-linear" class="text-6xl text-white"></iconify-icon>
            </div>

            {/* Small labels */}
            <div className="absolute bottom-10 left-10 flex items-center space-x-3 text-xs tracking-wider uppercase cursor-pointer group bg-[#030303]/80 p-2 pr-4 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full border border-rose-500 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              </div>
              <span className="text-white/60 group-hover:text-white transition-colors">
                {heroImages[activeImage].caption}<br/>{heroImages[activeImage].label}
              </span>
            </div>
          </div>
        </div>

        {/* Right Text Area */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center relative z-10">
          <div className="flex items-center space-x-4 mb-4 clip-slide delay-100">
            <span className="text-2xl font-light text-rose-500">01</span>
            <div className="w-8 h-px bg-white/20"></div>
            <span className="text-[0.65rem] tracking-widest uppercase text-white/50">Agenda + CRM + WhatsApp</span>
          </div>
          
          <h1 className="leading-[1.1] md:text-6xl text-5xl font-medium text-white tracking-tight mb-6">
            <MaskedText text="Más reservas,\nmenos inasistencias" delayStart={300} stagger={100} />
          </h1>

          <p className="text-white/50 text-sm mb-8 leading-relaxed clip-slide delay-500 max-w-sm">
            ReservaNova centraliza tu agenda online, envía recordatorios automáticos por WhatsApp y ordena el historial de cada cliente para que tu salón, clínica o centro de bienestar venda más sin depender de Excel.
          </p>
          
          <div className="flex items-center clip-slide delay-700">
            <Link to="/precios" className="text-xs font-semibold tracking-widest uppercase text-white hover:text-rose-500 transition-colors border-b border-rose-500 pb-1 flex items-center gap-2 group">
              Comenzar Prueba Gratis
              <iconify-icon icon="solar:arrow-right-linear" class="transform group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 flex clip-slide delay-800">
        <div className="w-1/3 h-full bg-pink-500"></div>
        <div className="w-1/4 h-full bg-rose-500"></div>
      </div>
    </section>
  );
}