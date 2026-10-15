import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';

export default function Platform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      category: "Processamento de Linguagem",
      icon: "solar:microphone-3-linear",
      title: "NLP Clínico",
      desc: "Modelos treinados especificamente para a semântica médica, identificando sintomas, diagnósticos e condutas a partir da voz.",
      stack: [
        { icon: "simple-icons:openai", name: "Custom LLMs" },
        { icon: "simple-icons:tensorflow", name: "Redes Neurais" },
        { icon: "simple-icons:python", name: "Python Core" }
      ]
    },
    {
      category: "Segurança de Dados Médicos",
      icon: "solar:shield-keyhole-linear",
      title: "Privacidade Zero-Knowledge",
      desc: "Os dados de pacientes não são armazenados. Todo o processamento ocorre em memória ou é anonimizado antes do tráfego.",
      stack: [
        { icon: "solar:lock-password-linear", name: "Criptografia E2E" },
        { icon: "solar:document-text-linear", name: "HIPAA Compliant" },
        { icon: "solar:shield-check-linear", name: "LGPD Ready" }
      ]
    },
    {
      category: "Infraestrutura Distribuída",
      icon: "solar:server-square-linear",
      title: "Edge Computing em Saúde",
      desc: "Servidores distribuídos para garantir baixa latência no processamento de transcrições durante a consulta.",
      stack: [
        { icon: "simple-icons:amazonaws", name: "AWS HealthLake" },
        { icon: "simple-icons:docker", name: "Docker/K8s" },
        { icon: "simple-icons:redis", name: "Redis In-Memory" }
      ]
    },
    {
      category: "Interface de Atendimento",
      icon: "solar:monitor-smartphone-linear",
      title: "Usabilidade Fluida",
      desc: "Interfaces desenhadas para não interromper o contato visual entre médico e paciente, rodando em qualquer dispositivo.",
      stack: [
        { icon: "simple-icons:react", name: "React 18" },
        { icon: "solar:smartphone-linear", name: "PWA Support" },
        { icon: "simple-icons:tailwindcss", name: "Design System" }
      ]
    }
  ];

  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 md:mb-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              A Plataforma
            </p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Visão técnica sobre segurança, privacidade e processamento clínico.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Arquitetura de Precisão Médica" />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        TECHNOLOGY STACK GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col border border-gray-200 bg-white p-8 md:p-10 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group relative overflow-hidden rounded-3xl"
            >
              {/* Decorative Number */}
              <span className="absolute top-6 right-8 text-6xl font-bold text-gray-50 group-hover:text-emerald-50 transition-colors duration-500 pointer-events-none select-none">
                0{index + 1}
              </span>

              <div className="text-gray-900 mb-8 relative z-10">
                <iconify-icon icon={tech.icon} width="32" height="32" className="transition-transform duration-500 group-hover:scale-110 group-hover:text-emerald-500 origin-left"></iconify-icon>
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold mb-3">
                  {tech.category}
                </p>
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-12">
                  {tech.desc}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
                  Fundação Tecnológica
                </p>
                <ul className="flex flex-col gap-3">
                  {tech.stack.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <iconify-icon icon={item.icon} width="16" height="16" className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-300"></iconify-icon>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        INFRASTRUCTURE VISUAL
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full h-[60vh] bg-gray-900 rounded-3xl relative overflow-hidden flex items-center justify-center group shadow-2xl shadow-gray-300/50 border border-gray-800">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-animate mix-blend-overlay" />
          
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" 
            alt="Cybersecurity and Medical Data Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-[5000ms] ease-out group-hover:scale-105"
          />

          <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">
            <div className="w-12 h-12 border border-white/20 mb-8 flex items-center justify-center text-white backdrop-blur-sm rounded-xl">
              <iconify-icon icon="solar:shield-check-bold" width="24" height="24" className="text-emerald-400"></iconify-icon>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              Privacidade Inegociável
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Todo o sistema foi desenhado com o princípio de <em>Zero-Knowledge</em>. Nós processamos o áudio localmente e os relatórios são armazenados exclusivamente em seu dispositivo criptografado.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}