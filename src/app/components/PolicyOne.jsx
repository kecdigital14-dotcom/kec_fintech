"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, ArrowRight } from "lucide-react";

const PolicyOne = () => {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const isIconInView = useInView(iconRef, { once: true, margin: "-100px" });
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020617 0%, #134e4a 50%, #064e3b 100%)'
      }}
    >
      {/* Animated ambient glow effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.1)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(20, 184, 166, 0.1)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      {/* Floating particles with different trajectories */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? '8px' : '4px',
            height: i % 2 === 0 ? '8px' : '4px',
            background: i % 3 === 0 ? 'rgba(52, 211, 153, 0.4)' : 'rgba(20, 184, 166, 0.4)',
            top: `${15 + i * 10}%`,
            left: `${5 + i * 12}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            y: [-30, -80, -130, -180],
            x: [0, Math.sin(i * 0.5) * 40, Math.cos(i * 0.5) * 30, 0],
            scale: [0.8, 1, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Icon with animated glow */}
        <motion.div 
          ref={iconRef}
          className="inline-flex items-center justify-center mb-4"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isIconInView ? { 
            opacity: 1, 
            scale: 1, 
            rotate: 0 
          } : { 
            opacity: 0, 
            scale: 0, 
            rotate: -180 
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-full filter blur-xl"
              style={{background: 'rgba(52, 211, 153, 0.3)'}}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              animate={isIconInView ? {
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <Shield style={{color: '#34d399'}} size={48} strokeWidth={1.5} className="relative" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main heading with staggered animation */}
        <div ref={headingRef}>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(90deg, #6ee7b7 0%, #5eead4 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Plan Smart, Invest Better,
            </motion.span>
            <motion.span 
              className="block"
              style={{color: '#ffffff'}}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              and Grow Your Wealth
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle with fade-in */}
        <motion.p 
          className="text-lg md:text-base max-w-3xl mx-auto mb-8 leading-relaxed"
          style={{color: '#99f6e4', opacity: 0.9}}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          KEC Fintech adheres to the highest governance standards. Our risk framework ensures that every project is assessed for environmental, financial, and operational risks before funding.
        </motion.p>

        {/* CTA Button with complex interactions */}
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
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
              color: '#020617'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full filter blur-lg -z-10"
              style={{background: 'linear-gradient(135deg, #6ee7b7 0%, #5eead4 100%)'}}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)'
              }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <span className="relative">Get Started Today</span>
            <motion.div
              className="relative"
              animate={isButtonInView ? { x: [0, 3, 0] } : { x: 0 }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative animated dots */}
        <motion.div 
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(52, 211, 153, 0.5)',
            top: '25%',
            left: '10%'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(20, 184, 166, 0.5)',
            top: '33%',
            right: '15%'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(110, 231, 183, 0.4)',
            bottom: '25%',
            left: '25%'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default PolicyOne;