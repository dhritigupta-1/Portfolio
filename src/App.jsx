import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import GlowCursor from './components/GlowCursor'
import Reveal from './components/Reveal'
import Background3D from "./three/Background3D";

import Lenis from "lenis"

function App() {

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  return (
    <div className="relative">

      {/* Background Grid */}
      <div className="grid-bg"></div>

      {/* 3D Background */}
      <Background3D />

      {/* Glow Cursor */}
      <GlowCursor />

      <Navbar />

      <main className="space-y-10">

        {/* Hero not wrapped so it loads immediately */}
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Certificates />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

      </main>

      <footer className="py-10 text-center border-t border-theme text-theme-secondary text-sm">
        © {new Date().getFullYear()} Dhriti Gupta • Crafted with Passion
      </footer>

    </div>
  )
}

export default App