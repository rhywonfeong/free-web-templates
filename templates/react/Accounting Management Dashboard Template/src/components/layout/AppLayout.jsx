import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import ProgressIndicator from '../ui/ProgressIndicator';

export default function AppLayout() {
  const location = useLocation();
  const isOnboarding = location.pathname.includes('/onboarding');
  
  // Extract step number from path (e.g., /onboarding/step-2 -> 2)
  const stepMatch = location.pathname.match(/step-(\d)/);
  const currentStep = stepMatch ? parseInt(stepMatch[1], 10) : 0;

  return (
    <div className="min-h-screen bg-[#F7F9FA] flex flex-col font-sans">
      <TopNav isLocked={isOnboarding} />
      
      {isOnboarding && currentStep > 0 && currentStep <= 5 && (
        <ProgressIndicator currentStep={currentStep} />
      )}
      
      <main className="flex-1 flex flex-col items-center pb-24">
        <Outlet />
      </main>
    </div>
  );
}