import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t pt-20 pb-10 mt-20 text-sm border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/b2493348-dff7-4746-b3f9-cc8d6013df44/49260d64-eda2-4520-a408-41e5cd511cfc-Tlogo.svg?v=1776099261643" 
              alt="Tarceta" 
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-xl tracking-tight">Tarceta</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <span className="font-medium mb-2 text-white">Features</span>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Home</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">About</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Product</a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-medium mb-2 text-white">Solutions</span>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Pricing</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Blog</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Blog Article</a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-medium mb-2 text-white">Company</span>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Contact</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Login</a>
          <a href="#" className="text-gray-500 transition-colors hover:text-white">Signup</a>
        </div>

        <div className="col-span-2 md:col-span-1">
          <span className="font-medium mb-4 block text-white">Email</span>
          <input type="email" placeholder="hello@tarceta.com" className="w-full bg-[#111] border rounded px-3 py-2 text-xs mb-2 border-white/10 text-white" />
          <button className="w-full py-2 rounded text-xs font-medium transition-colors text-black bg-indigo-200 hover:bg-indigo-300">Sign up</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs pt-8 border-t text-gray-600 border-white/5">
        <div>Copyright ©2024 Tarceta</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;