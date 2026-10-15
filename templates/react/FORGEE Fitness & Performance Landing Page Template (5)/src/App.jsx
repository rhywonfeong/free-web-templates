import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Additional routes would go here if needed (e.g., /planos, /agendar) */}
      </Route>
    </Routes>
  );
}

export default App;