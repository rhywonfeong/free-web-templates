import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user'); // professional, employer, user
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth
    login({
      id: 'usr1',
      name: role === 'professional' ? 'Alex Professional' : 'Jane User',
      role: role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80'
    });
    navigate(role === 'professional' ? '/profile' : '/explore');
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 my-10">
        
        <div className="text-center mb-8">
          <div className="bg-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <iconify-icon icon="solar:layer-bold" width="28"></iconify-icon>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {isLogin ? 'Enter your details to access your account.' : 'Choose your role to get started.'}
          </p>
        </div>

        {!isLogin && (
          <div className="mb-8">
            <label className="text-sm font-medium text-slate-700 mb-3 block">I want to join as a:</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'user', label: 'Client', icon: 'solar:user-linear' },
                { id: 'professional', label: 'Pro', icon: 'solar:case-minimalistic-linear' },
                { id: 'employer', label: 'Employer', icon: 'solar:buildings-2-linear' }
              ].map(r => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                    role === r.id 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                      : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                  }`}
                >
                  <iconify-icon icon={r.icon} width="24" className="mb-1"></iconify-icon>
                  <span className="text-xs font-medium">{r.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              icon={<iconify-icon icon="solar:user-linear"></iconify-icon>}
            />
          )}
          <Input 
            label="Email" 
            type="email" 
            placeholder="you@example.com" 
            icon={<iconify-icon icon="solar:letter-linear"></iconify-icon>}
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            icon={<iconify-icon icon="solar:lock-password-linear"></iconify-icon>}
          />
          
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Forgot password?</a>
            </div>
          )}

          <Button type="submit" fullWidth size="lg" className="mt-6">
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Or continue with</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="secondary" icon={<iconify-icon icon="simple-icons:google" className="text-slate-700"></iconify-icon>}>
            Google
          </Button>
          <Button variant="secondary" icon={<iconify-icon icon="simple-icons:facebook" className="text-[#1877F2]"></iconify-icon>}>
            Facebook
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-indigo-600 font-medium hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}