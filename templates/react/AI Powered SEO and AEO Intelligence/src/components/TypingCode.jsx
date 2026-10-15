import React from 'react';

export function TypingCode() {
  return (
    <div className="leading-7 min-h-96 relative text-sm font-mono pt-4 pr-4 pb-4 pl-4">
      <div className="absolute inset-4 space-y-1">
        <div className="flex animate-typing-1">
          <span className="text-white/30 w-8 text-right mr-4">1</span>
          <span className="typing-text">
            <span className="text-purple-300">import</span> <span className="text-white/60">React, {'{'}</span> <span className="text-blue-300">useState</span><span className="text-white/60">,</span> <span className="text-blue-300">useEffect</span> <span className="text-white/60">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-cyan-400">'react'</span>
          </span>
        </div>
        <div className="flex animate-typing-2">
          <span className="text-white/30 w-8 text-right mr-4">2</span>
          <span className="typing-text">
            <span className="text-purple-400">import</span> <span className="text-white/60">{'{'}</span> <span className="text-blue-300">MetricsPanel</span> <span className="text-white/60">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-cyan-400">'@nexus/ui'</span>
          </span>
        </div>
        <div className="flex animate-typing-3">
          <span className="text-white/30 w-8 text-right mr-4">3</span>
          <span></span>
        </div>
        <div className="flex animate-typing-4">
          <span className="text-white/30 w-8 text-right mr-4">4</span>
          <span className="typing-text">
            <span className="text-orange-300">interface</span> <span className="text-blue-300">DashboardProps</span> <span className="text-white/60">{'{'}</span>
          </span>
        </div>
        <div className="flex animate-typing-5">
          <span className="text-white/30 w-8 text-right mr-4">5</span>
          <span className="ml-4 typing-text">
            <span className="text-blue-300">userId</span><span className="text-white/60">:</span> <span className="text-orange-300">string</span>
          </span>
        </div>
        <div className="flex animate-typing-6">
          <span className="text-white/30 w-8 text-right mr-4">6</span>
          <span className="ml-4 typing-text">
            <span className="text-blue-300">theme</span><span className="text-white/60">?:</span> <span className="text-cyan-400">'light'</span> <span className="text-white/60">|</span> <span className="text-cyan-400">'dark'</span>
          </span>
        </div>
        <div className="flex animate-typing-7">
          <span className="text-white/30 w-8 text-right mr-4">7</span>
          <span className="typing-text"><span className="text-white/60">{'}'}</span></span>
        </div>
        <div className="flex animate-typing-8">
          <span className="text-white/30 w-8 text-right mr-4">8</span>
          <span></span>
        </div>
        <div className="flex animate-typing-9">
          <span className="text-white/30 w-8 text-right mr-4">9</span>
          <span className="typing-text">
            <span className="text-purple-400">export const</span> <span className="text-blue-300">Dashboard</span><span className="text-white/60">:</span> <span className="text-orange-300">React.FC</span><span className="text-white/60">&lt;</span><span className="text-orange-300">DashboardProps</span><span className="text-white/60">&gt; = {'({'}</span> <span className="text-blue-300">userId</span><span className="text-white/60">,</span> <span className="text-blue-300">theme</span> <span className="text-white/60">=</span> <span className="text-cyan-400">'dark'</span> <span className="text-white/60">{'})'}</span> <span className="text-purple-400">=&gt;</span> <span className="text-white/60">{'{'}</span>
          </span>
        </div>
        <div className="flex animate-typing-10">
          <span className="text-white/30 w-8 text-right mr-4">10</span>
          <span className="ml-4 typing-text">
            <span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">metrics</span><span className="text-white/60">,</span> <span className="text-blue-300">setMetrics</span><span className="text-white/60">] =</span> <span className="text-yellow-300">useState</span><span className="text-white/60">&lt;</span><span className="text-orange-300">MetricsData</span><span className="text-white/60">&gt;(</span><span className="text-purple-400">null</span><span className="text-white/60">)</span>
          </span>
        </div>
        <div className="flex animate-typing-11">
          <span className="text-white/30 w-8 text-right mr-4">11</span>
          <span className="ml-4 typing-text">
            <span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">isLoading</span><span className="text-white/60">,</span> <span className="text-blue-300">setIsLoading</span><span className="text-white/60">] =</span> <span className="text-yellow-300">useState</span><span className="text-white/60">(</span><span className="text-purple-400">true</span><span className="text-white/60">)</span>
          </span>
        </div>
        <div className="flex animate-typing-12">
          <span className="text-white/30 w-8 text-right mr-4">12</span>
          <span></span>
        </div>
        <div className="flex animate-typing-13">
          <span className="text-white/30 w-8 text-right mr-4">13</span>
          <span className="ml-4 typing-text">
            <span className="text-yellow-300">useEffect</span><span className="text-white/60">{'(()'}</span> <span className="text-purple-400">=&gt;</span> <span className="text-white/60">{'{'}</span>
          </span>
        </div>
        <div className="flex animate-typing-14">
          <span className="text-white/30 w-8 text-right mr-4">14</span>
          <span className="ml-8 typing-text">
            <span className="text-blue-300">fetchUserMetrics</span><span className="text-white/60">(</span><span className="text-blue-300">userId</span><span className="text-white/60">)</span>
          </span>
        </div>
        <div className="flex animate-typing-15">
          <span className="text-white/30 w-8 text-right mr-4">15</span>
          <span className="ml-12 typing-text">
            <span className="text-white/60">.</span><span className="text-yellow-300">then</span><span className="text-white/60">(</span><span className="text-blue-300">setMetrics</span><span className="text-white/60">)</span>
          </span>
        </div>
        <div className="flex animate-typing-16">
          <span className="text-white/30 w-8 text-right mr-4">16</span>
          <span className="ml-12 typing-text">
            <span className="text-white/60">.</span><span className="text-yellow-300">finally</span><span className="text-white/60">{'(()'}</span> <span className="text-purple-400">=&gt;</span> <span className="text-blue-300">setIsLoading</span><span className="text-white/60">(</span><span className="text-purple-400">false</span><span className="text-white/60">))</span><span className="typing-cursor">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}