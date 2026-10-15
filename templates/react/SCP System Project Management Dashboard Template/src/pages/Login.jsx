import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-dark border border-[#4A4A4A] rounded-2xl p-10 shadow-2xl text-center relative overflow-hidden">
        {/* Decorative subtle glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mb-8">
          <div className="w-16 h-16 bg-slate rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-dark shadow-md">
            <iconify-icon icon="solar:lock-keyhole-minimalistic-bold" width="32" className="text-inverted"></iconify-icon>
          </div>
          <h1 className="text-3xl font-bold text-inverted tracking-tight mb-1">SCP</h1>
          <p className="text-muted-dark text-sm">Sistema de Controle de Projetos</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <input 
              type="email" 
              placeholder="Email profissional" 
              defaultValue="eduardo@conatex.com.br"
              className="input-dark"
              required
            />
          </div>
          <div className="text-left relative">
            <input 
              type="password" 
              placeholder="Senha" 
              defaultValue="********"
              className="input-dark pr-10"
              required
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-dark hover:text-inverted">
              <iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
            </button>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-[#303030] font-semibold py-3 px-6 rounded-lg transition-colors flex justify-center items-center h-12 mt-2"
          >
            {loading ? <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="24"></iconify-icon> : 'Entrar no sistema'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#4A4A4A] relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark px-2 text-xs text-muted-dark">ou</span>
          <button className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
            <iconify-icon icon="simple-icons:google" width="16" style={{ color: '#4285F4' }}></iconify-icon>
            Continuar com Google
          </button>
        </div>
      </div>
      
      <p className="text-[#5A5A5A] text-xs mt-8">scp.areaex.com.br</p>
    </div>
  );
}