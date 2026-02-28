import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import GlowCursor from './components/GlowCursor';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="relative">
      {/* 1. Background Grid & Glow */}
      <div className="grid-bg"></div>
      <GlowCursor />
      
      <Navbar />

      <main className="space-y-10">
        {/* We don't wrap Hero in Reveal to make it visible immediately */}
        <Hero />

        <Reveal> <About /> </Reveal>
        <Reveal> <Skills /> </Reveal>
        <Reveal> <Projects /> </Reveal>
        <Reveal> <Certificates /> </Reveal>
        <Reveal> <Contact /> </Reveal>
      </main>

      <footer className="py-10 text-center border-t border-theme text-theme-secondary text-sm">
        © {new Date().getFullYear()} Dhriti Gupta • Crafted with Passion
      </footer>
    </div>
  );
}

export default App;