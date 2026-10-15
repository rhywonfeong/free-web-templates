import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-extrabold text-[#3B5DE5] mb-4 tracking-tighter">404</h1>
      <h2 className="text-4xl font-bold text-[#171717] mb-6">Page not found</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-[#171717] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </div>
  );
}