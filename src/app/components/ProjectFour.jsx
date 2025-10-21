"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, DollarSign, TrendingUp } from 'lucide-react';

const ProjectFour = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const lineRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

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
    <section className="py-24 px-6 relative" style={{
      background: 'linear-gradient(135deg, #1a2332 0%, #1a3d3d 50%, #1a4d4d 100%)'
    }}>
      {/* Animated subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full filter blur-3xl" 
          style={{background: 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%)'}}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full filter blur-3xl" 
          style={{background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)'}}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.h2 
            className="text-6xl font-bold mb-6" 
            style={{color: '#5eead4'}}
            initial={{ opacity: 0, y: -30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Why Our Portfolio Stands Out
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto" 
            style={{color: '#d1d5db'}}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming industries through sustainable finance and strategic partnerships
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Sector Diversity",
              description: "Bioenergy, solar, agri-processing across multiple sectors"
            },
            {
              icon: DollarSign,
              title: "Geographical Reach",
              description: "Operations across multiple states and regions"
            },
            {
              icon: TrendingUp,
              title: "Performance Track Record",
              description: "Strong performance and monitored outcomes"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl p-8 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.6) 0%, rgba(26, 61, 61, 0.6) 100%)',
                border: '1px solid rgba(94, 234, 212, 0.2)'
              }}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl -z-10 blur-xl"
                style={{background: 'rgba(94, 234, 212, 0.1)'}}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{background: 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 100%)'}}
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={isCardsInView ? { 
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
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={isCardsInView ? { 
                    rotate: [0, -10, 10, -10, 0] 
                  } : { rotate: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: idx * 0.2 + 0.5,
                    ease: "easeInOut" 
                  }}
                >
                  <item.icon style={{color: '#1a2332'}} size={32} strokeWidth={2.5} />
                </motion.div>
              </motion.div>

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
                  delay: idx * 0.2 + 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                style={{color: '#d1d5db', lineHeight: '1.75'}}
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
                  delay: idx * 0.2 + 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {item.description}
              </motion.p>

              {/* Corner accent */}
              <motion.div 
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10"
                style={{background: 'linear-gradient(135deg, transparent 0%, #5eead4 100%)'}}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom line */}
        <motion.div 
          ref={lineRef}
          className="mt-20 h-px w-full rounded-full" 
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(94, 234, 212, 0.3) 50%, transparent 100%)'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isLineInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ProjectFour;