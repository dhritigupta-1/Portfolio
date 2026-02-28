import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const GlowCursor = () => {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="fixed top-0 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none z-[-1] transition-colors duration-500"
    />
  );
};

export default GlowCursor;