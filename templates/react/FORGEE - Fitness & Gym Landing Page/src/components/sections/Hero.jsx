import Button from '../ui/Button';

export default function Hero() {
  const metrics = [
    { label: 'Horário de funcionamento', value: '05H–23H' },
    { label: 'Dias por semana', value: '7 DIAS' },
    { label: 'Área', value: '1.800M²' },
    { label: 'Alunos', value: '+1.200 ALUNOS DESDE 2018' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-0 md:pb-0 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-center grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        
        {/* Red cinematic glow */}
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-red-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center mt-20 md:mt-0 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600"></span>
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
          </p>
          
          <h1 className="text-[2.5rem] sm:text-6xl md:text-[7rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-red-600 block">SEM MÁGICA</span>
            <span className="text-white block">SEM ATALHOS</span>
            <span className="text-white block">SEM DESCULPAS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white font-medium mb-4">
            Treinos progressivos e acompanhamento real!
          </p>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-xl font-light">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="py-5 px-10 text-sm">COMEÇAR AGORA</Button>
            <Button variant="secondary" className="py-5 px-10 text-sm">CONHECER O ESPAÇO</Button>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 border-t border-zinc-900 bg-black/80 backdrop-blur-md w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-900 py-6 md:py-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className={`px-4 ${idx === 0 ? 'pl-0' : ''} ${idx === metrics.length - 1 ? 'pr-0' : ''}`}>
                <p className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase mb-1">{metric.label}</p>
                <p className="text-sm md:text-base font-semibold text-white tracking-wide">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}