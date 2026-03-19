import React, { useEffect, useRef } from 'react'
import { MapPin, Mail, Download, Eye } from 'lucide-react'
import { personalInfo } from '../constants'
import profilePhoto from '../assets/images/Dhriti.jpg'
import MagneticButton from './MagneticButton'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".about-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      })

      gsap.from(".about-title", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      })

      gsap.from(".about-text", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%"
        }
      })

      gsap.from(".about-info", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%"
        }
      })

      gsap.from(".about-buttons", {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%"
        }
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative z-10 scroll-mt-28 py-24 px-10 md:px-24">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Image */}

        <div className="flex justify-center about-image">

          <div className="w-64 h-64 md:w-80 md:h-80 bg-accent/10 rounded-3xl border border-accent/20 flex items-center justify-center relative group overflow-hidden">

            <img
              src={profilePhoto}
              alt="Dhriti Gupta"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500"
            />

            <div className="absolute -bottom-4 -right-4 bg-tertiary p-4 rounded-2xl border border-white/10 shadow-xl">

              <p className="text-accent font-bold text-xl">6</p>
              <p className="text-[10px] text-secondary uppercase tracking-widest">
                Projects Done
              </p>

            </div>

          </div>

        </div>

        {/* Right: Content */}

        <div>

          <h2 className="about-title text-4xl md:text-5xl font-bold mb-6 italic">
            About <span className="text-accent">Me</span>
          </h2>

          <p className="about-text text-secondary text-lg leading-relaxed mb-8">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

            <div className="about-info flex items-center gap-3 text-secondary">
              <Mail size={18} className="text-accent" />
              {personalInfo.email}
            </div>

            <div className="about-info flex items-center gap-3 text-secondary">
              <MapPin size={18} className="text-accent" />
              {personalInfo.location}
            </div>

          </div>

          <div className="about-buttons flex flex-wrap gap-4">

            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-accent/20 text-white"
            >
              <Eye size={20}/> View My CV
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              <Download size={20}/> Download My CV
            </MagneticButton>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About