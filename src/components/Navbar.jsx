import React, { useMemo } from 'react';
import ThemeToggle from './ThemeToggle';
import useActiveSection from '../hooks/useActiveSection';
import { NAV_LINKS } from '../constants/navigation';

const Navbar = () => {
  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.id).filter((id) => id !== 'home'),
    []
  )

  const activeSection = useActiveSection(sectionIds, -100);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO AREA */}
      <div className="text-xl font-bold tracking-tighter text-theme-main">
        DHRITI  <span className="text-accent uppercase font-black">Portfolio</span>
      </div>

      {/* NAV LINKS + THEME TOGGLE (Desktop) */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id || (activeSection === "" && link.id === "home");
            return (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={`text-sm font-medium transition-colors duration-300 ${isActive ? "text-accent font-bold" : "text-secondary hover:text-accent"}`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;