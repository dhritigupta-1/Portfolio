import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  // Navigation items
  const navLinks = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Work" },
    { id: "certificates", title: "Certificates" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO AREA */}
      <div className="text-xl font-bold tracking-tighter">
        DHRITI  <span className="text-accent uppercase font-black">Portfolio</span>
      </div>

      {/* NAV LINKS + THEME TOGGLE (Desktop) */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className="text-secondary hover:text-accent text-sm font-medium transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;