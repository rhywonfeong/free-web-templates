import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Subtle, calm enterprise animations
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from('.hero-text > *', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      });

      // Layered UI visual reveal
      gsap.from('.ui-layer', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });

      // Standard section reveals
      document.querySelectorAll('.fade-up-section').forEach(section => {
        gsap.from(section, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full" ref={heroRef}>
      {/* Background canvas tint */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-recon-bg-cream to-transparent -z-10"></div>

      {/* 6.1 Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1328px] bg-recon-surface-card/86 backdrop-blur-md border border-recon-border/72 rounded-[18px] h-[68px] flex items-center justify-between px-6 z-50 shadow-sm transition-all duration-300">
        <div className="flex items-center gap-2 text-recon-text-strong font-medium text-lg">
          <iconify-icon icon="solar:layers-minimalistic-bold" className="text-recon-pine text-2xl"></iconify-icon>
          ReconLayer
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-recon-green-muted">
          <a href="#product" className="hover:text-recon-text-strong transition-colors">Product</a>
          <a href="#use-cases" className="hover:text-recon-text-strong transition-colors">Use cases</a>
          <a href="#how-it-works" className="hover:text-recon-text-strong transition-colors">How it works</a>
          <a href="#pilot" className="hover:text-recon-text-strong transition-colors">Pilot</a>
          <a href="#faq" className="hover:text-recon-text-strong transition-colors">FAQ</a>
        </nav>

        <button className="bg-recon-pine text-recon-bg-ivory px-5 py-2.5 rounded-full text-[14px] font-[560] tracking-[-0.01em] hover:bg-recon-pine-dark transition-colors flex items-center gap-2">
          Review Your Flow
          <div className="w-5 h-5 rounded-full bg-recon-bg-ivory/20 flex items-center justify-center">
            <iconify-icon icon="solar:arrow-right-linear" className="text-sm"></iconify-icon>
          </div>
        </button>
      </header>

      {/* 8.1 Hero Section */}
      <section className="pt-[196px] pb-[120px] page-shell relative">
        <div className="grid-12 items-center">
          
          {/* Left: Content */}
          <div className="col-span-12 lg:col-span-5 hero-text z-10">
            <div className="text-[12px] font-semibold uppercase tracking-widest text-recon-green-muted mb-6">
              Stablecoin payment reconciliation for finance & ops teams
            </div>
            <h1 className="text-[52px] sm:text-[68px] leading-[1.02] font-medium tracking-tight-hero text-recon-text-strong mb-6 max-w-[600px]">
              Know what settled, what broke, and what finance can trust.
            </h1>
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-recon-green-muted font-normal mb-10 max-w-[540px]">
              ReconLayer reconciles stablecoin payment records across provider events, blockchain hashes, fiat payout records, internal ledgers, customer balances, ERP entries, manual actions, and exception history.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-recon-pine text-recon-bg-ivory px-6 py-4 rounded-full text-[15px] font-[560] tracking-[-0.01em] hover:bg-recon-pine-dark transition-colors flex items-center justify-center gap-2 shadow-sm">
                Review Your Reconciliation Flow
              </button>
              <button className="w-full sm:w-auto bg-recon-surface-card text-recon-text-strong border border-recon-border px-6 py-4 rounded-full text-[15px] font-[500] hover:bg-recon-surface-muted transition-colors flex items-center justify-center">
                View Sample Reconciled Payment
              </button>
            </div>
          </div>

          {/* Right: Layered Product Visual */}
          <div className="col-span-12 lg:col-span-7 mt-16 lg:mt-0 relative h-[500px] lg:h-[600px]" ref={visualRef}>
            {/* Base Canvas */}
            <div className="ui-layer absolute inset-0 right-0 lg:-right-[80px] bg-recon-surface-card rounded-[28px] border border-recon-border shadow-panel p-6 overflow-hidden flex flex-col">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center pb-5 border-b border-recon-divider">
                <div>
                  <h3 className="text-[16px] font-medium text-recon-text-strong">Reconciliation run</h3>
                  <p className="text-[13px] text-recon-green-muted mt-0.5">Apr 24, 2026 · 14:02 UTC</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-recon-success-soft px-3 py-1.5 rounded-md flex flex-col">
                    <span className="text-[11px] font-semibold text-recon-success-text uppercase tracking-wide">Matched</span>
                    <span className="text-[16px] font-medium text-recon-success-text">94.8%</span>
                  </div>
                  <div className="bg-recon-exception-soft px-3 py-1.5 rounded-md flex flex-col">
                    <span className="text-[11px] font-semibold text-recon-exception-text uppercase tracking-wide">Exceptions</span>
                    <span className="text-[16px] font-medium text-recon-exception-text">37</span>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="mt-4 flex-1 flex flex-col gap-2">
                {/* Headers */}
                <div className="grid grid-cols-4 px-4 py-2 text-[12px] font-medium text-recon-green-muted border-b border-recon-divider pb-2">
                  <div>Ledger Ref</div>
                  <div>Amount</div>
                  <div>Hash</div>
                  <div className="text-right">Status</div>
                </div>

                {/* Rows */}
                {[
                  { ref: 'LDG-9921', amt: '$4,500.00', hash: '0x8f...2a1b', status: 'Matched', type: 'success' },
                  { ref: 'LDG-9922', amt: '$1,250.00', hash: '0x3c...9d4e', status: 'Missing ERP', type: 'exception' },
                  { ref: 'LDG-9923', amt: '$8,900.00', hash: '0x1a...7f8c', status: 'Returned', type: 'error' },
                  { ref: 'LDG-9924', amt: '$3,100.00', hash: '0x5e...0b3d', status: 'Matched', type: 'success' },
                  { ref: 'LDG-9925', amt: '$6,450.00', hash: '0x9d...4c5f', status: 'Matched', type: 'success' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 px-4 py-3 bg-recon-surface-muted rounded-lg items-center hover:bg-recon-divider/40 transition-colors border border-transparent hover:border-recon-border">
                    <div className="font-mono text-[13px] text-recon-text-strong">{row.ref}</div>
                    <div className="text-[13px] text-recon-text-strong font-medium">{row.amt}</div>
                    <div className="font-mono text-[12px] text-recon-green-muted">{row.hash}</div>
                    <div className="flex justify-end">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                        row.type === 'success' ? 'bg-recon-success-soft text-recon-success-text' :
                        row.type === 'exception' ? 'bg-recon-exception-soft text-recon-exception-text' :
                        'bg-recon-error-soft text-recon-error-text'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Evidence Drawer Preview */}
            <div className="ui-layer absolute top-[140px] -left-[40px] lg:-left-[60px] w-[260px] bg-recon-bg-ivory border border-recon-border rounded-[20px] shadow-float p-5 z-20">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-recon-exception-text uppercase tracking-wide mb-3">
                <div className="w-2 h-2 rounded-full bg-[#B89B5E]"></div>
                Evidence Chain
              </div>
              
              <div className="relative pl-3 border-l border-recon-divider space-y-4 py-2">
                {/* Chain items */}
                <div className="relative">
                  <div className="absolute -left-[17px] top-1.5 w-2.5 h-2.5 rounded-full bg-recon-pine border-2 border-recon-bg-ivory"></div>
                  <div className="text-[13px] font-medium text-recon-text-strong">Provider Event</div>
                  <div className="font-mono text-[11px] text-recon-green-muted mt-0.5">evt_8832194</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[17px] top-1.5 w-2.5 h-2.5 rounded-full bg-recon-pine border-2 border-recon-bg-ivory"></div>
                  <div className="text-[13px] font-medium text-recon-text-strong">Blockchain Hash</div>
                  <div className="font-mono text-[11px] text-recon-green-muted mt-0.5">0x3c...9d4e</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[17px] top-1.5 w-2.5 h-2.5 rounded-full bg-recon-pine border-2 border-recon-bg-ivory"></div>
                  <div className="text-[13px] font-medium text-recon-text-strong">Internal Ledger</div>
                  <div className="font-mono text-[11px] text-recon-green-muted mt-0.5">LDG-9922</div>
                </div>
                <div className="relative">
                  {/* Missing state marker */}
                  <div className="absolute -left-[17px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-recon-gold border-dashed bg-recon-bg-ivory"></div>
                  <div className="text-[13px] font-medium text-recon-exception-text">ERP Entry Missing</div>
                  <div className="font-mono text-[11px] text-recon-gold mt-0.5">Pending sync</div>
                </div>
              </div>
            </div>

            {/* Floating Exception Card */}
            <div className="ui-layer absolute bottom-8 right-8 w-[320px] bg-recon-surface-card border border-recon-border rounded-[20px] shadow-float p-5 z-30">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-recon-exception-text">
                  <iconify-icon icon="solar:danger-triangle-bold" className="text-2xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-[15px] font-medium text-recon-text-strong mb-1">Missing ERP entry</h4>
                  <p className="text-[13px] text-recon-green-muted leading-relaxed mb-4">
                    Provider transfer processed but no GL posting found in Oracle NetSuite.
                  </p>
                  <button className="text-[13px] font-medium text-recon-pine hover:text-recon-pine-dark transition-colors flex items-center gap-1">
                    Open evidence
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8.2 Trust / Who It's For Strip */}
      <section className="page-shell pb-24 fade-up-section">
        <div className="w-full bg-recon-bg-cream rounded-[28px] border border-recon-border/50 py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden relative">
          <div className="text-[13px] font-medium uppercase tracking-widest text-recon-green-muted whitespace-nowrap shrink-0">
            Trusted Framework For
          </div>
          <div className="flex gap-8 md:gap-12 items-center flex-wrap justify-center flex-1 opacity-80">
            {[
              { icon: 'solar:wallet-bold-duotone', label: 'Treasury Ops' },
              { icon: 'solar:pie-chart-2-bold-duotone', label: 'Finance Leads' },
              { icon: 'solar:shield-check-bold-duotone', label: 'Compliance' },
              { icon: 'solar:server-square-update-bold-duotone', label: 'Payment Eng' },
              { icon: 'solar:headphones-round-sound-bold-duotone', label: 'Support Teams' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[15px] font-medium text-recon-text-strong">
                <iconify-icon icon={item.icon} className="text-xl text-recon-pine"></iconify-icon>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.3 Problem Narrative */}
      <section className="py-24 bg-recon-surface-muted border-y border-recon-border fade-up-section">
        <div className="page-shell">
          <div className="max-w-[720px] mx-auto text-center mb-16">
            <h2 className="text-[42px] md:text-[52px] leading-[1.1] font-medium tracking-tight-section text-recon-text-strong mb-6">
              The gap between money movement and finance truth.
            </h2>
            <p className="text-[18px] text-recon-green-muted leading-[1.55]">
              Moving stablecoins is instant. Reconciling those movements across disparate systems takes days. Records disagree, ledgers fall out of sync, and manual investigation becomes the default.
            </p>
          </div>

          {/* Abstract Ecosystem Visual */}
          <div className="max-w-[960px] mx-auto relative h-[360px] flex items-center justify-center">
            {/* Hub node */}
            <div className="absolute z-20 w-[120px] h-[120px] bg-recon-pine rounded-[28px] flex items-center justify-center shadow-panel">
              <iconify-icon icon="solar:layers-minimalistic-bold" className="text-[48px] text-recon-bg-ivory"></iconify-icon>
            </div>
            
            {/* Connector Lines & Surrounding Nodes */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 960 360">
              <path d="M 480 180 L 220 120" stroke="#D7DAD7" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M 480 180 L 220 280" stroke="#D7DAD7" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M 480 180 L 740 120" stroke="#B89B5E" strokeWidth="2" fill="none" />
              <path d="M 480 180 L 740 280" stroke="#D7DAD7" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            </svg>

            {/* Nodes */}
            <div className="absolute left-[140px] top-[90px] bg-recon-bg-ivory border border-recon-border px-5 py-3 rounded-[16px] shadow-sm z-20 text-[14px] font-medium">Provider APIs</div>
            <div className="absolute left-[140px] top-[250px] bg-recon-bg-ivory border border-recon-border px-5 py-3 rounded-[16px] shadow-sm z-20 text-[14px] font-medium">Internal Database</div>
            <div className="absolute right-[140px] top-[90px] bg-recon-exception-soft border border-recon-gold/30 px-5 py-3 rounded-[16px] shadow-sm z-20 text-[14px] font-medium text-recon-exception-text">Oracle ERP (Disconnected)</div>
            <div className="absolute right-[140px] top-[250px] bg-recon-bg-ivory border border-recon-border px-5 py-3 rounded-[16px] shadow-sm z-20 text-[14px] font-medium">On-Chain Data</div>
          </div>
        </div>
      </section>

      {/* 8.8 Use Cases Grid */}
      <section className="py-24 page-shell fade-up-section">
        <div className="mb-16">
          <div className="text-[12px] font-semibold uppercase tracking-widest text-recon-green-muted mb-4">
            Exception Scenarios
          </div>
          <h2 className="text-[42px] leading-[1.1] font-medium tracking-tight-section text-recon-text-strong">
            Built for the realities of modern finance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-recon-surface-card border border-recon-border rounded-[24px] p-8 hover:shadow-panel transition-shadow duration-300">
            <div className="w-12 h-12 bg-recon-exception-soft text-recon-exception-text rounded-[14px] flex items-center justify-center mb-6">
              <iconify-icon icon="solar:database-script-bold-duotone" className="text-[24px]"></iconify-icon>
            </div>
            <h3 className="text-[20px] font-medium text-recon-text-strong mb-3">ERP Posting Failures</h3>
            <p className="text-[15px] text-recon-green-muted leading-relaxed">
              Automatically flag payments that cleared the blockchain and internal ledger, but failed to post to your general ledger system due to API timeouts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-recon-surface-card border border-recon-border rounded-[24px] p-8 hover:shadow-panel transition-shadow duration-300">
            <div className="w-12 h-12 bg-recon-pine/10 text-recon-pine rounded-[14px] flex items-center justify-center mb-6">
              <iconify-icon icon="solar:transfer-horizontal-bold-duotone" className="text-[24px]"></iconify-icon>
            </div>
            <h3 className="text-[20px] font-medium text-recon-text-strong mb-3">Slippage & Fee Variance</h3>
            <p className="text-[15px] text-recon-green-muted leading-relaxed">
              Detect when the fiat equivalent settled differs from the stablecoin amount initiated due to unrecorded provider fees or FX slippage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-recon-surface-card border border-recon-border rounded-[24px] p-8 hover:shadow-panel transition-shadow duration-300">
            <div className="w-12 h-12 bg-recon-error-soft text-recon-error-text rounded-[14px] flex items-center justify-center mb-6">
              <iconify-icon icon="solar:shield-warning-bold-duotone" className="text-[24px]"></iconify-icon>
            </div>
            <h3 className="text-[20px] font-medium text-recon-text-strong mb-3">Returned Flows</h3>
            <p className="text-[15px] text-recon-green-muted leading-relaxed">
              Trace funds that were bounced by the receiving institution back through the provider network to properly account for missing customer balances.
            </p>
          </div>
        </div>
      </section>

      {/* 8.10 Pilot CTA Form Split */}
      <section className="py-24 page-shell fade-up-section">
        <div className="bg-recon-pine-dark rounded-[32px] p-10 lg:p-16 text-recon-bg-ivory relative overflow-hidden">
          {/* Subtle bg pattern */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-recon-pine opacity-50 rounded-full blur-[100px] -z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-[42px] leading-[1.1] font-medium tracking-tight-section mb-6">
                Ready to review your flow?
              </h2>
              <p className="text-[18px] text-recon-success-soft opacity-90 leading-relaxed mb-10">
                Start a pilot to see how ReconLayer matches your actual payment data across systems in real-time.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[15px]">
                  <iconify-icon icon="solar:check-circle-bold" className="text-recon-gold text-xl"></iconify-icon>
                  Map your specific data architecture
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <iconify-icon icon="solar:check-circle-bold" className="text-recon-gold text-xl"></iconify-icon>
                  Run a sample historical reconciliation
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <iconify-icon icon="solar:check-circle-bold" className="text-recon-gold text-xl"></iconify-icon>
                  Identify hidden exception patterns
                </li>
              </ul>
            </div>

            <div className="bg-recon-bg-ivory text-recon-text-strong rounded-[24px] p-8 shadow-panel">
              <form className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-recon-green-muted mb-1.5">Work Email</label>
                  <input type="email" placeholder="jane@company.com" className="w-full bg-recon-surface-card border border-recon-border rounded-[14px] px-4 py-3 text-[14px] focus:outline-none focus:border-recon-pine focus:ring-1 focus:ring-recon-pine transition-shadow" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-recon-green-muted mb-1.5">First Name</label>
                    <input type="text" placeholder="Jane" className="w-full bg-recon-surface-card border border-recon-border rounded-[14px] px-4 py-3 text-[14px] focus:outline-none focus:border-recon-pine focus:ring-1 focus:ring-recon-pine transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-recon-green-muted mb-1.5">Company Size</label>
                    <select className="w-full bg-recon-surface-card border border-recon-border rounded-[14px] px-4 py-3 text-[14px] focus:outline-none focus:border-recon-pine focus:ring-1 focus:ring-recon-pine transition-shadow appearance-none">
                      <option>1-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="w-full bg-recon-pine text-recon-bg-ivory rounded-full py-3.5 text-[15px] font-[560] mt-2 hover:bg-recon-pine-dark transition-colors">
                  Request Pilot Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="border-t border-recon-divider bg-recon-bg-ivory py-12">
        <div className="page-shell flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-recon-text-strong font-medium">
            <iconify-icon icon="solar:layers-minimalistic-bold" className="text-recon-pine text-xl"></iconify-icon>
            ReconLayer <span className="text-recon-green-muted text-[13px] font-normal ml-2">by Lancers Technology</span>
          </div>
          <div className="text-[13px] text-recon-green-muted flex gap-6">
            <a href="#" className="hover:text-recon-text-strong transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-recon-text-strong transition-colors">Terms of Service</a>
            <span>© 2024 Lancers Technology</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;