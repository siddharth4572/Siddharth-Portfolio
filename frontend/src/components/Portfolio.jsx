import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Contact from './Contact';
import ParticleBackground from './ParticleBackground';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <section id="home">
            <Hero scrollY={scrollY} />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="achievements">
            <Achievements />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;