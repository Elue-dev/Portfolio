import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Testimonials from '../components/testimonials/Testimonials'

export default function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}
