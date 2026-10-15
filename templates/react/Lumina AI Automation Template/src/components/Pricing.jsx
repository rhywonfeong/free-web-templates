import React from 'react';
import { Check, Minus } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="z-20 container md:px-12 pointer-events-auto mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative">
      <div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-center mb-16 relative items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg font-normal text-zinc-400 max-w-2xl">
          Choose the plan that best fits your needs. All plans include core features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
        {/* Hobby Plan */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl font-medium text-white tracking-tight mb-2">Hobby</h3>
          <p className="text-sm text-zinc-400 mb-6 h-10">Perfect for side projects and learning.</p>
          <div className="mb-6">
            <span className="text-4xl font-medium text-white tracking-tight">$0</span>
            <span className="text-sm text-zinc-500">/mo</span>
          </div>
          <button className="w-full px-4 py-2.5 rounded-full border border-zinc-800 bg-transparent text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors mb-8">
            Get Started
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              Up to 1,000 active users
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              Community support
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              Basic analytics
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col bg-[#131316] border border-white/10 rounded-3xl p-8 relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform md:-translate-y-4">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>
          
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-medium text-white tracking-tight">Pro</h3>
            <span className="text-[10px] uppercase tracking-wider font-medium bg-white/10 text-zinc-200 px-2 py-1 rounded-full border border-white/5">Most Popular</span>
          </div>
          <p className="text-sm text-zinc-400 mb-6 h-10">For scaling startups and growing teams.</p>
          <div className="mb-6">
            <span className="text-4xl font-medium text-white tracking-tight">$49</span>
            <span className="text-sm text-zinc-500">/mo</span>
          </div>
          <button className="w-full px-4 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Start Free Trial
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
              Up to 50,000 active users
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
              Priority email support
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
              Advanced analytics
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
              Custom domains
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl font-medium text-white tracking-tight mb-2">Enterprise</h3>
          <p className="text-sm text-zinc-400 mb-6 h-10">Custom solutions for large scale operations.</p>
          <div className="mb-6">
            <span className="text-4xl font-medium text-white tracking-tight">Custom</span>
          </div>
          <button className="w-full px-4 py-2.5 rounded-full border border-zinc-800 bg-transparent text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors mb-8">
            Contact Sales
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              Unlimited active users
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              24/7 dedicated support
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              Custom integrations
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              SLA &amp; SOC 2 compliance
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-[#09090b] border border-white/5 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll relative">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="">
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="p-6 font-medium text-white text-base">Compare Plans</th>
                <th className="p-6 font-medium text-white w-1/5 text-center">Hobby</th>
                <th className="p-6 font-medium text-white w-1/5 text-center">Pro</th>
                <th className="p-6 font-medium text-white w-1/5 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="">
                <td colSpan="4" className="p-6 pb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-white/[0.01]">Core Features</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Monthly Active Users</td>
                <td className="px-6 py-4 text-zinc-400 text-center">1,000</td>
                <td className="px-6 py-4 text-zinc-400 text-center">50,000</td>
                <td className="px-6 py-4 text-zinc-400 text-center">Unlimited</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">API Requests</td>
                <td className="px-6 py-4 text-zinc-400 text-center">10K/mo</td>
                <td className="px-6 py-4 text-zinc-400 text-center">1M/mo</td>
                <td className="px-6 py-4 text-zinc-400 text-center">Unlimited</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Data Retention</td>
                <td className="px-6 py-4 text-zinc-400 text-center">7 days</td>
                <td className="px-6 py-4 text-zinc-400 text-center">30 days</td>
                <td className="px-6 py-4 text-zinc-400 text-center">365 days</td>
              </tr>
              
              <tr className="">
                <td colSpan="4" className="p-6 pb-2 pt-8 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-white/[0.01]">Advanced Tools</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Custom Domains</td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-400" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-zinc-400" /></div></td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Role-based Access</td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-400" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-zinc-400" /></div></td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Audit Logs</td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-zinc-400" /></div></td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 text-zinc-300 font-medium">Single Sign-On (SSO)</td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Minus className="w-4 h-4 text-zinc-700" /></div></td>
                <td className="px-6 py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-zinc-400" /></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}