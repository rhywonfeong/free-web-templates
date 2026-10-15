import { Link } from 'react-router-dom';
import { LaptopMockup, MobileMockup } from '../components/ui/Mockups';

export default function BraseaCase() {
  return (
    <article className="w-full flex flex-col">
      
      {/* 01. HEADER DO CASE */}
      <header className="bg-[#111111] border-b border-[#2E2E2E]">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#2E2E2E]">
          
          {/* Left Column */}
          <div className="flex px-0">
            {/* Back Button Column */}
            <div className="border-r border-[#2E2E2E] flex items-start p-6 md:p-8">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#F0F0F0] transition-colors group"
              >
                <iconify-icon icon="solar:arrow-left-linear" class="text-lg group-hover:-translate-x-1 transition-transform"></iconify-icon>
                <span className="hidden sm:inline">Portfólio</span>
              </Link>
            </div>
            
            {/* Title Column */}
            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-[#F0F0F0] mb-4">
                Brasea
              </h1>
              <p className="text-[#8A8A8A] text-sm md:text-base max-w-md">
                Plataforma EdTech de gastronomia profissional
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8 md:p-16 lg:p-24 flex items-center lg:justify-end">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-lg text-[#F0F0F0] hover:text-[#C9A84C] transition-colors group border-b border-transparent hover:border-[#C9A84C] pb-1"
            >
              Falar com a Mythika
              <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
        </div>
      </header>

      {/* 02. METADADOS DO PROJETO */}
      <section className="bg-[#111111] border-b border-[#2E2E2E]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2E2E2E]">
          
          <div className="p-6 md:p-8 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#666666]">Segmento</span>
            <span className="text-sm text-[#F0F0F0]">EdTech · Gastronomia</span>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#666666]">Entrega</span>
            <span className="text-sm text-[#F0F0F0]">UX/UI · Design System</span>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#666666]">Ferramenta</span>
            <span className="text-sm text-[#F0F0F0]">Figma</span>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#666666]">Ano</span>
            <span className="text-sm text-[#F0F0F0]">2025</span>
          </div>

        </div>
      </section>

      {/* 03. IMAGEM HERO */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-4 flex justify-center items-center overflow-hidden border-b border-[#2E2E2E]">
        {/* Using a high-quality Unsplash image relevant to cooking/tech as a hero mockup */}
        <LaptopMockup 
          imageUrl="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80" 
          alt="Brasea Home Page Mockup" 
        />
      </section>

      {/* 04. CONTEXTO — O PROBLEMA */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/4">
            <h2 className="text-[11px] uppercase tracking-widest text-[#666666] sticky top-24">O Problema</h2>
          </div>
          <div className="w-full lg:w-3/4 max-w-[560px]">
            <div className="prose prose-invert prose-p:text-[#8A8A8A] prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6">
              <p>
                No Brasil, formação técnica culinária de qualidade custa entre R$800 e R$5.000 — inacessível para a maioria dos profissionais de cozinha que aprendem por observação, sem base técnica consolidada.
              </p>
              <p>
                O Brasea nasce para resolver isso: uma plataforma EdTech focada em gastronomia profissional, com aulas técnicas gravadas por chef e um assistente de IA disponível 24h para dúvidas — por R$29,90/mês.
              </p>
              <p>
                O desafio de design era claro: criar uma experiência que parecesse profissional e acessível ao mesmo tempo, sem intimidar quem nunca usou uma plataforma de ensino digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. IMAGEM / TELA DESTAQUE 01 */}
      <section className="bg-[#0A0A0A] py-24 px-4 md:px-12 flex flex-col items-center border-b border-[#2E2E2E]">
        <LaptopMockup 
          imageUrl="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?w=1600&q=80" 
          alt="Brasea Waitlist Page" 
        />
        <p className="mt-12 text-center text-xs md:text-sm text-[#666666] max-w-lg mx-auto">
          Landing page de captação de waitlist — estrutura pensada para conversão e posicionamento de marca desde o primeiro contato.
        </p>
      </section>

      {/* 06. DECISÕES DE DESIGN */}
      <section className="bg-[#111111] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/4">
            <h2 className="text-[11px] uppercase tracking-widest text-[#666666] sticky top-24">Decisões de Design</h2>
          </div>
          <div className="w-full lg:w-3/4 max-w-[560px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#F0F0F0] font-medium mb-10 leading-tight">
              Um sistema pensado para clareza e <span className="font-accent-italic text-[#C9A84C]">escala.</span>
            </h3>
            
            <div className="prose prose-invert prose-p:text-[#8A8A8A] prose-p:text-base prose-p:leading-relaxed mb-10">
              <p>
                A identidade visual do Brasea precisava equilibrar dois mundos: a sofisticação de uma plataforma profissional e a acessibilidade de um produto para pessoas que passam o dia em uma cozinha.
              </p>
              <p>
                Desenvolvemos um design system completo no Figma — com tokens semânticos, variáveis de cor e componentes modulares — para garantir consistência em todas as telas sem perder velocidade de iteração.
              </p>
              <p>
                A tipografia mistura serifa para dar peso e autoridade aos títulos com sans-serif de alta legibilidade para o conteúdo técnico. A paleta usa tons quentes para conectar com o universo gastronômico sem abandonar a seriedade de um produto B2C de assinatura.
              </p>
            </div>

            <ul className="space-y-4 text-sm md:text-base text-[#8A8A8A]">
              {[
                "Design system com tokens semânticos e variáveis no Figma",
                "Fluxo de onboarding pensado para reduzir fricção no primeiro acesso",
                "Assistente de IA integrado à experiência — não como feature isolada",
                "PWA: acesso pelo navegador, sem barreira de instalação via loja",
                "Sistema visual modular preparado para escalar com novas trilhas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#C9A84C] text-xl shrink-0 mt-0.5"></iconify-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07. IMAGEM / TELA DESTAQUE 02 */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-4 md:px-12 flex flex-col items-center border-b border-[#2E2E2E] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-5xl">
          <MobileMockup 
            imageUrl="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80" 
            alt="Brasea App Home" 
          />
          <MobileMockup 
            imageUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" 
            alt="Brasea App Learning" 
          />
        </div>
        <p className="mt-16 text-center text-xs md:text-sm text-[#666666] max-w-lg mx-auto">
          Telas principais do app — Home e Aprender — com hierarquia clara e navegação simplificada para uso em contexto real.
        </p>
      </section>

      {/* 08. ENTREGA TÉCNICA */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/4">
            <h2 className="text-[11px] uppercase tracking-widest text-[#666666] sticky top-24">Entrega</h2>
          </div>
          
          <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-16 md:gap-12">
            
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#F0F0F0] font-medium mb-8 leading-tight">
                Do design system ao produto <span className="font-accent-italic text-[#C9A84C]">funcional.</span>
              </h3>
              <div className="prose prose-invert prose-p:text-[#8A8A8A] prose-p:text-base prose-p:leading-relaxed">
                <p>
                  O projeto foi desenvolvido do zero no Figma, cobrindo desde os tokens de design até as telas finais do produto — com documentação estruturada para handoff e desenvolvimento.
                </p>
                <p>
                  A stack foi definida em conjunto com o cliente para garantir performance, escalabilidade e integração com IA.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#F0F0F0] mb-6">Design:</h4>
                <ul className="space-y-3 text-sm md:text-base text-[#8A8A8A]">
                  {[
                    "Design system completo (tokens, variáveis, componentes)",
                    "Fluxo de onboarding",
                    "Landing page de captação de waitlist",
                    "4 telas principais: Home, Aprender, Assistente, Perfil",
                    "Protótipo navegável no Figma"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#666666]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#F0F0F0] mb-6">Stack Definida:</h4>
                <ul className="space-y-3 text-sm md:text-base text-[#8A8A8A]">
                  {[
                    "Next.js 14",
                    "Tailwind CSS",
                    "Supabase",
                    "Claude API (Anthropic) — assistente de IA",
                    "PWA — Progressive Web App"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#666666]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 09. IMAGEM DESTAQUE 03 */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-4 md:px-12 flex flex-col items-center border-b border-[#2E2E2E]">
        <LaptopMockup 
          imageUrl="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1600&q=80" 
          alt="Brasea Design System" 
        />
        <p className="mt-12 text-center text-xs md:text-sm text-[#666666] max-w-lg mx-auto">
          Design system documentado no Figma — componentes, variáveis semânticas e tokens prontos para escalar com o produto.
        </p>
      </section>

      {/* 10. RESULTADO E APRENDIZADOS */}
      <section className="bg-[#111111] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/4">
            <h2 className="text-[11px] uppercase tracking-widest text-[#666666] sticky top-24">Resultado</h2>
          </div>
          <div className="w-full lg:w-3/4 max-w-[560px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#F0F0F0] font-medium mb-10 leading-tight">
              Mais do que estética — uma base para <span className="font-accent-italic text-[#C9A84C]">crescer.</span>
            </h3>
            
            <div className="prose prose-invert prose-p:text-[#8A8A8A] prose-p:text-base prose-p:leading-relaxed">
              <p>
                O Brasea saiu do zero para um produto com identidade visual sólida, sistema de design documentado e protótipo navegável — pronto para entrar em desenvolvimento e captar os primeiros usuários da waitlist.
              </p>
              <p>
                O maior aprendizado do projeto foi entender que design para EdTech precisa resolver dois problemas ao mesmo tempo: convencer quem ainda não conhece a plataforma (landing page) e reter quem já entrou (app). Cada tela foi pensada com esse duplo objetivo em mente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section id="contact" className="bg-[#0A0A0A] py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center group">
        {/* Subtle glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C] opacity-[0.03] rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 group-hover:opacity-[0.05]"></div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-[#F0F0F0] font-medium mb-6 relative z-10 max-w-3xl leading-tight">
          Tem um projeto que merece esse nível de <span className="font-accent-italic text-[#C9A84C]">atenção?</span>
        </h2>
        
        <p className="text-[#8A8A8A] text-sm md:text-base mb-12 relative z-10">
          A Mythika está disponível para novos projetos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <button className="px-8 py-4 bg-[#F0F0F0] text-[#0A0A0A] text-sm font-medium rounded-full flex items-center gap-3 hover:scale-105 hover:bg-white transition-all duration-300">
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            Falar com a Mythika
          </button>
          
          <Link to="/" className="px-8 py-4 border border-[#2E2E2E] text-[#F0F0F0] text-sm font-medium rounded-full flex items-center gap-3 hover:bg-[#111] hover:border-[#444] transition-all duration-300">
            Ver outros projetos
          </Link>
        </div>
      </section>

    </article>
  );
}