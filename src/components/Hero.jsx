import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ChevronDown } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import MagneticButton from './MagneticButton';
// Import your animation file
import robotAnimation from '../assets/animations/hello.json';

const Hero = () => {
  const phrases = ["Web Developer", "C++ Enthusiast", "Full Stack Developer"];
  const text = useTypewriter(phrases);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-10 md:px-24 pt-20 overflow-hidden">
      
      {/* Background Shooting Star */}
      <div className="shooting-star top-32 right-1/4"></div>

      {/* LEFT SIDE: Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex-1"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-accent italic">Dhriti Gupta</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="h-12 mt-4">
          <p className="text-2xl md:text-3xl font-mono text-secondary">
            {text}<span className="text-accent animate-pulse font-bold">|</span>
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-12">
          <MagneticButton 
            href="#projects" 
            className="bg-accent hover:bg-accent/80 px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-accent/20 text-white"
          >
            View My Work
          </MagneticButton>
          <MagneticButton 
            href="#skills" 
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Explore My Skills
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: YOUR LOTTIE ANIMATION */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-75 md:w-125 drop-shadow-[0_0_30px_rgba(145,94,255,0.3)]"
        >
          <Lottie 
            animationData={robotAnimation} 
            loop={true} 
            className="w-full h-full"
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
            renderer="canvas"
          />
        </motion.div>
      </motion.div>

      {/* SCROLL HINT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-theme-main">Scroll Down !!!</p>
        <ChevronDown size={20} className="animate-bounce text-theme-main" />
      </motion.div>

    </section>
  );
};

export default Hero;