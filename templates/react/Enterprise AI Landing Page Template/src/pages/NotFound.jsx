import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <iconify-icon icon="solar:ghost-linear" class="text-6xl text-[#8fd9f7] mb-6"></iconify-icon>
      <h1 className="text-4xl font-semibold tracking-tight text-[#0a1433] mb-4">Page not found</h1>
      <p className="text-[#263669] mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Return to Homepage</Button>
      </Link>
    </div>
  )
}

export default NotFound