import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } 
    }
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={variants}>
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('USDT');
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 14, minutes: 23, seconds: 59 });
  
  const dracPrice = 0.25;
  const dracAmount = usdAmount ? (parseFloat(usdAmount) / dracPrice).toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0.00';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cryptos = [
    { symbol: 'USDT', icon: 'cryptocurrency-color:usdt' },
    { symbol: 'USDC', icon: 'cryptocurrency-color:usdc' },
    { symbol: 'ETH', icon: 'cryptocurrency-color:eth' },
    { symbol: 'BTC', icon: 'cryptocurrency-color:btc' },
  ];

  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 lg:pt-0 overflow-hidden w-full bg-black">
      {/* Background Graphic elements for Swiss design */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/20"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/20"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/20"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/20"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm mb-10 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-white uppercase">Grado Institucional • RWA & Fintech</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 font-inter">
              Tokenizando la Realidad.<br />
              <span className="text-white/50">El Futuro Bancario.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-white/60 max-w-xl mb-12 leading-relaxed font-light">
              DRACMA es la infraestructura financiera de próxima generación que fusiona Activos del Mundo Real (RWA), Centros de Datos 100% Solares y un ecosistema Fintech de grado empresarial en la blockchain.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="bg-white text-black font-inter font-bold text-sm uppercase tracking-tight px-8 py-5 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                Unirse a la Preventa
                <iconify-icon icon="lucide:arrow-right"></iconify-icon>
              </button>
              <button className="bg-transparent border border-white/20 text-white font-inter font-bold text-sm uppercase tracking-tight px-8 py-5 rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                <iconify-icon icon="lucide:file-text"></iconify-icon>
                Leer Whitepaper
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right Presale Dashboard - Swiss Enterprise UI */}
        <div className="w-full lg:w-1/2 z-10 flex justify-center lg:justify-end">
          <FadeIn delay={0.5} direction="left">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-none p-8 lg:p-10 w-full max-w-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
              
              <div className="flex justify-between items-center mb-8">
                <div className="text-white border border-white/20 px-3 py-1 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> ETAPA 1
                </div>
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Siguiente: $0.35</span>
              </div>

              <div className="mb-8">
                <h3 className="text-5xl font-inter font-bold tracking-tighter mb-2">1 $DRACMA <span className="text-white/30">=</span> <span className="text-green-400">$0.25</span></h3>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">Precio de Listado: $0.50</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs mb-3 font-bold uppercase tracking-wider">
                  <span className="text-white">Progreso Institucional</span>
                  <span className="text-white/50">Cap: $15M</span>
                </div>
                <div className="h-2 w-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white w-[65%] relative"></div>
                </div>
                <div className="text-left text-xs text-white/50 mt-3 font-mono tracking-tight">$9,750,000 Levantados</div>
              </div>

              {/* Multi-Crypto Payment Selector */}
              <div className="mb-6">
                <label className="block text-xs text-white/50 mb-3 font-bold uppercase tracking-wider">Método de Pago</label>
                <div className="grid grid-cols-4 gap-2">
                  {cryptos.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => setPaymentMethod(crypto.symbol)}
                      className={`py-3 flex flex-col items-center justify-center gap-2 border transition-all ${paymentMethod === crypto.symbol ? 'bg-white/10 border-white text-white' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                    >
                      <iconify-icon icon={crypto.icon} width="20"></iconify-icon>
                      <span className="text-[10px] font-bold">{crypto.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between text-xs text-white/50 mb-2 font-bold uppercase tracking-wider">
                    <span>Monto ({paymentMethod})</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={usdAmount}
                      onChange={(e) => setUsdAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-[#111] border border-white/20 py-4 px-4 text-white font-mono text-lg focus:outline-none focus:border-white transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <button className="text-xs bg-white text-black font-bold px-3 py-1.5 uppercase tracking-widest">MAX</button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-[#0a0a0a] border border-white/10 p-2 text-white/50">
                    <iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/50 mb-2 font-bold uppercase tracking-wider">
                    <span>Recibes ($DRACMA)</span>
                  </div>
                  <div className="w-full bg-[#111] border border-white/10 py-4 px-4 text-white font-mono font-bold text-xl flex justify-between items-center">
                    <span className="truncate">{dracAmount}</span>
                    <span className="text-sm bg-white/10 px-2 py-1 uppercase tracking-widest text-white/70">DRACMA</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-black font-inter font-bold text-sm uppercase tracking-widest py-5 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <iconify-icon icon="lucide:wallet"></iconify-icon>
                Conectar para Comprar
              </button>
              
              <p className="text-center text-[10px] text-white/40 mt-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <iconify-icon icon="lucide:lock" className="text-white"></iconify-icon>
                Contrato Auditado & Fondos Seguros
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const CardSection = () => (
  <div className="py-32 relative z-10 border-t border-white/10 bg-[#050505]">
    <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 mb-8 rounded-sm">
            <span className="text-xs font-bold tracking-widest text-white uppercase">Fintech de Vanguardia</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold font-inter tracking-tighter mb-6 leading-tight">
            Liquidez Global.<br/>La Tarjeta <span className="text-white/50">DRACMA Black.</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed font-light">
            Gasta los rendimientos de tus inversiones en el mundo real al instante. Nuestra tarjeta metálica de grado empresarial convierte tus ganancias de los activos RWA y Centros de Datos en poder adquisitivo global.
          </p>
          <ul className="space-y-5 mb-10">
            {[
              "Cero comisiones por transacciones internacionales",
              "Integración nativa con Apple Pay y Google Pay",
              "Conversión cripto-a-fiat instantánea",
              "Acceso a salas VIP en aeropuertos globales"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/80 font-medium">
                <div className="w-6 h-6 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                  <iconify-icon icon="lucide:check" className="text-white" width="14"></iconify-icon>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      {/* DRACMA Metal Card Design */}
      <div className="w-full lg:w-1/2 flex justify-center items-center perspective-1000">
        <FadeIn delay={0.2} direction="left">
          <motion.div 
            whileHover={{ rotateY: 15, rotateX: 5 }}
            className="w-[420px] h-[260px] dracma-card-metal p-8 flex flex-col justify-between"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-syne font-bold text-2xl tracking-tighter text-white/90">DRACMA</span>
              <iconify-icon icon="lucide:wifi" width="24" className="text-white/50 rotate-90"></iconify-icon>
            </div>
            
            <div className="w-12 h-10 rounded-md bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] border border-yellow-500/30 opacity-90 shadow-inner"></div>

            <div>
              <div className="font-mono text-2xl tracking-widest text-white/80 mb-2 drop-shadow-md">
                **** **** **** 8824
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  Cardholder<br/><span className="text-white/90 text-sm">EMILY CHEN</span>
                </div>
                <div className="flex items-center gap-2">
                  <iconify-icon icon="logos:mastercard" width="40"></iconify-icon>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  </div>
);

const VisionSection = () => (
  <div className="py-32 relative z-10 w-full bg-black">
    <div className="max-w-[1400px] mx-auto px-6">
      <FadeIn>
        <div className="mb-20 text-left border-l-4 border-white pl-6">
          <h2 className="text-4xl lg:text-6xl font-bold font-inter tracking-tighter mb-6">El Trilema <br/><span className="text-white/40">Resuelto.</span></h2>
          <p className="text-white/50 max-w-2xl text-xl font-light">DRACMA unifica los sectores más rentables del mundo bajo una sola jurisdicción en cadena de grado institucional.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Centros de Datos Solares",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
            desc: "Infraestructura de computación de IA de Nivel 3 impulsada 100% por paneles solares. Reducimos el costo energético al mínimo, maximizando la rentabilidad por teraflop vendido a clientes corporativos.",
            bullets: ["Energía 100% Renovable", "Hosting de IA Institucional", "Márgenes de Beneficio Máximos"]
          },
          {
            title: "Activos RWA Premium",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            desc: "Bienes raíces comerciales, crédito privado institucional y materias primas tokenizadas. Proporcionamos un escudo deflacionario con rendimientos auditables distribuidos directamente a los holders.",
            bullets: ["Tokenización Inmobiliaria", "Distribución de Rentas", "Reserva de Valor Física"]
          },
          {
            title: "Fintech & Club Privado",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=800&q=80",
            desc: "Una suite bancaria descentralizada. Obtén la Tarjeta Metálica DRACMA y accede a eventos exclusivos para miembros, flujos de acuerdos de capital de riesgo y red de contactos de alto patrimonio neto.",
            bullets: ["Tarjeta DRACMA Black", "Eventos Exclusivos", "Venture Capital Interno"]
          }
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.15}>
            <div className="group h-full flex flex-col bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500 rounded-none overflow-hidden">
              <div className="h-48 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-inter tracking-tight mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8 font-light flex-1">
                  {item.desc}
                </p>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/70">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 border-t border-white/5 pt-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

const TrustLogos = () => (
  <div className="py-12 border-y border-white/10 bg-[#050505] w-full">
    <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-80 transition-opacity duration-500 grayscale">
      <span className="text-xl font-bold tracking-tight uppercase flex items-center gap-2"><iconify-icon icon="simple-icons:ethereum"></iconify-icon> Ethereum</span>
      <span className="text-xl font-bold tracking-tight uppercase flex items-center gap-2"><iconify-icon icon="simple-icons:chainlink"></iconify-icon> Chainlink</span>
      <span className="text-xl font-bold tracking-tight uppercase flex items-center gap-2"><iconify-icon icon="lucide:shield-check"></iconify-icon> CertiK</span>
      <span className="text-xl font-bold tracking-tight uppercase flex items-center gap-2"><iconify-icon icon="simple-icons:visa"></iconify-icon> Visa Network</span>
      <span className="text-xl font-bold tracking-tight uppercase flex items-center gap-2"><iconify-icon icon="simple-icons:applepay"></iconify-icon> Apple Pay</span>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <TrustLogos />
      <VisionSection />
      <CardSection />
    </div>
  );
};

export default Home;