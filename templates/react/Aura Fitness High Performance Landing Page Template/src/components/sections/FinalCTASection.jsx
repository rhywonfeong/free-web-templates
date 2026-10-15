export default function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#FF5500]">
      {/* Background Textures & Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#E63B2E_100%)] opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920" 
          alt="Texture" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-6xl md:text-8xl text-white mb-8 leading-[0.9] uppercase drop-shadow-2xl">
          O único treino ruim é aquele que <span className="text-black">não acontece.</span>
        </h2>
        
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
          O resto, a gente resolve junto. Comece agora com uma visita gratuita. Sem compromisso, sem pressão — só você vendo de perto o que podemos fazer por você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#planos" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black hover:bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:-translate-y-1">
            Agendar visita gratuita
            <iconify-icon icon="solar:arrow-right-bold"></iconify-icon>
          </a>
          <a href="#contato" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-black/10 border-2 border-black/20 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300">
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}