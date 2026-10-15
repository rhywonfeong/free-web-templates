import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import KanbanBoard from './pages/KanbanBoard';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<KanbanBoard />} />
      </Route>
    </Routes>
  );
}