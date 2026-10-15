import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Header />
      <div className="flex-grow pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}