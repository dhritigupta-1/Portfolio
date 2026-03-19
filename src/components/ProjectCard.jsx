import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Github, Link as LinkIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.15}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="glass-panel bg-tertiary/65 rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-accent/40 transition-all duration-500 cursor-pointer h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20"
        onClick={() => onClick(project)}
      >
        {/* IMAGE */}
        <div className="h-52 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col grow text-center items-center">
          
          {/* TAGS */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-[12px] text-secondary bg-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold mb-4 text-theme-main">
            {project.name}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-secondary text-sm leading-relaxed mb-8 grow">
            {project.description}
          </p>

          {/* LINKS */}
          <div className="flex gap-6 mt-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-theme-main hover:text-accent transition transform hover:scale-110"
              >
                <LinkIcon size={24} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-theme-main hover:text-accent transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}