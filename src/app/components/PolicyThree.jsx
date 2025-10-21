"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Users, Building2, CheckCircle2 } from 'lucide-react';

const PolicyThree = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const pillarsRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const isLeftInView = useInView(leftColumnRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightColumnRef, { once: true, margin: "-100px" });
  const isPillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Leaf,
      title: 'Environmental',
      description: 'Carbon reduction targets and green project prioritization',
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Social',
      description: 'Community impact and farmer livelihood enhancement',
      color: 'teal'
    },
    {
      icon: Building2,
      title: 'Governance',
      description: 'Transparent operations and ethical business practices',
      color: 'cyan'
    }
  ];

  const commitments = [
    '100% renewable energy project focus by 2026',
    'Impact measurement for every funded project',
    'Annual ESG reporting and third-party audits',
    'Community engagement and stakeholder consultation'
  ];

  const pillarVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const commitmentVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 text-white overflow-hidden"
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

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? '4px' : '2px',
            height: i % 2 === 0 ? '4px' : '2px',
            background: 'rgba(52, 211, 153, 0.3)',
            top: `${25 + i * 12}%`,
            left: `${15 + i * 14}%`
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
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - ESG Pillars */}
        <div ref={leftColumnRef}>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'linear-gradient(90deg, #6ee7b7 0%, #5eead4 50%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                ESG / Sustainability
              </motion.span>
              <motion.span 
                className="block"
                style={{color: '#ffffff'}}
                initial={{ opacity: 0, y: 20 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Policy
              </motion.span>
            </h2>
            <motion.p 
              className="text-lg leading-relaxed"
              style={{color: '#99f6e4', opacity: 0.9}}
              initial={{ opacity: 0, y: 20 }}
              animate={isLeftInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Our commitment to Environmental, Social, and Governance excellence drives every decision we make. We integrate sustainability into our core business strategy.
            </motion.p>
          </motion.div>

          <div ref={pillarsRef} className="space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={pillarVariants}
                initial="hidden"
                animate={isPillarsInView ? "visible" : "hidden"}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.3 }
                }}
                className="group relative rounded-2xl p-6 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(19, 78, 74, 0.3) 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid rgba(52, 211, 153, 0.2)`
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl -z-10 filter blur-lg"
                  style={{background: `rgba(52, 211, 153, 0.15)`}}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-4">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isPillarsInView ? { 
                      scale: 1, 
                      rotate: 0 
                    } : { 
                      scale: 0, 
                      rotate: -45 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.15 + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-xl filter blur-lg"
                      style={{background: `rgba(52, 211, 153, 0.2)`}}
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
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, #34d399 0%, #14b8a6 100%)`,
                        color: '#020617'
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <pillar.icon size={24} />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h4 
                      className="font-bold text-lg mb-2 transition-colors"
                      style={{color: '#ffffff'}}
                      whileHover={{ color: '#6ee7b7' }}
                    >
                      {pillar.title}
                    </motion.h4>
                    <p style={{color: '#99f6e4', opacity: 0.9}}>{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column - Commitments */}
        <motion.div 
          ref={rightColumnRef}
          className="relative"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={isRightInView ? { 
            opacity: 1, 
            x: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            x: 60, 
            scale: 0.95 
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="absolute inset-0 rounded-3xl filter blur-2xl"
            style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)'}}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div 
            className="relative rounded-3xl p-8 lg:p-10 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(19, 78, 74, 0.5) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(52, 211, 153, 0.3)'
            }}
          >
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{
                background: 'linear-gradient(90deg, #6ee7b7 0%, #5eead4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Our Commitments
              </span>
            </motion.h3>
            <ul className="space-y-5">
              {commitments.map((commitment, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={commitmentVariants}
                  initial="hidden"
                  animate={isRightInView ? "visible" : "hidden"}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 
                      style={{color: '#34d399'}} 
                      className="flex-shrink-0 mt-1" 
                      size={24} 
                    />
                  </motion.div>
                  <motion.span 
                    className="text-lg"
                    style={{color: '#99f6e4', opacity: 0.95}}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {commitment}
                  </motion.span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative gradient line */}
            <motion.div 
              className="mt-8 h-1 w-full rounded-full"
              style={{background: 'linear-gradient(90deg, #34d399 0%, #14b8a6 50%, transparent 100%)'}}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isRightInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default PolicyThree;