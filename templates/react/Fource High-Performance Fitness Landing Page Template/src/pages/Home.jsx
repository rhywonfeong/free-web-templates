import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { clsx } from 'clsx';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#2C2C2C]">
    <button 
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-[#E74C3C] transition-colors">{question}</span>
      <iconify-icon 
        icon={isOpen ? "solar:minus-square-linear" : "solar:add-square-linear"} 
        className={clsx("text-2xl transition-all", isOpen ? "text-[#E74C3C]" : "text-[#666666] group-hover:text-white")}
      ></iconify-icon>
    </button>
    <div className={clsx("overflow-hidden transition-all duration-300", isOpen ? "max-h-[200px] pb-6" : "max-h-0")}>
      <p className="text-[#CCCCCC] leading-relaxed max-w-3xl">{answer}</p>
    </div>
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "POSSO FAZER UMA AULA EXPERIMENTAL?",
      a: "Sim. Acreditamos que a prática vale mais que palavras. Agende sua sessão inicial gratuita e sinta o peso da nossa metodologia na pele."
    },
    {
      q: "POSSO FAZER SOMENTE MUSCULAÇÃO?",
      a: "Nossos planos oferecem acesso total às instalações. Você tem autonomia para seguir seu protocolo individual na área de Força e Condicionamento."
    },
    {
      q: "COMO FUNCIONA O CANCELAMENTO?",
      a: "Sem amarras. Cancelamento a qualquer momento através do seu painel de aluno. Acreditamos na retenção por resultados, não por contratos."
    },
    {
      q: "POSSO PAGAR DE QUE FORMA?",
      a: "Aceitamos cartão de crédito (recorrência), PIX ou plano anual antecipado com desconto. Pagamentos transparentes, sem taxas de matrícula."
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0A]">
      
      {/* 2. Hero Principal */}
      <section className="relative min-h-screen flex items-center pt-20 border-b border-[#2C2C2C]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80" 
            alt="Atleta em treinamento" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply"></div>
          {/* Subtle red overlay to match branding */}
          <div className="absolute inset-0 bg-[#E74C3C]/10 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-7xl md:text-9xl text-white uppercase leading-[0.85] tracking-[-0.02em] mb-6">
              SEM MÁGICA.<br />
              <span className="text-[#E74C3C]">SEM ATALHOS.</span>
            </h1>
            <p className="text-[#CCCCCC] text-lg md:text-xl font-medium max-w-xl mb-12 border-l-2 border-[#E74C3C] pl-6 leading-relaxed uppercase tracking-wider">
              A disciplina constrói o que a motivação não consegue manter. Ambiente focado, protocolo rigoroso, resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary">COMECE AGORA</Button>
              <Button variant="secondary">SAIBA MAIS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Proposta de Valor */}
      <section className="py-32 border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[-0.02em] mb-20 text-center">
            FORJADOS PELA <span className="text-[#E74C3C]">DISCIPLINA.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="border-t border-[#2C2C2C] pt-6">
              <span className="text-[#E74C3C] font-display text-xl mb-2 block">01</span>
              <h3 className="font-display text-4xl text-white uppercase mb-4">ATITUDE</h3>
              <p className="text-[#CCCCCC] leading-relaxed">
                A mentalidade é o principal equipamento. Exigimos comprometimento. Não vendemos promessas fáceis, oferecemos a estrutura para quem está disposto a suar o uniforme.
              </p>
            </div>
            <div className="border-t border-[#E74C3C] pt-6">
              <span className="text-[#E74C3C] font-display text-xl mb-2 block">02</span>
              <h3 className="font-display text-4xl text-white uppercase mb-4">PRECISÃO</h3>
              <p className="text-[#CCCCCC] leading-relaxed">
                Cada movimento tem um propósito. Metodologia estruturada focada em técnica, carga progressiva e execução impecável. Sem espaço para achismos.
              </p>
            </div>
            <div className="border-t border-[#2C2C2C] pt-6">
              <span className="text-[#E74C3C] font-display text-xl mb-2 block">03</span>
              <h3 className="font-display text-4xl text-white uppercase mb-4">CONTROLE</h3>
              <p className="text-[#CCCCCC] leading-relaxed">
                O que não é medido não é gerenciado. Acompanhamento brutal do seu desempenho. Dados e resultados visíveis a cada ciclo de treino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Números / Prova Social */}
      <section className="py-24 bg-[#141414] border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-[#2C2C2C]">
            <div className="text-center">
              <div className="font-display text-6xl md:text-8xl text-white leading-none">+1.2K</div>
              <div className="text-[#666666] font-semibold uppercase tracking-widest mt-2 text-sm">ALUNOS ATIVOS</div>
            </div>
            <div className="text-center">
              <div className="font-display text-6xl md:text-8xl text-[#E74C3C] leading-none">94%</div>
              <div className="text-[#666666] font-semibold uppercase tracking-widest mt-2 text-sm">SATISFAÇÃO</div>
            </div>
            <div className="text-center">
              <div className="font-display text-6xl md:text-8xl text-white leading-none">08</div>
              <div className="text-[#666666] font-semibold uppercase tracking-widest mt-2 text-sm">ANOS DE MERCADO</div>
            </div>
            <div className="text-center">
              <div className="font-display text-6xl md:text-8xl text-white leading-none">18</div>
              <div className="text-[#666666] font-semibold uppercase tracking-widest mt-2 text-sm">COACHES DE ELITE</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Equipamentos */}
      <section className="relative py-32 border-b border-[#2C2C2C]">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 md:opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80" 
            alt="Equipamentos da academia" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-[-0.02em] leading-none mb-8">
              EQUIPAMENTO QUE <br/><span className="text-[#E74C3C]">NÃO TE LIMITA.</span>
            </h2>
            <p className="text-[#CCCCCC] text-lg mb-16 leading-relaxed max-w-xl">
              Máquinas calibradas, barras olímpicas, anilhas emborrachadas. A estrutura brutal que você precisa para extrair o máximo do seu potencial, sem restrições.
            </p>

            <div className="space-y-8">
              {[
                { cat: '01', title: 'CARDIO & CONDITIONING', items: 'Remos Concept2, AirBikes, Esteiras Curvas, SkiErg' },
                { cat: '02', title: 'FREE WEIGHTS', items: 'Dumbbells até 60kg, Kettlebells, Medicine Balls' },
                { cat: '03', title: 'RACKS & PLATFORMS', items: 'Power Racks, Plataformas de LPO, Barras Olímpicas Rogue' },
                { cat: '04', title: 'MACHINES', items: 'Leg Press articulado, Hack Squat, Crossover' },
              ].map((eq, i) => (
                <div key={i} className="border-l-2 border-[#2C2C2C] hover:border-[#E74C3C] pl-6 transition-colors group cursor-default">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-[#666666] font-display text-lg group-hover:text-[#E74C3C] transition-colors">{eq.cat}</span>
                    <h4 className="font-display text-2xl text-white uppercase tracking-wider">{eq.title}</h4>
                  </div>
                  <p className="text-[#666666] text-sm font-medium uppercase tracking-wider">{eq.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Modalidades */}
      <section className="py-32 bg-[#0A0A0A] border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[-0.02em] mb-16 text-center max-w-4xl mx-auto">
            UM PROTOCOLO PARA <span className="text-[#E74C3C]">CADA OBJETIVO.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'FOURCE STRENGTH', desc: 'Aumente sua carga de forma segura. Metodologia de powerlifting e musculação focada no ganho de força bruta e hipertrofia consistente.' },
              { title: 'FOURCE CONDITIONING', desc: 'Resistência extrema. Circuitos de alta intensidade projetados para elevar sua capacidade cardiovascular e queima calórica ao limite.' },
              { title: 'FOURCE MOBILITY', desc: 'Corpos rígidos quebram. Sessões dedicadas a restaurar a amplitude de movimento, flexibilidade articular e prevenção estrutural de lesões.' },
              { title: 'PERSONAL TRAINING', desc: 'Atenção absoluta. Um coach exclusivo guiando cada repetição do seu protocolo customizado para atingir objetivos específicos mais rápido.' }
            ].map((mod, i) => (
              <div key={i} className="group border border-[#2C2C2C] bg-[#141414] p-10 hover:border-[#E74C3C] transition-colors">
                <h3 className="font-display text-4xl text-white uppercase mb-4">{mod.title}</h3>
                <p className="text-[#CCCCCC] mb-10 leading-relaxed min-h-[80px]">
                  {mod.desc}
                </p>
                <div className="flex items-center text-[#E74C3C] font-semibold uppercase tracking-widest text-sm group-hover:underline cursor-pointer">
                  CONHEÇA O PROGRAMA 
                  <iconify-icon icon="solar:arrow-right-linear" className="ml-2 text-lg"></iconify-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Planos */}
      <section className="py-32 bg-[#141414] border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[-0.02em] mb-6">
              SEM MATRÍCULA. SEM FIDELIDADE. <br/><span className="text-[#E74C3C]">SEM ENROLAÇÃO.</span>
            </h2>
            <p className="text-[#CCCCCC] text-xl font-medium uppercase tracking-widest">
              Escolha seu acesso e comece a treinar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* LITE */}
            <div className="border border-[#2C2C2C] bg-[#0A0A0A] p-10">
              <h3 className="font-display text-3xl text-[#CCCCCC] uppercase mb-2">LITE</h3>
              <div className="font-display text-6xl text-white mb-8">R$ 149<span className="text-xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-4 mb-10">
                {['Acesso à Musculação', 'Horário Restrito (10h as 16h)', 'Suporte Básico', 'Vestiários'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#CCCCCC] text-sm uppercase tracking-wider font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2C2C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full text-sm">QUERO ESTE PLANO</Button>
            </div>

            {/* FOURCE (Middle/Highlighted) */}
            <div className="border-2 border-[#E74C3C] bg-[#1E1E1E] p-12 transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E74C3C] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                MAIS ESCOLHIDO
              </div>
              <h3 className="font-display text-4xl text-[#E74C3C] uppercase mb-2">FOURCE</h3>
              <div className="font-display text-7xl text-white mb-8">R$ 229<span className="text-2xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-5 mb-10">
                {['Acesso Livre à Musculação', 'Todas as Aulas Coletivas', 'App FOURCE + Avaliação', 'Acesso Livre todos os dias'].map((item, i) => (
                  <li key={i} className="flex items-center text-white text-sm uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 bg-[#E74C3C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">ESCOLHA ESTE PLANO</Button>
            </div>

            {/* ELITE */}
            <div className="border border-[#2C2C2C] bg-[#0A0A0A] p-10">
              <h3 className="font-display text-3xl text-[#CCCCCC] uppercase mb-2">ELITE</h3>
              <div className="font-display text-6xl text-white mb-8">R$ 369<span className="text-xl text-[#666666]">/MÊS</span></div>
              <ul className="space-y-4 mb-10">
                {['Tudo do Plano FOURCE', '2 Sessões Personal/mês', 'Convite P/ 1 Amigo/mês', 'Toalha Inclusa'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#CCCCCC] text-sm uppercase tracking-wider font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2C2C] mr-4"></span> {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full text-sm">QUERO ESTE PLANO</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Coaches */}
      <section className="py-32 border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-[-0.02em] leading-none">
              COACHES QUE <span className="text-[#E74C3C]">TREINAM.</span>
            </h2>
            <p className="text-[#CCCCCC] max-w-sm uppercase tracking-wider text-sm font-semibold border-l-2 border-[#2C2C2C] pl-4">
              Liderança pelo exemplo. Profissionais forjados no mesmo ambiente brutal que nossos alunos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'RODRIGO NUNES', role: 'HEAD COACH / STRENGTH', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
              { name: 'ANA LIMA', role: 'MOBILITY / COND.', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80' },
              { name: 'RAFAEL', role: 'LPO SPECIALIST', img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80' },
              { name: 'CAMILLA', role: 'FUNCTIONAL / HIIT', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80' }
            ].map((coach, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border border-[#2C2C2C] mb-4 bg-[#141414]">
                  <img 
                    src={coach.img} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Brutalist Red Hover Overlay */}
                  <div className="absolute inset-0 bg-[#E74C3C]/0 group-hover:bg-[#E74C3C]/40 transition-all duration-300 mix-blend-multiply"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)] opacity-100 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <h4 className="font-display text-2xl text-white uppercase">{coach.name}</h4>
                <p className="text-[#E74C3C] text-xs font-bold tracking-widest uppercase">{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-32 bg-[#141414] border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[-0.02em] mb-16">
            PERGUNTAS <span className="text-[#E74C3C]">DIRETAS.</span>
          </h2>
          <div className="border-t border-[#2C2C2C]">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                question={faq.q} 
                answer={faq.a} 
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Localização */}
      <section className="py-32 border-b border-[#2C2C2C]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[-0.02em] mb-8">
                NO CORAÇÃO DE <br/><span className="text-[#E74C3C]">INDAIATUBA.</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-[#666666] font-bold uppercase tracking-widest text-xs mb-2">ENDEREÇO</h4>
                  <p className="font-display text-2xl text-white uppercase tracking-wide">
                    Av. Presidente Kennedy, 1500<br/>Cidade Nova I, Indaiatuba - SP
                  </p>
                </div>
                <div>
                  <h4 className="text-[#666666] font-bold uppercase tracking-widest text-xs mb-2">HORÁRIOS DE FUNCIONAMENTO</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between max-w-xs border-b border-[#2C2C2C] pb-2">
                      <span className="text-[#CCCCCC] uppercase text-sm font-semibold">Seg a Sex</span>
                      <span className="text-white font-display text-xl">05:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between max-w-xs border-b border-[#2C2C2C] pb-2">
                      <span className="text-[#CCCCCC] uppercase text-sm font-semibold">Sábado</span>
                      <span className="text-white font-display text-xl">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between max-w-xs pb-2">
                      <span className="text-[#CCCCCC] uppercase text-sm font-semibold">Domingo</span>
                      <span className="text-[#E74C3C] font-display text-xl">08:00 - 14:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button variant="secondary" className="px-10">COMO CHEGAR</Button>
            </div>
            
            <div className="aspect-square md:aspect-video lg:aspect-square bg-[#141414] border border-[#2C2C2C] relative overflow-hidden group">
               {/* Map Placeholder */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-30 grayscale mix-blend-luminosity"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#0A0A0A] border border-[#E74C3C] p-4 text-center">
                    <iconify-icon icon="solar:map-point-bold" className="text-[#E74C3C] text-4xl mb-2"></iconify-icon>
                    <p className="font-display text-white text-xl tracking-widest">FOURCE HQ</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Final */}
      <section className="py-40 bg-[#E74C3C] text-center px-6">
        <h2 className="font-display text-6xl md:text-9xl text-[#0A0A0A] uppercase leading-[0.85] tracking-tight mb-12">
          A DECISÃO JÁ FOI TOMADA.<br/>AGORA É A AÇÃO.
        </h2>
        <button className="bg-[#0A0A0A] text-white font-display uppercase tracking-[0.2em] text-2xl md:text-4xl px-12 py-6 border-4 border-[#0A0A0A] hover:bg-transparent hover:text-[#0A0A0A] transition-all duration-300">
          COMEÇAR AGORA <span className="ml-4">→</span>
        </button>
      </section>

    </div>
  );
};

export default Home;