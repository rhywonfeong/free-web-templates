import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';
import Button from '../ui/Button';

const Portfolio = () => {
  const projects = [
    {
      title: "Liz & Co.",
      tags: ["E-commerce", "Moda Feminina", "Nuvemshop"],
      desc: "Identidade visual e e-commerce completo para marca autoral de moda feminina. Loja estruturada do zero com jornada pensada para mobile.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Aurora Pet",
      tags: ["Website Institucional", "Pet Premium", "Confiança"],
      desc: "Site institucional para creche pet premium. Foco em transmitir segurança, estrutura e cuidado antes de deixar o pet.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "L'Atelier",
      tags: ["Landing Page", "Gastronomia", "Experiência"],
      desc: "Landing page para restaurante autoral. Comunicação da experiência gastronômica e reservas — tudo em uma página que converte.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <SectionLabel text="PORTFÓLIO" />
          <FormattedHeading 
            text="Projetos criados com *intenção.*"
            className="text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-tight mb-6"
          />
          <p className="text-[#8A8A8A] text-lg">
            Cada projeto nasce de uma necessidade real. Estudamos o negócio, o público e a oferta antes de criar uma linha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((proj, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#111111] mb-6 relative border border-[#2E2E2E]">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider text-[#666666] bg-[#111111] border border-[#2E2E2E] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{proj.title}</h3>
              <p className="text-sm text-[#8A8A8A] mb-6 leading-relaxed line-clamp-3">{proj.desc}</p>
              
              <span className="text-sm font-medium text-white group-hover:text-[#C9A84C] transition-colors flex items-center gap-2">
                Ver Projeto <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center border-t border-[#2E2E2E] pt-16">
          <Button variant="secondary" icon="solar:arrow-right-linear">Ver todos os projetos</Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;