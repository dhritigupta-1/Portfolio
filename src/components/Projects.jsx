import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Globe, Terminal, Box } from 'lucide-react'
import { projects, projectCategories } from '../constants'
import ProjectCard from './ProjectCard'
import ProjectModal from "./ProjectModal"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab)

  const getIcon = (tab) => {
    if (tab === "Python") return <Code size={16} />
    if (tab === "Web Development") return <Globe size={16} />
    if (tab === "CPP" || tab === "Java") return <Terminal size={16} />
    return <Box size={16} />
  }

  return (
    <section id="projects" className="scroll-mt-28 py-20 px-6">
      {/* TITLE */}
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold italic"
        >
          Work <span className="text-accent">Showcase</span>
        </motion.h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {projectCategories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border backdrop-blur-sm relative overflow-hidden group
              ${activeTab === tab
                ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                : "bg-white/5 border-white/20 text-secondary hover:border-accent hover:bg-white/10"}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {getIcon(tab)} {tab}
            </span>
            {activeTab === tab && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-accent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard 
                project={project} 
                onClick={setSelectedProject} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
