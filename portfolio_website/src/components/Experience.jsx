import React from 'react'

const Experience = () => {
  const timelineItems = [
    {
      title: "Full-Stack Developer",
      company: "Upwork",
      period: "Ongoing",
      description: [
        "Developing and maintaining web applications using React and FastAPI.",
        "Implemented RESTful APIs and integrated with third-party services."
      ],
      technologies: ["React", "FastAPI", "API Design"]
    },
    {
      title: "Flutter Developer",
      company: "Upwork.",
      period: "Present",
      description: [
        "Led a team to build cross-platform mobile apps from scratch.",
        "Architected scalable mobile solutions and managed app releases."
      ],
      technologies: ["Flutter", "Firebase", "CI/CD"]
    },
    {
      title: "B.S. in Statistics",
      company: "Obafemi Awolowo University",
      period: "March 2019 - July 2025",
      description: [
        "Focus on numerical computations, Introduction to Python Programming, Advanced Python Programming, Advanced Calculus, Real analysis...",
        "Graduated with honors."
      ],
      technologies: []
    },
    {
      title: "AI Development Fellow",
      company: "AI Fellowship, NCC, Abeokuta",
      period: "August 2025 - now",
      description: [
        "Learning the integration of artificial intelligence to real world applications",
        ""
      ],
      technologies: ["HTML & CSS", "JavaScript", "FastAPI","SQL", "Lang Chain", "Lang Graph" ]
    }
  ]

  return (
    <section className="min-h-screen pt-24 " id='experience'>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">My Journey</h1>
          
          <p className="text-slate-400 mb-12 text-lg">
            A timeline of my professional experience and educational background in the world of tech.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1 w-1 h-full bg-slate-700"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:ml-auto md:w-1/2' : 'md:pl-8 md:mr-auto md:w-1/2'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1 w-4 h-4 bg-blue-500 rounded-full -top-1"></div>
                
                <div className="bg-slate-800 rounded-lg p-6 ml-12 md:ml-0">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-400 mb-2">{item.company}</p>
                  <p className="text-slate-400 text-sm mb-4">{item.period}</p>
                  
                  <ul className="text-slate-300 mb-4 space-y-2">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-700 text-slate-300 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience