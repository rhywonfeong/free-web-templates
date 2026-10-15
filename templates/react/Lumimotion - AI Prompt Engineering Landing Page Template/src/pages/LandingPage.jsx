import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionFrame from '../components/ui/SectionFrame'
import LandingHero from '../components/hero/LandingHero'
import PromptCard from '../components/library/PromptCard'
import { WordReveal, CharSlideDown } from '../components/ui/TextAnimations'

gsap.registerPlugin(ScrollTrigger)

const PREVIEW_PROMPTS = [
  {
    id: 1,
    title: 'B2B SaaS Dashboard',
    category: 'Dashboard',
    desc: 'Structured system for complex data tables, metric cards, and sidebar navigation.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/decb0ab1-7420-4c4c-b697-91e7e54b28e5_1600w.png',
    tools: ['claude', 'googlegemini'],
    locked: false
  },
  {
    id: 2,
    title: 'Fintech Mobile App',
    category: 'Mobile',
    desc: 'Transaction history, wallet balance interactions, and quick send actions.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4536c204-9af4-4506-a136-7afb73bba7a4_1600w.png',
    tools: ['claude', 'openai'],
    locked: false
  },
  {
    id: 3,
    title: 'WebGL Marketing Hero',
    category: 'Hero',
    desc: 'Cinematic 3D hero section prompts with scroll-triggered animation structures.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8c88cbb-e881-4280-842d-ecafc3670d74_1600w.png',
    tools: ['claude'],
    locked: true
  },
  {
    id: 4,
    title: 'E-commerce Checkout',
    category: 'Web',
    desc: 'High-converting multi-step checkout flow with order summary and payment forms.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84b886a3-f823-458a-b79b-2b2818dfcdca_1600w.png',
    tools: ['googlegemini', 'openai'],
    locked: true
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    category: 'Component',
    desc: 'Conversational UI patterns, typing indicators, and structured message blocks.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d6b211-9e83-488c-8f3f-42a77b8e9532_1600w.png',
    tools: ['claude', 'googlegemini', 'openai'],
    locked: true
  },
  {
    id: 6,
    title: 'Editorial Blog Layout',
    category: 'Web',
    desc: 'Typography-heavy editorial design with pull quotes and reading progress.',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=80',
    tools: ['claude'],
    locked: true
  }
];

