/* eslint-disable no-unused-vars */
import React from "react"
import { education } from "../constants"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const Education = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-24 px-6 sm:px-10 md:px-24 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-24 italic"
      >
        Education <span className="text-accent italic">Journey</span>
      </motion.h2>

      {/* Timeline container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Timeline glowing line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-4 top-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-16 mb-16 last:mb-0 group"
          >
            {/* Animated Node */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a1224] border-2 border-accent shadow-lg shadow-accent/20 z-10 transition-transform duration-500 group-hover:scale-125">
              <GraduationCap size={18} className="text-accent font-bold"/>
              {/* Outer Pulse */}
              <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping -z-10" />
            </div>

            {/* Glass Card */}
            <div
              className="
                p-8
                text-left
                bg-tertiary/20
                backdrop-blur-xl
                border border-white/5
                rounded-3xl
                group-hover:border-accent/40
                group-hover:bg-tertiary/30
                group-hover:translate-x-2
                group-hover:shadow-2xl group-hover:shadow-accent/10
                transition duration-500
                relative overflow-hidden
              "
            >
              {/* Content staggered anim */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-theme-main group-hover:text-accent transition duration-300">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    <Calendar size={14} />
                    {edu.year}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {edu.field && (
                    <p className="text-lg font-medium text-theme-main/80">{edu.field}</p>
                  )}
                  <p className="text-secondary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {edu.institution}
                  </p>
                </div>

                {(edu.CGPA || edu.percentage) && (
                  <div className="mb-6 flex flex-wrap gap-4">
                    {edu.CGPA && (
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-xs text-secondary uppercase block mb-1">CGPA</span>
                        <span className="text-lg font-bold text-accent">{edu.CGPA}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-xs text-secondary uppercase block mb-1">Percentage</span>
                        <span className="text-lg font-bold text-accent">{edu.percentage}</span>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Subtle mesh background for card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education;