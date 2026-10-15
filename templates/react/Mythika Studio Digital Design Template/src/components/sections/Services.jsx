import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';
import Button from '../ui/Button';

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <SectionLabel text="SERVIÇOS" />
          <FormattedHeading 
            text="O que a Mythika *cria.*"
            className="text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-tight mb-6"
          />
          <p className="text-[#8A8A8A] text-lg">
            Cada projeto nasce de um problema real. Entregamos estrutura, estética e estratégia — do conceito ao ar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 01 - E-commerce (Highlight) */}
          <div className="bg-[#111111] border border-[#9333EA] rounded-2xl p-8 flex flex-col card-ecommerce-glow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-[#9333EA]/20 text-[#9333EA] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#9333EA]/30">
                Mais Procurado
              </span>
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-[#9333EA]/10 flex items-center justify-center mb-6">
              <iconify-icon icon="solar:bag-bold-duotone" class="text-[#9333EA] text-2xl"></iconify-icon>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">E-commerce</h3>
            <p className="text-sm text-[#8A8A8A] mb-6 flex-grow">
              Você tem produto bom e clientes fiéis — mas ainda fecha venda pelo Direct e responde catálogo no WhatsApp. Sua loja merece mais do que isso. A Mythika estrutura seu e-commerce com design profissional e jornada de compra pensada.
            </p>
            
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Inclui:</p>
              {['Design da loja com identidade', 'Organização de produtos', 'Banners e layout', 'Jornada mobile'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                  <iconify-icon icon="solar:check-read-linear" class="text-[#9333EA]"></iconify-icon>
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 pt-4 border-t border-[#2E2E2E]">
              <p className="text-xs text-[#666666]"><span className="text-white font-medium">Ideal para:</span> Lojas de moda · Boutiques · Marcas autorais</p>
            </div>
            
            <Button variant="primary" className="w-full text-xs py-3">Quero meu e-commerce →</Button>
          </div>

          {/* Card 02 - Sites */}
          <div className="bg-[#111111] border border-[#2E2E2E] rounded-2xl p-8 flex flex-col hover:border-[#4A4A4A] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-6">
              <iconify-icon icon="solar:monitor-smartphone-bold-duotone" class="text-white text-2xl"></iconify-icon>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">Sites e Landing Pages</h3>
            <p className="text-sm text-[#8A8A8A] mb-6 flex-grow">
              Seja para apresentar sua empresa, captar leads ou vender um serviço — criamos sites com estrutura estratégica, visual premium e foco em conversão. Não basta estar online, precisa passar confiança.
            </p>
            
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Inclui:</p>
              {['Estrutura estratégica', 'Apoio em copywriting', 'Design no Figma', 'Foco em conversão'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                  <iconify-icon icon="solar:check-read-linear" class="text-[#666666]"></iconify-icon>
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 pt-4 border-t border-[#2E2E2E]">
              <p className="text-xs text-[#666666]"><span className="text-white font-medium">Ideal para:</span> Mentores · Advogados · Clínicas</p>
            </div>
            
            <Button variant="secondary" className="w-full text-xs py-3 border-[#2E2E2E]">Quero meu site →</Button>
          </div>

          {/* Card 03 - UX/UI */}
          <div className="bg-[#111111] border border-[#2E2E2E] rounded-2xl p-8 flex flex-col hover:border-[#4A4A4A] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-6">
              <iconify-icon icon="solar:figma-bold-duotone" class="text-white text-2xl"></iconify-icon>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">UX/UI e Produto Digital</h3>
            <p className="text-sm text-[#8A8A8A] mb-6 flex-grow">
              Para startups e plataformas que precisam de interface funcional. O background de UX/UI da Mythika está em cada decisão de estrutura, navegação e hierarquia.
            </p>
            
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Inclui:</p>
              {['Wireframes e protótipos', 'Fluxos de usuário', 'Design system', 'Handoff organizado'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                  <iconify-icon icon="solar:check-read-linear" class="text-[#666666]"></iconify-icon>
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 pt-4 border-t border-[#2E2E2E]">
              <p className="text-xs text-[#666666]"><span className="text-white font-medium">Ideal para:</span> Startups · SaaS · Dashboards</p>
            </div>
            
            <Button variant="secondary" className="w-full text-xs py-3 border-[#2E2E2E]">Falar sobre meu projeto →</Button>
          </div>

        </div>

        {/* B2B Banner */}
        <div className="w-full bg-[#1A1A1A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#2E2E2E]">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white mb-3">Para agências e empresas</h4>
            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              A Mythika também atua como parceira de design para agências de marketing, startups e empresas que precisam de estrutura digital com qualidade de produto — em regime de projeto ou parceria recorrente.
            </p>
          </div>
          <Button variant="secondary" className="shrink-0">Falar sobre parceria →</Button>
        </div>

      </div>
    </section>
  );
};

export default Services;