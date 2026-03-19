/* eslint-disable no-unused-vars */
import React from "react"
import { education } from "../constants"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const Education = () => {

  return (
    <section id="education" className="py-24 px-6 sm:px-10 md:px-24">

      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 italic"
      >
        Education
      </motion.h2>


      {/* Timeline container */}

      <div className="max-w-4xl mx-auto relative">

        {/* Timeline glowing line */}

        <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-accent/80 via-accent/40 to-transparent"></div>


        {education.map((edu, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-12 mb-12"
          >

            {/* Animated Node */}

            <div className="absolute left-0 top-2 flex items-center justify-center w-8 h-8 rounded-full bg-accent shadow-lg shadow-accent/40 animate-pulse">

              <GraduationCap size={16} className="text-white"/>

            </div>


            {/* Glass Card */}

            <div
              className="
                p-8
                text-left
                backdrop-blur-xl
                border border-gray-200 dark:border-white/10
                rounded-2xl
                hover:-translate-y-1
                hover:border-accent
                hover:shadow-xl hover:shadow-accent/30
                transition duration-500
              "
            >

              {/* Degree */}

              <h3 className="text-xl font-bold leading-tight text-black dark:text-white">

                {edu.degree}

              </h3>


              {/* Accent divider */}

              <div className="w-16 h-0.5 bg-accent mt-2 mb-4 rounded"></div>


              <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">

                {/* Field */}

                {edu.field && (
                  <p className="text-accent">{edu.field}</p>
                )}

                {/* Institution */}

                <p>{edu.institution}</p>


                {/* Year */}

                <div className="flex items-center gap-2 text-xs uppercase tracking-wide">

                  <Calendar size={14} className="text-accent"/>

                  {edu.year}

                </div>

              </div>


              {(edu.CGPA || edu.percentage) && (

                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">

                  {edu.CGPA && <p>CGPA: {edu.CGPA}</p>}

                  {edu.percentage && <p>Percentage: {edu.percentage}</p>}

                </div>

              )}


              {/* Description */}

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

                {edu.description}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Education