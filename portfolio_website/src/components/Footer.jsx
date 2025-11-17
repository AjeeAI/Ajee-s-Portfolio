import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    // { path: '/src/assets/Resume.pdf', label: 'Resume' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2025 Ajee's Solutions. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer