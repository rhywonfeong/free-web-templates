import { Button } from '../ui/Button';

export default function Hero() {
  const stats = [
    { label: "Horário", value: "05H–23H" },
    { label: "Dias", value: "7 DIAS" },
    { label: "Área", value: "1.800M²" },
    { label: "Alunos", value: "+1.200" },
    { label: "Desde", value: "2018" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 md:pb-32 pt-32 px-6 md:px-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=80" 
          alt="Dark gym environment" 
          className="w-full h-full object-cover opacity-40 grayscale-[50%]"
        />
        {/* Cinematic gradients matching design system */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#E8400A]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="font-display font-extrabold text-7xl md:text-9xl tracking-tight uppercase leading-[0.9] text-white">
              <span className="block text-[#E8400A]">Sem mágica</span>
              <span className="block">Sem atalhos</span>
              <span className="block">Sem desculpas</span>
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <Button size="lg">Começar Agora</Button>
            <Button variant="secondary" size="lg">Conhecer o espaço</Button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-4">
          <p className="text-xl font-medium text-white border-l-2 border-[#E8400A] pl-4">
            Treinos progressivos e acompanhamento real!
          </p>
          <p className="text-[#B0B0B0] text-base leading-relaxed max-w-md">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between overflow-x-auto no-scrollbar gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-xs font-medium tracking-wide uppercase text-[#6B6B6B]">{stat.label}</span>
              <span className="font-display font-semibold text-lg text-white tracking-tight">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}