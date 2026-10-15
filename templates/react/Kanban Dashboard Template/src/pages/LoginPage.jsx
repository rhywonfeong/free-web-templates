import React, { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sign in would go here
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] relative overflow-hidden font-sans text-slate-200 selection:bg-fuchsia-500/30 items-center justify-center p-4">
      
      {/* Dynamic Animated Mesh Gradient Background (Matching Dashboard Vibe) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Drifting glowing neon orbs */}
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-violet-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        
        {/* Extra glassmorphism overlay to smooth everything into a sleek background */}
        <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[80px]"></div>
      </div>

      {/* Glassmorphic Login Card */}
      <div className="relative z-10 w-full max-w-[420px] bg-[#0f111a]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_16px_64px_rgba(0,0,0,0.5)] overflow-hidden animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        
        {/* Sleek top gradient border */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-80"></div>

        <div className="p-8 sm:p-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] mb-5">
              <iconify-icon icon="solar:layers-bold-duotone" width="36" height="36"></iconify-icon>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
              AuraDesk Login
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 group-focus-within:text-violet-400 transition-colors pointer-events-none">
                  <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40 shadow-inner outline-none focus:ring-4 transition-all text-sm text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 group-focus-within:text-violet-400 transition-colors pointer-events-none">
                  <iconify-icon icon="solar:lock-password-linear" width="20"></iconify-icon>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-white/10 focus:border-violet-500 focus:ring-violet-500/20 bg-black/40 shadow-inner outline-none focus:ring-4 transition-all text-sm text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Form Utilities */}
            <div className="flex items-center justify-between mt-1 mb-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded-md border-white/10 bg-black/40 text-violet-500 focus:ring-violet-500/50 cursor-pointer" />
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm font-semibold text-violet-400 hover:text-fuchsia-400 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="group relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden mt-2"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Sign In</span>
              <iconify-icon icon="solar:login-2-linear" width="20" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
            </button>
          </form>

        </div>
        
        {/* Footer Area */}
        <div className="p-6 bg-black/20 border-t border-white/5 text-center">
          <p className="text-sm font-medium text-slate-400">
            Don't have an account? <a href="#" className="text-violet-400 font-bold hover:text-fuchsia-400 transition-colors ml-1">Request access</a>
          </p>
        </div>

      </div>
    </div>
  );
}