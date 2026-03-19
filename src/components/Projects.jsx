import React, { useState } from 'react'
import { Github, Link as LinkIcon, Code, Globe, Terminal, Box } from 'lucide-react'
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
        <h2 className="text-4xl md:text-5xl font-bold italic">
          Work <span className="text-accent">Showcase</span>
        </h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">

        {projectCategories.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border backdrop-blur-sm
              ${activeTab === tab
                ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                : "bg-white/5 border-white/20 text-secondary hover:border-accent hover:bg-white/10"}`}
          >

            {getIcon(tab)} {tab}

          </button>

        ))}

      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={setSelectedProject} 
          />
        ))}
      </div>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  )

}

export default Projects
