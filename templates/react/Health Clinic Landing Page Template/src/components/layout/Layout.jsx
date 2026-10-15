import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Grain from '../effects/Grain';

const Layout = () => {
  return (
    <div className="relative min-h-screen selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Grain />
      <Navbar />
      <main className="relative z-10 pt-24 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;