import Tag from '../ui/Tag';

export default function Coaches() {
  const coaches = [
    {
      name: "Rafael P.",
      role: "Head Coach",
      spec: "Força & Potência",
      tags: ["Powerlifting", "S&C", "Olimpismo"],
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80"
    },
    {
      name: "Larissa A.",
      role: "Performance",
      spec: "Condicionamento Físico",
      tags: ["HIIT", "Triathlon", "Mobilidade"],
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80"
    },
    {
      name: "Diego M.",
      role: "Nutrição",
      spec: "Nutricionista Esportivo",
      tags: ["Hipertrofia", "Cutting", "Suplementação"],
      img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=500&q=80"
    },
    {
      name: "Tatiane C.",
      role: "Funcional",
      spec: "Treinamento Funcional",
      tags: ["CrossFit", "Reabilitação", "Core"],
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80"
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-[#111111] border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <Tag className="mb-6">Nossa Equipe</Tag>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
              Coaches que <br/>
              <span className="text-[#FF4500]">fazem a diferença</span>
            </h2>
          </div>
          <a href="https://wa.me/5541999999999" className="group flex items-center gap-2 text-white font-medium uppercase tracking-widest text-sm hover:text-[#FF4500] transition-colors">
            Agendar visita com um coach
            <iconify-icon icon="solar:arrow-right-linear" class="text-xl transition-transform group-hover:translate-x-1"></iconify-icon>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 opacity-80"></div>
                <img 
                  src={coach.img} 
                  alt={`Coach ${coach.name}`} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[#FF4500] font-bold text-xs uppercase tracking-widest bg-[#080808]/80 px-2 py-1 rounded backdrop-blur-sm">
                    {coach.role}
                  </span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-1">
                {coach.name}
              </h3>
              <p className="text-[#B0B0B0] text-sm mb-4">{coach.spec}</p>
              
              <div className="flex flex-wrap gap-2">
                {coach.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest text-[#666666] border border-[#2E2E2E] rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}