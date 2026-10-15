import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PlayerProfile from './pages/PlayerProfile';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/player/:id" element={<PlayerProfile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;