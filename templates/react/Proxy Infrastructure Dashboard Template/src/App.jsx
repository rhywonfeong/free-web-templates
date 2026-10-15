import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Dashboard Pages
import DashboardLayout from './components/dashboard/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Invoices from './pages/dashboard/Invoices';
import Tickets from './pages/dashboard/Tickets';
import ApiDocs from './pages/dashboard/ApiDocs';
import Settings from './pages/dashboard/Settings';

// Landing Layout Wrapper
const LandingLayout = () => (
  <div className="min-h-screen bg-[#0F0F0F] text-white font-sans flex flex-col selection:bg-[#E1B552]/30 selection:text-white relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E1B552]/5 via-[#0F0F0F] to-[#0F0F0F] -z-10 pointer-events-none"></div>
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="api-docs" element={<ApiDocs />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}