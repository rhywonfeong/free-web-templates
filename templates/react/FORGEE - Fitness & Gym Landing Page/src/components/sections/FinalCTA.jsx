import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80" 
          alt="Gym intensive training" 
          className="w-full h-full object-cover object-center grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-12 uppercase">
          A DECISÃO<br/>
          <span className="text-zinc-500">JÁ FOI TOMADA.</span><br/>
          <span className="text-red-600">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-xs md:text-sm font-bold tracking-[0.4em] text-zinc-400 mb-12">
          AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS.
        </p>
        
        <Button variant="primary" className="py-6 px-12 text-sm md:text-base">
          AGENDAR VISITA GRATUITA
        </Button>
      </div>
    </section>
  );
}