/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, distance = 40, duration = 0.7 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;