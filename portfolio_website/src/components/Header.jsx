import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()


  return (
    <header className="fixed top-0 w-full z-50 bg-dark-primary/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Ajee
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href='#techstack'>
              Tech Stack
            </a>
            <a href='#projects'>
              Projects
            </a>

            <a href='#about'>
              About
            </a>

            <a href='#experience'>
              Experience
            </a>

            <a href='#contact'>
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-slate-300 hover:text-white font-medium transition-colors ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="/src/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
            >
              View CV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header