export default function LandingPage() {
  useEffect(() => {
    // Context wraps all GSAP instances to clean them up properly on unmount
    const ctx = gsap.context(() => {
      
      // Initial state setters to prevent FOUC and prep for smooth reveal
      gsap.set('.hero-anim-item', { opacity: 0, y: 40, filter: 'blur(12px)' })
      gsap.set('.scroll-fade-in', { opacity: 0, y: 40, filter: 'blur(12px)' })

      // 1. Initial Load Sequence (Hero Section)
      gsap.to('.hero-anim-item', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1
      })

      // 2. GSAP Masked Staggered Word Reveal (Enhanced with blur/fade)
      const revealSections = document.querySelectorAll('.reveal-section')
      revealSections.forEach(section => {
        const words = section.querySelectorAll('.gsap-word-reveal')
        if (words.length) {
          gsap.fromTo(words,
            { y: "100%", opacity: 0, filter: "blur(8px)" },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.04,
              ease: "power3.out"
            }
          )
        }
      })

      // 3. Scroll Batch Staggered Reveal (Element-by-Element cascade)
      ScrollTrigger.batch('.scroll-fade-in', {
        start: "top 85%",
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.1, // Element by element staggering
            ease: "power3.out",
            overwrite: true
          })
        },
        onLeaveBack: batch => {
          gsap.to(batch, {
            opacity: 0,
            y: 40,
            filter: 'blur(12px)',
            duration: 0.5,
            ease: "power2.in",
            overwrite: true
          })
        }
      })
    })

    return () => ctx.revert();
  }, [])

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <LandingHero />

      {/* 2. HOW IT WORKS */}
      <SectionFrame id="how-it-works" className="py-24 px-6 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c6f91f]/30 bg-[#c6f91f]/5 text-xs text-[#c6f91f] mb-6 uppercase tracking-widest font-geist font-semibold overflow-hidden scroll-fade-in">
              <CharSlideDown text="Simple 4-Step Process" delay={0.2} />
            </div>
            <h2 className="text-3xl md:text-5xl font-geist font-light tracking-tighter text-white mb-6 text-balance">
              <WordReveal>How Lumimotion works</WordReveal>
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-8 text-pretty scroll-fade-in font-geist tracking-tight">
              Generate stunning, production-ready interfaces in minutes with our structured prompt system. No prompt-engineering experience required.
            </p>
            <Link to="/library" className="bg-[#c6f91f] text-black px-8 py-3.5 text-sm hover:bg-[#aade17] transition-colors inline-flex items-center gap-2 scroll-fade-in font-geist tracking-tight font-semibold">
              Start Building
            </Link>
          </div>

          {/* 4-Step Grid with Flashlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/20">
            
            <div className="flashlight-target scroll-fade-in bg-zinc-950 border-r border-b border-white/20">
              <div className="flashlight-content md:p-10 flex flex-col group pt-8 pr-8 pb-8 pl-8 relative">
                <div className="inline-flex border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 mb-6 w-fit font-mono scroll-fade-in">
                  Step 01
                </div>
                <h3 className="text-xl md:text-2xl text-white font-geist font-light tracking-tighter mb-3 scroll-fade-in">
                  Choose Your System
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight scroll-fade-in">
                  Select from our library of structural UI patterns or import your own context to start building.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 scroll-fade-in">
                  <div className="bg-white/5 backdrop-blur-md p-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2.5 bg-white/10 border border-white/10">
                        <div className="w-3 h-3 bg-[#c6f91f]"></div>
                        <span className="text-xs text-white/70 font-mono">Dashboard OS</span>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 bg-white/10 border border-white/10">
                        <div className="w-3 h-3 bg-white/20"></div>
                        <span className="text-xs text-white/70 font-mono">Mobile App</span>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 bg-white/10 border border-white/10">
                        <div className="w-3 h-3 bg-white/20"></div>
                        <span className="text-xs text-white/70 font-mono">Landing Page</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-5 flex flex-col items-center justify-center min-h-[140px]">
                    <div className="border border-dashed border-white/20 w-full h-full flex flex-col items-center justify-center p-4 hover:border-[#c6f91f]/50 transition-colors cursor-pointer bg-white/10">
                      <span className="text-xs text-white/40 font-mono text-center leading-relaxed">Drop context<br/>files here</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flashlight-target scroll-fade-in bg-zinc-950 border-r border-b border-white/20">
              <div className="flashlight-content md:p-10 flex flex-col group pt-8 pr-8 pb-8 pl-8 relative">
                <div className="inline-flex border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 mb-6 w-fit font-mono scroll-fade-in">
                  Step 02
                </div>
                <h3 className="text-xl md:text-2xl text-white font-geist font-light tracking-tighter mb-3 scroll-fade-in">
                  Configure Parameters
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight scroll-fade-in">
                  Use our structured JSON variables to inject your specific brand, theme, and copy requirements.
                </p>
                <div className="mt-8 border border-white/10 bg-white/5 backdrop-blur-md p-5 scroll-fade-in">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-[10px] text-white/40 font-mono">theme_mode</div>
                      <div className="flex-1 h-1 bg-white/10 relative">
                        <div className="absolute left-0 top-0 w-2/3 h-1 bg-[#c6f91f]"></div>
                      </div>
                      <div className="w-12 text-right text-[10px] text-[#c6f91f] font-mono">"dark"</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-[10px] text-white/40 font-mono">accent_hex</div>
                      <div className="flex-1 h-1 bg-white/10 relative">
                        <div className="absolute left-1/4 top-0 w-1/2 h-1 bg-white/40"></div>
                      </div>
                      <div className="w-12 text-right text-[10px] text-white/80 font-mono">"#c6f9"</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-[10px] text-white/40 font-mono">font_family</div>
                      <div className="flex-1 h-1 bg-white/10 relative">
                        <div className="absolute left-0 top-0 w-3/4 h-1 bg-white/40"></div>
                      </div>
                      <div className="w-12 text-right text-[10px] text-white/80 font-mono">"Inter"</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-[10px] text-white/40 font-mono">Status:
                      <span className="text-[#c6f91f] ml-1">Valid JSON</span>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#c6f91f]/20 to-[#c6f91f]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flashlight-target scroll-fade-in bg-zinc-950 border-r border-b border-white/20">
              <div className="flashlight-content p-8 md:p-10 flex flex-col relative group">
                <div className="inline-flex border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 mb-6 w-fit font-mono scroll-fade-in">
                  Step 03
                </div>
                <h3 className="text-xl md:text-2xl text-white font-geist font-light tracking-tighter mb-3 scroll-fade-in">
                  Preview &amp; Refine
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight scroll-fade-in">
                  Review the structural constraints before passing them to the AI to ensure perfect fidelity.
                </p>
                <div className="mt-8 space-y-3 scroll-fade-in">
                  <div className="border border-white/10 bg-white/5 backdrop-blur-md p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Constraint Check</span>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#c6f91f] animate-pulse"></div>
                        <span className="text-[10px] text-[#c6f91f] font-mono">Ready</span>
                      </div>
                    </div>
                    <div className="aspect-[21/9] bg-white/10 border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      <div className="w-full max-w-xs border border-[#c6f91f]/30 bg-[#c6f91f]/5 p-3 relative z-10 flex flex-col gap-2 shadow-[0_0_20px_rgba(198,249,31,0.05)]">
                        <div className="w-1/3 h-1.5 bg-[#c6f91f]/50"></div>
                        <div className="w-full h-1 bg-white/20"></div>
                        <div className="w-2/3 h-1 bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-white/10 bg-white/5 backdrop-blur-md p-3 flex items-center justify-between">
                      <span className="text-[10px] text-white/50 font-mono">Tokens</span><span className="text-xs text-white">2,450</span>
                    </div>
                    <div className="border border-white/10 bg-white/5 backdrop-blur-md p-3 flex items-center justify-between">
                      <span className="text-[10px] text-white/50 font-mono">Format</span><span className="text-[#c6f91f] text-xs">React/TW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flashlight-target scroll-fade-in bg-zinc-950 border-r border-b border-white/20">
              <div className="flashlight-content p-8 md:p-10 flex flex-col relative group">
                <div className="inline-flex border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 mb-6 w-fit font-mono scroll-fade-in">
                  Step 04
                </div>
                <h3 className="text-xl md:text-2xl text-white font-geist font-light tracking-tighter mb-3 scroll-fade-in">
                  Copy &amp; Deploy
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight scroll-fade-in">
                  Copy the optimized prompt block into your favorite LLM to generate pixel-perfect UI code instantly.
                </p>
                <div className="mt-8 space-y-px bg-white/10 border border-white/10 flex flex-col scroll-fade-in">
                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-md p-3 md:p-4">
                    <div>
                      <div className="text-xs text-white font-mono mb-1">Claude 3.5 Sonnet</div>
                      <div className="text-[10px] text-white/40 font-geist tracking-tight">Optimized for React output</div>
                    </div>
                    <button className="px-4 py-2 bg-[#c6f91f] text-black text-[10px] uppercase tracking-wider hover:bg-[#aade17] transition-colors font-geist font-semibold tracking-tight">Copy</button>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-md p-3 md:p-4">
                    <div>
                      <div className="text-xs text-white font-mono mb-1">Gemini 1.5 Pro</div>
                      <div className="text-[10px] text-white/40 font-geist tracking-tight">Optimized for large context</div>
                    </div>
                    <button className="px-4 py-2 border border-white/10 bg-white/5 text-white text-[10px] uppercase tracking-wider hover:bg-white/10 transition-colors font-geist font-semibold tracking-tight">Copy</button>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-md p-3 md:p-4">
                    <div>
                      <div className="text-xs text-white font-mono mb-1">GPT-4o</div>
                      <div className="text-[10px] text-white/40 font-geist tracking-tight">General purpose layout</div>
                    </div>
                    <button className="px-4 py-2 border border-white/10 bg-white/5 text-white text-[10px] uppercase tracking-wider hover:bg-white/10 transition-colors font-geist font-semibold tracking-tight">Copy</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </SectionFrame>

      {/* 3. PROMPT LIBRARY PREVIEW */}
      <SectionFrame id="library" className="py-20 px-6 bg-transparent relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-fade-in">
          <div>
            <h2 className="text-2xl md:text-3xl font-geist font-light tracking-tighter mb-3">Prompt Library</h2>
            <p className="text-white/50 text-sm max-w-md font-geist tracking-tight">Curated templates engineered for specific product contexts. Free prompts are fully accessible.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/library" className="text-xs px-4 py-2 bg-[#c6f91f]/5 border border-[#c6f91f]/30 text-[#c6f91f] hover:bg-[#c6f91f]/10 transition-colors font-geist tracking-tight font-medium flex items-center gap-2 scroll-fade-in">
              Browse Entire Library <iconify-icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PREVIEW_PROMPTS.map((prompt, index) => (
            <PromptCard key={prompt.id} prompt={prompt} index={index} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center scroll-fade-in">
          <Link to="/library" className="text-sm text-white/50 hover:text-white flex items-center gap-2 transition-colors font-geist tracking-tight">
            View full library (42+ templates) <iconify-icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </SectionFrame>

      {/* 4. DIFFERENTIATION (Bento Grid) */}
      <SectionFrame id="differentiation" className="py-32 px-6 bg-transparent relative z-10 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c6f91f]/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c6f91f]/30 bg-[#c6f91f]/5 text-xs text-[#c6f91f] mb-6 uppercase tracking-widest font-geist font-semibold overflow-hidden scroll-fade-in">
              <CharSlideDown text="The Advantage" delay={0.2} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light tracking-tighter text-white mb-6 text-balance">
              <WordReveal>Built for systems,</WordReveal><br className="hidden md:block" /> <WordReveal>not sketches.</WordReveal>
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto text-pretty scroll-fade-in font-geist tracking-tight">
              Why Lumimotion produces production-ready, pixel-perfect results while standard AI prompts generate uninspired, generic layouts.
            </p>
          </div>

          {/* Premium Bento Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 w-full relative md:auto-rows-[420px]">
  
            <div className="md:col-span-7 border border-white/10 bg-[#05080A] p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors group relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] scroll-fade-in">
              <div className="flex-1 w-full relative mb-8 border border-white/10 bg-[#0B0F12] overflow-hidden flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc49165b-655c-4598-a8bc-ac2d1370bb45_original.jpg" alt="System Architecture Layout" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <iconify-icon icon="solar:ghost-linear" class="text-xl text-[#c6f91f]"></iconify-icon>
                  <h3 className="text-xl md:text-2xl font-geist font-light tracking-tighter text-white">No Generic Slop</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed max-w-md font-geist tracking-tight">
                  Standard AI generates uninspired layouts. Our structural references force the AI to respect typography hierarchy, negative space, and modern design conventions.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 border border-white/10 bg-[#05080A] p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors group relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] scroll-fade-in">
              <div className="flex-1 w-full relative mb-8 flex items-center justify-center bg-[#0B0F12] border border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
                
                <div className="w-full max-w-[260px] border border-white/10 bg-[#05080A] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] relative group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-[#0B0F12]">
                    <div className="w-2 h-2 rounded-none bg-white/20"></div>
                    <div className="w-2 h-2 rounded-none bg-white/20"></div>
                    <div className="w-2 h-2 rounded-none bg-white/20"></div>
                  </div>
                  <div className="p-5 font-mono text-[11px] md:text-xs leading-loose text-white/80">
                    <div><span className="text-[#c6f91f]">"layout"</span>: <span className="text-white">"bento_grid"</span>,</div>
                    <div><span className="text-[#c6f91f]">"spacing"</span>: <span className="text-white">"relaxed"</span>,</div>
                    <div><span className="text-[#c6f91f]">"typography"</span>: {"{"}</div>
                    <div className="pl-4"><span className="text-[#c6f91f]">"family"</span>: <span className="text-white">"Inter"</span>,</div>
                    <div className="pl-4"><span className="text-[#c6f91f]">"tracking"</span>: <span className="text-white">"tight"</span></div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <iconify-icon icon="solar:layers-linear" class="text-xl text-[#c6f91f]"></iconify-icon>
                  <h3 className="text-xl md:text-2xl font-geist font-light tracking-tighter text-white">Structured Parameters</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed font-geist tracking-tight">
                  Templates use JSON-like parameter structures that models understand perfectly. Less ambiguity means fewer visual hallucinations.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 border border-white/10 bg-[#05080A] p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors group relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] scroll-fade-in">
              <div className="flex-1 w-full relative mb-8 flex items-center justify-center bg-[#0B0F12] border border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24 border border-[#c6f91f]/30 bg-[#c6f91f]/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10">
                  
                  <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] text-[#c6f91f] font-mono">
                    <div className="w-[1px] h-4 bg-[#c6f91f]/50"></div>
                    <span>256px</span>
                    <div className="w-[1px] h-4 bg-[#c6f91f]/50"></div>
                  </div>
                  
                  <div className="absolute top-0 bottom-0 -right-6 flex flex-col items-center justify-between text-[10px] text-[#c6f91f] font-mono">
                    <div className="w-4 h-[1px] bg-[#c6f91f]/50"></div>
                    <span className="-rotate-90">128px</span>
                    <div className="w-4 h-[1px] bg-[#c6f91f]/50"></div>
                  </div>
                  
                  <div className="w-2 h-2 bg-[#c6f91f] absolute -top-1 -left-1 shadow-[0_0_8px_#c6f91f]"></div>
                  <div className="w-2 h-2 bg-[#c6f91f] absolute -bottom-1 -right-1 shadow-[0_0_8px_#c6f91f]"></div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <iconify-icon icon="solar:pen-new-round-linear" class="text-xl text-[#c6f91f]"></iconify-icon>
                  <h3 className="text-xl md:text-2xl font-geist font-light tracking-tighter text-white">Designer Crafted</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed font-geist tracking-tight">
                  Every system is written and tested by a senior product designer. Variables and structural constraints are tuned for professional output.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 border border-white/10 bg-[#05080A] p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors group relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] scroll-fade-in">
              <div className="flex-1 w-full relative mb-8 flex flex-col items-center justify-center bg-[#0B0F12] border border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] p-6 overflow-hidden">
                
                <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-white/10 bg-[#05080A] flex items-center justify-center text-white/60">
                      <iconify-icon icon="solar:copy-linear" class="text-lg"></iconify-icon>
                    </div>
                    
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-[#c6f91f]/50 relative">
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-[#c6f91f] shadow-[0_0_12px_#c6f91f]"></div>
                    </div>
                    
                    <div className="w-10 h-10 border border-[#c6f91f]/30 bg-[#c6f91f]/10 flex items-center justify-center text-[#c6f91f]">
                      <iconify-icon icon="solar:magic-stick-3-linear" class="text-lg"></iconify-icon>
                    </div>
                    
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c6f91f]/50 to-white/10 relative">
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white/50"></div>
                    </div>
                    
                    <div className="w-10 h-10 border border-white/10 bg-[#05080A] flex items-center justify-center text-white/60 group-hover:border-[#c6f91f]/50 group-hover:text-[#c6f91f] transition-all duration-700">
                      <iconify-icon icon="solar:rocket-linear" class="text-lg"></iconify-icon>
                    </div>
                  </div>
                  
                  <div className="border border-white/10 bg-[#05080A] p-3 relative overflow-hidden mt-4">
                    <div className="absolute inset-y-0 left-0 bg-[#c6f91f]/10 w-[0%] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Status: Generating</span>
                      <span className="text-[10px] font-mono text-[#c6f91f] flex items-center gap-2 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-[#c6f91f] animate-pulse"></span>
                        Production Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <iconify-icon icon="solar:clock-circle-linear" class="text-xl text-[#c6f91f]"></iconify-icon>
                  <h3 className="text-xl md:text-2xl font-geist font-light tracking-tighter text-white">Immediate Value</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed max-w-md font-geist tracking-tight">
                  Stop spending hours arguing with an LLM to fix padding. Copy the template, fill in your specifics, and get beautifully structured code instantly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionFrame>

      {/* 5. TESTIMONIALS (Asymmetric Bento) */}
      <SectionFrame id="testimonials" className="py-24 md:py-32 px-6 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c6f91f]/30 bg-[#c6f91f]/5 text-xs text-[#c6f91f] mb-6 uppercase tracking-widest font-geist font-semibold overflow-hidden scroll-fade-in">
              <CharSlideDown text="Wall of Love" delay={0.2} />
            </div>
            <h2 className="text-3xl md:text-5xl font-geist font-light tracking-tighter text-white mb-6 text-balance">
               <WordReveal>Trusted by product builders</WordReveal>
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto text-pretty scroll-fade-in font-geist tracking-tight">
              See how teams are using our structured prompt system to bypass generic AI outputs and ship production-ready UI faster.
            </p>
          </div>

          {/* 2/3 1/3 Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Testimonial 1 */}
            <div className="md:col-span-8 border border-white/10 bg-white/5 backdrop-blur-md flashlight-target scroll-fade-in">
              <div className="flashlight-content p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c6f91f]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#c6f91f]/10 transition-colors duration-700"></div>
                
                <div className="relative z-10 mb-8 md:mb-12">
                  <div className="flex gap-1 mb-6 text-[#c6f91f] scroll-fade-in">
                    {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" class="text-sm"></iconify-icon>)}
                  </div>
                  <p className="text-lg md:text-2xl text-white font-geist font-light leading-relaxed tracking-tighter max-w-2xl text-pretty scroll-fade-in">
                    "Before Lumimotion, I spent hours arguing with Claude trying to get the spacing right on complex dashboards. These structural prompts act like a straitjacket for the AI, forcing it to output perfect Tailwind layouts on the first try. It's completely changed my workflow."
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-auto scroll-fade-in">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5866f61c-e537-452b-9d35-053e985d625b_320w.webp" alt="Marcus T." className="w-12 h-12 rounded-full border border-white/20 grayscale opacity-80" />
                  <div>
                    <div className="text-white font-geist font-light tracking-tighter text-sm">Marcus T.</div>
                    <div className="text-white/40 text-xs font-geist tracking-tight">Lead Product Designer @ FinTech Co</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="md:col-span-4 border border-white/10 bg-white/5 backdrop-blur-md flashlight-target scroll-fade-in">
              <div className="flashlight-content p-8 md:p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300">
                <div className="relative z-10 mb-8 md:mb-12">
                  <div className="flex gap-1 mb-6 text-[#c6f91f] scroll-fade-in">
                    {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" class="text-sm"></iconify-icon>)}
                  </div>
                  <p className="text-base text-white/80 leading-relaxed max-w-sm font-geist tracking-tight scroll-fade-in">
                    "The JSON-like constraints are brilliant. I just paste the template, inject my brand colors, and get a completely custom, usable component instantly. No more generic slop."
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-auto scroll-fade-in">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/461c2bb1-9a06-404e-b80f-18cf9b924a4d_320w.webp" alt="Sarah J." className="w-10 h-10 rounded-full border border-white/20 grayscale opacity-80" />
                  <div>
                    <div className="text-white font-geist font-light tracking-tighter text-sm">Sarah J.</div>
                    <div className="text-white/40 text-xs font-geist tracking-tight">Frontend Engineer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="md:col-span-4 border border-white/10 bg-white/5 backdrop-blur-md flashlight-target scroll-fade-in">
              <div className="flashlight-content p-8 md:p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300">
                <div className="relative z-10 mb-8 md:mb-12">
                  <div className="flex gap-1 mb-6 text-[#c6f91f] scroll-fade-in">
                     {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" class="text-sm"></iconify-icon>)}
                  </div>
                  <p className="text-base text-white/80 leading-relaxed max-w-sm font-geist tracking-tight scroll-fade-in">
                    "I was skeptical paying for prompts, but the ROI was immediate. The mobile app views alone saved me two weeks of iterative design work."
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-auto scroll-fade-in">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp" alt="David L." className="w-10 h-10 rounded-full border border-white/20 grayscale opacity-80" />
                  <div>
                    <div className="text-white font-geist font-light tracking-tighter text-sm">David L.</div>
                    <div className="text-white/40 text-xs font-geist tracking-tight">Startup Founder</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="md:col-span-8 border border-white/10 bg-white/5 backdrop-blur-md flashlight-target scroll-fade-in">
              <div className="flashlight-content p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
                
                <div className="relative z-10 mb-8 md:mb-12">
                  <div className="flex gap-1 mb-6 text-[#c6f91f] scroll-fade-in">
                     {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" class="text-sm"></iconify-icon>)}
                  </div>
                  <p className="text-lg md:text-2xl text-white font-geist font-light leading-relaxed tracking-tighter max-w-2xl text-pretty scroll-fade-in">
                    "As a developer with zero design skills, Lumimotion is my cheat code. The prompts are structured so logically that even Gemini Pro outputs stunning, accessible React code. My side projects finally look like they were built by a professional agency."
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-auto scroll-fade-in">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp" alt="Elena M." className="w-12 h-12 rounded-full border border-white/20 grayscale opacity-80" />
                  <div>
                    <div className="text-white font-geist font-light tracking-tighter text-sm">Elena M.</div>
                    <div className="text-white/40 text-xs font-geist tracking-tight">Full-stack Developer</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </SectionFrame>

      {/* 6. CTA */}
      <SectionFrame className="py-32 px-6 flex flex-col items-center text-center bg-transparent relative z-10">
        <h2 className="text-4xl md:text-5xl font-geist font-light tracking-tighter mb-6 max-w-2xl text-balance reveal-section text-white">
          <WordReveal>Stop wasting time</WordReveal> <br className="hidden sm:block" /> <WordReveal>writing prompts.</WordReveal>
        </h2>
        <p className="text-white/60 text-base mb-10 scroll-fade-in font-geist tracking-tight">Start building better interfaces today.</p>
        <Link to="/library" className="bg-white text-black px-8 py-4 text-sm hover:bg-white/90 transition-colors flex items-center gap-2 scroll-fade-in font-geist tracking-tight font-medium">
          Explore Free Prompts <iconify-icon icon="solar:arrow-right-linear" />
        </Link>
      </SectionFrame>

      {/* 7. FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 max-w-6xl mx-auto scroll-fade-in">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:layers-minimalistic-linear" class="text-xl text-[#c6f91f]" />
              <span className="font-geist tracking-tight font-medium text-sm text-white">Lumimotion</span>
            </div>
            <p className="text-xs text-white/50 max-w-xs font-geist tracking-tight">
              Premium, editorial, system-driven prompt templates for designers and developers.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-geist tracking-tight font-medium text-white mb-2 uppercase tracking-widest">Platform</h4>
            <Link to="/library" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">Prompt Library</Link>
            <Link to="/pricing" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">Pricing</Link>
            <a href="#how-it-works" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">How it works</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-geist tracking-tight font-medium text-white mb-2 uppercase tracking-widest">Legal</h4>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">Terms of Service</a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">Privacy Policy</a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors font-geist tracking-tight">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 scroll-fade-in">
          <p className="text-[10px] text-white/40 font-geist tracking-tight">© {new Date().getFullYear()} Lumimotion. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" /></a>
          </div>
        </div>
      </footer>

    </div>
  )
}