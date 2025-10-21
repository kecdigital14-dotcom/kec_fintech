"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, FileText, Scale } from 'lucide-react';

const PolicyFive = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const complianceItems = [
    {
      icon: Shield,
      title: 'RBI Guidelines',
      description: 'Full compliance with Reserve Bank of India regulations'
    },
    {
      icon: FileText,
      title: 'SEBI Standards',
      description: 'Adherence to securities and market regulations'
    },
    {
      icon: Scale,
      title: 'Industry Best Practices',
      description: 'Following global fintech and ESG standards'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
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
        className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.03)'}}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? '5px' : i % 2 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '5px' : i % 2 === 0 ? '3px' : '2px',
            background: 'rgba(52, 211, 153, 0.4)',
            top: `${15 + i * 8}%`,
            left: `${8 + i * 9}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.9, 0.5, 0],
            y: [-40, -90, -140, -200],
            x: [0, Math.sin(i * 0.8) * 30, 0]
          }}
          transition={{
            duration: 4.5,
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: 1.5,
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
            Regulatory Compliance
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            style={{color: '#99f6e4', opacity: 0.9}}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Committed to maintaining the highest standards of regulatory adherence
          </motion.p>
        </div>
        
        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {complianceItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isGridInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl p-8 text-center transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(19, 78, 74, 0.3) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(52, 211, 153, 0.2)'
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10 filter blur-xl"
                style={{background: 'rgba(52, 211, 153, 0.2)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(20, 184, 166, 0.08) 100%)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-6"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isGridInView ? { 
                    scale: 1, 
                    rotate: 0 
                  } : { 
                    scale: 0, 
                    rotate: -45 
                  }}
                  transition={{ 
                    duration: 0.7, 
                    delay: idx * 0.15 + 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-2xl filter blur-xl"
                    style={{background: 'rgba(52, 211, 153, 0.3)'}}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="relative w-full h-full backdrop-blur-sm rounded-2xl flex items-center justify-center border shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(20, 184, 166, 0.15) 100%)',
                      borderColor: 'rgba(52, 211, 153, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.2) 0%, rgba(20, 184, 166, 0.25) 100%)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: -5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon 
                        className="text-emerald-300" 
                        size={40} 
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  style={{color: '#ffffff'}}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.6 }}
                  whileHover={{ color: '#6ee7b7' }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="leading-relaxed"
                  style={{color: '#cbd5e1'}}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.7 }}
                >
                  {item.description}
                </motion.p>
              </div>

              {/* Animated border shine effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.3), transparent)',
                  opacity: 0
                }}
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  delay: idx * 0.5 + 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />

              {/* Corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(52, 211, 153, 0.15) 0%, transparent 70%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24"
                style={{
                  background: 'radial-gradient(circle at bottom left, rgba(20, 184, 166, 0.15) 0%, transparent 70%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFive;