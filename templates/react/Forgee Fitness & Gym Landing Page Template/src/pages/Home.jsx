import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <ManifestoSection />
      <StructureSection />
      <ProgramsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col z-10">
          <div className="flex items-center gap-2 mb-6 text-[#AAAAAA] text-xs font-semibold uppercase tracking-widest">
            <iconify-icon icon="solar:map-point-linear" class="text-[#E53935]"></iconify-icon>
            Indaiatuba, SP <span className="text-[#3A3A3A]">•</span> Est. 2018
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white mb-6">
            Sem <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E53935] to-[#B71C1C]">mágica.</span><br />
            Sem atalhos.<br />
            Sem desculpas.
          </h1>
          
          <p className="text-xl text-[#D4D4D4] font-medium mb-4">
            Treinos progressivos e acompanhamento real.
          </p>
          
          <p className="text-[#888888] text-base mb-10 max-w-md leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" to="/agendar">Começar Agora</Button>
            <Button size="lg" variant="outline" href="#espaco">Conhecer o Espaço</Button>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#2A2A2A]">
            <div>
              <p className="text-xl font-bold text-white mb-1">05H–23H</p>
              <p className="text-[11px] text-[#888888] uppercase tracking-widest">Horário</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-1">1.800m²</p>
              <p className="text-[11px] text-[#888888] uppercase tracking-widest">Área total</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-1">+1.2K</p>
              <p className="text-[11px] text-[#888888] uppercase tracking-widest">Alunos</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-1">7 Dias</p>
              <p className="text-[11px] text-[#888888] uppercase tracking-widest">Aberto</p>
            </div>
          </div>
        </div>

        {/* Right Content (Bento Grid) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[600px]">
          <div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" alt="Gym floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <Badge variant="primary" className="w-fit mb-2">Estrutura</Badge>
              <h3 className="text-lg font-bold uppercase tracking-wide">Equipamento Premium</h3>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col gap-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-center border border-[#2A2A2A] h-1/2">
              <iconify-icon icon="solar:graph-up-bold-duotone" class="text-4xl text-[#E53935] mb-4"></iconify-icon>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Protocolo Individual</h3>
              <p className="text-sm text-[#888888]">Nenhuma planilha genérica sai daqui.</p>
            </div>
            <div className="rounded-2xl overflow-hidden relative group h-1/2">
               <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" alt="Weights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                 <p className="font-bold uppercase tracking-wide">Força Livre</p>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section id="quem-somos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <Badge className="mb-6">Quem Somos</Badge>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
              Forjados<br />pela<br />disciplina.
            </h2>
            <p className="text-lg text-[#D4D4D4] mb-6 leading-relaxed">
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            </p>
            <p className="text-[#888888] leading-relaxed">
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-white border-l-4 border-[#E53935] pl-6 py-2 mb-8">
              "In silence, the transformation begins."
            </blockquote>
            <p className="text-[#888888] leading-relaxed">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { id: '01', title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
            { id: '02', title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
            { id: '03', title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
          ].map(pillar => (
            <Card key={pillar.id} className="border border-[#2A2A2A] bg-[#1A1A1A]/50">
              <Card.Body className="pt-6">
                <span className="text-[#E53935] font-black text-xl mb-4 block">{pillar.id}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white">{pillar.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{pillar.desc}</p>
              </Card.Body>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

function StructureSection() {
  return (
    <section id="espaco" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="mb-6">Estrutura</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Equipamento<br />que não te limita.
          </h2>
          <p className="text-[#888888] max-w-xl">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 rounded-2xl overflow-hidden h-[500px]">
             <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" alt="Gym interior" className="w-full h-full object-cover" />
           </div>
           
           <div className="order-1 md:order-2 flex flex-col gap-8">
             {[
               { icon: 'solar:running-linear', title: 'Cardio & Conditioning', desc: 'Assault Bikes, Remo Concept2, SkiErg e Esteiras NordicTrack.' },
               { icon: 'solar:dumbbell-large-linear', title: 'Força Livre', desc: 'Plataformas de LPO, barras olímpicas e halteres até 60kg.' },
               { icon: 'solar:smart-home-linear', title: 'Máquinas Articuladas', desc: 'Linha completa plate-loaded com biomecânica avançada.' },
               { icon: 'solar:accessibility-linear', title: 'Funcional & Mobility', desc: 'Área livre dedicada, kettlebells, caixas e acessórios completos.' }
             ].map((item, i) => (
               <div key={i} className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center shrink-0">
                   <iconify-icon icon={item.icon} class="text-xl text-[#E53935]"></iconify-icon>
                 </div>
                 <div>
                   <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-1">{item.title}</h4>
                   <p className="text-sm text-[#888888]">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: 'Forgee Strength',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo.',
      tags: ['Hipertrofia', '3-5x/sem'],
      highlight: false
    },
    {
      title: 'Forgee Conditioning',
      desc: 'Sessões de 45 min com circuito de alta intensidade. Início e fim marcados. Sem improvisar.',
      tags: ['Alta Intensidade', 'Horários Fixos'],
      highlight: true
    },
    {
      title: 'Forgee Mobility',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Trabalho de corpo para não se machucar.',
      tags: ['Prevenção', 'Recuperação'],
      highlight: false
    },
    {
      title: 'Personal Training',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas.',
      tags: ['Individual', 'Acompanhamento'],
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Badge className="mb-6">O que oferecemos</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Um protocolo<br />para cada objetivo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <Card key={i} className={prog.highlight ? 'border border-[#E53935] relative overflow-visible' : 'border border-[#2A2A2A]'}>
              {prog.highlight && (
                <div className="absolute -top-3 left-6 bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_10px_rgba(229,57,53,0.5)]">
                  Mais Procurado
                </div>
              )}
              <Card.Header>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">{prog.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-[#888888] bg-[#0A0A0A] px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Header>
              <Card.Body>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">{prog.desc}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: 'Livre',
      price: '149',
      desc: 'Para quem treina por conta própria.',
      features: [
        'Acesso ilimitado 05H–23H',
        'Avaliação física de entrada',
        'Planilha de treino inicial',
        'App FORGEE'
      ],
      highlight: false
    },
    {
      name: 'Plus',
      price: '229',
      desc: 'O equilíbrio perfeito com acompanhamento.',
      features: [
        'Tudo do plano Livre',
        '2 sessões de Personal/mês',
        '1 aula Conditioning/semana',
        'Revisão planilha 4 semanas',
        'Acesso ao Mobility'
      ],
      highlight: true
    },
    {
      name: 'Elite',
      price: '389',
      desc: 'Resultados máximos com atenção total.',
      features: [
        'Tudo do plano Plus',
        '4 sessões Personal/mês',
        'Acesso ilimitado classes',
        'Bioimpedância mensal',
        'WhatsApp coach dedicado'
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-6">Investimento</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Sem matrícula.<br />Sem fidelidade.<br />Sem enrolação.
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 flex flex-col bg-[#111111] border ${plan.highlight ? 'border-[#E53935] shadow-[0_0_30px_rgba(229,57,53,0.1)] scale-105 z-10' : 'border-[#2A2A2A]'}`}>
              {plan.highlight && (
                 <Badge variant="primary" className="mb-4 self-start">Mais Escolhido</Badge>
              )}
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-[#888888] mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-xl text-[#AAAAAA] font-bold">R$</span>
                <span className="text-5xl font-black tracking-tighter text-white">{plan.price}</span>
                <span className="text-sm text-[#888888]">/mês</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#D4D4D4]">
                    <iconify-icon icon="solar:check-circle-bold" class="text-[#E53935] text-lg shrink-0 mt-0.5"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
                to="/agendar"
              >
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs text-[#555555] uppercase tracking-widest max-w-2xl mx-auto">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <span className="text-[#AAAAAA]">Apenas de passagem?</span>
            <span className="text-white font-bold uppercase">Diária: R$ 39</span>
            <Link to="/agendar" className="text-[#E53935] hover:underline font-bold ml-2 uppercase text-xs">Agendar →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const coaches = [
    { name: 'Rodrigo Farias', role: 'Head Coach', cref: 'CREF 045821-G/SP', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80' },
    { name: 'Ana Luísa', role: 'Conditioning', cref: 'CREF 078342-G/SP', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80' },
    { name: 'Bruno T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80' },
    { name: 'Camila D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80' }
  ];

  return (
    <section id="equipe" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Badge className="mb-6">Quem te acompanha</Badge>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Coaches que<br />treinam.
            </h2>
          </div>
          <p className="text-[#888888] max-w-sm">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4 relative">
                <div className="absolute inset-0 bg-[#E53935]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={coach.img} alt={coach.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">{coach.name}</h3>
              <p className="text-[#E53935] text-sm font-semibold uppercase tracking-widest my-1">{coach.role}</p>
              <p className="text-xs text-[#555555]">{coach.cref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: 'Preciso ter experiência?',
      a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.'
    },
    {
      q: 'Posso treinar sozinho?',
      a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.'
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.'
    },
    {
      q: 'Posso visitar antes de assinar?',
      a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.'
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-6">Dúvidas</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Perguntas<br />Diretas.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border border-[#2A2A2A] rounded-xl overflow-hidden transition-colors duration-300 ${openIdx === i ? 'bg-[#1A1A1A] border-[#3A3A3A]' : 'bg-[#111111] hover:bg-[#1A1A1A]'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold uppercase tracking-wide text-white pr-8">{faq.q}</span>
                <iconify-icon 
                  icon={openIdx === i ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                  class={`text-2xl flex-shrink-0 transition-transform ${openIdx === i ? 'text-[#E53935]' : 'text-[#888888]'}`}
                ></iconify-icon>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#AAAAAA] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Badge className="mb-6">Onde estamos</Badge>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              No coração<br />de Indaiatuba.
            </h2>
            
            <div className="flex flex-col gap-8 mb-10">
              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:map-point-linear" class="text-2xl text-[#E53935] mt-1"></iconify-icon>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wide">Endereço</h4>
                  <p className="text-[#AAAAAA] text-sm">Rua das Esmeraldas, 742<br />Jardim Morada do Sol — Indaiatuba, SP<br />CEP 13.334-210</p>
                  <p className="text-[#555555] text-xs mt-2 uppercase tracking-widest">200m do Carrefour · Próximo à saída SP-075</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:clock-circle-linear" class="text-2xl text-[#E53935] mt-1"></iconify-icon>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Horários</h4>
                  <ul className="text-sm text-[#AAAAAA] flex flex-col gap-1">
                    <li className="flex justify-between w-48"><span>Seg a Sex</span> <span className="text-white font-medium">05H – 23H</span></li>
                    <li className="flex justify-between w-48"><span>Sábado</span> <span className="text-white font-medium">07H – 20H</span></li>
                    <li className="flex justify-between w-48"><span>Dom e Feriados</span> <span className="text-white font-medium">08H – 14H</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon="solar:chat-round-line-linear">Falar no WhatsApp</Button>
              <Button variant="secondary" icon="solar:routing-2-linear">Como Chegar</Button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[500px] border border-[#2A2A2A] relative bg-[#1A1A1A] flex items-center justify-center">
            {/* Abstract Map Representation / Map Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center grayscale mix-blend-luminosity"></div>
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(229,57,53,0.5)] animate-pulse">
                 <iconify-icon icon="solar:fire-bold" class="text-3xl text-white"></iconify-icon>
               </div>
               <span className="mt-4 font-black uppercase tracking-widest text-lg bg-[#0A0A0A]/80 px-4 py-1 rounded backdrop-blur-sm border border-[#333]">FORGEE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-[#E53935] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
          A decisão<br />já foi tomada.<br />Agora é a ação.
        </h2>
        <p className="text-black/60 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-12">
          Agende uma visita · Gratuita · Sem compromisso · Traga tênis
        </p>
        <Button 
          to="/agendar" 
          size="lg" 
          className="bg-black text-white hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] border-none"
        >
          Agendar Visita Gratuita
        </Button>
      </div>
    </section>
  );
}