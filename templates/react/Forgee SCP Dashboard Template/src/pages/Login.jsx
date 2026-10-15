import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8FFF00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#7A9EAD]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-[420px] bg-[#1E2124] border border-white/10 rounded-[24px] p-8 shadow-2xl relative z-10">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#252729] rounded-[16px] border border-white/5 mx-auto mb-6 flex items-center justify-center text-[#8FFF00]">
             <iconify-icon icon="solar:lock-password-unlocked-bold-duotone" style={{ fontSize: '32px' }}></iconify-icon>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">SCP Authenticator</h1>
          <p className="text-[#8C9BAA] text-sm">Sistema de Controle de Projetos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[#8C9BAA] mb-2 uppercase tracking-wider">Email Organizacional</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C9BAA]">
                <iconify-icon icon="solar:letter-linear" style={{ fontSize: '20px' }}></iconify-icon>
              </span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="nome@empresa.com.br"
                className="w-full bg-[#090909] border border-white/10 rounded-[12px] py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8FFF00]/50 focus:ring-1 focus:ring-[#8FFF00]/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8C9BAA] mb-2 uppercase tracking-wider">Senha de Acesso</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C9BAA]">
                <iconify-icon icon="solar:key-minimalistic-linear" style={{ fontSize: '20px' }}></iconify-icon>
              </span>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-[#090909] border border-white/10 rounded-[12px] py-3 pl-12 pr-12 text-white placeholder-white/20 focus:outline-none focus:border-[#8FFF00]/50 focus:ring-1 focus:ring-[#8FFF00]/50 transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C9BAA] hover:text-white transition-colors"
              >
                <iconify-icon icon={showPassword ? "solar:eye-linear" : "solar:eye-closed-linear"} style={{ fontSize: '20px' }}></iconify-icon>
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#8FFF00] hover:bg-[#9eff1a] text-[#1E2124] font-bold py-3.5 rounded-[12px] transition-all duration-200 mt-4 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <iconify-icon icon="line-md:loading-loop" style={{ fontSize: '24px' }}></iconify-icon>
            ) : (
              "Acessar Sistema"
            )}
          </button>
        </form>

        <div className="mt-8 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative px-4 bg-[#1E2124] text-xs text-[#8C9BAA] font-medium uppercase">
            Autenticação Segura
          </div>
        </div>

        <button 
          type="button" 
          onClick={handleSubmit}
          className="w-full mt-6 bg-[#252729] hover:bg-[#303338] border border-white/5 text-white font-medium py-3.5 rounded-[12px] transition-all duration-200 flex items-center justify-center gap-3"
        >
          <iconify-icon icon="simple-icons:google" style={{ fontSize: '18px' }}></iconify-icon>
          Entrar com Google Workspace
        </button>

      </div>
    </div>
  );
}