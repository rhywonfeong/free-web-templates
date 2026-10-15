import React from 'react';

export default function App() {
  return (
    <>
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-[260px] bg-[#0D1117] h-full flex-shrink-0 overflow-y-auto border-r border-white/5 pb-8">
        {/* Logo Area */}
        <div className="px-6 py-8 flex items-center gap-3 sticky top-0 bg-[#0D1117] z-10">
          <div className="bg-[#FF4D1C] rounded-lg w-10 h-10 flex items-center justify-center text-white font-bold text-lg shadow-[0_4px_14px_rgba(255,77,28,0.25)]">
            J4
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl font-semibold tracking-tight leading-none">Job4<span className="text-[#FF4D1C]">You</span></span>
            <span className="text-xs text-[#6B7280] font-normal tracking-[0.2em] uppercase mt-1">Marketplace</span>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 px-4 space-y-8 mt-2">
          
          {/* Section: PRINCIPAL */}
          <div>
            <h3 className="px-4 text-xs font-normal text-[#6B7280] uppercase tracking-widest mb-3">Principal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#FF4D1C]/15 border-l-[3px] border-[#FF4D1C] text-white transition-colors">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:home-2-linear" class="text-xl text-white"></iconify-icon>
                    <span className="font-medium text-base">Início</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:magnifer-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Buscar</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:user-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Profissional</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:chat-line-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Chat</span>
                  </div>
                  <span className="w-3 h-[3px] rounded-full bg-[#FF4D1C]"></span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:calendar-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Agendamentos</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Section: PROFISSIONAL */}
          <div>
            <h3 className="px-4 text-xs font-normal text-[#6B7280] uppercase tracking-widest mb-3">Profissional</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:widget-3-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Dashboard</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:dollar-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Planos & Destaque</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:star-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Avaliações</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:users-group-rounded-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Negociações</span>
                  </div>
                  <span className="bg-[#FF4D1C] text-white text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">2</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:history-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Histórico</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:question-circle-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Como Funciona</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Section: CONTA */}
          <div>
            <h3 className="px-4 text-xs font-normal text-[#6B7280] uppercase tracking-widest mb-3">Conta</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:bell-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Notificações</span>
                  </div>
                  <span className="w-3 h-[3px] rounded-full bg-[#FF4D1C]"></span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:card-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Pagamentos</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] border-transparent text-white/60 hover:bg-white/5 hover:text-white transition-colors group">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:settings-linear" class="text-xl text-white/60 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="font-normal text-base">Configurações</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-[#E5E7EB] flex items-center justify-between px-6 py-4 z-20 flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          
          {/* Mobile Menu Toggle & Logo */}
          <div className="flex md:hidden items-center gap-4">
            <button className="text-[#0D1117] hover:text-[#FF4D1C] transition-colors flex items-center">
              <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>
            </button>
            <div className="bg-[#FF4D1C] rounded-md w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
              J4
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl relative mr-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] flex items-center">
              <iconify-icon icon="solar:magnifer-linear" class="text-xl"></iconify-icon>
            </div>
            <input type="text" placeholder="Buscar serviços, profissionais.." className="w-full bg-[#F0F2F5] rounded-full py-2.5 pl-11 pr-4 text-[#0D1117] text-base font-light placeholder:text-[#9CA3AF] outline-none border border-transparent focus:bg-white focus:border-[#FF4D1C] focus:shadow-[0_0_0_4px_rgba(255,77,28,0.1)] transition-all" />
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3 md:gap-4 ml-auto">
            <button className="w-10 h-10 rounded-full border border-[#E5E7EB] items-center justify-center text-[#6B7280] hover:text-[#0D1117] hover:bg-[#F0F2F5] transition-colors relative hidden sm:flex">
              <iconify-icon icon="solar:chat-line-linear" class="text-xl"></iconify-icon>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF4D1C] rounded-full border-2 border-white"></span>
            </button>
            <button className="w-10 h-10 rounded-full border border-[#E5E7EB] items-center justify-center text-[#6B7280] hover:text-[#0D1117] hover:bg-[#F0F2F5] transition-colors hidden sm:flex">
              <iconify-icon icon="solar:map-point-linear" class="text-xl"></iconify-icon>
            </button>
            <button className="bg-[#FF4D1C] hover:bg-[#E8431A] text-white font-medium text-sm rounded-full px-5 py-2.5 transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(255,77,28,0.2)] hover:shadow-[0_4px_14px_rgba(255,77,28,0.3)]">
              <span className="text-xs border border-white/40 rounded-full w-[18px] h-[18px] flex items-center justify-center font-semibold">$</span>
              Assinar Pro
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24 md:pb-12">
          <div className="max-w-6xl mx-auto p-4 md:p-8 w-full">
            
            {/* Hero Section */}
            <section className="bg-[#0D1117] rounded-[24px] relative overflow-hidden p-8 md:p-12 lg:p-16 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              
              {/* Decorative Background Blurs */}
              <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#50140A]/60 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute right-10 -bottom-40 w-[400px] h-[400px] bg-[#50140A]/40 rounded-full blur-[80px] pointer-events-none hidden md:block"></div>
              
              <div className="relative z-10 flex flex-col items-start">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 text-[#FF4D1C] text-sm font-semibold tracking-widest uppercase mb-6">
                  <iconify-icon icon="solar:rocket-linear" class="text-lg"></iconify-icon>
                  <span>Job4You · Marketplace Local</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
                  Encontre o <span className="text-[#FF4D1C]">profissional certo</span> perto de você
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-xl font-light text-white/70 max-w-2xl mb-10 leading-relaxed">
                  Manutenção, aulas particulares, reformas e muito mais — com avaliações reais e preços transparentes.
                </p>

                {/* Search Input */}
                <div className="flex items-center bg-[#161B22]/80 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 w-full max-w-2xl mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.2)] focus-within:border-[#FF4D1C]/50 transition-colors">
                  <input type="text" placeholder="Que serviço você precisa hoje?" className="flex-1 bg-transparent border-none outline-none text-base text-white px-5 placeholder:text-white/40 font-light h-12" />
                  <button className="bg-[#FF4D1C] text-white font-medium text-base rounded-lg px-8 h-12 hover:bg-[#E8431A] transition-colors shadow-[0_2px_8px_rgba(255,77,28,0.2)]">
                    Buscar
                  </button>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-8 md:gap-16">
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">0+</span>
                    <span className="text-sm font-normal text-white/60">Profissionais ativos</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">0k+</span>
                    <span className="text-sm font-normal text-white/60">Serviços realizados</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-1">
                      5<iconify-icon icon="solar:star-bold" class="text-2xl text-[#F59E0B] ml-1"></iconify-icon>
                    </span>
                    <span className="text-sm font-normal text-white/60">Avaliação média</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">100%</span>
                    <span className="text-sm font-normal text-white/60">Pagamento seguro</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories Section */}
            <section className="mt-12 md:mt-16">
              <h2 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#0D1117] mb-8">
                Categorias
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                
                {/* Category Card 1 */}
                <button className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 border border-[#E5E7EB] hover:border-[#FF4D1C]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#FF4D1C]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    🔧
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-medium text-[#0D1117] tracking-tight">Manutenção</h3>
                    <p className="text-sm font-light text-[#6B7280] mt-0.5">0 profissionais</p>
                  </div>
                </button>

                {/* Category Card 2 */}
                <button className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 border border-[#E5E7EB] hover:border-[#3B82F6]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    📚
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-medium text-[#0D1117] tracking-tight">Aulas</h3>
                    <p className="text-sm font-light text-[#6B7280] mt-0.5">0 profissionais</p>
                  </div>
                </button>

                {/* Category Card 3 */}
                <button className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 border border-[#E5E7EB] hover:border-[#F59E0B]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#D97706]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    🏠
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-medium text-[#0D1117] tracking-tight">Reformas</h3>
                    <p className="text-sm font-light text-[#6B7280] mt-0.5">0 profissionais</p>
                  </div>
                </button>

                {/* Category Card 4 */}
                <button className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 border border-[#E5E7EB] hover:border-[#8B5CF6]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-medium text-[#0D1117] tracking-tight">Tecnologia</h3>
                    <p className="text-sm font-light text-[#6B7280] mt-0.5">0 profissionais</p>
                  </div>
                </button>

                {/* Category Card 5 */}
                <button className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 border border-[#E5E7EB] hover:border-[#22C55E]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group hidden sm:flex">
                  <div className="w-14 h-14 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    🌿
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-medium text-[#0D1117] tracking-tight">Jardinagem</h3>
                    <p className="text-sm font-light text-[#6B7280] mt-0.5">0 profissionais</p>
                  </div>
                </button>

              </div>
            </section>

          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#E5E7EB] flex items-center justify-between px-6 py-3 z-50 pb-safe">
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#FF4D1C] w-16">
            <iconify-icon icon="solar:home-2-linear" class="text-2xl"></iconify-icon>
            <span className="text-xs font-medium tracking-tight">Início</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#6B7280] hover:text-[#0D1117] transition-colors w-16">
            <iconify-icon icon="solar:magnifer-linear" class="text-2xl"></iconify-icon>
            <span className="text-xs font-normal tracking-tight">Buscar</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#6B7280] hover:text-[#0D1117] transition-colors w-16 relative">
            <iconify-icon icon="solar:chat-line-linear" class="text-2xl"></iconify-icon>
            <span className="absolute top-0 right-3 w-2 h-2 bg-[#FF4D1C] rounded-full border border-white"></span>
            <span className="text-xs font-normal tracking-tight">Chat</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#6B7280] hover:text-[#0D1117] transition-colors w-16 relative">
            <iconify-icon icon="solar:bell-linear" class="text-2xl"></iconify-icon>
            <span className="absolute top-0 right-3 w-2 h-2 bg-[#FF4D1C] rounded-full border border-white"></span>
            <span className="text-xs font-normal tracking-tight">Avisos</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#6B7280] hover:text-[#0D1117] transition-colors w-16">
            <iconify-icon icon="solar:user-linear" class="text-2xl"></iconify-icon>
            <span className="text-xs font-normal tracking-tight">Perfil</span>
          </a>
        </div>

      </main>
    </>
  );
}