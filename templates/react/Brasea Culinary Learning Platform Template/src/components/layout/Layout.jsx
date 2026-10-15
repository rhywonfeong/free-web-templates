import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-[#CEC4B8]">
      <Navbar />
      <div className="flex-1 pt-20"> {/* pt-20 to account for fixed navbar */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;