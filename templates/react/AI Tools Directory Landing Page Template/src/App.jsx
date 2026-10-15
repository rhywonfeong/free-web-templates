import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ToolDetails from './pages/ToolDetails';
import SubmitTool from './pages/SubmitTool';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route path="tool/:slug" element={<ToolDetails />} />
                <Route path="submit" element={<SubmitTool />} />
                <Route path="blog" element={<Blog />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;