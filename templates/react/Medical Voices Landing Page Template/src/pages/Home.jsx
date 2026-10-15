import React from 'react';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col bg-[#fafafa] selection:bg-emerald-500/30">
      
      {/* 
        HERO SECTION - ENHANCED WITH MESH GRADIENTS & GLASSMORPHISM
      */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center pt-32 md:pt-40 pb-20 px-6 overflow-hidden border-b border-gray-200/50">
        
        {/* Sophisticated Animated Mesh Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent blur-[120px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
          <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-teal-300/20 to-cyan-300/20 blur-[150px] animate-[pulse_10s_ease-in-out_infinite_alternate_reverse]" />
          <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-blue-300/10 to-transparent blur-[100px]" />
          <div 
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Glowing Badge */}
          <div className="relative group cursor-default mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-700 shadow-sm">
              <iconify-icon icon="solar:shield-check-bold" className="text-emerald-500 text-sm drop-shadow-sm" />
              Exclusivo para médicos · Early Access
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-gray-900 leading-[1.05] mb-8 drop-shadow-sm">
            Nunca houve tanta informação disputando sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">decisão clínica.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed mb-12">
            Laboratórios. Redes sociais. Algoritmos sem responsabilidade clínica. Medical Voices é o único lugar onde só o que importa para a sua prática chega até você.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="relative w-full sm:w-auto group overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative w-full sm:w-auto px-8 py-4 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-2 outline-none">
                Quero fazer parte
                <iconify-icon icon="solar:arrow-right-linear" width="16" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <button 
              onClick={scrollToNextSection} 
              className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md text-gray-900 text-xs font-semibold tracking-widest uppercase rounded-full border border-gray-200 hover:border-gray-300 hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2 outline-none group"
            >
              Entender a tese
              <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Hero Visual / Abstract UI with Heavy Glassmorphism */}
        <div className="w-full max-w-[1200px] mx-auto mt-24 relative z-10 perspective-1000 px-4 md:px-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl rounded-[3rem] -z-10 opacity-50" />
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-white/60 bg-white/40 backdrop-blur-2xl relative group">
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent z-10 pointer-events-none mix-blend-multiply" />
            
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&q=80"
              alt="Medical Professional Analysis"
              className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-105"
            />
            
            {/* Floating Glassmorphism UI Element */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-4 md:p-5 rounded-2xl shadow-2xl shadow-black/10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-teal-50 border border-white flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                    <iconify-icon icon="solar:pulse-bold" width="24" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-0.5">Radar Atualizado</p>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Novas diretrizes clínicas processadas</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ABOUT & STATS SECTION 
      */}
      <div id="about-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pt-24 md:pt-40 pb-24 relative z-10">
        
        {/* Typography Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-24 md:mb-40">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 md:mb-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              01 / A Tese
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-600 max-w-[300px] leading-relaxed font-medium">
                A medicina sempre foi o ato de transformar informação em decisão clínica.<br/><br/>
                O desafio é que nunca houve tanta informação disputando essa decisão. Laboratórios testam aceitação de moléculas antes de ter produto. Pessoas sem responsabilidade clínica pautam o que o paciente acredita.<br/><br/>
                Foi pensando nisso que nasceu o Medical Voices.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-semibold mt-4">
                Scroll 
                <iconify-icon icon="solar:arrow-down-linear" width="14" height="14" className="animate-bounce text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2 relative">
            <div className="absolute -left-20 top-20 w-64 h-64 bg-cyan-200/20 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium tracking-tighter leading-[0.9] text-gray-900 relative z-10">
              <RevealText text="A plataforma de conhecimento médico construída por quem pratica a medicina." />
            </h2>
          </div>
        </section>

        {/* Floating Stats Glass Grid */}
        <section className="relative mb-24 md:mb-40">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 transform -skew-y-2 scale-105 rounded-3xl -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8 bg-white/40 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl shadow-gray-200/50">
            
            <div className="p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 rounded-2xl hover:bg-white/60 hover:shadow-lg hover:shadow-emerald-100/50">
              <span className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 mb-4 group-hover:scale-105 transition-transform duration-500">550K+</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold group-hover:text-emerald-600 transition-colors">Médicos no Brasil</span>
            </div>
            
            <div className="p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 rounded-2xl hover:bg-white/60 hover:shadow-lg hover:shadow-cyan-100/50">
              <span className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 mb-4 group-hover:scale-105 transition-transform duration-500">4</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold group-hover:text-cyan-600 transition-colors">Pilares de Conhecimento</span>
            </div>

            <div className="p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 rounded-2xl hover:bg-white/60 hover:shadow-lg hover:shadow-teal-100/50">
              <span className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 mb-4 group-hover:scale-105 transition-transform duration-500">0</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold group-hover:text-teal-600 transition-colors">Dados de Pacientes Armazenados</span>
            </div>

            <div className="p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-white/80 shadow-md border border-white">
              <span className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-4 group-hover:scale-105 transition-transform duration-500">100%</span>
              <span className="text-[10px] text-emerald-700 uppercase tracking-[0.2em] font-bold">Protegido e Privado</span>
            </div>

          </div>
        </section>

      </div>

      {/* 
        FEATURES SECTION (Glass Cards & Gradients)
      */}
      <div id="features-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pb-24 relative z-10">
        
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16 pt-24 border-t border-gray-200/60">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 md:mb-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              02 / Recursos
            </p>
          </div>
          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-tighter leading-[0.9] text-gray-900">
              <RevealText text="Construído para a sua prática diária." />
            </h2>
          </div>
        </section>

        {/* Feature Cards Setup */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* Feature 1 */}
          <div className="group relative p-1 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 md:p-12 rounded-[1.35rem] bg-white border border-gray-100 group-hover:border-emerald-100/50 flex flex-col justify-between z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center mb-8 group-hover:from-emerald-50 group-hover:to-teal-50 group-hover:border-emerald-200 transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:radar-linear" width="32" className="text-gray-600 group-hover:text-emerald-500 transition-colors"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">Radar</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-800 block mb-1">O que está acontecendo na medicina. Filtrado.</strong>
                  A medicina responsável não ignora o que está acontecendo agora. O Radar entrega conteúdo emergente filtrado pela sua especialidade antes que você precise buscar.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative p-1 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 md:p-12 rounded-[1.35rem] bg-white border border-gray-100 group-hover:border-cyan-100/50 flex flex-col justify-between z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center mb-8 group-hover:from-cyan-50 group-hover:to-blue-50 group-hover:border-cyan-200 transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:microphone-3-linear" width="32" className="text-gray-600 group-hover:text-cyan-500 transition-colors"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">Meus Casos</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-800 block mb-1">Seu raciocínio clínico preservado.</strong>
                  Grave por voz, sem formulário. A transcrição acontece no dispositivo — o áudio é descartado, o conhecimento fica organizado e consultável instantaneamente.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-1 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 md:p-12 rounded-[1.35rem] bg-white border border-gray-100 group-hover:border-indigo-100/50 flex flex-col justify-between z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center mb-8 group-hover:from-indigo-50 group-hover:to-violet-50 group-hover:border-indigo-200 transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:users-group-two-rounded-linear" width="32" className="text-gray-600 group-hover:text-indigo-500 transition-colors"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">Rede</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-800 block mb-1">Médicos verificados. Conhecimento real.</strong>
                  Conecta médicos verificados que buscam o mesmo conhecimento — em tempo real, em qualquer lugar. Sem o ruído das redes sociais genéricas.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative p-1 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 md:p-12 rounded-[1.35rem] bg-white border border-gray-100 group-hover:border-teal-100/50 flex flex-col justify-between z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center mb-8 group-hover:from-teal-50 group-hover:to-emerald-50 group-hover:border-teal-200 transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:lightbulb-minimalistic-linear" width="32" className="text-gray-600 group-hover:text-teal-500 transition-colors"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">Conhecimento Pessoal</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-800 block mb-1">Potencialize o que você já sabe.</strong>
                  Identifica padrões sutis entre casos que passariam despercebidos. Uma camada de inteligência que não substitui o médico — amplifica sua capacidade.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* 
        EXCLUSIVITY / PRICING SECTION - ENHANCED DARK MODE
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/40 border border-gray-200">
          
          <div className="col-span-1 md:col-span-5 relative p-12 md:p-16 flex flex-col justify-center overflow-hidden bg-gray-900">
            {/* Dark Mode Mesh Gradient */}
            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 border border-white/20 mb-8 flex items-center justify-center text-white bg-white/5 backdrop-blur-md rounded-2xl shadow-inner">
                <iconify-icon icon="solar:shield-check-linear" width="24" height="24"></iconify-icon>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white drop-shadow-sm">
                Medical Voices é exclusiva para médicos.
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                O que o médico constrói aqui permanece protegido e 100% privado. Estamos construindo com um grupo seleto de médicos fundadores.
              </p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-7 bg-white/60 backdrop-blur-3xl p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-bold mb-8 flex items-center gap-2">
              <iconify-icon icon="solar:star-fall-bold" className="text-emerald-500" />
              Vantagens de Acesso
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-lg md:text-xl font-medium text-gray-800 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:check-read-linear" width="18" className="text-emerald-500 group-hover:text-white" />
                </div>
                Grupo seleto de médicos fundadores — vagas limitadas
              </li>
              <li className="flex items-start gap-4 text-lg md:text-xl font-medium text-gray-800 border-t border-gray-100 pt-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:magic-stick-3-linear" width="18" className="text-emerald-500 group-hover:text-white" />
                </div>
                Acesso antecipado e participação ativa na construção
              </li>
              <li className="flex items-start gap-4 text-lg md:text-xl font-medium text-gray-800 border-t border-gray-100 pt-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:wallet-money-linear" width="18" className="text-emerald-500 group-hover:text-white" />
                </div>
                Sem custo durante o período de fundadores
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
        FINAL CTA SECTION - ENHANCED
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full bg-white border border-gray-200 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden group rounded-[2.5rem] shadow-xl shadow-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white z-0" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-b from-emerald-100 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-t from-cyan-100 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center w-full">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gray-900/20 text-white transform -rotate-3 hover:rotate-0 transition-transform">
              <iconify-icon icon="solar:mailbox-linear" width="32" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 mb-6 drop-shadow-sm">
              Seja uma das primeiras vozes.
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-12">
              Estamos construindo o futuro da prática médica. Vagas estritamente limitadas.
            </p>
            
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail institucional" 
                required
                className="flex-1 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full px-6 py-4 text-gray-900 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all shadow-inner"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-emerald-600 rounded-full transition-colors outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 whitespace-nowrap shadow-lg shadow-gray-900/20 hover:shadow-emerald-500/30"
              >
                Solicitar Acesso
              </button>
            </form>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <iconify-icon icon="solar:lock-password-linear" className="text-emerald-500" />
              Sem spam. Acesso sujeito a aprovação.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}