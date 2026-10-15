import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NexusEngine from './NexusEngine';

const industryScenes = [
  {
    label: 'Salones de belleza',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'
  },
  {
    label: 'Clínicas dentales',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80'
  },
  {
    label: 'Centros fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
  },
  {
    label: 'Spa y bienestar',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
  },
  {
    label: 'Clínicas estéticas',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80'
  }
];

export default function Layout() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndustry((current) => (current + 1) % industryScenes.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const faqs = [
    {
      question: "¿Para quién es ReservaNova?",
      answer: "Está diseñado específicamente para clínicas dentales, centros de estética, salones de belleza y pequeños estudios de bienestar en Chile que buscan una herramienta moderna y sin dolores de cabeza."
    },
    {
      question: "¿Cómo funcionan los recordatorios automáticos?",
      answer: "El sistema envía automáticamente mensajes de confirmación y recordatorios a tus pacientes vía WhatsApp y SMS, reduciendo las inasistencias en hasta un 80% sin que tengas que mover un dedo."
    },
    {
      question: "¿Necesito instalar algún software?",
      answer: "No. ReservaNova es 100% web (SaaS). Puedes acceder desde cualquier computador, tablet o celular con internet. Toda la información se guarda de forma segura en la nube."
    },
    {
      question: "¿Cuáles son los planes y precios?",
      answer: "Tenemos planes mensuales simples que se adaptan a tu negocio, ya sea por profesional o por sucursal. Además, puedes agregar nuestro módulo avanzado de Inteligencia Artificial para recapturar clientes antiguos."
    }
  ];

  return (
    <div className="relative antialiased selection:bg-rose-500 selection:text-white min-h-screen">
      {/* Background WebGL Engine & HUD */}
      <NexusEngine />

      {/* Rotating industry imagery to show product versatility */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-24 w-[42rem] h-[42rem] translate-x-1/3 rounded-full blur-3xl bg-rose-500/10"></div>
        <div className="absolute left-1/2 top-28 hidden h-[420px] w-[360px] -translate-x-1/2 overflow-hidden rounded-full border border-white/[0.06] bg-white/[0.02] opacity-25 shadow-2xl backdrop-blur md:block">
          {industryScenes.map((scene, index) => (
            <img
              key={scene.label}
              src={scene.image}
              alt={scene.label}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                activeIndustry === index
                  ? 'opacity-100 scale-100 blur-0'
                  : 'opacity-0 scale-110 blur-sm'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 via-[#030303]/20 to-[#030303]/80"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
        </div>

        <div className="absolute left-1/2 top-[31rem] hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-[#030303]/55 px-4 py-2 text-[0.6rem] font-medium uppercase tracking-widest text-white/60 backdrop-blur-md md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_16px_rgba(244,63,94,0.9)]"></span>
          <span>{industryScenes[activeIndustry].label}</span>
        </div>
      </div>

      {/* Global Grid Lines Container */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-white/[0.03] relative">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/[0.02]"></div>
          <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/[0.02]"></div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <Outlet />
        </main>

        {/* Global FAQ Section */}
        <div className="w-full max-w-3xl px-6 py-24 flex flex-col relative z-10 mt-10">
          <div className="mb-12 w-full text-center flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-4 text-[0.65rem] tracking-widest uppercase text-rose-500 font-medium">
              <span>Soporte</span>
              <div className="w-12 h-px bg-rose-500/50"></div>
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl text-white font-medium tracking-tight">Preguntas Frecuentes</h2>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-sm transition-all duration-300 overflow-hidden ${
                  openFaq === idx 
                    ? 'skeuo-card-active transform scale-[1.02] z-10' 
                    : 'border border-white/10 skeuo-card hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-medium tracking-wide transition-colors ${openFaq === idx ? 'text-rose-500' : 'text-white/90'}`}>
                    {faq.question}
                  </span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={`text-lg transition-transform duration-300 ${openFaq === idx ? 'transform rotate-180 text-rose-500' : 'text-white/50'}`}
                  ></iconify-icon>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}