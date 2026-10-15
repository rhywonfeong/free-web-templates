import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: "solar:stopwatch-linear",
      title: "Ultra-Low Latency",
      description: "Built on WebRTC for real-time conversational experiences without awkward pauses."
    },
    {
      icon: "solar:code-scan-linear",
      title: "Drop-in SDKs",
      description: "Native React, React Native, and Python SDKs get you deployed in minutes."
    },
    {
      icon: "solar:settings-linear",
      title: "Customizable Actions",
      description: "Define client-side tools that the agent can trigger based on conversation context."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Agent Ready for Deployment
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Customer Support <br/>
            <span className="text-slate-400">Automated Intelligently.</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Deploy your fine-tuned ElevenLabs Conversational AI Agent (ID: agent_1601...) directly into your application using our optimized integration methods.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Link 
              to="/demo" 
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-sm flex items-center gap-2"
            >
              <iconify-icon icon="solar:play-circle-bold"></iconify-icon>
              Test Live Agent
            </Link>
            <Link 
              to="/docs" 
              className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
            >
              <iconify-icon icon="solar:document-text-linear"></iconify-icon>
              View Integration Docs
            </Link>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-3xl transform rotate-3 scale-105 -z-10 blur-xl opacity-50"></div>
          <div className="bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-2 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" 
              alt="AI Interface abstract" 
              className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
            />
            
            {/* Overlay UI element */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <iconify-icon icon="solar:user-speak-bold" width="24"></iconify-icon>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">Agent Connection</div>
                <div className="text-xs text-slate-500">Status: WebRTC Established</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why deploy with our SDKs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4">
                <iconify-icon icon={feature.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}