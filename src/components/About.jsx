import React from 'react';
import { MapPin, Mail, Download, Eye } from 'lucide-react';
import { personalInfo } from '../constants';
import profilePhoto from '../assets/images/Dhriti.jpg';

const About = () => (
  <section id="about" className="py-24 px-10 md:px-24">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left: Illustration or Image */}
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-accent/10 rounded-3xl border border-accent/20 flex items-center justify-center relative group overflow-hidden">
           <img src={profilePhoto} alt="Dhriti Gupta" className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500" />
           <div className="absolute -bottom-4 -right-4 bg-tertiary p-4 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-accent font-bold text-xl">6</p>
              <p className="text-[10px] text-secondary uppercase tracking-widest">Projects Done</p>
           </div>
        </div>
      </div>

      {/* Right: Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">About <span className="text-accent">Me</span></h2>
        <p className="text-secondary text-lg leading-relaxed mb-8">
          {personalInfo.about}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center gap-3 text-secondary">
            <Mail size={18} className="text-accent" /> {personalInfo.email}
          </div>
          <div className="flex items-center gap-3 text-secondary">
            <MapPin size={18} className="text-accent" /> {personalInfo.location}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-accent/20">
            <Eye size={20} /> View My CV
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
            <Download size={20} /> Download My CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;