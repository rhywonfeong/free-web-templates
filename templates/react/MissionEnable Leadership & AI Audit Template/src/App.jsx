import React from 'react';

function App() {
  return (
    <>
      {/* Navigation */}
      <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between z-50 relative bg-transparent border-b border-slate-200/50">
        <div className="flex items-center gap-2">
          <a href="#" className="tracking-tighter font-semibold text-lg text-slate-800 uppercase">
            Mission
            <span className="text-amber-accent">Enable</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#mission" className="hover:text-[#C69C6D] transition-colors duration-300">
            The Mission
          </a>
          <a href="#intersection" className="hover:text-[#C69C6D] transition-colors duration-300">
            Methodology
          </a>
          <a href="#services" className="hover:text-[#C69C6D] transition-colors duration-300">
            Offerings
          </a>
          <a href="#partners" className="hover:text-[#C69C6D] transition-colors duration-300">
            Partnerships
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:block text-sm font-medium text-slate-600 hover:text-[#C69C6D] transition-colors">
            audit.lorenzogutierrez.com
          </a>
          <a href="#" className="bg-amber-accent text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity shadow-sm">
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] pt-32 pb-32 md:pt-40 md:pb-40 px-6 md:px-12 flex items-center bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7] to-[#F7F3E8] overflow-hidden">
          {/* Background animated shapes */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s', animationDuration: '10s' }}></div>
          <div className="absolute -bottom-32 left-10 w-[50rem] h-[50rem] bg-muted-sage/20 rounded-full blur-[120px] animate-float" style={{ animationDuration: '12s' }}></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10 w-full">
            <div className="lg:col-span-6 flex flex-col justify-center fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-3 mb-8 w-max px-4 py-2 rounded-full border border-amber-accent/20 bg-white/50 backdrop-blur-sm shadow-sm fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-accent"></span>
                </span>
                <span className="text-xs font-semibold tracking-widest text-slate-800 uppercase">
                  We are on a mission to enable yours
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
                The New Era of Leadership Demands the
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">Best of Both</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-accent/40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.0002 6.64321C42.846 2.01239 123.633 -2.25983 198.026 6.64321" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                  </svg>
                </span>
                Worlds.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg fade-in-up" style={{ animationDelay: '0.5s' }}>
                At the intersection of Emotional Intelligence and Artificial
                Intelligence, MissionEnable prepares leaders and organizations to
                thrive in a world that demands both.
              </p>
              <div className="flex flex-wrap items-center gap-5 fade-in-up" style={{ animationDelay: '0.7s' }}>
                <a href="#" className="bg-amber-accent text-white text-base font-medium px-8 py-4 rounded-sm hover:bg-[#b58b5b] transition-all duration-300 shadow-xl shadow-amber-accent/20 hover:shadow-amber-accent/40 hover:-translate-y-1 flex items-center gap-2">
                  Discover the EQ+AI Audit
                  <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
                </a>
                <a href="#mission" className="text-slate-700 text-base font-medium px-8 py-4 border border-slate-200 bg-white/50 backdrop-blur-sm rounded-sm hover:bg-white hover:border-slate-300 transition-all duration-300">
                  Explore our vision
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative fade-in-up h-full flex items-center justify-center lg:justify-end" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] lg:aspect-square flex items-center justify-center">
                {/* Main floating image */}
                <div className="relative w-[85%] h-[90%] lg:h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-20 animate-float" style={{ animationDuration: '7s' }}>
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="Leadership collaboration" className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-amber-accent/10 mix-blend-overlay"></div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-[5%] right-[5%] w-[60%] h-[60%] border-[1px] border-amber-accent/40 rounded-full z-10 animate-spin-slow" style={{ animationDuration: '25s' }}></div>
                <div className="absolute bottom-[5%] left-[5%] w-[50%] h-[50%] border-[1px] border-slate-300 rounded-full z-10 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>

                {/* Floating Cards */}
                <div className="absolute bottom-16 -left-4 lg:left-0 w-32 h-36 bg-white/90 backdrop-blur-md rounded-2xl z-30 shadow-xl border border-white/50 animate-float flex flex-col items-center justify-center gap-3" style={{ animationDelay: '-3s', animationDuration: '6s' }}>
                  <iconify-icon icon="solar:cpu-linear" class="text-4xl text-amber-accent"></iconify-icon>
                  <span className="text-sm font-semibold text-slate-800 tracking-tight">
                    AI Literacy
                  </span>
                </div>

                <div className="absolute top-12 -right-4 lg:right-0 w-32 h-36 bg-slate-900/95 backdrop-blur-md rounded-2xl z-30 shadow-2xl border border-slate-700 animate-float flex flex-col items-center justify-center gap-3" style={{ animationDelay: '-1.5s', animationDuration: '5s' }}>
                  <iconify-icon icon="solar:heart-angle-linear" class="text-4xl text-amber-accent"></iconify-icon>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    Human EQ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission Section */}
        <section id="mission" className="py-24 md:py-32 px-6 md:px-12 bg-warm-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                A Foundation for the Emergent Future
              </h2>
              <p className="text-lg text-slate-600">
                We believe that technological acceleration does not diminish the
                need for human insight—it amplifies it. Our methodology is built
                on three core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-amber-accent group-hover:scale-105 transition-transform duration-500">
                  <iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                  Human Intelligence
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Cultivating the emotional depth, empathy, and relational courage
                  that algorithms cannot replicate.
                </p>
              </div>
              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-slate-700 group-hover:scale-105 transition-transform duration-500">
                  <iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                  Artificial Intelligence
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Demystifying emergent technologies to build literacy, leverage,
                  and strategic foresight in leadership.
                </p>
              </div>
              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-muted-sage group-hover:scale-105 transition-transform duration-500">
                  <iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                  Organizational Evolution
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Designing cultures and systems that seamlessly integrate the
                  wisdom of people with the velocity of machines.
                </p>
              </div>
            </div>

            {/* Horizontal Motif */}
            <div className="flex items-center justify-center gap-4 mt-24 opacity-30">
              <div className="h-px bg-slate-500 w-16"></div>
              <div className="w-2 h-2 rotate-45 border border-slate-500"></div>
              <div className="h-px bg-slate-500 w-16"></div>
            </div>
          </div>
        </section>

        {/* The Intersection (Venn Diagram Visual) */}
        <section id="intersection" className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative flex items-center justify-center min-h-[400px]">
              {/* Venn Diagram CSS Construct */}
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* EQ Circle */}
                <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-full border border-amber-accent/30 bg-amber-accent/5 mix-blend-multiply flex items-center justify-center -translate-x-4 translate-y-8 backdrop-blur-sm transition-transform duration-1000 hover:-translate-x-6">
                  <span className="font-serif italic text-lg text-slate-500 absolute top-1/4 left-1/4">
                    EQ
                  </span>
                </div>
                {/* AI Circle */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full border border-slate-400/30 bg-slate-200/30 mix-blend-multiply flex items-center justify-center translate-x-4 -translate-y-8 backdrop-blur-sm transition-transform duration-1000 hover:translate-x-6">
                  <span className="font-serif italic text-lg text-slate-500 absolute bottom-1/4 right-1/4">
                    AI
                  </span>
                </div>
                {/* Intersection Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="text-center">
                    <span className="block text-sm font-medium tracking-widest uppercase text-slate-800 mb-1">
                      The MissionEnable
                    </span>
                    <span className="block font-serif text-2xl text-amber-accent">
                      Zone
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                Where the Future is Built
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The organizations that will lead the AI era are not those with the
                best algorithms, but those that developed their human capabilities
                first. When empathy meets efficiency, and relational trust
                supports rapid iteration, an organization enters a state of flow
                that competitors cannot easily copy.
              </p>
              <blockquote className="border-l-2 border-amber-accent pl-6 py-2 my-8">
                <p className="text-xl font-serif text-slate-800 italic leading-relaxed">
                  "AI will never replace our need for deeply human leadership; it
                  exposes the lack of it faster than ever before."
                </p>
                <footer className="mt-3 text-base text-slate-600 font-medium">
                  - Lorenzo Gutierrez, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-muted-sage/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                  Architectures for Transformation
                </h2>
                <p className="text-lg text-slate-600">
                  Strategic frameworks and developmental experiences designed to
                  elevate your organizational capability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-[#FDFBF7] p-10 md:p-12 border border-slate-200/60 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <span className="text-7xl font-serif text-[#C69C6D]/10 absolute -top-2 -right-2 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                  01
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4 relative z-10">
                  The EQ+AI Audit
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 relative z-10">
                  A comprehensive organizational readiness assessment mapping your
                  current capabilities at the intersection of emotional
                  intelligence and AI literacy. Identify critical gaps before
                  deploying new technologies.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-amber-accent hover:text-slate-800 transition-colors relative z-10 uppercase tracking-widest">
                  Explore Audit
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>

              {/* Service 2 */}
              <div className="bg-[#FDFBF7] p-10 md:p-12 border border-slate-200/60 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <span className="text-7xl font-serif text-[#C69C6D]/10 absolute -top-2 -right-2 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                  02
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4 relative z-10">
                  Leadership Development
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 relative z-10">
                  Immersive cohort and executive coaching programs that integrate
                  timeless EQ competencies with necessary AI literacy. We prepare
                  leaders to manage paradox and guide teams through uncertainty.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-amber-accent hover:text-slate-800 transition-colors relative z-10 uppercase tracking-widest">
                  View Programs
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>

              {/* Service 3 */}
              <div className="bg-[#FDFBF7] p-10 md:p-12 border border-slate-200/60 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <span className="text-7xl font-serif text-[#C69C6D]/10 absolute -top-2 -right-2 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                  03
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4 relative z-10">
                  Consulting &amp; Advisory
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 relative z-10">
                  Bespoke strategic guidance for organizations actively navigating
                  digital and AI transformation. We ensure the human element
                  remains central to operational redesign.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-amber-accent hover:text-slate-800 transition-colors relative z-10 uppercase tracking-widest">
                  Engage Advisory
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>

              {/* Service 4 */}
              <div className="bg-[#FDFBF7] p-10 md:p-12 border border-slate-200/60 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <span className="text-7xl font-serif text-[#C69C6D]/10 absolute -top-2 -right-2 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                  04
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4 relative z-10">
                  Partner Licensing
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 relative z-10">
                  A specialized ecosystem for OD consultancies, HR firms, and
                  executive coaches to white-label and deliver the EQ+AI Audit to
                  their own client portfolios under their brand.
                </p>
                <a href="#partners" className="inline-flex items-center gap-2 text-sm font-medium text-amber-accent hover:text-slate-800 transition-colors relative z-10 uppercase tracking-widest">
                  Become a Partner
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now (Editorial Punch) */}
        <section className="py-32 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
          {/* Subtle background texture/pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500 via-transparent to-transparent"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight font-serif mb-8 text-[#FDFBF7]">
              The inflection point is not coming. It is here.
            </h2>
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed mb-12">
              Organizations that view AI solely as an IT initiative will fracture.
              Those that view it as an evolution of human capability will build
              legacies. The time to architect that bridge is now.
            </p>

            {/* Simple timeline/arc visual */}
            <div className="w-full max-w-lg mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-amber-accent to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#FDFBF7] shadow-[0_0_15px_rgba(198,156,109,0.5)]"></div>
            </div>
          </div>
        </section>

        {/* About / The Vision */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start md:items-center">
            <div className="md:col-span-4 relative flex justify-center md:justify-start items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 overflow-hidden rounded-full relative shadow-xl ring-8 ring-white">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68eb6d16-f3e4-4e4b-8f2c-257277113453_800w.png" alt="Lorenzo Gutierrez, Founder" className="w-full h-full object-cover object-[50%_25%]" />
                <div className="absolute inset-0 bg-amber-accent mix-blend-overlay opacity-10"></div>
              </div>
            </div>

            <div className="md:col-span-8 md:pl-8 lg:pl-10">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                Origins &amp; Vision
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                MissionEnable was born from a singular observation in the field:
                as organizations rush to implement artificial intelligence, they
                are inadvertently exposing the fragility of their human systems.
                Poor communication, lack of psychological safety, and leadership
                blind spots don't disappear with AI—they scale with it.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded by Lorenzo Gutierrez, our practice operates as an
                extension of the methodologies developed at
                <a href="#" className="text-amber-accent hover:underline underline-offset-4 decoration-1 ml-1 mr-1">
                  lorenzogutierrez.com
                </a>
                . We serve as trusted guides for leaders navigating this
                unprecedented shift, ensuring that humanity remains the anchor of
                innovation.
              </p>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
                  Who We Serve
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-accent"></iconify-icon>
                    OD Consulting Firms
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-accent"></iconify-icon>
                    Forward-thinking HR Leadership
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-accent"></iconify-icon>
                    L&amp;D Executives
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-accent"></iconify-icon>
                    Elite Executive Coaches
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Consulting Partners (B2B focused) */}
        <section id="partners" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4 block">
              The Licensing Model
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Scale Your Practice with the EQ+AI Audit
            </h2>
            <p className="text-lg text-slate-600">
              We designed MissionEnable not just as a consultancy, but as a
              platform. For established OD consultancies and coaches, we offer a
              robust licensing partnership.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-warm-cream p-8 md:p-16 rounded-sm shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-slate-900 mb-4">
                Co-Branded Ecosystem
              </h3>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Deliver profound insights to your clients without building the
                architecture yourself. Partners receive a dedicated instance
                (e.g.,
                <code className="mx-1 bg-white/50 px-1 py-0.5 rounded">audit.yourfirm.com</code>
                ), proprietary facilitator guides, and ongoing strategic support.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-base font-medium text-slate-900 border-b border-slate-900 pb-1 hover:text-amber-accent hover:border-amber-accent transition-colors">
                Explore Partnership Details
              </a>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Custom Toggle visual representation of customization */}
              <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-100 w-full max-w-xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-700">
                    White-label UI
                  </span>
                  <div className="w-10 h-5 bg-amber-accent rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-700">
                    Custom Domain
                  </span>
                  <div className="w-10 h-5 bg-amber-accent rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="h-px bg-slate-100 w-full my-4"></div>
                <div className="text-xs text-slate-400 font-mono text-center">
                  audit.partner.com ready
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F3E8] pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="#" className="tracking-tighter font-semibold text-xl text-slate-900 uppercase block mb-4">
                Mission
                <span className="text-amber-accent">Enable</span>
              </a>
              <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
                We are on a mission to enable yours.
                <br />
                Operating at the vital intersection of Emotional Intelligence and
                Artificial Intelligence.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <a href="#" className="hover:text-amber-accent transition-colors">
                  <iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                </a>
                <a href="#" className="hover:text-amber-accent transition-colors">
                  <iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                Ecosystem
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-amber-accent transition-colors">
                    lorenzogutierrez.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-accent transition-colors">
                    The EQ+AI Audit Suite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-accent transition-colors">
                    Partner Login
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-accent transition-colors">
                    Licensing Inquiry
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                Navigation
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a href="#mission" className="hover:text-amber-accent transition-colors">
                    The Mission
                  </a>
                </li>
                <li>
                  <a href="#intersection" className="hover:text-amber-accent transition-colors">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-accent transition-colors">
                    Offerings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-300/50 text-xs text-slate-500">
            <p>© 2024 MissionEnable. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-800 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;