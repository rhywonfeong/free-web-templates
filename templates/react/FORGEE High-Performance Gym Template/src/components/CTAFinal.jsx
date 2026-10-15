export default function CTAFinal() {
  return (
    <section className="px-6 relative overflow-hidden py-32 flex flex-col items-center justify-center text-center">
      {/* Decorative concentric ovals */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] border border-[#1B40FF]/20 rounded-[100%]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] border border-[#1B40FF]/40 rounded-[100%]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[20vw] border border-[#1B40FF]/60 rounded-[100%] shadow-[0_0_100px_rgba(27,64,255,0.2)]"></div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <h2 className="font-display text-6xl md:text-8xl leading-[0.85] tracking-tight text-white mb-8">
          A DECISÃO<br />
          <span className="text-[#888888]">JÁ FOI TOMADA.</span><br />
          <span className="text-[#E84A1A]">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-[#CCFF00] font-medium text-xs md:text-sm tracking-[0.3em] uppercase mb-12">
          A G E N D E · U M A · V I S I T A · G R A T U I T A · S E M · C O M P R O M I S S O · T R A G A · T Ê N I S .
        </p>

        <button className="px-10 py-5 rounded-full bg-[#E84A1A] text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#E84A1A] transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(232,74,26,0.3)]">
          Agendar Visita Gratuita
        </button>
      </div>
    </section>
  );
}