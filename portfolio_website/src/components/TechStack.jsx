import React from 'react'

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Expert" },
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "PHP", level: "Proficient" },
        { name: "MySQL", level: "Proficient" }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Expert" }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Proficient': return 'bg-yellow-500';
      default: return 'bg-slate-500';
    }
  }

  return (
    <section className="min-h-screen pt-24" id='techstack'>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">My Tech Stack</h1>
          
          <p className="text-slate-400 mb-12 text-lg">
            A showcase of the tools and technologies I use to build modern, efficient, and scalable applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-6">{category.title}</h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-slate-300">{skill.name}</span>
                      <div className="flex items-center">
                        <span className="text-slate-400 mr-2 text-sm">{skill.level}</span>
                        <div className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack