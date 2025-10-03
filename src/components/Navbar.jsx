/* eslint-disable react/prop-types */
import React from 'react'

export default function Navbar({dark}) {
  return (
    <nav className={dark?"bg-transparent shadow-md ":"bg-white shadow-md "}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-primary">STRAYCARE</span>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-8 md:items-center md:justify-center">
          <a href="/" className={dark ?"text-white hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium" :"text-black hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"}>Home</a>
          <a href="/about" className={dark ?"text-white hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium" :"text-black hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"}>About Us</a>
          <a href="/#services" className={dark ?"text-white hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium" :"text-black hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"}>Services</a>
          <a href="/contact" className={dark ?"text-white hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium" :"text-black hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"}>Contact Us</a>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className={dark ?"px-3 py-2 border bg-transparent border-primary rounded-l-md  focus:outline-none focus:ring-2 focus:ring-secondary focus:border-primary text-white" :"px-3 py-2 border bg-transparent border-primary rounded-l-md  focus:outline-none focus:ring-2 focus:ring-secondary focus:border-primary text-black"}
            placeholder="Search..."
          />
          <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-secondary">
            Search
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}
