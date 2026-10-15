import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate auth
    await login(email, password);
    setLoading(false);
    
    // Redirect to home or previous page
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-8 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center mx-auto mb-4 shadow-inner">
            <iconify-icon icon="solar:cpu-bolt-bold" class="text-white text-2xl" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            {isLogin ? 'Enter your details to sign in to your account' : 'Join the largest community of AI tool users'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Full Name</label>
              <Input placeholder="John Doe" required />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Email address</label>
            <Input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
              {isLogin && (
                <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</a>
              )}
            </div>
            <Input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}