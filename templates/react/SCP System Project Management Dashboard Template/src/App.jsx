import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projetos from './pages/Projetos';
import Financeiro from './pages/Financeiro';
import Analytics from './pages/Analytics';

// Placeholders for less critical pages to ensure routing works
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8">
    <iconify-icon icon="solar:settings-minimalistic-linear" width="48" style={{ color: '#5A5A5A', marginBottom: '16px' }}></iconify-icon>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-muted">Este módulo está em desenvolvimento.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="financeiro" element={<Financeiro />} />
          <Route path="analytics" element={<Analytics />} />
          
          <Route path="engenheiros" element={<Placeholder title="Engenheiros" />} />
          <Route path="alertas" element={<Placeholder title="Alertas" />} />
          <Route path="relatorio" element={<Placeholder title="Relatório" />} />
          <Route path="horas" element={<Placeholder title="Horas" />} />
          <Route path="configuracoes" element={<Placeholder title="Configurações" />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;