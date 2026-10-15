import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import TodosPage from './pages/TodosPage';
import StatsPage from './pages/StatsPage';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodosPage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;