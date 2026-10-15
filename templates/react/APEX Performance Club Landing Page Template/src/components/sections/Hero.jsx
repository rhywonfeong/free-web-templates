import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-[1280px] w-full mx-auto text-center flex flex-col items-center">
        
        {/* Intro Label */}
        <span className="uppercase text-xs font-semibold tracking-[0.15em] text-neutral-500 mb-6 md:mb-8 block">
          Alto padrão em performance
        </span>

        {/* Massive Headline */}
        <h1 className="font-display font-black uppercase text-[15vw] md:text-[120px] lg:text-[160px] leading-[0.85] tracking-[-0.03em] text-[#111111] mb-12 w-full text-center whitespace-pre-line">
          ELEVE SEU LIMITE.<br />SUPERE.
        </h1>

        {/* Featured Media Card (Zonixx style reference) */}
        <div className="w-full relative rounded-[24px] overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/30"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
            alt="Atleta em treinamento de alta performance" 
            className="w-full h-[60vh] md:h-[70vh] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between text-left">
            <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-9xl text-white tracking-tight leading-[0.9] max-w-4xl">
              INSIDE AND<br/>OUT.
            </h2>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 w-full">
              <p className="text-white/90 font-light text-sm md:text-base max-w-sm">
                Onde disciplina encontra sofisticação. Estrutura premium para quem leva a sério cada repetição.
              </p>
              
              <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md rounded-full pr-2 pl-6 py-2 border border-white/20">
                <span className="text-white font-medium text-sm tracking-wider uppercase">Metodologia</span>
                <button className="w-10 h-10 bg-acid rounded-full flex items-center justify-center text-[#111111] hover:scale-110 transition-transform" aria-label="Play video">
                  <iconify-icon icon="solar:play-bold"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar below hero card */}
        <div className="w-full max-w-3xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Button to="/agendar" variant="primary">Agendar Visita</Button>
            <Button to="/agendar" variant="outline">Falar com Especialista</Button>
          </div>
          
          <div className="flex justify-center md:justify-end gap-8 text-left">
            <div>
              <p className="font-display font-bold text-2xl tracking-tight">2.4k+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Alunos ativos</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl tracking-tight text-acid">94%</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Frequência</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}