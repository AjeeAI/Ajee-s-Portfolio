import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      title: "React Admin Dashboard",
      description: "A complex data visualization and management tool for business analytics.",
      technologies: ["React", "Chart.js", "Tailwind"]
    },
    {
      title: "E-commerce Mobile App",
      description: "A cross-platform storefront built with Flutter and Firebase for seamless shopping.",
      technologies: ["Flutter", "Firebase", "Stripe API"]
    },
    {
      title: "FastAPI Backend System",
      description: "A high-performance RESTful API for a data-intensive web application.",
      technologies: ["FastAPI", "PostgreSQL", "Docker"]
    },
    {
      title: "Full-Stack Web App",
      description: "A SaaS platform for project management with a Node.js backend and Vue.js frontend.",
      technologies: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      title: "Data Pipeline & CI/CD",
      description: "Automated data processing pipeline with continuous integration and deployment.",
      technologies: ["Python", "AWS Lambda", "Jenkins"]
    },
    {
      title: "Portfolio Website v2",
      description: "My personal portfolio site built to be fast, responsive, and visually appealing.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"]
    }
  ]

  return (
    <section className="min-h-screen pt-24 " id='projects'>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Selected Projects</h1>
          
          <p className="text-slate-400 mb-8 text-lg">
            Here's a selection of my recent projects. Hover over a card for more details and links.
          </p>
          
          <div className="section-divider"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="section-divider"></div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in collaborating?
            </h2>
            
            <p className="text-slate-400 mb-8 text-lg">
              Let's build something amazing together. Reach out to discuss your project.
            </p>
            
            <div className="section-divider"></div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects