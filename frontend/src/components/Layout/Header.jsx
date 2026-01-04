import React from 'react'
import { Link } from 'react-router-dom'
import { FaShip } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <FaShip className="text-3xl" />
            <span>Vessel Customizer</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-secondary transition">Home</Link>
            <Link to="/customize" className="hover:text-secondary transition">Customize</Link>
            <a href="#reviews" className="hover:text-secondary transition">Reviews</a>
            <a href="#location" className="hover:text-secondary transition">Location</a>
            <a href="#contact" className="hover:text-secondary transition">Contact</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
