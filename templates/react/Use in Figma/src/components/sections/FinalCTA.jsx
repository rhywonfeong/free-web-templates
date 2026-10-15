import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#E8400A] overflow-hidden border-t border-[#FF4D0D]">
      {/* Texture overlay to make it less flat */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507386762318-7b953d6118d3?w=800&q=80')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
      
      {/* Scrolling Ticker background text */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 overflow-hidden text-black font-display font-black text-[150px] md:text-[250px] leading-none whitespace-nowrap uppercase tracking-tighter mix-blend-overlay">
        <div className="animate-[marquee_20s_linear_infinite]">FORGE YOUR IDENTITY · FORGE YOUR IDENTITY ·</div>
        <div className="animate-[marquee_25s_linear_infinite_reverse]">BEYOND LIMITS KNOWN · BEYOND LIMITS KNOWN ·</div>
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10 text-center flex flex-col items-center">
        
        <div className="bg-black text-[#E8400A] text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 mb-8 inline-block shadow-xl">
          O primeiro passo
        </div>
        
        <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-white mb-12 max-w-4xl text-shadow-lg">
          O TRABALHO<br/>PRECISA SER FEITO.
        </h2>
        
        <div className="w-full max-w-2xl border-y border-white/20 py-4 mb-12 overflow-hidden flex whitespace-nowrap">
          <p className="text-white text-sm md:text-base font-medium uppercase tracking-[0.3em] w-full text-center">
            A G E N D E &nbsp;U M A &nbsp;V I S I T A &nbsp;·&nbsp; G R A T U I T A &nbsp;·&nbsp; S E M &nbsp;C O M P R O M I S S O &nbsp;·&nbsp; T R A G A &nbsp;T Ê N I S
          </p>
        </div>
        
        <Button 
          className="bg-black text-white hover:bg-[#111111] hover:text-[#E8400A] border border-transparent hover:border-[#E8400A] text-lg px-12 py-6 shadow-2xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Agendar Visita Gratuita
        </Button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;