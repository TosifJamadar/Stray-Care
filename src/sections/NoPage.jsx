import React from 'react'

export default function NoPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-custom-gray-800 mb-4">404</h1>
      <p className="text-2xl text-custom-gray-600 mb-8">Page Not Found</p>
      <a href="/" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
        Go Home
      </a>
    </div>
  </div>
  )
}
