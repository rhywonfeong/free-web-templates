import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import RevealText from '../components/RevealText';

export default function StartScaling() {
  const [isVisible, setIsVisible] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    workspace: '',
    region: 'us-east',
    plan: 'quantum-pro'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const baseAnim = "transition-all duration-1000 ease-out";
  const hiddenAnim = "opacity-0 translate-y-8 blur-md";
  const visibleAnim = "opacity-100 translate-y-0 blur-0";

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-80px)] pt-32 px-6 pb-24 max-w-[800px] mx-auto flex flex-col items-center justify-center text-center w-full">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-8 border border-emerald-500/30 animate-[bounce_2s_infinite]">
          <iconify-icon icon="solar:check-circle-bold-duotone" width="40" className="text-emerald-400"></iconify-icon>
        </div>
        <RevealText 
          text="Initialization Complete." 
          className="text-4xl md:text-[4rem] leading-[1.05] text-white font-thin tracking-tighter mb-4" 
          as="h1" 
        />
        <p className="text-zinc-400 text-lg mb-8 max-w-md">
          Your quantum instance is spinning up. Check your email to access the DRT control plane.
        </p>
        <Link to="/" className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div 
      className="min-h-[calc(100vh-80px)] pt-32 px-6 pb-24 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 w-full"
    >
      {/* Left Column: Context */}
      <div className="flex-1 flex flex-col pt-8">
        <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-100 mb-6")}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 w-max">
            <iconify-icon icon="solar:rocket-2-line-duotone" className="text-indigo-400 text-sm"></iconify-icon>
            <span className="text-xs font-medium text-indigo-300 uppercase tracking-widest">Deployment</span>
          </div>
        </div>

        <div className={clsx(baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-200")}>
          <RevealText 
            text="Initialize Your Scale." 
            className="text-4xl md:text-[4.5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-6" 
            as="h1" 
          />
        </div>

        <p className={clsx(
          "text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-12 max-w-md",
          baseAnim,
          isVisible ? visibleAnim : hiddenAnim,
          "delay-300"
        )}>
          Provision your environment and connect to the global edge network. DRT simplifies distributed infrastructure so you can focus on spatial aesthetics.
        </p>

        <div className={clsx("flex flex-col gap-6", baseAnim, isVisible ? visibleAnim : hiddenAnim, "delay-[400ms]")}>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-400">
              <iconify-icon icon="solar:bolt-line-duotone" width="20"></iconify-icon>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Instant Provisioning</h4>
              <p className="text-sm text-zinc-500 font-light">Clusters spin up in milliseconds across your selected edge regions.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-400">
              <iconify-icon icon="solar:shield-keyhole-line-duotone" width="20"></iconify-icon>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Secure by Default</h4>
              <p className="text-sm text-zinc-500 font-light">Enterprise-grade encryption on all inter-node communication.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className={clsx(
        "flex-1 relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-zinc-700/50 to-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] mt-8 md:mt-0",
        baseAnim,
        isVisible ? visibleAnim : hiddenAnim
      )} style={{ transitionDelay: '500ms' }}>
        <div className="absolute inset-[1px] bg-zinc-950/90 backdrop-blur-2xl rounded-[calc(2.5rem-1px)] z-0"></div>
        
        <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-10 flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-widest pl-1">Work Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="pioneer@company.com"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="workspace" className="text-xs font-medium text-zinc-400 uppercase tracking-widest pl-1">Workspace Name</label>
            <input 
              type="text" 
              id="workspace" 
              name="workspace"
              required
              value={formData.workspace}
              onChange={handleChange}
              placeholder="e.g. Nexus Production"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="region" className="text-xs font-medium text-zinc-400 uppercase tracking-widest pl-1">Primary Edge Region</label>
            <div className="relative">
              <select 
                id="region" 
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-light cursor-pointer"
              >
                <option value="us-east">US East (N. Virginia)</option>
                <option value="us-west">US West (Oregon)</option>
                <option value="eu-central">EU Central (Frankfurt)</option>
                <option value="ap-northeast">AP Northeast (Tokyo)</option>
              </select>
              <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"></iconify-icon>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest pl-1">Select Architecture</label>
            
            <label className={clsx(
              "flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300",
              formData.plan === 'quantum-pro' 
                ? "bg-indigo-500/10 border-indigo-500/30" 
                : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
            )}>
              <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border border-zinc-600 bg-zinc-950 flex-shrink-0">
                {formData.plan === 'quantum-pro' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>}
              </div>
              <input type="radio" name="plan" value="quantum-pro" checked={formData.plan === 'quantum-pro'} onChange={handleChange} className="sr-only" />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-white font-medium">Quantum Pro</span>
                  <span className="text-indigo-300 text-sm">$49/mo</span>
                </div>
                <span className="text-zinc-500 text-sm font-light">Ideal for distributed network rendering.</span>
              </div>
            </label>

            <label className={clsx(
              "flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300",
              formData.plan === 'enterprise' 
                ? "bg-indigo-500/10 border-indigo-500/30" 
                : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
            )}>
              <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border border-zinc-600 bg-zinc-950 flex-shrink-0">
                {formData.plan === 'enterprise' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>}
              </div>
              <input type="radio" name="plan" value="enterprise" checked={formData.plan === 'enterprise'} onChange={handleChange} className="sr-only" />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-white font-medium">DRT Enterprise</span>
                  <span className="text-zinc-400 text-sm">Custom</span>
                </div>
                <span className="text-zinc-500 text-sm font-light">Dedicated architecture at global scale.</span>
              </div>
            </label>
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 px-6 rounded-2xl font-medium tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <iconify-icon icon="solar:spinner-bold" className="animate-spin text-xl"></iconify-icon>
                  <span>Provisioning...</span>
                </>
              ) : (
                <>
                  <span>Deploy Infrastructure</span>
                  <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                </>
              )}
            </button>
            <p className="text-center text-xs text-zinc-600 mt-4 font-light">
              By deploying, you agree to the DRT Network Terms of Service.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}