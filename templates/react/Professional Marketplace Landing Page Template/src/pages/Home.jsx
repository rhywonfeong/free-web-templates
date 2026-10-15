import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { CATEGORIES, PROFESSIONALS } from '../data/mockData';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
            Find the right <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">professional</span><br className="hidden md:block" /> for any job.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
            Connect with top-rated specialists, agencies, and freelancers to bring your ideas to life or fix your everyday problems.
          </p>

          {/* Main Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative flex items-center">
              <iconify-icon icon="solar:magnifer-linear" className="absolute left-4 text-slate-400" width="20"></iconify-icon>
              <input 
                type="text" 
                placeholder="What service are you looking for?" 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>
            <div className="hidden sm:block w-px bg-slate-200 my-2"></div>
            <div className="flex-1 relative flex items-center">
              <iconify-icon icon="solar:map-point-linear" className="absolute left-4 text-slate-400" width="20"></iconify-icon>
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>
            <Button type="submit" size="lg" className="shrink-0 w-full sm:w-auto">
              Search
            </Button>
          </form>

          {/* Quick tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-slate-500 font-medium">Popular:</span>
            {['UI Design', 'React Dev', 'Electrician', 'SEO'].map(tag => (
              <button key={tag} onClick={() => navigate('/explore')} className="text-sm text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 px-3 py-1 rounded-full hover:border-indigo-200 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Explore Categories</h2>
              <p className="text-slate-500">Find the perfect specialist for your needs</p>
            </div>
            <Button variant="ghost" onClick={() => navigate('/explore')} className="hidden sm:flex">
              View all <iconify-icon icon="solar:arrow-right-linear" className="ml-2"></iconify-icon>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => navigate('/explore')}
                className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group border border-transparent hover:border-indigo-100 text-slate-700"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-indigo-600">
                  <iconify-icon icon={cat.icon} width="24"></iconify-icon>
                </div>
                <span className="text-sm font-medium text-center">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Top Rated Professionals</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Work with the best. These specialists have consistently delivered outstanding results for their clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFESSIONALS.slice(0, 4).map(pro => (
              <ProfessionalCard key={pro.id} professional={pro} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary" onClick={() => navigate('/explore')}>
              Browse All Professionals
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
            <p className="text-slate-500">Simple steps to get your project done</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-200 border-dashed border-t-2"></div>
            
            {[
              { icon: 'solar:magnifer-linear', title: '1. Search', desc: 'Find the perfect professional for your needs using our advanced filters.' },
              { icon: 'solar:chat-round-dots-linear', title: '2. Connect', desc: 'Discuss details, negotiate rates, and align on expectations securely.' },
              { icon: 'solar:star-fall-minimalistic-2-linear', title: '3. Collaborate', desc: 'Work together to complete your project and leave a review.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full border-8 border-slate-50 shadow-sm flex items-center justify-center mb-6 text-indigo-600">
                  <iconify-icon icon={step.icon} width="40"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}