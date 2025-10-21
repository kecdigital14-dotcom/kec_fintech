"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ProjectFive = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 px-6 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl" 
          style={{background: 'radial-gradient(circle, rgba(94, 234, 212, 0.3) 0%, transparent 70%)'}}
          initial={{ scale: 0, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl" 
          style={{background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)'}}
          initial={{ scale: 0, opacity: 0, x: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(94, 234, 212, 0.4)',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -60, -100],
            x: [0, Math.sin(i) * 30, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={sectionRef}>
        {/* Sparkle icon animation */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isSectionInView ? { 
            opacity: 1, 
            scale: 1, 
            rotate: 0 
          } : { 
            opacity: 0, 
            scale: 0, 
            rotate: -180 
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={isSectionInView ? {
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut"
            }}
          >
            <Sparkles style={{color: '#5eead4'}} size={48} strokeWidth={2} />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{color: '#ffffff'}}
          initial={{ opacity: 0, y: 40 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to Transform Your Project?
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-lg mb-6"
          style={{color: '#a7f3d0'}}
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Partner with us for comprehensive financial solutions and project support
        </motion.p>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isButtonInView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            y: 30, 
            scale: 0.9 
          }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          <motion.button
            className="group relative px-10 py-3 rounded-full text-lg font-semibold overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
              color: '#0f172a',
              border: '2px solid rgba(94, 234, 212, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full -z-10 blur-xl"
              style={{background: 'rgba(94, 234, 212, 0.5)'}}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)'
              }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <span className="relative flex items-center gap-2">
              Start Your Project Journey
              <motion.div
                initial={{ x: 0 }}
                animate={isButtonInView ? { x: [0, 5, 0] } : { x: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <ArrowRight size={24} strokeWidth={2.5} />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-8 mx-auto h-1 w-64 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(94, 234, 212, 0.5) 50%, transparent 100%)'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isButtonInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
};

export default ProjectFive;