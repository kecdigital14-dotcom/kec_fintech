"use client";

import { Briefcase, CheckCircle2, Target, TrendingUp, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About1stSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatIn = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/12 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360, opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Enhanced Image Section */}
          <motion.div 
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 z-20 border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                    <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                    <div className="text-[10px] sm:text-xs text-emerald-200/75">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 z-20 border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                    <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">5K+</div>
                    <div className="text-[10px] sm:text-xs text-emerald-200/75">Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* Main image container */}
              <div className="relative aspect-square">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
                
                {/* Image */}
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Professional consultant"
                  className="relative w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl transform -rotate-3"
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Enhanced Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500/20"
              variants={slideDown}
            >
              <motion.div 
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 tracking-wide">WHO WE ARE</span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={slideUp}
            >
              Grow your wealth{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                systematically
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg text-emerald-200/75 leading-relaxed"
              variants={slideUp}
            >
              Transform your financial future with expert-guided trading, investment strategies, and personalized wealth management solutions.
            </motion.p>

            {/* Enhanced feature card */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-500/20"
              variants={scaleIn}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Card header */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-3 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0 shadow-lg">
                  <Shield className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg leading-tight">
                    Secure & Rewarding Investment Platform
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200/75 mt-1">Trusted by thousands worldwide</p>
                </div>
              </div>

              {/* Enhanced checklist with icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
                {['Asset Protection', 'Smart Solutions', '24/7 Support', 'High Returns'].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 bg-emerald-500/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3"
                    whileHover={{ 
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      x: 4
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-emerald-500/20 p-1 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    </div>
                    <span className="text-emerald-200/75 text-xs sm:text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced experience badge */}
            <motion.div 
              className="flex items-center justify-between bg-gradient-to-r from-emerald-400 to-teal-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden group"
              variants={scaleIn}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 0.2 }}
                transition={{ duration: 1 }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  25+
                </motion.div>
                <div className="text-xs sm:text-sm font-medium opacity-90">Years of Excellence</div>
                <div className="text-[10px] sm:text-xs opacity-75">in Financial Services</div>
              </div>
              <div className="relative z-10 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}