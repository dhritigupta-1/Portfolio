import React, { useState, useMemo } from 'react';
import { Eye, Download, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { certificates } from '../constants';
import Reveal from './Reveal';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  // Group certificates by issuer
  const groupedCerts = useMemo(() => {
    return certificates.reduce((acc, cert) => {
      if (!acc[cert.issuer]) {
        acc[cert.issuer] = [];
      }
      acc[cert.issuer].push(cert);
      return acc;
    }, {});
  }, []);

  const issuers = Object.keys(groupedCerts);
  const displayedIssuers = showAll ? issuers : issuers.slice(0, 2);

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold italic">My <span className="text-accent">Certifications</span></h2>
        <p className="text-secondary mt-4">Professional achievements and verified skills ({certificates.length} total)</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {displayedIssuers.map((issuer, issuerIndex) => (
          <div key={issuer}>
            <Reveal delay={0.1}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-theme-main">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                {issuer}
              </h3>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupedCerts[issuer].map((cert, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div 
                    className="flex items-center justify-between bg-tertiary p-6 rounded-2xl border border-theme-border hover:border-accent/50 transition-all duration-300 group shadow-lg h-full"
                  >
                    {/* Left Side: Icon & Text */}
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition duration-300">
                        <Award size={32} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-theme-main">{cert.title}</h4>
                        <p className="text-secondary text-sm uppercase tracking-wider">{cert.issuer}</p>
                      </div>
                    </div>

                    {/* Right Side: Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={cert.pdf} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-primary/10 hover:bg-accent hover:text-white rounded-xl text-secondary transition-all"
                        title="View Online"
                      >
                        <Eye size={20} />
                      </a>

                      <a 
                        href={cert.pdf} 
                        download 
                        className="p-3 bg-primary/10 hover:bg-theme-main hover:text-primary rounded-xl text-secondary transition-all"
                        title="Download PDF"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      {issuers.length > 2 && (
        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 mx-auto bg-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-accent/20"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} /></>
            ) : (
              <>Show All {issuers.length} Issuers <ChevronDown size={20} /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;