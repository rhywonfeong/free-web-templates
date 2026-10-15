import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          {/* Placeholder routes for navigation items */}
          <Route path="employees" element={<div className="p-8 text-gray-500">Employees View</div>} />
          <Route path="calendar" element={<div className="p-8 text-gray-500">Calendar View</div>} />
          <Route path="reports" element={<div className="p-8 text-gray-500">Reports View</div>} />
          <Route path="settings" element={<div className="p-8 text-gray-500">Settings View</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;