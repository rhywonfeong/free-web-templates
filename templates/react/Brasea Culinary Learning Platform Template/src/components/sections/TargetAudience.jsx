import React from 'react';
import Badge from '../ui/Badge';

const AudienceCard = ({ icon, title, paragraphs, solution }) => (
  <div className="bg-card rounded-2xl p-6 md:p-8 border-subtle hover:border-brand/40 transition-colors duration-300 shadow-soft flex flex-col h-full">
    <div className="w-12 h-12 rounded-full bg-[#191512] flex items-center justify-center text-brand mb-6 border border-subtle">
      <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
    </div>
    <h3 className="font-display font-semibold text-xl text-light mb-4 tracking-tight">{title}</h3>
    <div className="space-y-3 mb-8 flex-1">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-muted leading-relaxed">{p}</p>
      ))}
    </div>
    <div className="bg-[#54A075]/10 border border-[#54A075]/20 rounded-xl p-4 mt-auto">
      <h4 className="flex items-start gap-2 font-medium text-[#54A075] text-sm mb-2">
        <iconify-icon icon="solar:check-circle-bold" className="shrink-0 mt-0.5"></iconify-icon>
        <span dangerouslySetInnerHTML={{ __html: solution.title }} />
      </h4>
      <p className="text-xs text-[#CEC4B8] pl-6 leading-relaxed">{solution.desc}</p>
    </div>
  </div>
);

const TargetAudience = () => {
  return (
    <section className="bg-dark py-24 md:py-32 px-6 border-t border-subtle relative overflow-hidden">
      {/* Noise overlay simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[40px] tracking-tight text-light mb-4">
            Para quem é o Brasea?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Se você se identificou com alguma dessas situações, o Brasea é para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AudienceCard 
            icon="solar:chef-hat-bold-duotone" 
            title="Você trabalha na cozinha e quer crescer"
            paragraphs={[
              "Você aprende olhando, mas sente que falta base técnica.",
              "Corre atrás todo dia no serviço, mas depende de alguém ter paciência de ensinar.",
              "Erra, repete, e sente que podia estar mais à frente se tivesse onde estudar de verdade."
            ]}
            solution={{
              title: "Evolua tecnicamente sem depender de ninguém",
              desc: "Aulas técnicas no seu ritmo + IA para tirar dúvidas quando precisar."
            }}
          />
          <AudienceCard 
            icon="solar:diploma-bold-duotone" 
            title="Você estuda gastronomia e precisa de prática"
            paragraphs={[
              "A faculdade ensina teoria, mas na hora do serviço você trava.",
              "Sai do laboratório com dúvidas e não tem a quem perguntar.",
              "A prova está chegando, o estágio tá ali, e o conteúdo não te preparou de verdade."
            ]}
            solution={{
              title: "Suporte prático 24 horas; como ter um professor",
              desc: "Assistente de IA tira suas dúvidas técnicas a qualquer hora, inclusive de madrugada antes da prova."
            }}
          />
          <AudienceCard 
            icon="solar:star-fall-bold-duotone" 
            title="Você já manda bem, mas quer dominar mais"
            paragraphs={[
              "O conteúdo que acha online é básico demais para o seu nível.",
              "Você já domina sua estação, mas quando precisa expandir, não encontra material técnico que acompanhe seu nível.",
              "Tudo é genérico."
            ]}
            solution={{
              title: "Trilhas avançadas organizadas por estação",
              desc: "Conteúdo de nível profissional: garder manger, saucier, pâtisserie. Feito pra quem sabe cozinhar."
            }}
          />
        </div>

        {/* Visual Complement - Chat UI Mockups */}
        <div className="max-w-4xl mx-auto bg-card rounded-[2rem] border-strong p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Mockup - Onboarding */}
          <div className="w-full md:w-[280px] h-[480px] bg-[#191512] rounded-[24px] border-[4px] border-[#3D3835] overflow-hidden flex flex-col relative transform md:-rotate-6 md:translate-y-4 shadow-xl shrink-0">
             <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand mb-6 border border-brand/30">
                  <iconify-icon icon="solar:fire-bold-duotone" width="28"></iconify-icon>
                </div>
                <Badge variant="neutral" className="mb-4">Assistente Brasea</Badge>
                <h3 className="font-display font-semibold text-xl text-light mb-3">Seu atelier digital está pronto.</h3>
                <p className="text-xs text-muted leading-relaxed mb-8">
                  Configurei sua base de conhecimento para focar nas técnicas essenciais de Saucier, conforme seu perfil.
                </p>
                <button className="w-full py-3 bg-white text-[#191512] rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors">
                  Ir para o app →
                </button>
             </div>
          </div>

          {/* Right Mockup - Chat */}
          <div className="w-full md:flex-1 h-[500px] bg-[#191512] rounded-[24px] border-[4px] border-[#3D3835] overflow-hidden flex flex-col relative shadow-2xl z-10">
            <div className="px-5 py-4 border-b border-subtle bg-card/50 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                <iconify-icon icon="solar:fire-bold-duotone"></iconify-icon>
              </div>
              <div>
                <p className="font-medium text-sm text-light">Chef AI Brasea</p>
                <p className="text-[10px] text-[#54A075] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#54A075]"></span> Online agora
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
              {/* AI Message */}
              <div className="flex gap-3 max-w-[85%]">
                 <div className="w-6 h-6 rounded-full bg-brand shrink-0 mt-1 flex items-center justify-center text-white text-[10px]">
                   <iconify-icon icon="solar:fire-bold-duotone"></iconify-icon>
                 </div>
                 <div className="bg-card border border-subtle rounded-2xl rounded-tl-sm p-3 text-sm text-[#CEC4B8] leading-relaxed">
                   Olá! Sou seu assistente Brasea. Como posso ajudar com sua técnica culinária hoje?
                 </div>
              </div>
              
              {/* User Message */}
              <div className="flex gap-3 max-w-[85%] ml-auto justify-end">
                 <div className="bg-brand/10 border border-brand/20 rounded-2xl rounded-tr-sm p-3 text-sm text-[#F9F5EE] leading-relaxed">
                   Qual a temperatura ideal para um entrecot ao ponto?
                 </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 max-w-[90%]">
                 <div className="w-6 h-6 rounded-full bg-brand shrink-0 mt-1 flex items-center justify-center text-white text-[10px]">
                   <iconify-icon icon="solar:fire-bold-duotone"></iconify-icon>
                 </div>
                 <div className="bg-card border border-subtle rounded-2xl rounded-tl-sm p-3 text-sm text-[#CEC4B8] leading-relaxed">
                   Para um entrecot (ribeye) ao ponto, você deve buscar uma temperatura interna de <strong className="text-brand font-medium">54°C a 57°C</strong>. Recomendo selar na frigideira bem quente e finalizar no forno se a peça for grossa. Deixe descansar por 5 min antes de cortar.
                 </div>
              </div>
            </div>

            <div className="p-4 bg-card/30 border-t border-subtle shrink-0">
               <div className="bg-[#292624] border border-strong rounded-full p-1.5 flex items-center">
                 <input type="text" placeholder="Pergunte ao Chef Brasea..." className="flex-1 bg-transparent border-none text-sm text-light px-3 focus:outline-none" disabled />
                 <button className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                   <iconify-icon icon="solar:plain-bold" width="16"></iconify-icon>
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;