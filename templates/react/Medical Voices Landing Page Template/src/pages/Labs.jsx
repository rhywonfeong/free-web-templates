import React, { useEffect } from 'react';
import RevealText from '../components/RevealText';

export default function Labs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiments = [
    {
      id: "01",
      title: "Análise de Sentimento Clínico",
      description: "Explorando algoritmos que detectam marcadores vocais de ansiedade, depressão e declínio cognitivo diretamente da fala do paciente.",
      status: "Protótipo Ativo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["Processamento de Sinal", "NLP", "Python"]
    },
    {
      id: "02",
      title: "Correlacionador de Diretrizes",
      description: "Agente inteligente que cruza instantaneamente a queixa do paciente com as últimas atualizações de guidelines do Ministério da Saúde.",
      status: "Em Validação",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
      tech: ["RAG Architecture", "Vector DB"]
    },
    {
      id: "03",
      title: "Reconhecimento de Padrão Epidêmico",
      description: "Mapeamento anônimo e em tempo real de sintomas relatados na rede para identificar precocemente surtos sazonais locais.",
      status: "Pesquisa",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?w=800&q=80",
      tech: ["Big Data Analytics", "Geoespacial"]
    },
    {
      id: "04",
      title: "Diarização de Consultas",
      description: "Modelos para separar perfeitamente a voz do médico da voz do acompanhante e do paciente em ambientes clínicos ruidosos.",
      status: "Conceito",
      image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?w=800&q=80",
      tech: ["Machine Learning", "Áudio Espacial"]
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
              Pesquisa & Labs
            </p>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Iniciativas experimentais na fronteira da tecnologia médica.
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="O Futuro da Prática Clínica" />
            </h1>
          </div>
        </div>
      </section>

      {/* 
        EXPERIMENTS GRID
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {experiments.map((exp) => (
            <div key={exp.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative overflow-hidden mb-8 border border-gray-200 bg-gray-100 rounded-3xl">
                <div className="absolute inset-0 bg-gray-900/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 mix-blend-multiply"
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-gray-900 rounded-full shadow-sm">
                    {exp.status}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24"></iconify-icon>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col relative px-2">
                <div className="flex items-end justify-between border-b border-gray-100 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold block mb-3">
                      LAB — {exp.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  <div className="col-span-1 sm:col-span-8">
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>
                  <div className="col-span-1 sm:col-span-4 flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                      Foco Tecnológico
                    </span>
                    <ul className="flex flex-col gap-1">
                      {exp.tech.map((t, i) => (
                        <li key={i} className="text-xs text-gray-700 font-medium">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* 
        CALL TO ACTION / LABS FOOTER
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full bg-[#f4f4f5] border border-gray-200 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden group rounded-3xl">
          
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-grid-static" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center text-emerald-500 rounded-2xl mb-8 shadow-sm transition-transform duration-700 group-hover:rotate-12">
              <iconify-icon icon="solar:lightbulb-minimalistic-linear" width="32" height="32"></iconify-icon>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              A ciência por trás da nossa plataforma.
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-10">
              Nosso laboratório serve como incubadora para ideias médicas não convencionais. Conceitos validados aqui evoluem para ferramentas maduras no aplicativo principal.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-emerald-600 transition-colors outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 rounded-full shadow-lg"
            >
              Participar da Pesquisa
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}