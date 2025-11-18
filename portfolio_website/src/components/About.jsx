import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const techStack = [
    { name: 'React'},
    { name: 'JavaScript'},
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'Flutter'},
    { name: 'API'},
    { name: 'Python'},
     { name: 'FastAPI'},
    { name: 'MySQL'},
    { name: 'Firebase'},
    {name: 'Dart'},
    {name: 'Supabase'},
    { name: 'PHP' },
    { name: 'Git'}
  ]

  return (
    <section className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          
          <p className="text-slate-400 mb-8 text-lg">
            I'm Ajijolaoluwa Adesoji, a full-stack developer passionate about building efficient, scalable applications. 
            With deep experience in mobile development with Flutter, dynamic front-ends with React, 
            and robust back-end systems with FastAPI, I thrive on creating seamless user experiences 
            from concept to deployment.
          </p>
          
          <div className="section-divider"></div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">My Tech Stack</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-lg text-center">
                    <div className="text-white font-medium mb-1">{tech.name}</div>
                    {/* <div className="text-slate-400 text-sm">{tech.level}</div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About