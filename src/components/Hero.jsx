import React from 'react';
import Lottie from 'lottie-react';
import { ChevronDown } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import MagneticButton from './MagneticButton';
// Import your animation file
import robotAnimation from '../assets/animations/hello.json';

const Hero = () => {
  const phrases = ["Web Developer", "C++ Enthusiast", "Full Stack Developer"];
  const text = useTypewriter(phrases);

  return (
    <section id="home" className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-10 md:px-24 pt-20 overflow-hidden">
      
      {/* Background Shooting Star */}
      <div className="shooting-star top-32 right-1/4"></div>

      {/* LEFT SIDE: Text Content */}
      <div className="z-10 flex-1">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-accent italic">Dhriti Gupta</span>
        </h1>
        
        <div className="h-12 mt-4">
          <p className="text-2xl md:text-3xl font-mono text-secondary">
            {text}<span className="text-accent animate-pulse font-bold">|</span>
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-12">
          <MagneticButton href="#projects" className="bg-accent hover:bg-accent/80 px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-accent/20 text-white">
            View My Work
          </MagneticButton>
          <MagneticButton href="#skills" className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full font-bold transition-all">
            Explore My Skills
          </MagneticButton>
        </div>
      </div>

      {/* RIGHT SIDE: YOUR LOTTIE ANIMATION */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-75 md:w-125 drop-shadow-[0_0_30px_rgba(145,94,255,0.3)]">
          <Lottie 
            animationData={robotAnimation} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-white">Scroll Down !!!</p>
        <ChevronDown size={20} className="animate-bounce text-white" />
      </div>

    </section>
  );
};

export default Hero;