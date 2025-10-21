"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf } from 'lucide-react';

const ProjectOne = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-8 px-6 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 overflow-hidden">
      {/* Animated ambient background effects */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      ></motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={contentRef} className="flex flex-col items-center text-center">
          {/* Icon container */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={isContentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -30, scale: 0.8 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="absolute inset-0 bg-emerald-400/20 rounded-3xl blur-2xl"
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            <motion.div 
              className="relative w-20 h-20 bg-emerald-400/10 border border-emerald-400/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1, 
                rotate: 6,
                backgroundColor: "rgba(52, 211, 153, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={isContentInView ? { rotate: [0, -10, 10, -10, 0] } : { rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              >
                <Leaf className="text-emerald-300" size={40} />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-emerald-300 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Projects – Where Finance Meets Impact
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-base text-slate-200 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            At KEC Fintech, we don't just fund projects — we partner in transformation. Explore our flagship projects in agri, bio-energy, and renewable finance.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="mt-12 h-px w-64 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isContentInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;