import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden bg-luxe-black pt-20">
      {/* Moving Galaxy / Stars Background */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-365f35585f9d?w=1600&q=80')] bg-cover bg-center opacity-40 mix-blend-screen animate-[spin_240s_linear_infinite]" 
        style={{ transform: 'scale(1.5)' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-transparent to-[#050510] z-0" />
      
      {/* Neon Glow Pulses */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-luxe-blue-electric/20 rounded-full blur-[120px] animate-pulse z-0 mix-blend-screen" />
      <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-luxe-pink-hot/20 rounded-full blur-[100px] animate-pulse duration-1000 z-0 mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 w-full flex flex-col items-center">
        <h2 className="font-display text-lg md:text-2xl font-bold tracking-[0.3em] uppercase text-luxe-blue-neon mb-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">
          Chilliwack's Premier Nightclub
        </h2>
        
        <h1 className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] font-bold tracking-tighter leading-[0.8] uppercase mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] flex flex-col">
          LUXE
        </h1>
        
        <p className="font-body text-xl md:text-2xl font-medium tracking-wide text-luxe-pink-hot mb-10 drop-shadow-[0_0_10px_rgba(255,45,138,0.8)] uppercase">
          Electric Vibes. Unreal Nights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 w-full sm:w-auto">
          <div className="bg-luxe-purple-dark/80 backdrop-blur-md px-6 py-3 rounded-full border border-luxe-purple-bright/50 shadow-[0_0_20px_rgba(139,61,255,0.4)] text-white text-sm md:text-base font-bold tracking-wider uppercase w-full sm:w-auto">
            50% Off Drinks Before 12
          </div>
          <div className="bg-luxe-blue-electric/20 backdrop-blur-md px-6 py-3 rounded-full border border-luxe-blue-electric/50 shadow-[0_0_20px_rgba(0,180,255,0.4)] text-white text-sm md:text-base font-bold tracking-wider uppercase w-full sm:w-auto">
            Free Cover Fri & Sat
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link to="/events" className="bg-gradient-to-r from-luxe-blue-electric to-luxe-purple-bright text-white px-10 py-4 rounded font-display font-bold text-lg tracking-[0.15em] uppercase hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,180,255,0.6)] w-full sm:w-auto">
            Get Tickets
          </Link>
          <Link to="/vip" className="bg-transparent backdrop-blur-md border-2 border-luxe-pink-hot text-luxe-pink-hot px-10 py-4 rounded font-display font-bold text-lg tracking-[0.15em] uppercase hover:bg-luxe-pink-hot hover:text-white transition-colors shadow-[0_0_30px_rgba(255,45,138,0.3)] w-full sm:w-auto">
            Join VIP List
          </Link>
        </div>
      </div>
    </section>
  );
}