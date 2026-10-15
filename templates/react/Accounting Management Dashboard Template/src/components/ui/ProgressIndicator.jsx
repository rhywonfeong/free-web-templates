import React from 'react';
import { clsx } from 'clsx';

const steps = [
  { num: 1, label: 'Boas-vindas' },
  { num: 2, label: 'Modelo de Equipe' },
  { num: 3, label: 'Áreas de Atuação' },
  { num: 4, label: 'Pendências' },
  { num: 5, label: 'Resumo' },
];

export default function ProgressIndicator({ currentStep }) {
  return (
    <div className="w-full bg-[#FFFFFF] py-4 shadow-sm z-40 relative border-b border-[#E5E7EB]">
      <div className="max-w-[800px] mx-auto flex items-center justify-between relative px-8">
        
        {/* Background Connecting Lines */}
        <div className="absolute top-[16px] left-[60px] right-[60px] h-[2px] bg-[#E5E7EB] z-0"></div>
        
        {/* Active Connecting Lines */}
        <div 
          className="absolute top-[16px] left-[60px] h-[2px] bg-[#2D8654] z-0 transition-all duration-500"
          style={{ width: `calc(${((Math.min(currentStep, 5) - 1) / 4) * 100}% - 40px)` }}
        ></div>

        {steps.map((step, index) => {
          const isCompleted = step.num < currentStep;
          const isActive = step.num === currentStep;
          const isFuture = step.num > currentStep;

          return (
            <div key={step.num} className="relative z-10 flex flex-col items-center bg-[#FFFFFF] px-2">
              <div 
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                  isCompleted && "bg-[#2D8654] text-white border-2 border-[#2D8654]",
                  isActive && "bg-[#10677F] text-white shadow-[0_0_0_4px_#DCEBEF]",
                  isFuture && "bg-[#FFFFFF] text-[#939393] border-2 border-[#C6C7C7]"
                )}
              >
                {isCompleted ? (
                  <iconify-icon icon="solar:check-read-bold" style={{ fontSize: '18px' }}></iconify-icon>
                ) : (
                  step.num
                )}
              </div>
              <span 
                className={clsx(
                  "text-xs mt-2 font-medium whitespace-nowrap absolute top-8 pt-1 transition-colors duration-300",
                  isCompleted && "text-[#2D8654]",
                  isActive && "text-[#10677F]",
                  isFuture && "text-[#939393]"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}