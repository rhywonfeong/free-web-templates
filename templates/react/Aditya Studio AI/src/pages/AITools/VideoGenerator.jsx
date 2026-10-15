import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useSubscription } from '../../context/SubscriptionContext';

const ProGate = ({ children }) => {
  const { isPro } = useSubscription();
  const navigate = useNavigate();

  if (isPro) {
    return children;
  }

  return (
    <div className="relative">
      {/* Blurred background content to tease */}
      <div className="filter blur-md opacity-50 pointer-events-none select-none">
        {children}
      </div>
      
      {/* Paywall Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <Card className="max-w-md w-full bg-[#171717]/90 backdrop-blur-xl border-[#3f3f46] shadow-2xl">
          <Card.Body className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-0.5 mb-6 shadow-lg shadow-orange-500/20">
              <div className="w-full h-full bg-[#171717] rounded-[14px] flex items-center justify-center">
                <iconify-icon icon="solar:star-bold" width="32" class="text-orange-500"></iconify-icon>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Pro Feature</h2>
            <p className="text-[#a1a1aa] mb-8 text-sm">
              Generate entire short-form videos and B-roll clips from simple text prompts. Upgrade to Pro to unlock our most powerful AI model.
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none"
              onClick={() => navigate('/pricing')}
            >
              Upgrade to Pro
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default function VideoGenerator() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2 flex items-center gap-2">
          AI Video Generator
          <span className="text-[10px] font-bold tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-0.5 rounded uppercase">PRO</span>
        </h1>
        <p className="text-[#a1a1aa]">Create B-roll or short vertical videos using text-to-video diffusion models.</p>
      </div>

      <ProGate>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <Card.Header>
              <Card.Title>Configuration</Card.Title>
            </Card.Header>
            <Card.Body className="p-5 space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">Prompt</label>
                <textarea 
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[120px]"
                  placeholder="A cinematic drone shot over a neon-lit cyberpunk city at night, raining, 4k resolution..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">Aspect Ratio</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 border border-amber-500 bg-amber-500/10 text-amber-500 rounded-md text-sm font-medium">16:9</button>
                  <button className="py-2 border border-[#262626] bg-[#0a0a0a] text-[#a1a1aa] rounded-md text-sm font-medium">9:16</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">Duration</label>
                <select className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
                  <option>3 seconds</option>
                  <option>5 seconds</option>
                  <option>10 seconds (Cost: 2 credits)</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-none">
                Generate Video
              </Button>
            </Card.Body>
          </Card>

          <Card className="lg:col-span-2">
            <Card.Header>
              <Card.Title>Output</Card.Title>
            </Card.Header>
            <Card.Body className="p-6 h-full min-h-[400px] flex items-center justify-center bg-[#0a0a0a]">
               <div className="text-center text-[#71717a]">
                 <iconify-icon icon="solar:video-frame-linear" width="64" class="mb-4 opacity-20 mx-auto"></iconify-icon>
                 <p className="text-sm">Your generated video will appear here.</p>
               </div>
            </Card.Body>
          </Card>
        </div>
      </ProGate>
    </div>
  );
}