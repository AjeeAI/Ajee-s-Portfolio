import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const socialLinks = [
    { icon: 'github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ajee - Full-Stack Developer
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            Building seamless digital experiences across mobile and web.
          </p>
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent w-24 my-10"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors text-center"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold py-3 px-6 rounded-md transition-colors text-center"
            >
              Contact Me
            </Link>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xl transition-colors"
                aria-label={social.label}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero