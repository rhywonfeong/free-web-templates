import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingProvider } from './context/OnboardingContext';
import AppLayout from './components/layout/AppLayout';
import Step1Welcome from './pages/onboarding/Step1Welcome';
import Step2TeamModel from './pages/onboarding/Step2TeamModel';
import Step3Areas from './pages/onboarding/Step3Areas';
import Step4Pending from './pages/onboarding/Step4Pending';
import Step5Summary from './pages/onboarding/Step5Summary';
import Dashboard from './pages/Dashboard';
import CadastroIndividual from './pages/contadores/CadastroIndividual';
import ImportacaoPlanilha from './pages/contadores/ImportacaoPlanilha';

export default function App() {
  return (
    <BrowserRouter>
      <OnboardingProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding/step-1" replace />} />
          
          <Route element={<AppLayout />}>
            <Route path="/onboarding/step-1" element={<Step1Welcome />} />
            <Route path="/onboarding/step-2" element={<Step2TeamModel />} />
            <Route path="/onboarding/step-3" element={<Step3Areas />} />
            <Route path="/onboarding/step-4" element={<Step4Pending />} />
            <Route path="/onboarding/step-5" element={<Step5Summary />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Contadores Flow */}
            <Route path="/contadores/novo" element={<CadastroIndividual />} />
            <Route path="/contadores/importar" element={<ImportacaoPlanilha />} />
          </Route>
        </Routes>
      </OnboardingProvider>
    </BrowserRouter>
  );
}