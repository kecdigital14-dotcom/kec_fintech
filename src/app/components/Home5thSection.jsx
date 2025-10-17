"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Home5thSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assess Your Goals",
      description: "Understand your financial objectives, risk tolerance, and investment timeline to create a personalized strategy.",
      icon: "🎯"
    },
    {
      number: "02",
      title: "Build Portfolio",
      description: "Diversify your investments across asset classes to optimize returns while managing risk effectively.",
      icon: "📊"
    },
    {
      number: "03",
      title: "Monitor & Adjust",
      description: "Track performance regularly and rebalance your portfolio based on market conditions and life changes.",
      icon: "📈"
    },
    {
      number: "04",
      title: "Achieve Wealth",
      description: "Reach your financial milestones with consistent growth, strategic planning, and expert guidance.",
      icon: "💎"
    }
  ];

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white overflow-hidden py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Particle Effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            variants={fadeInDown}
          >
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className="text-emerald-300 text-xs font-bold tracking-[0.3em] uppercase relative"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(34, 197, 94, 0)",
                  "0 0 20px rgba(34, 197, 94, 0.5)",
                  "0 0 10px rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative z-10">HOW IT WORKS</span>
              <motion.span 
                className="absolute inset-0 bg-emerald-500/20 blur-xl"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 leading-tight mb-4"
            variants={fadeInUp}
          >
            Your Path to Financial
            <br />
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #34d399, #22d3ee, #34d399)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Success in 4 Steps
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-emerald-200/75 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Transform your financial future with our proven methodology
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={fadeInUp}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
              
              <motion.div
                className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(34, 197, 94, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Icon Badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/50"
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="relative z-10">
                  {/* Number */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span 
                      className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-400"
                      style={{ 
                        WebkitTextStroke: '1px rgba(34, 197, 94, 0.2)',
                        filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))'
                      }}
                      animate={{ 
                        textShadow: [
                          "0 0 20px rgba(34, 197, 94, 0.3)",
                          "0 0 40px rgba(34, 197, 94, 0.5)",
                          "0 0 20px rgba(34, 197, 94, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-emerald-200/75 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <motion.div 
                    className="mt-6 h-1 bg-emerald-500/20 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 1) * 25}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-tl-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex flex-col items-center gap-6"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-emerald-200/75 text-xl md:text-2xl font-light">
              <motion.span 
                className="font-semibold text-emerald-300"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 10px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Plan Smart, Invest Better,
              </motion.span>{' '}
              and{' '}
              <motion.span 
                className="font-semibold text-emerald-300"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 10px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Grow Your Wealth
              </motion.span>
            </p>
            
            <motion.button
              className="relative px-10 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-full overflow-hidden group shadow-lg shadow-emerald-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
              
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-950 to-transparent" />
    </section>
  );
};

export default Home5thSection;