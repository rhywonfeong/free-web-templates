import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[#EF295A] mb-6">
        <iconify-icon icon="solar:ghost-smile-linear" width="64"></iconify-icon>
      </div>
      <h1 className="text-4xl font-semibold tracking-tight mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#1A212A] text-white dark:bg-white dark:text-[#1A212A] font-medium rounded-full hover:scale-105 transition-transform"
      >
        Return Home
      </Link>
    </div>
  )
}