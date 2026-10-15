import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FAFAFC] z-0 flex items-center justify-center">
    {/* Soft glow in the center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" />
    
    <div className="absolute top-0 left-0 w-[200%] h-full">
      {/* 
        The SVG uses quadratic and smooth quadratic beziers (Q and T) to create perfect repeating sine waves.
        Translating it by exactly 50% horizontally creates a seamless infinite loop.
      */}
      <svg 
        className="absolute w-full h-full animate-wave-slow opacity-60" 
        viewBox="0 0 2400 800" 
        preserveAspectRatio="none"
        fill="none"
      >
        <path 
          d="M 0 400 Q 300 200, 600 400 T 1200 400 T 1800 400 T 2400 400" 
          stroke="url(#grad1)" 
          strokeWidth="45" 
          strokeLinecap="round" 
        />
        <path 
          d="M 0 500 Q 300 350, 600 500 T 1200 500 T 1800 500 T 2400 500" 
          stroke="url(#grad2)" 
          strokeWidth="25" 
          strokeLinecap="round" 
          className="opacity-80"
        />
        <path 
          d="M 0 300 Q 300 100, 600 300 T 1200 300 T 1800 300 T 2400 300" 
          stroke="url(#grad3)" 
          strokeWidth="60" 
          strokeLinecap="round" 
          className="opacity-40"
        />

        {/* Duplicate the paths shifted by 1200px (half the width) to make the loop seamless */}
        <path 
          d="M 1200 400 Q 1500 200, 1800 400 T 2400 400 T 3000 400 T 3600 400" 
          stroke="url(#grad1)" 
          strokeWidth="45" 
          strokeLinecap="round" 
        />
        <path 
          d="M 1200 500 Q 1500 350, 1800 500 T 2400 500 T 3000 500 T 3600 500" 
          stroke="url(#grad2)" 
          strokeWidth="25" 
          strokeLinecap="round" 
          className="opacity-80"
        />
        <path 
          d="M 1200 300 Q 1500 100, 1800 300 T 2400 300 T 3000 300 T 3600 300" 
          stroke="url(#grad3)" 
          strokeWidth="60" 
          strokeLinecap="round" 
          className="opacity-40"
        />
        
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="2400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="2400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="2400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Fade overlay at bottom to blend into the rest of the page */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFC]/50 to-[#FAFAFC]" />
  </div>
)

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle navbar blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
              <iconify-icon icon="solar:magic-stick-3-bold" width="22" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Offerti</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-3 rounded-full backdrop-blur-md border border-slate-200/50 shadow-sm">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How it works</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Sign in</Link>
            <Link 
              to="/dashboard" 
              className="px-6 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <iconify-icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-24 left-4 right-4 bg-white p-6 rounded-3xl shadow-2xl flex flex-col gap-5 border border-slate-100 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}`}>
          <a href="#features" className="text-lg font-semibold text-slate-800 hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="text-lg font-semibold text-slate-800 hover:text-blue-600">How it works</a>
          <a href="#pricing" className="text-lg font-semibold text-slate-800 hover:text-blue-600">Pricing</a>
          <div className="w-full h-px bg-slate-100 my-2" />
          <Link to="/login" className="text-lg font-semibold text-slate-800 text-center py-2">Sign in</Link>
          <Link to="/dashboard" className="px-6 py-4 bg-blue-600 text-white text-center rounded-2xl font-semibold shadow-lg shadow-blue-600/20">
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-32 pb-20">
        <AnimatedBackground />
        
        <main className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white text-blue-700 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm">
            <iconify-icon icon="solar:stars-minimalistic-bold" className="text-blue-500" width="16" />
            <span>Offerti AI 2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.05] mb-8">
            Create winning offers in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">seconds</span>, not hours.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            The intelligent SaaS platform for freelancers and agencies. Let our AI instantly draft professional, high-converting proposals so you can focus on scaling your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-full transition-all duration-300 shadow-xl shadow-blue-600/30 hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Start for free
              <iconify-icon icon="solar:arrow-right-linear" width="20" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold rounded-full transition-all duration-300 shadow-sm border border-slate-200 hover:border-slate-300 flex items-center justify-center gap-3 group hover:-translate-y-1">
              <iconify-icon icon="solar:play-circle-linear" width="22" className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 text-sm font-semibold text-slate-400 flex items-center gap-6 opacity-70">
            <span>No credit card required</span>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>14-day free trial</span>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Cancel anytime</span>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="mt-20 w-full relative max-w-6xl">
            {/* Soft decorative glow behind the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative rounded-[2.5rem] p-2 md:p-3 bg-white/40 backdrop-blur-2xl border border-white shadow-2xl ring-1 ring-slate-900/5 transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/10 to-transparent rounded-[2.5rem] pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
                alt="Dashboard App Preview" 
                className="relative rounded-[2rem] w-full h-[300px] md:h-[600px] object-cover object-top shadow-inner"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Everything you need to <span className="text-blue-600">close more deals</span>.
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Offerti replaces your messy documents and spreadsheets with a clean, AI-powered workflow designed specifically for modern professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Drafting",
                desc: "Describe your project in a few sentences. Our AI generates a comprehensive, persuasive proposal in under 30 seconds.",
                icon: "solar:cpu-bolt-linear",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Smart Templates",
                desc: "Save your best-performing offers as dynamic templates. Reuse and adapt them with dynamic variables across different clients.",
                icon: "solar:folder-with-files-linear",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                title: "Client Tracking",
                desc: "Know exactly when a client opens your offer, reads it, and accepts it. Never wonder if an email got lost in the void again.",
                icon: "solar:chart-square-linear",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-[#FAFAFC] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <iconify-icon icon={feature.icon} width="28" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer CTA */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
            Join hundreds of freelancers and agencies who have stopped writing proposals from scratch.
          </p>
          <Link 
            to="/dashboard" 
            className="inline-flex px-8 py-4 bg-white text-slate-900 hover:bg-blue-50 text-base font-semibold rounded-full transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 items-center justify-center gap-3 group"
          >
            Start your free trial
            <iconify-icon icon="solar:arrow-right-linear" width="20" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}