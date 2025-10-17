"use client";

import React, { useState } from 'react';
import { Calendar, Monitor, Database, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About5thSection = () => {
  const [activeTab, setActiveTab] = useState('accountability');

  const tabContent = {
    expertise: {
      title: 'Expertise',
      description: 'With over 15 years of industry experience, our team brings deep technical knowledge and proven strategies. We leverage cutting-edge technologies and best practices to deliver solutions that drive real business results.'
    },
    innovation: {
      title: 'Innovation',
      description: 'We stay at the forefront of technological advancement, constantly exploring new solutions and methodologies. Our commitment to innovation ensures our clients always have access to the latest tools and strategies for competitive advantage.'
    },
    accountability: {
      title: 'Accountability',
      description: 'We hold ourselves responsible for our actions, commitments, and the outcomes we deliver. This unwavering commitment builds trust, transparency, and lasting partnerships with our clients.'
    }
  };

  const getActiveContent = () => {
    switch(activeTab) {
      case 'expertise':
        return tabContent.expertise;
      case 'innovation':
        return tabContent.innovation;
      case 'accountability':
        return tabContent.accountability;
      default:
        return tabContent.accountability;
    }
  };

  const stats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      number: '15',
      suffix: '+',
      label: 'Years of industry experience'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      number: '250',
      label: 'Digital projects completed'
    },
    {
      icon: <Database className="w-8 h-8" />,
      number: '300',
      label: 'Data transferred monthly'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '450',
      suffix: '+',
      label: 'Certified financial advisors'
    }
  ];

  const tabs = ['Expertise', 'Innovation', 'Accountability'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360, opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            variants={slideInLeft}
          >
            <div className="inline-block">
              <span className="text-emerald-300 text-sm font-semibold tracking-wider opacity-80">
                Commitment
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
              Your business goals <br /> are our top priority
            </h1>
          </motion.div>

          {/* Right Content - Tabs */}
          <motion.div variants={slideInRight}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-5 py-2 rounded-lg font-medium text-sm border border-emerald-500/20 ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg'
                      : 'bg-emerald-500/10 text-emerald-200/75'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={activeTab === tab.toLowerCase() ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative h-32 sm:h-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-6 border border-emerald-500/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-emerald-200/75 leading-relaxed text-sm sm:text-base">
                    {getActiveContent().description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              variants={scaleIn}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Border animation */}
              <motion.div 
                className="absolute inset-0 border rounded-lg"
                initial={{ borderColor: 'rgba(45, 212, 191, 0.2)' }}
                whileHover={{ borderColor: '#ffffff' }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center space-y-4 z-10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                {/* Icon with animation */}
                <motion.div 
                  className="text-emerald-300 opacity-70"
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.1,
                    rotate: 6
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number counter animation */}
                <div className="flex items-baseline justify-center">
                  <motion.span 
                    className="text-3xl sm:text-4xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.span>
                  {stat.suffix && (
                    <span className="text-2xl sm:text-3xl font-bold text-white ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <motion.p 
                  className="text-emerald-200/75 text-xs sm:text-sm opacity-80 leading-snug"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.label}
                </motion.p>

                {/* Animated underline */}
                <motion.div 
                  className="h-0.5 bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 32 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line with animation */}
        <motion.div 
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default About5thSection;