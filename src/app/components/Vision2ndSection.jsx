"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Vision2ndSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      icon: '📊',
      title: 'Profit Planning',
      description: 'Develop strategic financial plans to maximize profitability and drive sustainable growth.',
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Security Consulting',
      description: 'Enhance your business with robust cybersecurity strategies and risk management solutions.',
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Leverage cloud computing for scalable, efficient, and secure business operations.',
    },
    {
      id: 4,
      icon: '💻',
      title: 'Digital Transformation',
      description: 'Implement cutting-edge technologies to modernize processes and boost efficiency.',
    },
    {
      id: 5,
      icon: '🌍',
      title: 'Market Analysis',
      description: 'Gain actionable insights through comprehensive market research and competitive analysis.',
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-teal-950 via-slate-900 to-black py-20 px-4 md:px-8 lg:px-12 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Left Content */}
            <motion.div 
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-1 max-w-md"
            >
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-4"
              >
                THE BEST SERVICE
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight"
              >
                We Provide The Best Service For Consulting.
              </motion.h1>
            </motion.div>

            {/* Services Grid - Top 2 */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 shadow-lg group border border-emerald-500/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-emerald-200/75 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <motion.button 
                    className="text-emerald-300 font-semibold text-sm hover:text-emerald-200 transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read More
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.slice(2).map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 + index * 0.15 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 shadow-lg group border border-emerald-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="text-4xl"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-emerald-200/75 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <motion.button 
                className="text-emerald-300 font-semibold text-sm hover:text-emerald-200 transition-colors flex items-center gap-2 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Read More
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision2ndSection;