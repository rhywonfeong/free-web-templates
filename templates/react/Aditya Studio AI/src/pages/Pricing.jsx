import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSubscription } from '../context/SubscriptionContext';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const { isPro, togglePro } = useSubscription();
  const navigate = useNavigate();

  const handleToggle = () => {
    togglePro();
    if (!isPro) {
      setTimeout(() => navigate('/ai-tools/video-generator'), 500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Simple, transparent pricing</h1>
        <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
          Unlock the full potential of your channel with advanced AI generation tools.
          Currently you are on the <strong className="text-white">{isPro ? 'Pro' : 'Free'}</strong> plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Free Tier */}
        <Card className={clsx("relative", !isPro ? "border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.1)]" : "")}>
          <Card.Body className="p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Creator Basic</h3>
            <p className="text-sm text-[#a1a1aa] mb-6">Essential tools for growing channels.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-[#a1a1aa]">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Basic Analytics Dashboard', 'Standard SEO Checker (10/day)', 'Thumbnail Predictor (5/day)', 'View Prediction (Basic Models)'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#e4e4e7]">
                  <iconify-icon icon="solar:check-circle-bold" class="text-indigo-500 mt-0.5"></iconify-icon>
                  {feature}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-[#71717a] opacity-50">
                <iconify-icon icon="solar:close-circle-bold" class="mt-0.5"></iconify-icon>
                AI Video Generation
              </li>
            </ul>

            <Button 
              variant={!isPro ? "secondary" : "ghost"} 
              className="w-full" 
              onClick={() => isPro && handleToggle()}
              disabled={!isPro}
            >
              {!isPro ? 'Current Plan' : 'Downgrade'}
            </Button>
          </Card.Body>
        </Card>

        {/* Pro Tier */}
        <Card className={clsx("relative overflow-hidden", isPro ? "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)]" : "")}>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
          <Card.Body className="p-8">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              Studio Pro
              <iconify-icon icon="solar:star-bold" class="text-amber-500"></iconify-icon>
            </h3>
            <p className="text-sm text-[#a1a1aa] mb-6">Full AI suite for professional creators.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$29</span>
              <span className="text-[#a1a1aa]">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Advanced Analytics & Trends', 'Unlimited SEO Checks', 'Unlimited Thumbnail Predictions', 'View Prediction (Advanced Models)', 'AI Video Generator (100 credits/mo)'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#e4e4e7]">
                  <iconify-icon icon="solar:check-circle-bold" class="text-amber-500 mt-0.5"></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              className={clsx("w-full border-none", isPro ? "bg-[#262626] text-white" : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-lg shadow-orange-500/25")}
              onClick={() => !isPro && handleToggle()}
              disabled={isPro}
            >
              {isPro ? 'Active Plan' : 'Upgrade to Pro'}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}