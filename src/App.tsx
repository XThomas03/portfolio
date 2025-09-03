// src/App.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { navSections } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionsToObserve = [...navSections, { id: 'proyectos', label: 'Proyectos' }];
    sectionsToObserve.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Se eliminó la clase 'relative' que ya no es necesaria
    <div className="App">
      {/* El fondo Aurora fue eliminado de aquí */}

      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
