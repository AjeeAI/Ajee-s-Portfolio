import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { 
      icon: <FaGithub/>, 
      url: 'https://github.com/AjeeAI', 
      label: 'GitHub' 
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/ajeeflutterdev', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaTwitter />, 
      url: 'https://x.com/AdesojiAjijola2', 
      label: 'Twitter' 
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 w-full " id='hero'>
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ajijolaoluwa Adesoji - Full-Stack Developer
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            Building seamless digital experiences across mobile and web.
          </p>
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent w-24 my-10 flex justify-center items-center"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center">
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
          
          <div className="flex space-x-6 justify-center ">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xl transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero