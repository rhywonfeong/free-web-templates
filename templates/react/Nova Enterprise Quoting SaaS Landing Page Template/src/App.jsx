import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { stats, steps, features, pricing, faqs, chartData } from './data';

// Utility for Tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-neutral-950";
  const variants = {
    primary: "bg-cyan-500 text-neutral-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    ghost: "text-neutral-300 hover:text-white hover:bg-neutral-800"
  };

  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => (
  <div className={cn("mb-16", align === 'center' ? "text-center mx-auto" : "")}>
    {eyebrow && (
      <span className="inline-block mb-3 text-xs font-semibold tracking-wide uppercase text-cyan-400">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
      {title}
    </h2>
    {description && (
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight">
        <iconify-icon icon="simple-icons:nintendogamecube" width="24" height="24" className="text-cyan-400"></iconify-icon>
        Nova
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
        <a href="#product" className="hover:text-white transition-colors">Product</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#resources" className="hover:text-white transition-colors">Resources</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hidden sm:block">Sign in</button>
        <Button>Start free</Button>
      </div>
    </div>
  </nav>
);

const HeroCards = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-20 flex flex-col md:flex-row gap-6 justify-center items-center perspective-1000">
    {/* Card 1: Invoice */}
    <div className="w-full md:w-1/3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-card transform md:-rotate-y-12 md:translate-x-8 hover:z-10 transition-transform duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-cyan-400">
          <iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
        </div>
        <div className="text-sm font-medium">Quote #Q-2049</div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex justify-between items-center text-xs pb-3 border-b border-neutral-800 last:border-0 last:pb-0">
            <span className="text-neutral-400">Enterprise License {i}</span>
            <span className="text-white font-medium">$12,000</span>
          </div>
        ))}
      </div>
    </div>

    {/* Card 2: Main Margin/Pricing (Center) */}
    <div className="w-full md:w-2/5 bg-neutral-900 border border-cyan-500/30 rounded-2xl p-6 shadow-cyan-glow z-10 transform scale-105">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-xs text-neutral-400 mb-1">Total Contract Value</div>
          <div className="text-3xl font-semibold tracking-tight text-white">$48,500</div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
          <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Approved
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-neutral-400">Target Margin</span>
          <span className="text-white">65%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2">
          <div className="bg-cyan-400 h-2 rounded-full w-[65%]"></div>
        </div>
        <div className="flex justify-between items-center text-sm pt-2 border-t border-neutral-800">
          <span className="text-neutral-400">Discount Applied</span>
          <span className="text-red-400">12%</span>
        </div>
      </div>
    </div>

    {/* Card 3: Analytics */}
    <div className="w-full md:w-1/3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-card transform md:rotate-y-12 md:-translate-x-8 hover:z-10 transition-transform duration-500">
      <div className="text-sm font-medium mb-4 flex items-center justify-between">
        Win Rate Trend
        <iconify-icon icon="solar:menu-dots-linear" className="text-neutral-500"></iconify-icon>
      </div>
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', borderRadius: '8px' }} itemStyle={{ color: '#22d3ee' }}/>
            <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300 mb-8 hover:border-cyan-500/50 transition-colors cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span> 
        Introducing Nova 2.0
      </div>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
        Stop quoting blind.
      </h1>
      <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Bring margin intelligence, smart approvals, and dynamic document generation into one enterprise-grade platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="px-8 py-3 text-base">Start free trial</Button>
        <Button variant="secondary" className="px-8 py-3 text-base">Book a demo</Button>
      </div>
      
      <HeroCards />
    </div>
  </section>
);

