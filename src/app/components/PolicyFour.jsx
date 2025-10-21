"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText } from 'lucide-react';

const PolicyFour = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const policyDocs = [
    'Corporate Governance Policy',
    'Code of Conduct',
    'Risk Management Framework',
    'ESG Policy',
    'Whistleblower Policy',
    'Data Privacy Policy'
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020617 0%, #134e4a 50%, #0f172a 100%)'
      }}
    >
      {/* Animated ambient background effects */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(16, 185, 129, 0.05)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(20, 184, 166, 0.05)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{background: 'rgba(52, 211, 153, 0.03)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? '4px' : '2px',
            height: i % 2 === 0 ? '4px' : '2px',
            background: 'rgba(52, 211, 153, 0.3)',
            top: `${20 + i * 10}%`,
            left: `${10 + i * 11}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0],
            y: [-30, -80, -130, -180],
            x: [0, Math.sin(i * 0.7) * 25, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(90deg, #6ee7b7 0%, #5eead4 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Policy Documents
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            style={{color: '#99f6e4', opacity: 0.9}}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Access our comprehensive policy documents and governance frameworks
          </motion.p>
        </div>
        
        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyDocs.map((doc, idx) => (
            <motion.button
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isGridInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative rounded-2xl p-8 text-left transition-all duration-300 group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(19, 78, 74, 0.3) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(52, 211, 153, 0.2)'
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10 filter blur-xl"
                style={{background: 'rgba(52, 211, 153, 0.15)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isGridInView ? { 
                      scale: 1, 
                      rotate: 0 
                    } : { 
                      scale: 0, 
                      rotate: -45 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.1 + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-xl filter blur-lg"
                      style={{background: 'rgba(52, 211, 153, 0.2)'}}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="relative p-3 rounded-xl border shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
                        borderColor: 'rgba(52, 211, 153, 0.3)',
                        color: '#020617'
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FileText size={24} />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="font-semibold text-lg mb-2"
                  style={{color: '#ffffff'}}
                  whileHover={{ color: '#6ee7b7' }}
                  transition={{ duration: 0.2 }}
                >
                  {doc}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{color: '#34d399'}}
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View Document</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(52, 211, 153, 0.1) 0%, transparent 70%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFour;