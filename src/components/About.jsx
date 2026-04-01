import React, { useEffect, useRef } from 'react'
import { MapPin, Mail, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo, projects } from '../constants'
import profilePhoto from '../assets/images/Dhriti.jpg'
import MagneticButton from './MagneticButton'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance
      gsap.from(".about-image", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      })

      // Title & Text entrance
      gsap.from([".about-title", ".about-text"], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      })

      // Info items stagger
      gsap.from(".about-info", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true
        }
      })

      // Buttons entrance
      gsap.from(".about-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative z-10 scroll-mt-28 py-24 px-10 md:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center about-image relative">
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full scale-75 -z-10" />
          
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-64 h-64 md:w-80 md:h-80 bg-accent/5 rounded-3xl border border-white/10 flex items-center justify-center relative group overflow-hidden shadow-2xl"
          >
            <img
              src={profilePhoto}
              alt="Dhriti Gupta"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
            />

            <div className="absolute -bottom-4 -right-4 bg-[#0a1224] p-5 rounded-2xl border border-white/10 shadow-2xl transform group-hover:translate-x-1 group-hover:translate-y-1 transition duration-500">
              <p className="text-accent font-black text-2xl leading-none">{projects.length}</p>
              <p className="text-[10px] text-secondary uppercase tracking-[0.2em] font-bold mt-1">
                Projects Done
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="about-title text-4xl md:text-5xl font-bold mb-6 italic leading-tight">
            About <span className="text-accent">Me</span>
          </h2>

          <p className="about-text text-secondary text-lg leading-relaxed mb-10 max-w-xl">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="about-info flex items-center gap-4 text-secondary group">
              <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition duration-300">
                <Mail size={20} />
              </div>
              <span className="font-medium">{personalInfo.email}</span>
            </div>

            <div className="about-info flex items-center gap-4 text-secondary group">
              <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition duration-300">
                <MapPin size={20} />
              </div>
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          </div>

          <div className="about-buttons flex flex-wrap gap-4">
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent hover:bg-accent/80 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 text-white"
            >
              <Eye size={20}/> View My CV
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-transparent border-2 border-accent/30 hover:border-accent text-accent px-8 py-3.5 rounded-xl font-bold transition-all"
            >
              <Download size={20}/> Download CV
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About