import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <Header />
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Experience/>
      <Contact/>
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes> */}
      <Footer />
    </div>
  )
}

export default App