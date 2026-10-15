import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import AnimatedNexusEcosystemHeroSection from '../animated-nexus-ecosystem-hero-section.tsx';

// --- Shared UI Components ---
const Button = ({ children, variant = 'primary', className, asChild, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm focus:ring-slate-900",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    glow: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] focus:ring-blue-500",
    danger: "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300 focus:ring-red-500"
  };
  
  const Comp = asChild ? React.Fragment : "button";
  const child = asChild ? __auraEnsureRenderableChild(children) : null;

  if (asChild && child) {
    return React.cloneElement(child, {
      className: clsx(baseStyle, variants[variant], className, child.props.className),
      ...props
    });
  }

  return (
    <Comp className={clsx(baseStyle, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
};

const Input = ({ label, helperText, error, id, className, ...props }) => (
  <div className={clsx("flex flex-col gap-1.5 w-full", className)}>
    {label && <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>}
    <input
      id={id}
      className={clsx(
        "w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow",
        error ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
      )}
      {...props}
    />
    {(helperText || error) && (
      <span className={clsx("text-xs", error ? "text-red-500" : "text-slate-500")}>
        {error || helperText}
      </span>
    )}
  </div>
);

const Toggle = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between py-2 w-full">
    <div className="flex flex-col pr-4">
      {label && <span className="text-sm font-medium text-slate-900">{label}</span>}
      {description && <span className="text-xs text-slate-500">{description}</span>}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={clsx(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        checked ? "bg-blue-600" : "bg-slate-200"
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  </div>
);

const AuraBackground = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initUnicornStudio = () => {
      if (
        window.UnicornStudio &&
        typeof window.UnicornStudio.init === 'function' &&
        !window.UnicornStudio.isInitialized
      ) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    const existingScript = document.querySelector('script[data-unicorn-studio]');
    if (existingScript) {
      initUnicornStudio();
      existingScript.addEventListener('load', initUnicornStudio);
      return () => existingScript.removeEventListener('load', initUnicornStudio);
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
    script.async = true;
    script.dataset.unicornStudio = 'true';
    script.addEventListener('load', initUnicornStudio);
    document.head.appendChild(script);

    return () => script.removeEventListener('load', initUnicornStudio);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white/40 to-white/90" />
      <div data-us-project="ty3N7ZPaIU7KlWixQFIc" className="absolute inset-0 h-full w-full"></div>
    </div>
  );
};

// --- Layout Components ---

const Navbar = () => {
  const location = useLocation();
  
  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={clsx(
          "text-sm font-medium transition-colors",
          isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <iconify-icon icon="solar:smart-home-angle-bold" width="20"></iconify-icon>
          </div>
          <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">ArijAPI</Link>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/">Overview</NavLink>
          <NavLink to="/features">Features & Settings</NavLink>
          <NavLink to="/ui-showcase">UI Showcase</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
          <Button variant="primary">Start Free Trial</Button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-12">
    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
          <iconify-icon icon="solar:smart-home-angle-bold" width="14"></iconify-icon>
        </div>
        <span className="text-sm font-semibold text-slate-900">ArijAPI</span>
      </div>
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} ArijAPI Inc. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
        <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="simple-icons:github" width="20"></iconify-icon></a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
        <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[800px] rounded-full bg-blue-500/20 blur-[100px]"></div>
        </div>

        <AuraBackground />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1.5 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
            <span className="text-sm font-medium text-blue-800">ArijAPI 2.0 is live</span>
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
            Automate your Messenger. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Multiply your orders.</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            The AI platform that manages your Facebook Business chats, detects intent, collects details, and closes orders entirely on autopilot.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="glow" className="h-12 px-8 text-base">Get Started for Free</Button>
            <Button variant="secondary" className="h-12 px-8 text-base bg-white/50 backdrop-blur">
              <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
              Watch Demo
            </Button>
          </div>

          <div className="relative mx-auto mt-20 max-w-4xl">
            <div className="relative rounded-2xl border border-slate-200/60 bg-white/40 p-2 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <img className="inline-block w-8 h-8 object-cover bg-center rounded-full ring-white ring-2" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt=""/>
                      <img className="inline-block w-8 h-8 object-cover bg-center ring-white ring-2 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt=""/>
                      <img className="inline-block w-8 h-8 object-cover bg-center ring-white ring-2 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt=""/>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-slate-900">Active Conversations</p>
                      <p className="text-slate-500">12 currently being handled by AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    AI Agent Online
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex w-3/4 flex-col gap-2 rounded-2xl rounded-tl-none bg-slate-100 p-4 text-sm text-slate-800">
                    <p>Hi! I'd like to order 2 pairs of the running shoes from your recent post.</p>
                  </div>
                  
                  <div className="flex w-3/4 flex-col gap-2 rounded-2xl rounded-tr-none bg-blue-600 p-4 text-sm text-white self-end relative animate-float-delayed">
                    <div className="absolute -left-10 top-2 rounded-full bg-white p-1.5 shadow-sm border border-slate-100">
                      <iconify-icon icon="solar:magic-stick-3-bold" class="text-blue-600 block" width="16"></iconify-icon>
                    </div>
                    <p>Absolutely! I can help you with that. Which size and color would you prefer?</p>
                  </div>

                   <div className="flex w-1/4 flex-col gap-2 rounded-2xl rounded-tl-none bg-slate-100 p-4 self-start">
                     <div className="flex items-center gap-1">
                        <div className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                        <div className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                        <div className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 animate-float flex-col gap-2 rounded-xl border border-slate-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-md md:flex">
               <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                   <iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-900">Order Confirmed</p>
                   <p className="text-xs text-slate-500">Just now via Messenger</p>
                 </div>
               </div>
               <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-sm">
                 <span className="text-slate-600">Total</span>
                 <span className="font-semibold text-slate-900">$129.00</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/50 bg-white/50 py-10 backdrop-blur-sm relative z-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6">Trusted by 2,000+ modern businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <iconify-icon icon="simple-icons:meta" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:shopify" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:stripe" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:zapier" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:slack" width="32"></iconify-icon>
          </div>
        </div>
      </section>

      <section className="h-screen min-h-[720px] bg-[#fafafa]">
        <AnimatedNexusEcosystemHeroSection />
      </section>
    </>
  );
};

const FeaturesPage = () => {
  const [toggles, setToggles] = useState({
    autoReply: true,
    collectPayments: false,
    syncShopify: true,
    notifyOnEscalation: true,
    requireApproval: false,
    debugMode: false
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 mb-4">
            <iconify-icon icon="solar:settings-minimalistic-linear" class="text-blue-600" width="16"></iconify-icon>
            <span className="text-sm font-medium text-blue-800">Workspace Settings</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            Feature Configuration
          </h1>
          <p className="text-base text-slate-600">
            Manage your AI agents, configure routing rules, and connect your e-commerce tools from a single control panel.
          </p>
        </div>

        {/* 1-1-1 Equal Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Agent Identity & AI */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <iconify-icon icon="solar:robot-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Agent Identity</h2>
                  <p className="text-xs text-slate-500">Configure how the AI introduces itself.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Input 
                  label="Display Name" 
                  id="agentName" 
                  defaultValue="Ariona Assistant" 
                  helperText="Visible to customers in Messenger."
                />
                
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-slate-700">Tone of Voice</label>
                  <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>Professional & Helpful</option>
                    <option>Friendly & Casual</option>
                    <option>Energetic & Sales-focused</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Toggle 
                    label="Enable Auto-Reply" 
                    description="Instantly respond to incoming messages."
                    checked={toggles.autoReply}
                    onChange={() => handleToggle('autoReply')}
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button variant="primary" className="w-full">Save Identity Settings</Button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
               <div className="mb-5 flex items-center gap-3">
                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <iconify-icon icon="solar:shield-keyhole-minimalistic-linear" width="18"></iconify-icon>
                 </div>
                 <h2 className="text-sm font-semibold text-slate-900">Danger Zone</h2>
               </div>
               <p className="text-xs text-slate-500 mb-4">Temporarily halt all AI responses and revert to manual inbox management.</p>
               <Button variant="danger" className="w-full">Pause Agent Globally</Button>
            </div>
          </div>

          {/* Column 2: Workflow & Routing */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex-1">
              <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Chat Routing</h2>
                  <p className="text-xs text-slate-500">Rules for escalation and logic.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Toggle 
                  label="Collect Payments" 
                  description="Send Stripe links automatically."
                  checked={toggles.collectPayments}
                  onChange={() => handleToggle('collectPayments')}
                />
                <div className="h-px w-full bg-slate-100 my-2"></div>
                <Toggle 
                  label="Notify on Escalation" 
                  description="Ping Slack when human is needed."
                  checked={toggles.notifyOnEscalation}
                  onChange={() => handleToggle('notifyOnEscalation')}
                />
                <div className="h-px w-full bg-slate-100 my-2"></div>
                <Toggle 
                  label="Require Approval" 
                  description="Review drafts before AI sends."
                  checked={toggles.requireApproval}
                  onChange={() => handleToggle('requireApproval')}
                />
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <Input 
                  label="Escalation Email" 
                  id="escalationEmail" 
                  type="email"
                  defaultValue="support@store.com" 
                  helperText="Where complex queries are forwarded."
                />
              </div>
              
               <div className="mt-6 flex justify-end gap-3">
                 <Button variant="secondary">Discard</Button>
                 <Button variant="primary">Apply Rules</Button>
               </div>
            </div>
          </div>

          {/* Column 3: Integrations & Limits */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  <iconify-icon icon="solar:plug-circle-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Connections</h2>
                  <p className="text-xs text-slate-500">Active integrations and API status.</p>
                </div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3">
                      <iconify-icon icon="simple-icons:shopify" class="text-[#96bf48]" width="20"></iconify-icon>
                      <span className="text-sm font-medium text-slate-900">Shopify Sync</span>
                    </div>
                    <Toggle checked={toggles.syncShopify} onChange={() => handleToggle('syncShopify')} />
                 </div>
                 
                 <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-3">
                      <iconify-icon icon="simple-icons:stripe" class="text-[#635BFF]" width="20"></iconify-icon>
                      <span className="text-sm font-medium text-slate-900">Stripe Payments</span>
                    </div>
                    <Button variant="secondary" className="px-2 py-1 text-xs h-auto">Configure</Button>
                 </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-700">API Usage (Monthly)</span>
                  <span className="text-xs text-slate-500">4,200 / 10,000</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <iconify-icon icon="solar:star-fall-bold" width="64"></iconify-icon>
              </div>
              <h3 className="text-sm font-semibold text-blue-900 mb-1">Upgrade to Scale</h3>
              <p className="text-xs text-blue-700/80 mb-4 pr-8">Get custom AI personalities, dedicated support, and higher limits.</p>
              <Button variant="primary" className="bg-blue-600 hover:bg-blue-700 text-white w-full shadow-sm">View Plans</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const UIShowcase = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-3">UI Showcase</h1>
          <p className="text-base text-slate-600 max-w-2xl">
            A comprehensive guide to the design system, components, and interactive elements used across the ArionaAPI platform.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Typography */}
          <section>
            <div className="border-b border-slate-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">Typography</h2>
              <p className="text-sm text-slate-500 mt-1">Geist Sans for headings, Inter for body text.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-slate-400 mb-2">Display (text-5xl)</div>
                  <h1 className="text-5xl font-semibold tracking-tight text-slate-900">Automate your store</h1>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Heading 1 (text-4xl)</div>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Feature Configuration</h1>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Heading 2 (text-3xl)</div>
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Simple, scale-friendly</h2>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Heading 3 (text-2xl)</div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Track Every Order</h3>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-slate-400 mb-2">Body Large (text-lg)</div>
                  <p className="text-lg text-slate-600">The AI platform that manages your Facebook Business chats, detects intent, collects details, and closes orders entirely on autopilot.</p>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Body Default (text-base)</div>
                  <p className="text-base text-slate-600">Connect Messenger, orders, payments, and fulfillment in one automated workflow built for social commerce teams.</p>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Body Small (text-sm)</div>
                  <p className="text-sm text-slate-500">Temporarily halt all AI responses and revert to manual inbox management. This action can be undone at any time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <div className="border-b border-slate-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">Buttons</h2>
              <p className="text-sm text-slate-500 mt-1">Interactive elements for user actions.</p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Primary</span>
                <Button variant="primary">Save Changes</Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Secondary</span>
                <Button variant="secondary">Cancel</Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Ghost</span>
                <Button variant="ghost">Sign In</Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Glow</span>
                <Button variant="glow">Start Free Trial</Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Danger</span>
                <Button variant="danger">Delete Account</Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">With Icon</span>
                <Button variant="secondary">
                  <iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                  Export Data
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">Disabled State</span>
                <Button variant="primary" disabled>Processing...</Button>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section>
            <div className="border-b border-slate-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">Form Elements</h2>
              <p className="text-sm text-slate-500 mt-1">Inputs, toggles, and selections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <Input 
                  label="Standard Input" 
                  placeholder="Enter your name" 
                  id="ui-input-1" 
                />
                <Input 
                  label="Input with Helper Text" 
                  placeholder="name@company.com" 
                  helperText="We'll never share your email."
                  id="ui-input-2" 
                />
                <Input 
                  label="Input with Error" 
                  defaultValue="invalid-email"
                  error="Please enter a valid email address."
                  id="ui-input-3" 
                />
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-slate-700">Select Dropdown</label>
                  <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <Toggle 
                    label="Basic Toggle" 
                    checked={true} 
                    onChange={() => {}} 
                  />
                  <div className="h-px bg-slate-100 my-2"></div>
                  <Toggle 
                    label="Toggle with Description" 
                    description="This explains what happens when enabled."
                    checked={false} 
                    onChange={() => {}} 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Cards & Containers */}
          <section>
             <div className="border-b border-slate-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">Cards & Containers</h2>
              <p className="text-sm text-slate-500 mt-1">Surfaces for grouping related content.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Standard Card</h3>
                  <p className="text-sm text-slate-500 mb-4">A basic white card with a subtle border and soft shadow. Used for most content blocks.</p>
                  <Button variant="secondary" className="w-full">Action</Button>
               </div>

               <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-blue-900 mb-2">Tinted Card</h3>
                  <p className="text-sm text-blue-700/80 mb-4">Used to highlight premium features, warnings, or special informational blocks.</p>
                  <Button variant="primary" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Action</Button>
               </div>

               <div className="relative rounded-2xl border border-slate-200/60 bg-white/40 p-6 shadow-xl backdrop-blur-xl">
                  <div className="absolute top-3 right-3 flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Glassmorphism</h3>
                  <p className="text-sm text-slate-600 mb-4">Used sparingly over complex backgrounds like the hero section to maintain legibility while looking modern.</p>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900 flex flex-col relative">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/ui-showcase" element={<UIShowcase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function __auraEnsureRenderableChild(candidate) {
  const renderedChildren = (Array.isArray(candidate) ? candidate : [candidate]).filter(
    (child) => child !== undefined && child !== null && child !== false
  );

  if (renderedChildren.length === 1 && React.isValidElement(renderedChildren[0])) {
    return renderedChildren[0];
  }

  return <div style={{ display: "contents" }}>{renderedChildren}</div>;
}
