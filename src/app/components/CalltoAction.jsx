"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CallToAction() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: [0.15, 0.25, 0.15],
      transition: {
        scale: { duration: 1, ease: "backOut" },
        opacity: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          variants={floatingVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 0.3 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4"
        >
          Ready to Get Started?
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-emerald-200/75 mb-8 max-w-2xl mx-auto"
        >
          Join thousands of users who have already transformed their workflow. 
          Sign up today and get instant access to all premium features.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg overflow-hidden"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2">
              Start Free Trial
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
            {/* Shine effect */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ 
                x: "100%", 
                opacity: 0.2,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
            />
          </motion.button>

          {/* Secondary Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 bg-emerald-500/10 text-emerald-300 font-semibold rounded-lg transition-all duration-300 border-2 border-emerald-500/20 hover:border-emerald-400 relative overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <motion.span 
              className="absolute inset-0 bg-emerald-500/20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          variants={itemVariants}
          className="text-emerald-200/75 text-sm mt-8 flex flex-wrap justify-center items-center gap-4"
        >
          {[
            { text: "No credit card required", delay: 0 },
            { text: "14-day free trial", delay: 0.2 },
            { text: "Cancel anytime", delay: 0.4 }
          ].map((item, index) => (
            <motion.div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-emerald-400">•</span>}
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg 
                  className="w-4 h-4 text-emerald-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </motion.svg>
                {item.text}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}