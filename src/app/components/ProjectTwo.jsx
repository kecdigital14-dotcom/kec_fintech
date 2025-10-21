"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, DollarSign, Handshake, TrendingUp, CheckCircle } from 'lucide-react';

const ProjectTwo = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const projects = [
    {
      name: '12 TPD CBG Plant, Gujarat',
      location: 'District X, State Y',
      funding: '60% Debt / 40% Equity',
      support: 'DPR, lender matchmaking, subsidies, O&M guarantee',
      impact: '~80,000 tCO₂ reduction/year, livelihoods uplift for 250 farmers',
      status: 'Operational since May 2025'
    },
    {
      name: 'Solar Farm Initiative, Rajasthan',
      location: 'District A, Rajasthan',
      funding: '70% Debt / 30% Equity',
      support: 'Financial modeling, EPC coordination, grid integration',
      impact: '50 MW capacity, powering 15,000 homes',
      status: 'Under Construction'
    },
    {
      name: 'Agri Processing Unit, Maharashtra',
      location: 'District B, Maharashtra',
      funding: '55% Debt / 45% Equity',
      support: 'Working capital financing, technology partnerships',
      impact: 'Processing capacity for 500 farmers, 40% income increase',
      status: 'Operational since January 2025'
    },
    {
      name: 'Bio-Energy Co-Generation, Punjab',
      location: 'District C, Punjab',
      funding: '65% Debt / 35% Equity',
      support: 'Subsidy navigation, offtake agreements, operations support',
      impact: '15 MW power generation, biomass utilization from 300 farmers',
      status: 'Planning Phase'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 overflow-hidden">
      {/* Animated ambient background effects */}
      <motion.div 
        className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      ></motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-emerald-300 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-slate-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming industries through sustainable finance and strategic partnerships
          </motion.p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
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
              className="group relative bg-gradient-to-br from-slate-800/50 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:border-emerald-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/20"
            >
              {/* Card glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/5 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              
              <div className="relative z-10">
                {/* Project name */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.h3>
                
                <div className="space-y-4">
                  {/* Location */}
                  <motion.div 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                  >
                    <MapPin className="text-emerald-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-emerald-300 block">Location</span>
                      <span className="text-slate-200">{project.location}</span>
                    </div>
                  </motion.div>
                  
                  {/* Funding */}
                  <motion.div 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.4 }}
                  >
                    <DollarSign className="text-emerald-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-emerald-300 block">Funding Pattern</span>
                      <span className="text-slate-200">{project.funding}</span>
                    </div>
                  </motion.div>
                  
                  {/* Support */}
                  <motion.div 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.5 }}
                  >
                    <Handshake className="text-emerald-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-emerald-300 block">Support Provided</span>
                      <span className="text-slate-200">{project.support}</span>
                    </div>
                  </motion.div>
                  
                  {/* Impact */}
                  <motion.div 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.6 }}
                  >
                    <TrendingUp className="text-emerald-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-emerald-300 block">Impact</span>
                      <span className="text-slate-200">{project.impact}</span>
                    </div>
                  </motion.div>
                  
                  {/* Status badge */}
                  <motion.div 
                    className="pt-4 flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isCardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.7 }}
                  >
                    <CheckCircle className="text-emerald-300" size={20} />
                    <span className="inline-block px-4 py-2 bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </motion.div>
                </div>
                
                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTwo;