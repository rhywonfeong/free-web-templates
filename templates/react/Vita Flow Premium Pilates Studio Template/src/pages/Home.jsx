import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-5 md:px-10 max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 flex flex-col items-start z-10">
          <span className="font-ui text-[#6F725C] text-[13px] tracking-[0.1em] uppercase font-medium mb-6 flex items-center gap-2">
            <iconify-icon icon="solar:stars-linear"></iconify-icon> Estúdio Premium
          </span>
          <h1 className="font-editorial text-[#2E2E2E] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            Redefina Seu Movimento. <span className="italic text-[#481315]">Transforme</span> Sua Vida.
          </h1>
          <p className="font-ui text-[#4A4A4A] text-lg leading-[1.65] mb-10 max-w-[90%]">
            Descubra o Pilates premium da Vita Flow, onde a excelência encontra o bem-estar. Um estúdio projetado para você alcançar o máximo do seu potencial físico e mental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button to="/agendar" variant="primary">Agende Aula Experimental</Button>
            <Button href="#planos" variant="secondary">Conheça Nossos Planos</Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative w-full h-[500px] lg:h-[700px] rounded-[24px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80" 
            alt="Pessoa praticando Pilates com foco e serenidade em ambiente bem iluminado" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E0C0D]/40 to-transparent"></div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL */}
      <section className="bg-[#F9F5EF] py-16 border-y border-[#D5C0A7]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "+500", label: "Alunos Satisfeitos" },
              { num: "98%", label: "De Aprovação" },
              { num: "10 Anos", label: "De Experiência" },
              { num: "+15k", label: "Horas Personalizadas" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="font-editorial text-[#481315] text-4xl md:text-5xl font-semibold mb-2">{stat.num}</h3>
                <p className="font-ui text-[#6F725C] text-sm md:text-base font-medium tracking-[0.02em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS E BENEFÍCIOS */}
      <section id="beneficios" className="py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-10 w-full">
        <SectionHeading title="A Experiência Vita Flow" subtitle="Nossos Diferenciais" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Acompanhamento Personalizado", icon: "solar:user-hands-linear", desc: "Plano de treinamento desenhado especificamente para suas necessidades e limites." },
            { title: "Ambiente Exclusivo", icon: "solar:sofa-linear", desc: "Refúgio de bem-estar com design moderno, luz natural e equipamentos de ponta." },
            { title: "Instrutores Certificados", icon: "solar:diploma-linear", desc: "Profissionais altamente qualificados, em constante atualização nas melhores práticas." },
            { title: "Resultados Duradouros", icon: "solar:graph-up-linear", desc: "Melhora na postura, alívio de dores, aumento de flexibilidade e força a longo prazo." },
            { title: "Flexibilidade Total", icon: "solar:calendar-date-linear", desc: "Opções de horários flexíveis e sistema de agendamento prático para sua rotina." },
            { title: "Conexão Corpo e Mente", icon: "solar:heart-angle-linear", desc: "Foco na respiração e consciência corporal para um bem-estar integral e profundo." }
          ].map((card, i) => (
            <div key={i} className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-[12px] p-8 hover:-translate-y-2 hover:shadow-sm transition-all duration-300 ease-out group">
              <div className="w-14 h-14 rounded-full bg-[#EDE6DA] flex items-center justify-center mb-6 group-hover:bg-[#481315] transition-colors duration-300">
                <iconify-icon icon={card.icon} width="28" class="text-[#6F725C] group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <h3 className="font-editorial text-[#2E2E2E] text-2xl font-medium mb-3">{card.title}</h3>
              <p className="font-ui text-[#4A4A4A] leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button to="/agendar" variant="primary">Experimente a Diferença</Button>
        </div>
      </section>

      {/* 5. SOBRE O ESTÚDIO */}
      <section id="sobre" className="py-24 md:py-32 bg-[#481315] text-[#F9F5EF]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#BEA88A]/20 transform translate-x-4 translate-y-4 rounded-[20px]"></div>
            <img 
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80" 
              alt="Ambiente do estúdio Vita Flow" 
              className="relative w-full h-auto rounded-[20px] object-cover shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-start">
             <span className="font-ui text-[#BEA88A] text-[13px] tracking-[0.1em] uppercase font-medium mb-4">
              Nossa Essência
            </span>
            <h2 className="font-editorial text-white text-4xl md:text-5xl font-medium leading-[1.2] tracking-[-0.01em] mb-8">
              Onde o movimento se encontra com a consciência.
            </h2>
            <div className="space-y-6 font-ui text-[#E0D4C1] text-lg leading-[1.65]">
              <p>
                A <strong>Vita Flow Pilates Studio</strong> nasceu da visão de criar um espaço dedicado ao bem-estar integral. Desde nossa fundação, empenhamo-nos em oferecer uma experiência que transcende o exercício físico.
              </p>
              <p>
                Acreditamos que o corpo é um templo e que, através do movimento consciente e do acompanhamento premium, podemos desbloquear um potencial ilimitado de força, flexibilidade e equilíbrio.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {['Atendimento Exclusivo', 'Infraestrutura de Ponta', 'Metodologia Avançada'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-ui text-white">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#BEA88A]" width="24"></iconify-icon>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Button to="/agendar" variant="inverse">Agendar Visita Gratuita</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROTOCOLO FLOW */}
      <section className="py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="lg:w-5/12">
            <SectionHeading title="Protocolo Flow" subtitle="Nossa Metodologia" align="left" />
            <p className="font-ui text-[#4A4A4A] text-lg leading-[1.65] mb-8">
              O Protocolo Flow é a espinha dorsal do nosso método. Um sistema de treinamento progressivo e inteligente, desenvolvido com base nos princípios do Pilates e nas mais recentes pesquisas em biomecânica.
            </p>
            <Button to="/agendar" variant="secondary">Falar com Especialista</Button>
           </div>
           <div className="lg:w-7/12 grid gap-4">
             {[
               { step: "01", title: "Avaliação Inicial", desc: "Compreendemos seu histórico, limites e nível de condicionamento." },
               { step: "02", title: "Definição de Metas", desc: "Estabelecemos metas realistas e mensuráveis juntos." },
               { step: "03", title: "Progressão Estruturada", desc: "Evolução contínua sem sobrecarga, com foco na qualidade." },
               { step: "04", title: "Acompanhamento", desc: "Feedback preciso e ajustes constantes para aprimorar a técnica." }
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-6 bg-[#F9F5EF] p-6 rounded-[12px] border border-[#D5C0A7]/50">
                 <span className="font-editorial text-[#6F725C] text-3xl font-medium mt-1">{item.step}</span>
                 <div>
                   <h4 className="font-editorial text-[#2E2E2E] text-xl font-medium mb-2">{item.title}</h4>
                   <p className="font-ui text-[#4A4A4A] text-[15px] leading-[1.6]">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 7. GALERIA */}
      <section className="py-24 bg-[#F9F5EF]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <SectionHeading title="Nosso Santuário" subtitle="Galeria do Espaço" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-[16px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1552674605-c0ea9fe0f60c?w=1000&q=80" alt="Alunos praticando em grupo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E0C0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-ui font-medium">Turmas Reduzidas em Ação</span>
              </div>
            </div>
            <div className="relative rounded-[16px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=600&q=80" alt="Aluna em concentração" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative rounded-[16px] overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1599447292180-45fd84092fd0?w=600&q=80" alt="Aula de Mat Pilates" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. PLANOS E PREÇOS */}
      <section id="planos" className="py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-10">
        <SectionHeading title="Planos de Assinatura" subtitle="Invista em Você" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Plano Básico */}
          <div className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-[16px] p-8 flex flex-col">
            <h3 className="font-editorial text-[#2E2E2E] text-2xl font-medium mb-2">Essence</h3>
            <p className="font-ui text-[#6F725C] text-[15px] mb-6">Para quem busca manter a constância.</p>
            <div className="mb-8">
              <span className="font-ui text-[#4A4A4A] text-lg">R$</span>
              <span className="font-editorial text-[#481315] text-5xl font-semibold">320</span>
              <span className="font-ui text-[#6F725C] text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> 2x por semana
              </li>
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> Turmas de até 3 alunos
              </li>
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> Avaliação inicial inclusa
              </li>
            </ul>
            <Button to="/agendar" variant="secondary" className="w-full">Escolher Plano</Button>
          </div>

          {/* Plano Premium (Highlight) */}
          <div className="bg-[#481315] border border-[#481315] rounded-[20px] p-10 flex flex-col relative shadow-lg md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#BEA88A] text-[#2E0C0D] font-ui text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
              Mais Escolhido
            </div>
            <h3 className="font-editorial text-white text-3xl font-medium mb-2">Flow Premium</h3>
            <p className="font-ui text-[#D5C0A7] text-[15px] mb-6">Resultados visíveis e evolução contínua.</p>
            <div className="mb-8">
              <span className="font-ui text-[#E0D4C1] text-lg">R$</span>
              <span className="font-editorial text-white text-6xl font-semibold">450</span>
              <span className="font-ui text-[#D5C0A7] text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 font-ui text-white text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#BEA88A]"></iconify-icon> 3x por semana
              </li>
              <li className="flex items-center gap-3 font-ui text-white text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#BEA88A]"></iconify-icon> Turmas de até 3 alunos
              </li>
              <li className="flex items-center gap-3 font-ui text-white text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#BEA88A]"></iconify-icon> Avaliação mensal
              </li>
              <li className="flex items-center gap-3 font-ui text-white text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#BEA88A]"></iconify-icon> App de agendamento
              </li>
            </ul>
            <Button to="/agendar" variant="inverse" className="w-full">Escolher Plano</Button>
          </div>

          {/* Plano Individual */}
          <div className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-[16px] p-8 flex flex-col">
            <h3 className="font-editorial text-[#2E2E2E] text-2xl font-medium mb-2">Private</h3>
            <p className="font-ui text-[#6F725C] text-[15px] mb-6">Atenção 100% exclusiva para você.</p>
            <div className="mb-8">
              <span className="font-ui text-[#4A4A4A] text-lg">R$</span>
              <span className="font-editorial text-[#481315] text-5xl font-semibold">890</span>
              <span className="font-ui text-[#6F725C] text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> 2x por semana
              </li>
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> Aulas Individuais
              </li>
              <li className="flex items-center gap-3 font-ui text-[#4A4A4A] text-[15px]">
                <iconify-icon icon="solar:check-read-linear" class="text-[#6F725C]"></iconify-icon> Protocolo sob medida
              </li>
            </ul>
            <Button to="/agendar" variant="secondary" className="w-full">Escolher Plano</Button>
          </div>
        </div>
      </section>

      {/* 11. OS COACHES */}
      <section id="coaches" className="py-24 bg-[#E0D4C1]/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <SectionHeading title="Nossos Especialistas" subtitle="A Equipe Vita Flow" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Ana Paula Silva", role: "Especialista em Reabilitação", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80", desc: "Fisioterapeuta certificada pela PMA, focada em postura e alívio de dores." },
              { name: "Marcos Oliveira", role: "Performance Esportiva", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80", desc: "Fisioterapeuta esportivo, trabalha com aprimoramento de força e consciência corporal." },
              { name: "Juliana Costa", role: "Gestantes & Terceira Idade", img: "https://images.unsplash.com/photo-1594824432258-94dbdd4364ea?w=500&q=80", desc: "Fisioterapeuta especializada, adapta o método com sensibilidade para fases cruciais." }
            ].map((coach, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-full max-w-[300px] aspect-[3/4] mb-6 overflow-hidden rounded-t-[150px] rounded-b-[16px] border-[6px] border-[#F9F5EF] shadow-sm">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-editorial text-[#2E2E2E] text-2xl font-medium mb-1">{coach.name}</h3>
                <span className="font-ui text-[#6F725C] text-sm uppercase tracking-widest font-medium mb-3">{coach.role}</span>
                <p className="font-ui text-[#4A4A4A] text-[15px] leading-[1.6] max-w-[280px]">{coach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-24 md:py-32 max-w-[800px] mx-auto px-5 md:px-10">
        <SectionHeading title="Perguntas Frequentes" subtitle="Tire Suas Dúvidas" />
        <div className="space-y-4">
          {[
            { q: "Preciso ter experiência prévia para começar no Pilates?", a: "Não, absolutamente! O Pilates é adaptável para todos os níveis, desde iniciantes até atletas avançados. Nossos instrutores são especializados em adaptar os exercícios." },
            { q: "Qual a diferença entre Pilates em grupo e aula individual?", a: "Nas aulas em grupo, o número é reduzido (máximo de 3), permitindo atenção. A aula individual oferece acompanhamento 100% exclusivo focado em objetivos específicos." },
            { q: "O Pilates ajuda a emagrecer?", a: "O Pilates fortalece a musculatura, aumenta o metabolismo e melhora a consciência corporal. Combinado com alimentação, é um excelente aliado na perda de peso e tonificação." },
            { q: "Posso fazer Pilates se tiver alguma lesão ou dor crônica?", a: "Sim, o Pilates é frequentemente recomendado para reabilitação. Nossos instrutores são capacitados para criar um plano seguro, sempre com orientação médica." }
          ].map((faq, i) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={i} className="border-b border-[#D5C0A7] pb-4">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="font-editorial text-[#2E2E2E] text-xl font-medium pr-8">{faq.q}</span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    width="24" 
                    class={clsx("text-[#6F725C] transition-transform duration-300", isOpen && "rotate-180")}
                  ></iconify-icon>
                </button>
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out font-ui text-[#4A4A4A] leading-[1.6]",
                    isOpen ? "max-h-[200px] opacity-100 pb-4" : "max-h-0 opacity-0"
                  )}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. LOCALIZAÇÃO (Minimalist Contact) */}
      <section id="contato" className="py-24 bg-[#2E2E2E] text-[#F9F5EF] text-center">
        <div className="max-w-[800px] mx-auto px-5 md:px-10">
          <iconify-icon icon="solar:map-point-wave-linear" width="48" class="text-[#BEA88A] mb-6"></iconify-icon>
          <h2 className="font-editorial text-4xl md:text-5xl font-medium mb-6">Visite Nosso Estúdio</h2>
          <p className="font-ui text-lg text-[#D5C0A7] mb-10 leading-[1.6]">
            Rua das Acácias, 1234 - Bairro Jardim Botânico<br />
            Porto Alegre, RS - 90000-000
          </p>
          <Button to="/agendar" variant="primary">Agendar Visita Gratuita</Button>
        </div>
      </section>
    </div>
  );
}