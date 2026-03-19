import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, offset = 0) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: `${offset}px 0px -45% 0px`,
      threshold: 0.2,
    };

    const currentObserver = new IntersectionObserver(callback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => currentObserver.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;
