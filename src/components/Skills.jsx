import React, { useState } from 'react';
import { skills, skillCategories } from '../constants';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold italic">My <span className="text-accent">Skills</span></h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
        {skillCategories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
              ${activeTab === tab 
                ? "bg-accent border-accent text-white shadow-lg shadow-accent/30" 
                : "bg-tertiary/20 border-white/10 text-secondary hover:border-accent/50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-tertiary/20 rounded-3xl border border-white/5 hover:border-accent/50 transition-all duration-500 group shadow-xl"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4 transform group-hover:scale-110 transition duration-500">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition" />
            </div>
            <p className="text-secondary group-hover:text-white font-medium text-sm transition tracking-wider">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;