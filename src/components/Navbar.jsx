import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import useActiveSection from '../hooks/useActiveSection';
import { NAV_LINKS } from '../constants/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.id).filter((id) => id !== 'home'),
    []
  )

  const activeSection = useActiveSection(sectionIds, -100);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO AREA */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter text-theme-main cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        DHRITI  <span className="text-accent uppercase font-black">Portfolio</span>
      </motion.div>

      {/* NAV LINKS + THEME TOGGLE (Desktop) */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link, index) => {
            const isActive = activeSection === link.id || (activeSection === "" && link.id === "home");
            return (
              <motion.li 
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <a 
                  href={`#${link.id}`} 
                  className={`text-sm font-medium transition-colors duration-300 relative py-2 ${isActive ? "text-accent font-bold" : "text-secondary hover:text-accent"}`}
                >
                  {link.title}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>
        
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-theme-main p-2 hover:bg-white/5 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/5 md:hidden py-6 px-8 flex flex-col gap-6 overflow-hidden"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id || (activeSection === "" && link.id === "home");
              return (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 ${isActive ? "text-accent font-bold" : "text-secondary hover:text-accent"}`}
                >
                  {link.title}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;