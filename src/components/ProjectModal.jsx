import { motion } from "framer-motion";
import { Github, Link as LinkIcon, X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-primary border border-white/10 rounded-3xl p-6 md:p-10 max-w-2xl w-full relative overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-secondary hover:text-white transition p-2 hover:bg-white/5 rounded-full"
        >
          <X size={24} />
        </button>

        {/* IMAGE */}
        <div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden mb-8 border border-white/5">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-main">{project.name}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-secondary text-lg leading-relaxed mb-10">{project.description}</p>

          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
              >
                <LinkIcon size={20}/> Live Demo
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-theme-main px-6 py-3 rounded-xl font-bold transition-all bg-white/5"
            >
              <Github size={20}/> Source Code
            </a>
          </div>
        </motion.div>

        {/* Backdrop Glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -z-10" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;