const StatsRow = () => (
  <div className="border-y border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-neutral-800">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-neutral-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Explainer = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto" id="product">
    <SectionHeading 
      eyebrow="How it works"
      title="From data to deal in three steps"
      description="We've streamlined the entire quoting process so your reps can focus on selling, not spreadsheet administration."
    />
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors group">
          <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
            <iconify-icon icon={step.icon}></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
          <p className="text-neutral-400 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto" id="features">
    <SectionHeading 
      eyebrow="Capabilities"
      title="Everything you need to close"
      description="Enterprise-grade features built with startup-level speed and design."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-neutral-900/50 border border-neutral-800/50 rounded-2xl p-6 hover:bg-neutral-900 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
              <iconify-icon icon={feature.icon}></iconify-icon>
            </div>
            <h3 className="font-semibold text-white">{feature.title}</h3>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const SpecialistSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <div>
          <span className="inline-block mb-3 text-xs font-semibold tracking-wide uppercase text-cyan-400">Meet the Agent</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Your personal pricing sous chef.
          </h2>
          <p className="text-lg text-neutral-400">
            Don't know the optimal discount? Ask Nova. Our AI agent analyzes historical deals to suggest the perfect price point.
          </p>
        </div>
        <ul className="space-y-4">
          {['Context-aware pricing suggestions', 'Automated anomaly detection', 'Natural language interface'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-neutral-300 font-medium">
              <iconify-icon icon="solar:check-circle-linear" className="text-cyan-400 text-xl"></iconify-icon>
              {item}
            </li>
          ))}
        </ul>
        <Button>Explore AI features</Button>
      </div>
      <div className="flex-1 w-full max-w-md">
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 shadow-xl">
          <div className="flex gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon>
            </div>
            <div className="bg-neutral-900 rounded-2xl rounded-tl-none p-4 text-sm text-neutral-300">
              Based on recent deals in the EMEA region, offering a 12% discount on the Enterprise tier yields an 85% win rate while maintaining target margins.
            </div>
          </div>
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
              <iconify-icon icon="solar:user-linear"></iconify-icon>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-50 rounded-2xl rounded-tr-none p-4 text-sm">
              Apply that configuration to Quote #402.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <SectionHeading 
            eyebrow="Pricing"
            title="Simple, transparent plans"
            description="Start for free, scale when you need enterprise controls."
            align="left"
          />
        </div>
        <div className="flex items-center gap-3 bg-neutral-900 p-1.5 rounded-full border border-neutral-800 mb-6 md:mb-12">
          <button 
            onClick={() => setIsAnnual(false)}
            className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", !isAnnual ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:text-white")}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", isAnnual ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:text-white")}
          >
            Annually <span className="ml-1 text-cyan-400 text-xs">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricing.map((plan, idx) => (
          <div key={idx} className={cn(
            "rounded-3xl p-8 relative flex flex-col transition-all",
            plan.highlight 
              ? "bg-neutral-900 border border-cyan-500 shadow-cyan-glow transform md:-translate-y-4" 
              : "bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700"
          )}>
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-cyan-500 text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-neutral-400 mb-6 min-h-[40px]">{plan.description}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
              {plan.price !== "$0" && <span className="text-neutral-500 ml-2">{plan.period}</span>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                  <iconify-icon icon="solar:check-circle-bold" className={plan.highlight ? "text-cyan-400" : "text-neutral-500"}></iconify-icon>
                  {feat}
                </li>
              ))}
            </ul>
            <Button variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <SectionHeading title="Frequently asked questions" />
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={cn("text-neutral-400 transition-transform duration-300", isOpen && "rotate-180")}
                ></iconify-icon>
              </button>
              <div 
                className={cn("px-6 overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0")}
              >
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24 px-6 max-w-5xl mx-auto">
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
        Ready to quote with confidence?
      </h2>
      <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
        Join hundreds of modern sales teams that use Nova to protect margins and close deals faster.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="px-8 py-3">Start your free trial</Button>
        <Button variant="secondary" className="px-8 py-3">Talk to sales</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-neutral-800 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 text-white font-semibold tracking-tight">
        <iconify-icon icon="simple-icons:nintendogamecube" width="20" height="20" className="text-cyan-400"></iconify-icon>
        Nova Inc.
      </div>
      <div className="flex gap-6 text-sm text-neutral-400 font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Security</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <Explainer />
        <FeatureGrid />
        <SpecialistSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}