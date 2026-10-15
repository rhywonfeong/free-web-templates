import Button from '../ui/Button';
import Tag from '../ui/Tag';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="hero-frame min-h-[85vh] flex flex-col md:flex-row items-center relative">
        {/* Abstract Background Glow */}
        <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_bottom_right,_rgba(255,69,0,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

        {/* Content Column */}
        <div className="flex-1 px-8 py-16 md:p-16 lg:p-24 z-10 flex flex-col items-start justify-center h-full order-2 md:order-1">
          <Tag variant="fire" className="mb-6">Performance de Elite · Curitiba</Tag>
          
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-[96px] leading-[0.9] uppercase tracking-tighter text-white mb-6">
            Supere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF6B35]">Seus Limites</span>
          </h1>
          
          <p className="text-[#B0B0B0] text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Treinamento de alto padrão para quem leva o desempenho a sério. Infraestrutura completa, coaches certificados e um protocolo desenhado para resultados reais.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button href="#plans" icon="solar:arrow-right-linear">Matricule-se agora</Button>
            <Button variant="outline" href="https://wa.me/5541999999999">Falar com especialista</Button>
          </div>

          {/* Hero Stats Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#2E2E2E] w-full">
            {[
              { num: '4.2k+', label: 'Alunos Ativos' },
              { num: '94%', label: 'Taxa de Frequência' },
              { num: '12+', label: 'Anos de Excelência' },
              { num: '18+', label: 'Coaches' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display font-bold text-2xl text-white">{stat.num}</span>
                <span className="text-[11px] uppercase tracking-widest text-[#666666] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 w-full h-[50vh] md:h-full absolute md:relative top-0 right-0 order-1 md:order-2">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111111] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80" 
            alt="Atleta em treinamento intenso" 
            className="w-full h-full object-cover object-center md:rounded-r-2xl opacity-60 md:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}