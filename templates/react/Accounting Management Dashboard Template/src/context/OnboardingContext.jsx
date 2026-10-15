import React, { createContext, useState, useContext } from 'react';

const OnboardingContext = createContext(null);

export function OnboardingProvider({ children }) {
  const [state, setState] = useState({
    modelo: null, // 'GENERALISTA' | 'ESPECIALISTA'
    areas: [], // array of selected areas
    pendencias: null, // 'CONFIGURADO' | 'PULADO'
    onboardingStatus: 'PENDENTE', // 'PENDENTE' | 'PARCIAL' | 'CONCLUIDO'
    isFirstDashboardAccess: true,
  });

  const updateState = (updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const markDashboardAccessed = () => {
    setState((prev) => ({ ...prev, isFirstDashboardAccess: false }));
  };

  return (
    <OnboardingContext.Provider value={{ state, updateState, markDashboardAccessed }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}