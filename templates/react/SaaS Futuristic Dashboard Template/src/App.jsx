import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NodeControlPage from './pages/NodeControlPage';

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-950 overflow-hidden relative selection:bg-cyan-500/30">
      <Routes>
        <Route path="/" element={<NodeControlPage />} />
      </Routes>
    </div>
  );
}