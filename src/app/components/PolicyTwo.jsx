"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, FileText, AlertCircle, Scale } from 'lucide-react';

const PolicyTwo = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const lineRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  const policies = [
    {
      icon: Shield,
      title: 'Corporate Governance Policy',
      description: 'Comprehensive framework ensuring transparency, accountability, and ethical decision-making across all levels of our organization.'
    },
    {
      icon: FileText,
      title: 'Code of Conduct & Ethics',
      description: 'Strict ethical guidelines governing employee behavior, conflicts of interest, and professional standards in all business dealings.'
    },
    {
      icon: AlertCircle,
      title: 'Risk Management Framework',
      description: 'Robust assessment protocols evaluating environmental, financial, and operational risks before any project funding.'
    },
    {
      icon: Scale,
      title: 'Whistleblower / Grievance Redressal Policy',
      description: 'Protected channels for reporting concerns, ensuring fair investigation and resolution of all reported issues.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #1e293b 100%)'
    }}>
      {/* Animated ambient background effects */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.1)'}}
        initial={{ scale: 0, opacity: 0, x: 100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.1)'}}
        initial={{ scale: 0, opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(52, 211, 153, 0.4)',
            top: `${15 + i * 12}%`,
            left: `${10 + i * 15}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0.7, 0],
            y: [-20, -70, -120, -170],
            x: [0, Math.sin(i) * 30, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              style={{color: '#6ee7b7'}}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Our Policy Framework
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            style={{color: '#e2e8f0'}}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Building trust through comprehensive governance and ethical standards
          </motion.p>
        </div>

        {/* Policy cards grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl p-8 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(19, 78, 74, 0.3) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(52, 211, 153, 0.2)'
              }}
            >
              {/* Card glow effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                style={{background: 'linear-gradient(135deg, rgba(52, 211, 153, 0) 0%, rgba(52, 211, 153, 0.05) 100%)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Hover border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10 blur-xl"
                style={{background: 'rgba(52, 211, 153, 0.2)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                {/* Icon container */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <motion.div 
                    className="absolute inset-0 rounded-2xl filter blur-lg"
                    style={{background: 'rgba(52, 211, 153, 0.2)'}}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.3)',
                      boxShadow: '0 10px 30px rgba(52, 211, 153, 0.2)'
                    }}
                    initial={{ scale: 0.8, rotate: -20 }}
                    animate={isCardsInView ? { 
                      scale: 1, 
                      rotate: 0 
                    } : { 
                      scale: 0.8, 
                      rotate: -20 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.15 + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      background: 'rgba(52, 211, 153, 0.2)',
                      boxShadow: '0 15px 40px rgba(52, 211, 153, 0.4)'
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={isCardsInView ? {
                        rotate: [0, -10, 10, -5, 0]
                      } : { rotate: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: idx * 0.15 + 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <policy.icon size={28} style={{color: '#6ee7b7'}} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{color: '#ffffff'}}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isCardsInView ? { 
                    opacity: 1, 
                    x: 0 
                  } : { 
                    opacity: 0, 
                    x: -20 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.15 + 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ color: '#6ee7b7' }}
                >
                  {policy.title}
                </motion.h3>
                <motion.p 
                  className="leading-relaxed"
                  style={{color: '#e2e8f0'}}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isCardsInView ? { 
                    opacity: 1, 
                    x: 0 
                  } : { 
                    opacity: 0, 
                    x: -20 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.15 + 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {policy.description}
                </motion.p>

                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full"
                  style={{background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, transparent 100%)'}}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div 
          ref={lineRef}
          className="mt-16 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.3) 50%, transparent 100%)'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isLineInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
};

export default PolicyTwo;