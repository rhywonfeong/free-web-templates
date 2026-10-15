import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archives = [
    {
      id: "01",
      client: "Transição Rápida de Plantão",
      role: "Medicina Intensiva",
      year: "2024",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1600&q=80",
      description: "Como a transcrição inteligente de evolução de leito permitiu que plantonistas em UTI economizassem em média 45 minutos diários, garantindo handovers sem perda de detalhes críticos.",
      tags: ["UTI", "Eficiência", "Voz p/ Texto"]
    },
    {
      id: "02",
      client: "Radar de Diretrizes Oncológicas",
      role: "Oncologia Clínica",
      year: "2024",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80",
      description: "A funcionalidade 'Radar' compilou e traduziu automaticamente os principais highlights do congresso ASCO, entregando protocolos revisados para oncologistas antes das diretrizes oficiais serem publicadas.",
      tags: ["Oncologia", "Curadoria AI", "Tempo Real"]
    },
    {
      id: "03",
      client: "Apoio Diagnóstico em Doenças Raras",
      role: "Neurologia / Genética",
      year: "2024",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1600&q=80",
      description: "O sistema de 'Conhecimento Pessoal' da rede identificou conexões sutis entre exames motores atípicos de três médicos diferentes, acelerando a hipótese diagnóstica de uma síndrome neurodegenerativa.",
      tags: ["Doenças Raras", "Conhecimento em Rede", "IA Diagnóstica"]
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
              Casos Clínicos & Aplicações
            </p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Como médicos estão utilizando a plataforma na prática diária.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Medicina Amplificada." />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        PROJECTS LIST
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-32 md:gap-48">
        {archives.map((project, index) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 group cursor-pointer">
            
            {/* Meta Data (Left Column) */}
            <div className="col-span-1 md:col-span-4 flex flex-col relative">
              <div className="sticky top-32">
                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-200 group-hover:text-emerald-100 transition-colors duration-700 block mb-8">
                  {project.id}
                </span>
                
                <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4 pr-4">
                  {project.client}
                </h2>
                
                <ul className="flex flex-col gap-6 mb-8 border-t border-gray-100 pt-6">
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Especialidade / Foco</span>
                    <span className="text-sm text-gray-700 font-semibold">{project.role}</span>
                  </li>
                  <li>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Ano de Validação</span>
                    <span className="text-sm text-gray-700 font-semibold">{project.year}</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual & Description (Right Column) */}
            <div className="col-span-1 md:col-span-8 flex flex-col">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-3xl relative overflow-hidden mb-12 shadow-lg shadow-gray-200/50">
                <div className="absolute inset-0 bg-gray-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105 mix-blend-multiply"
                />
                
                {/* Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-emerald-600 scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Ler Caso</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24"></iconify-icon>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-10 lg:col-start-2">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 
        CTA SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <Link to="/contact" className="block w-full bg-gray-900 text-white rounded-3xl p-12 md:p-24 flex flex-col md:flex-row items-center justify-between group transition-colors duration-500 hover:bg-emerald-950 outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 shadow-2xl">
          <div className="max-w-2xl mb-12 md:mb-0">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Próximos Passos
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 group-hover:translate-x-4 transition-transform duration-500">
              Pronto para transformar sua rotina clínica?
            </h2>
          </div>
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-500 shadow-inner">
            <iconify-icon icon="solar:arrow-right-up-linear" width="40" height="40" className="group-hover:rotate-45 transition-transform duration-500"></iconify-icon>
          </div>
        </Link>
      </section>

    </main>
  );
}