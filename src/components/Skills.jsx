import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { skills, skillCategories } from '../constants';
import Reveal from './Reveal';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = useMemo(() => {
    return activeTab === "All"
      ? skills
      : skills.filter(skill => skill.category === activeTab);
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 px-6 bg-primary overflow-hidden">
      <div className="text-center mb-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A comprehensive list of my technical expertise and tools I use to bring ideas to life.
          </p>
        </Reveal>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border relative overflow-hidden group ${activeTab === category
              ? "bg-accent border-accent text-white shadow-lg shadow-accent/20 scale-105"
              : "bg-tertiary/40 border-theme-border text-secondary hover:border-accent/50 hover:text-white"
              }`}
          >
            <span className="relative z-10">{category}</span>
            {activeTab === category && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-accent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* SKILLS GRID */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${activeTab}`}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
            >
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.05}
                className="h-full"
              >
                <div className="flex flex-col items-center p-6 bg-tertiary/20 rounded-3xl border border-white/5 hover:border-accent/50 transition-all duration-500 group shadow-xl h-full relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative z-10 w-14 h-14 flex items-center justify-center mb-4 transform group-hover:scale-110 transition duration-500">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition"
                    />
                  </div>
                  <p className="relative z-10 text-secondary group-hover:text-theme-main font-medium text-sm transition tracking-wider">
                    {skill.name}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;