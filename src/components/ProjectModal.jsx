import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-[#0a1224] rounded-2xl p-8 max-w-xl w-full border border-white/10"
      >

        <h2 className="text-3xl font-bold mb-4">{project.name}</h2>

        <p className="text-secondary mb-6">{project.description}</p>

        <div className="flex gap-4">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-accent px-4 py-2 rounded-lg"
            >
              <Link size={16}/> Live
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg"
          >
            <Github size={16}/> Github
          </a>

        </div>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-secondary hover:text-white"
        >
          Close
        </button>

      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;