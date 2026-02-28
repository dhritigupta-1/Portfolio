import React from 'react';
import { Eye, Download, Award } from 'lucide-react';
import { certificates } from '../constants';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold italic">My <span className="text-accent">Certifications</span></h2>
        <p className="text-secondary mt-4">Professional achievements and verified skills</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between bg-tertiary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 group shadow-lg"
          >
            {/* Left Side: Icon & Text */}
            <div className="flex items-center gap-5">
              <div className="p-4 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition duration-300">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <p className="text-secondary text-sm uppercase tracking-wider">{cert.issuer}</p>
              </div>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex gap-3">
              {/* VIEW BUTTON */}
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-accent hover:text-white rounded-xl text-secondary transition-all"
                title="View Online"
              >
                <Eye size={20} />
              </a>

              {/* DOWNLOAD BUTTON */}
              <a 
                href={cert.pdf} 
                download 
                className="p-3 bg-white/5 hover:bg-white hover:text-black rounded-xl text-secondary transition-all"
                title="Download PDF"
              >
                <Download size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;