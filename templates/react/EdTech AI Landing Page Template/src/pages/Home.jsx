import { useState } from 'react';
import clsx from 'clsx';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FlowCanvas from '../components/FlowCanvas';

export default function Home() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
  const [outcomesRef, outcomesVisible] = useScrollReveal();
  const [pricingRef, pricingVisible] = useScrollReveal();
  const [architectureRef, architectureVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className={clsx("lg:px-12 flex flex-col min-h-[70vh] overflow-hidden border-white/10 border-b pt-24 pr-6 pb-32 pl-6 relative items-center justify-center", heroVisible && "is-visible")}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-30 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-16 lg:mb-0 pointer-events-none">
          <div className="reveal-clip-slide delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(204,255,0,0.8)] animate-pulse"></span>
              <span className="text-[10px] font-medium text-white uppercase tracking-widest">Next-Gen AI Core</span>
          </div>
          <h1 className="reveal-clip-slide delay-200 text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
              Cognitive <span className="text-brand-accent">Architecture</span><br /> for Education
          </h1>
          <p className="reveal-clip-slide delay-300 mt-6 text-sm lg:text-base text-brand-muted max-w-xl font-medium leading-relaxed">
              Deploy dynamic curriculums and adaptive AI tutoring protocols to supercharge student retention and mastery.
          </p>
        </div>

        <div className="z-10 flex flex-col lg:flex-row gap-12 lg:gap-0 w-full relative items-center justify-between">
          <div className="reveal-clip-slide delay-400 w-full max-w-md relative">
            <div style={{ background: '', padding: '1px' }}>
              <div className="w-full h-full rounded-full bg-[#0a0c10] overflow-hidden relative" style={{ boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 60px inset, rgba(0, 0, 0, 0.6) 0px 20px 80px' }}>
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/d4a0a5e1-e688-46fe-a389-daccafb0f356/1600w.png" 
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-110" 
                  alt="Abstract Education and Learning" 
                />
                <div className="bg-gradient-to-t from-[#12141a] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-brand-accent/50 rounded-full flex items-center justify-center" style={{ boxShadow: 'rgba(204, 255, 0, 0.2) 0px 0px 20px' }}>
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-full lg:px-12 flex flex-col lg:flex-row lg:items-center gap-8 z-20">
            <div className="hidden lg:block absolute bottom-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

            {[
              { icon: 'book-bookmark', label: 'Curriculum Sync', num: '01' },
              { icon: 'user-speak', label: 'AI Tutoring', num: '02' },
              { icon: 'lightbulb-minimalistic', label: 'Adaptive Pathways', num: '03' },
              { icon: 'chart-square', label: 'Skill Synthesis', num: '04' }
            ].map((item, idx) => (
              <div key={idx} className={`reveal-clip-slide delay-${(idx + 5) * 100} relative z-10 flex flex-col gap-3 group cursor-default`}>
                <iconify-icon icon={`solar:${item.icon}-linear`} class="text-2xl text-brand-muted group-hover:text-white transition-colors"></iconify-icon>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">{item.label}</span>
                  <span className="text-xs text-brand-muted mt-4">{item.num}</span>
                </div>
                <div className="w-2 h-2 bg-white/10 rounded-full mt-2 group-hover:bg-white transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section ref={statsRef} className={clsx("border-b border-white/10 bg-brand-surface/30 relative", statsVisible && "is-visible")}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="reveal-clip-slide delay-100 p-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-medium tracking-tighter text-white flex items-start">
              12M<span className="text-2xl text-brand-accent ml-1">+</span>
            </h3>
            <p className="text-xs text-brand-muted font-medium mt-2 max-w-[120px]">Learning paths generated daily</p>
            <div className="w-6 h-[1px] bg-white/10 mt-8"></div>
          </div>

          <div className="reveal-clip-slide delay-200 relative z-10 p-12 flex flex-col items-center justify-center text-center transform lg:-translate-y-8" 
                style={{
                  background: 'linear-gradient(180deg, #d4ff33 0%, #aadd00 100%)',
                  boxShadow: 'inset 0px 2px 4px rgba(255,255,255,0.7), inset 0px -4px 10px rgba(0,0,0,0.1), 0px 30px 60px -10px rgba(0,0,0,0.6)',
                  border: '1px solid #eaff66'
                }}>
            <iconify-icon icon="solar:users-group-two-rounded-linear" class="text-3xl text-[#12141a] mb-4 opacity-80"></iconify-icon>
            <h3 className="text-6xl font-semibold tracking-tighter text-[#12141a] flex items-start drop-shadow-sm">
              500K<span className="text-3xl ml-1">+</span>
            </h3>
            <p className="text-sm text-[#1a1d24] font-medium mt-2 max-w-[140px] leading-tight">Active student nodes worldwide</p>
            <div className="mt-8 flex items-center justify-center gap-1 opacity-50">
              <span className="text-lg font-semibold text-[#12141a] tracking-tighter leading-none">N2</span>
              <div className="flex flex-col">
                <span className="text-[8px] font-medium tracking-widest text-[#12141a] leading-none uppercase">Edu</span>
                <span className="text-[8px] font-medium tracking-widest text-[#12141a] leading-none uppercase">AI</span>
              </div>
            </div>
          </div>

          <div className="reveal-clip-slide delay-300 p-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-medium tracking-tighter text-white">98%</h3>
            <p className="text-xs text-brand-muted font-medium mt-2 max-w-[120px]">Concept retention mastery rate</p>
            <div className="w-6 h-[1px] bg-white/10 mt-8"></div>
          </div>

          <div className="reveal-clip-slide delay-400 p-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-medium tracking-tighter text-white flex items-start">
              2.1B<span className="text-2xl text-brand-accent ml-1">+</span>
            </h3>
            <p className="text-xs text-brand-muted font-medium mt-2 max-w-[120px]">Data points analyzed per second</p>
            <div className="w-6 h-[1px] bg-white/10 mt-8"></div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className={clsx("py-24 lg:py-32 border-b border-white/10 relative overflow-hidden bg-brand-base/60", benefitsVisible && "is-visible")}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="reveal-clip-slide delay-100 text-3xl lg:text-4xl font-medium tracking-tighter uppercase text-white mb-16 leading-tight">
            How the <span className="text-brand-accent">N2 Engine</span><br /> Optimizes Learning
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: 'notebook-linear', title: 'Dynamic Curriculum', num: '01' },
              { icon: 'magic-stick-3-linear', title: 'Personalized Pace', num: '02' },
              { icon: 'chart-2-linear', title: 'Predictive Insights', num: '03' },
              { icon: 'clock-circle-linear', title: 'Accelerate Mastery', num: '04' }
            ].map((item, idx) => (
              <div key={item.num} className={`reveal-clip-slide delay-${(idx + 2) * 100} flex flex-col items-center p-6 border border-white/10 bg-brand-surface/20 hover:bg-brand-surface/40 transition-colors relative group`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <iconify-icon icon={`solar:${item.icon}`} class="text-4xl text-white mb-6 group-hover:text-brand-accent transition-colors"></iconify-icon>
                <div className="bg-brand-accent text-white text-[10px] font-medium px-2 py-0.5 rounded-sm mb-4 tracking-widest">{item.num}</div>
                <h4 className="text-sm text-white font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities (Architecture) */}
      <section ref={architectureRef} className={clsx("py-32 px-6 lg:px-12 border-b border-white/10 relative bg-brand-base", architectureVisible && "is-visible")}>
        
        <FlowCanvas 
          containerRef={architectureRef} 
          startNodeId="node-start" 
          centerNodeId="node-center" 
          endNodeId="node-end" 
        />

        <div className="relative z-10 max-w-5xl mx-auto pointer-events-none">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-8 pointer-events-auto">
            <div className="reveal-clip-slide delay-100 flex items-center gap-3">
              <iconify-icon icon="solar:cpu-bolt-linear" class="text-3xl text-brand-accent"></iconify-icon>
              <h2 className="text-2xl lg:text-3xl font-medium tracking-tighter uppercase text-white">Cognitive<br/>Architecture</h2>
            </div>
            <div className="reveal-clip-slide delay-200 flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-brand-surface/50 text-xs font-medium text-white hover:bg-brand-surface transition-colors cursor-pointer">
                <iconify-icon icon="solar:document-linear"></iconify-icon> Syllabus
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-brand-surface/50 text-xs font-medium text-white hover:bg-brand-surface transition-colors cursor-pointer">
                <iconify-icon icon="solar:check-circle-linear"></iconify-icon> Evaluate
              </button>
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full pointer-events-auto">
            <div className="reveal-clip-slide delay-300 flex gap-4 mb-12 lg:absolute lg:top-[-40px] lg:left-[30%]">
              <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-[#1a1d24] text-[10px] font-medium tracking-widest uppercase text-brand-muted">
                <iconify-icon icon="solar:target-linear"></iconify-icon> Assess
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-[#1a1d24] text-[10px] font-medium tracking-widest uppercase text-brand-muted">
                <iconify-icon icon="solar:shield-check-linear"></iconify-icon> Adapt
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-[-1]"></div>

              <div className="reveal-clip-slide delay-400 flex flex-col items-center gap-3" id="node-start">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-brand-surface flex items-center justify-center relative hover:scale-110 transition-transform cursor-help">
                  <iconify-icon icon="solar:user-id-linear" class="text-xl text-white"></iconify-icon>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-brand-base border border-white/10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-brand-muted rounded-full animate-pulse"></div>
                  </div>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-brand-muted">Student Profile</span>
              </div>

              <div className="reveal-clip-slide delay-500 px-8 py-4 z-10 rounded-sm cursor-crosshair hover:scale-105 transition-transform" id="node-center"
                    style={{
                      background: 'linear-gradient(180deg, #d4ff33 0%, #aadd00 100%)',
                      boxShadow: 'inset 0px 2px 4px rgba(255,255,255,0.7), inset 0px -4px 10px rgba(0,0,0,0.1), 0px 10px 30px rgba(0,0,0,0.3)',
                      border: '1px solid #eaff66'
                    }}>
                <div className="flex items-center gap-3 text-[#12141a]">
                  <iconify-icon icon="solar:magic-stick-3-linear" class="text-xl"></iconify-icon>
                  <span className="text-sm font-semibold tracking-tighter uppercase">AI Tutor Engine</span>
                </div>
              </div>

              <div className="reveal-clip-slide delay-600 flex flex-col items-center gap-3" id="node-end">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-brand-surface flex items-center justify-center relative hover:scale-110 transition-transform cursor-help">
                  <iconify-icon icon="solar:diagram-down-linear" class="text-xl text-white"></iconify-icon>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-brand-base border border-white/10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-brand-accent rounded-full animate-ping"></div>
                  </div>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-brand-muted">Knowledge Graph</span>
              </div>
            </div>

            <div className="reveal-clip-slide delay-700 flex gap-4 mt-20 border border-white/10 p-2 bg-brand-surface/20 rounded-md backdrop-blur-sm">
              {['cpu', 'cloud', 'server-path', 'code-square', 'widget'].map(icon => (
                <div key={icon} className="w-12 h-12 bg-[#1a1d24] border border-white/5 rounded-sm flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent/30 transition-all cursor-pointer">
                  <iconify-icon icon={`solar:${icon}-linear`} class="text-xl"></iconify-icon>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Content Split Section */}
      <section ref={outcomesRef} className={clsx("border-b border-white/10 flex flex-col lg:flex-row", outcomesVisible && "is-visible")}>
        
        <aside className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-white/10 p-8 lg:p-12 flex flex-col gap-6 bg-brand-base/80">
          <h3 className="reveal-clip-slide delay-100 text-2xl font-medium tracking-tighter uppercase text-white mb-8 leading-tight">Continuous<br/>Learning</h3>
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-widest uppercase">
            <button className="reveal-clip-slide delay-200 text-white flex items-center gap-3 relative text-left">
              <div className="absolute -left-4 w-1 h-1 bg-brand-accent rounded-full"></div>
              Masterclasses
            </button>
            <button className="reveal-clip-slide delay-300 text-brand-muted hover:text-white transition-colors text-left">Modules</button>
            <button className="reveal-clip-slide delay-400 text-brand-muted hover:text-white transition-colors text-left">Success Stories</button>
            <button className="reveal-clip-slide delay-500 text-brand-muted hover:text-white transition-colors text-left">Research</button>
          </nav>
        </aside>

        <div className="w-full lg:w-3/4 p-8 lg:p-16 bg-[#161921] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 max-w-2xl">
            <div className="reveal-clip-slide delay-300 flex items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-brand-muted mb-6">
              <span className="text-brand-accent">OCT 24, 24</span>
              <span className="w-1 h-1 bg-white/10 rounded-full"></span>
              <span>14:00 GMT</span>
              <span className="w-1 h-1 bg-white/10 rounded-full"></span>
              <span>LIVE LECTURE</span>
            </div>

            <h2 className="reveal-clip-slide delay-400 text-3xl lg:text-4xl font-medium tracking-tighter text-white mb-6">Mastering Generative AI in Education</h2>
            <p className="reveal-clip-slide delay-500 text-brand-muted text-sm leading-relaxed mb-10 max-w-xl">
              Explore advanced methodologies for applying large language models in educational environments. Learn how to implement autonomous tutoring protocols and reduce grading friction.
            </p>

            <button className="reveal-clip-slide delay-600 inline-flex text-xs font-medium uppercase tracking-widest text-white hover:text-brand-accent transition-colors border-b border-white/10 pb-1 mb-16">Reserve Seat</button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 relative">
              
              <div className="reveal-clip-slide delay-700 p-8 flex flex-col justify-between h-64 transform lg:-translate-y-4 lg:-translate-x-4 z-10 hover:scale-[1.02] transition-transform cursor-pointer"
                    style={{
                      background: 'linear-gradient(180deg, #d4ff33 0%, #aadd00 100%)',
                      boxShadow: 'inset 0px 2px 4px rgba(255,255,255,0.7), inset 0px -4px 10px rgba(0,0,0,0.1), 0px 20px 40px -10px rgba(0,0,0,0.4)',
                      border: '1px solid #eaff66'
                    }}>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-[#12141a] mb-8">OCT 24, 24</div>
                  <iconify-icon icon="solar:play-bold" class="text-3xl text-white drop-shadow-md mb-4"></iconify-icon>
                  <h4 className="text-lg font-semibold tracking-tight text-[#12141a] leading-tight">Transition to Adaptive Learning</h4>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#12141a] border-b border-[#12141a]/30 pb-1 w-max">Watch Now</span>
              </div>

              <div className="reveal-clip-slide delay-800 p-8 flex flex-col justify-between h-64 bg-brand-surface/50 border-t md:border-t-0 md:border-l border-white/10 hover:bg-brand-surface transition-colors cursor-pointer">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-brand-muted mb-8">OCT 22, 24</div>
                  <h4 className="text-lg font-medium tracking-tight text-white leading-tight">Structuring AI-Driven Classrooms</h4>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white hover:text-brand-accent transition-colors border-b border-white/10 pb-1 w-max">Read Module</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className={clsx("py-24 lg:py-32 border-b border-white/10 relative overflow-hidden bg-brand-base/40", pricingVisible && "is-visible")}>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="reveal-clip-slide delay-100 text-3xl lg:text-4xl font-medium tracking-tighter uppercase text-white mb-6">
              Compute <span className="text-brand-accent">Allocation Tiers</span>
            </h2>
            <p className="reveal-clip-slide delay-200 text-brand-muted text-sm max-w-xl mx-auto leading-relaxed">
              Select the appropriate neural processing capacity for your educational requirements. Scale compute resources autonomously as your node cluster grows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Tier 1 */}
            <div 
              onMouseMove={handleMouseMove}
              className="reveal-clip-slide delay-300 spotlight-card border border-white/10 bg-brand-surface/20 p-8 lg:p-10 flex flex-col relative group transition-colors "
            >
              <div className="reveal-clip-slide delay-400 text-[10px] font-medium uppercase tracking-widest text-brand-muted mb-6">Student Node</div>
              <div className="reveal-clip-slide delay-500 flex items-end gap-2 mb-8">
                <span className="text-4xl lg:text-5xl font-medium tracking-tighter text-white">Free</span>
              </div>
              <ul className="flex flex-col gap-5 text-xs font-medium text-brand-muted mb-10 flex-grow">
                <li className="reveal-clip-slide delay-600 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Standard Curriculum Sync</li>
                <li className="reveal-clip-slide delay-700 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> 50 AI Tutoring queries/mo</li>
                <li className="reveal-clip-slide delay-800 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Basic Skill Synthesis</li>
              </ul>
              <button className="reveal-clip-slide delay-900 w-full py-4 border border-white/10 bg-transparent text-xs font-semibold tracking-widest uppercase text-white hover:border-brand-accent transition-colors">Initialize</button>
            </div>

            {/* Tier 2 - Highlighted */}
            <div 
              onMouseMove={handleMouseMove}
              className="reveal-clip-slide delay-500 spotlight-card border border-white/10 border-brand-accent/50 p-8 lg:p-10 flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(204,255,0,0.1)] "
              style={{
                background: 'linear-gradient(180deg, rgba(26, 29, 36, 0.95) 0%, rgba(18, 20, 26, 0.95) 100%)',
                backdropFilter: 'blur(10px)'
              }}>
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
              <div className="reveal-clip-slide delay-600 text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6 flex justify-between items-center">
                Educator Pro
                <span className="bg-brand-accent text-white px-2 py-0.5 rounded-sm text-[8px]">RECOMMENDED</span>
              </div>
              <div className="reveal-clip-slide delay-700 flex items-end gap-2 mb-8">
                <span className="text-5xl lg:text-6xl font-semibold tracking-tighter text-white">$49</span>
                <span className="text-xs text-brand-muted mb-2">/mo</span>
              </div>
              <ul className="flex flex-col gap-5 text-xs font-medium text-gray-300 mb-10 flex-grow">
                <li className="reveal-clip-slide delay-800 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Advanced Adaptive Pathways</li>
                <li className="reveal-clip-slide delay-900 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Unlimited AI Tutoring</li>
                <li className="reveal-clip-slide delay-1000 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Predictive Analytics Dashboard</li>
                <li className="reveal-clip-slide delay-1100 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Priority GPU Allocation</li>
              </ul>
              <button className="reveal-clip-slide delay-1200 w-full py-4 border border-white/10 bg-[#161921] text-xs font-semibold tracking-widest uppercase text-white hover:border-brand-accent transition-colors">Initialize</button>
            </div>

            {/* Tier 3 */}
            <div 
              onMouseMove={handleMouseMove}
              className="reveal-clip-slide delay-700 spotlight-card border border-white/10 bg-brand-surface/20 p-8 lg:p-10 flex flex-col relative group transition-colors"
            >
              <div className="reveal-clip-slide delay-800 text-[10px] font-medium uppercase tracking-widest text-brand-muted mb-6">Institution Engine</div>
              <div className="reveal-clip-slide delay-900 flex items-end gap-2 mb-8">
                <span className="text-4xl lg:text-5xl font-medium tracking-tighter text-white">Custom</span>
              </div>
              <ul className="flex flex-col gap-5 text-xs font-medium text-brand-muted mb-10 flex-grow">
                <li className="reveal-clip-slide delay-1000 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Dedicated Compute Cluster</li>
                <li className="reveal-clip-slide delay-1100 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Custom Knowledge Graphs</li>
                <li className="reveal-clip-slide delay-1200 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> Enterprise API Access</li>
                <li className="reveal-clip-slide delay-1300 flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-brand-accent text-lg"></iconify-icon> White-glove Onboarding</li>
              </ul>
              <button className="reveal-clip-slide delay-900 w-full py-4 border border-white/10 bg-transparent text-xs font-semibold tracking-widest uppercase text-white hover:border-brand-accent transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Contact */}
      <section ref={contactRef} className={clsx("border-b border-white/10 grid grid-cols-1 md:grid-cols-2 relative bg-brand-base overflow-hidden", contactVisible && "is-visible")}>
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[15rem] font-semibold text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none z-0">N2</div>

        <div className="p-12 lg:p-20 border-b md:border-b-0 md:border-r border-white/10 relative z-10 bg-brand-base/50 backdrop-blur-sm">
          <h2 className="reveal-clip-slide delay-100 text-3xl font-medium tracking-tighter uppercase text-white mb-4">Stay Informed</h2>
          <p className="reveal-clip-slide delay-200 text-xs text-brand-muted max-w-sm mb-12">Receive weekly pedagogical insights and AI learning trends directly to your inbox.</p>
          
          <form onSubmit={handleSubscribe} className="reveal-clip-slide delay-300 flex w-full max-w-sm relative">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EDU EMAIL" 
              className="w-full bg-[#161921] border border-white/10 px-4 py-3 text-xs font-medium tracking-widest uppercase text-white outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/50"
            />
            <button type="submit" className="bg-white text-black px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-brand-accent transition-colors border border-white">
              Join
            </button>
            {subscribed && (
               <div className="absolute -bottom-8 left-0 text-brand-accent text-xs font-medium tracking-widest uppercase animate-pulse">
                 Credentials Accepted.
               </div>
            )}
          </form>
        </div>

        <div className="p-12 lg:p-20 relative z-10 flex flex-col justify-center bg-brand-base/50 backdrop-blur-sm">
          <h2 className="reveal-clip-slide delay-400 text-3xl font-medium tracking-tighter uppercase text-white mb-12">Connect</h2>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <button className="reveal-clip-slide delay-500 flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-white transition-colors group">
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-colors"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon></div>
              Twitter
            </button>
            <button className="reveal-clip-slide delay-600 flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-white transition-colors group">
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-colors"><iconify-icon icon="solar:global-linear"></iconify-icon></div>
              N2.Academy
            </button>
            <button className="reveal-clip-slide delay-700 flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-white transition-colors group">
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-colors"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
              Community
            </button>
            <button className="reveal-clip-slide delay-800 flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-white transition-colors group">
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-colors"><iconify-icon icon="solar:dialog-linear"></iconify-icon></div>
              Student Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}