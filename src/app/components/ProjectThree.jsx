"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Zap, TrendingUp } from 'lucide-react';

const ProjectThree = () => {
  const headerRef = useRef(null);
  const metricsRef = useRef(null);
  const lineRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isMetricsInView = useInView(metricsRef, { once: true, margin: "-100px" });
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: Zap,
      value: '200+ MW',
      label: 'Renewable Energy Capacity'
    },
    {
      icon: Leaf,
      value: '500K tCO₂',
      label: 'Annual Carbon Reduction'
    },
    {
      icon: TrendingUp,
      value: '10,000+',
      label: 'Farmers Empowered'
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
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #1e293b 100%)'
    }}>
      {/* Animated ambient background effects */}
      <motion.div 
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.1)'}}
        initial={{ scale: 0, opacity: 0, x: 100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl"
        style={{background: 'rgba(52, 211, 153, 0.1)'}}
        initial={{ scale: 0, opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Additional animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? '6px' : '3px',
            height: i % 3 === 0 ? '6px' : '3px',
            background: i % 2 === 0 ? 'rgba(52, 211, 153, 0.3)' : 'rgba(110, 231, 183, 0.3)',
            top: `${20 + i * 10}%`,
            left: `${8 + i * 11}%`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0.5, 0],
            y: [-25, -75, -125, -175],
            x: [0, Math.sin(i) * 25, Math.cos(i) * 20, 0],
            scale: [0.8, 1.2, 1, 0.8]
          }}
          transition={{
            duration: 3.5 + i * 0.3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{color: '#6ee7b7'}}
            initial={{ opacity: 0, y: -30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Impact Metrics
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            style={{color: '#e2e8f0'}}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Measurable outcomes driving sustainable transformation
          </motion.p>
        </div>
        
        <div ref={metricsRef} className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isMetricsInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl p-8 text-center transition-all duration-500"
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

              {/* Stronger hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10 filter blur-xl"
                style={{background: 'rgba(52, 211, 153, 0.2)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                {/* Icon container */}
                <motion.div 
                  className="relative inline-flex items-center justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={isMetricsInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0 
                  } : { 
                    opacity: 0, 
                    scale: 0.5, 
                    rotate: -45 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.2 + 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-2xl filter blur-lg"
                    style={{background: 'rgba(52, 211, 153, 0.2)'}}
                    animate={isMetricsInView ? { 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    } : {}}
                    transition={{ 
                      duration: 2.5,
                      delay: idx * 0.2 + 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.3)',
                      boxShadow: '0 10px 30px rgba(52, 211, 153, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 8,
                      background: 'rgba(52, 211, 153, 0.2)',
                      boxShadow: '0 15px 40px rgba(52, 211, 153, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={isMetricsInView ? { 
                        rotate: [0, -12, 12, -8, 0] 
                      } : { rotate: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: idx * 0.2 + 0.6,
                        ease: "easeInOut" 
                      }}
                    >
                      <metric.icon size={40} style={{color: '#6ee7b7'}} />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Value with counter animation */}
                <motion.h3 
                  className="text-4xl font-bold mb-3 transition-colors duration-300"
                  style={{color: '#ffffff'}}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isMetricsInView ? { 
                    opacity: 1, 
                    scale: 1 
                  } : { 
                    opacity: 0, 
                    scale: 0.8 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.2 + 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    color: '#6ee7b7',
                    scale: 1.05
                  }}
                >
                  {metric.value}
                </motion.h3>
                
                {/* Label */}
                <motion.p 
                  className="text-lg"
                  style={{color: '#e2e8f0'}}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isMetricsInView ? { 
                    opacity: 1, 
                    y: 0 
                  } : { 
                    opacity: 0, 
                    y: 10 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.2 + 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {metric.label}
                </motion.p>
              </div>
              
              {/* Decorative corner accent */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full"
                style={{background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, transparent 100%)'}}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                style={{background: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.5) 50%, transparent 100%)'}}
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div 
          ref={lineRef}
          className="mt-20 h-px w-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.4) 50%, transparent 100%)'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isLineInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
};

export default ProjectThree;