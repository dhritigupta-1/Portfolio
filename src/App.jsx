import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reveal from './components/Reveal'
import GlowCursor from './components/GlowCursor'
import useLenisScroll from './hooks/useLenisScroll'

const Background3D = React.lazy(() => import('./three/Background3D'));
const About = React.lazy(() => import('./components/About'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Certificates = React.lazy(() => import('./components/Certificates'));
const Leetcode = React.lazy(() => import('./components/Leetcode'));
const Contact = React.lazy(() => import('./components/Contact'));
const Training = React.lazy(() => import('./components/Training'));

const SECTION_COMPONENTS = [
  { key: 'about', Component: About },
  { key: 'education', Component: Education },
  { key: 'skills', Component: Skills },
  { key: 'training', Component: Training },
  { key: 'projects', Component: Projects },
  { key: 'certificates', Component: Certificates },
  { key: 'achievements', Component: Achievements },
  { key: 'leetcode', Component: Leetcode },
  { key: 'contact', Component: Contact },
]

function App() {
  useLenisScroll()

  return (
    <div className="relative">

      {/* Background Grid */}
      <div className="grid-bg"></div>

      {/* 3D Background */}
      <React.Suspense fallback={null}>
        <Background3D />
      </React.Suspense>

      {/* Glow Cursor */}
      <GlowCursor />

      <Navbar />

      <main className="space-y-10 pb-6">
        {/* Hero not wrapped so it loads immediately */}
        <Hero />

        <React.Suspense fallback={<div className="py-20 text-center text-secondary">Loading section...</div>}>
          {SECTION_COMPONENTS.map(({ key, Component: SectionComponent }, index) => (
            <Reveal key={key} delay={index * 0.05}>
              {React.createElement(SectionComponent)}
            </Reveal>
          ))}
        </React.Suspense>

      </main>

      <footer className="py-10 text-center border-t border-theme text-theme-secondary text-sm">
        © {new Date().getFullYear()} Dhriti Gupta • Crafted with Passion
      </footer>

    </div>
  )
}

export default App