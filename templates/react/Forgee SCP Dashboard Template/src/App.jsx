import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import AppLayout from './components/Layout/AppLayout';

function App() {
  // Simple mock auth state for demonstration
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/app/dashboard" replace /> : 
            <Login onLogin={() => setIsAuthenticated(true)} />
          } 
        />
        
        {/* Protected App Routes */}
        <Route 
          path="/app" 
          element={
            isAuthenticated ? 
            <AppLayout onLogout={() => setIsAuthenticated(false)} /> : 
            <Navigate to="/" replace />
          }
        >
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="engineers" element={<div className="p-8 text-[#8C9BAA]">Engineers module in development...</div>} />
          <Route path="financial" element={<div className="p-8 text-[#8C9BAA]">Financial module in development...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;