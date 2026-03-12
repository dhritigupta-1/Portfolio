import React, { useState } from 'react'
import { Github, Link as LinkIcon, Code, Globe, Terminal, Box } from 'lucide-react'
import { projects, projectCategories } from '../constants'

import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

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
    <section id="projects" className="py-20 px-6">

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
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border
              ${activeTab === tab
                ? "bg-accent border-accent text-white"
                : "bg-transparent border-white/20 text-secondary hover:border-accent"}`}
          >

            {getIcon(tab)} {tab}

          </button>

        ))}

      </div>

      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {filteredProjects.map((project, index) => (

          <Tilt
            glareEnable
            glareMaxOpacity={0.15}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            key={index}
          >

            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a1224] rounded-3xl overflow-hidden border border-white/5 flex flex-col group hover:border-accent/30 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >

              {/* IMAGE */}

              <div className="h-52 w-full overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="p-8 flex flex-col flex-grow text-center items-center">

                {/* TAGS */}

                <div className="flex flex-wrap justify-center gap-2 mb-6">

                  {project.tags.map(tag => (

                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full border border-white/20 text-[12px] text-secondary"
                    >

                      #{tag}

                    </span>

                  ))}

                </div>

                {/* TITLE */}

                <h3 className="text-2xl font-bold mb-4">

                  {project.name}

                </h3>

                {/* DESCRIPTION */}

                <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow">

                  {project.description}

                </p>

                {/* LINKS */}

                <div className="flex gap-6 mt-auto">

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e)=>e.stopPropagation()}
                      className="text-white hover:text-accent transition transform hover:scale-110"
                    >

                      <LinkIcon size={24}/>

                    </a>

                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e)=>e.stopPropagation()}
                    className="text-white hover:text-accent transition transform hover:scale-110"
                  >

                    <Github size={24}/>

                  </a>

                </div>

              </div>

            </motion.div>

          </Tilt>

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