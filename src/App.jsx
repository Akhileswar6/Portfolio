import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { ArtGallery } from './components/sections/ArtGallery';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 selection:bg-theme-accent selection:text-theme-bg relative">
        {/* Floating / Sticky Editorial Navigation */}
        <Navbar />

        {/* Main Single Page Portfolio Flow */}
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Experience />
          <Education />
          <ArtGallery />
          <Contact />
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

