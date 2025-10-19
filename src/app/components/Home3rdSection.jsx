"use client";

import { Lightbulb, Wrench, ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home3rdSection() {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUpMain = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const badgePop = {
    hidden: { opacity: 0, scale: 0.3, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  };

  return (
    <section className="w-full relative bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/12 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Image Collage */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1">
            {/* Main Image - Two people working */}
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 h-full"
              variants={slideUpMain}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop" 
                alt="Financial advisors meeting"
                className="w-full h-full object-cover"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Bottom Left Image - Person working on laptop */}
            <motion.div 
              className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 h-44 sm:h-52 md:h-64 rounded-2xl overflow-hidden shadow-xl z-20 border-2 sm:border-4 border-emerald-500/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              animate={{ y: [0, -20, 0] }}
              whileHover={{ y: -28 }}
              style={{ animation: "none" }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
                alt="Financial analyst working"
                className="w-full h-full object-cover"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Bottom Right Image - Woman on phone */}
            <motion.div 
              className="absolute bottom-0 right-0 w-36 sm:w-44 md:w-56 h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl z-20 border-2 sm:border-4 border-emerald-500/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              animate={{ y: [0, -20, 0] }}
              whileHover={{ y: -28 }}
              style={{ animation: "none" }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop" 
                alt="Investment consultant"
                className="w-full h-full object-cover"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>

            {/* Expert Team Badge */}
            <motion.div 
              className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl flex items-center gap-2 sm:gap-3"
              variants={badgePop}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(34, 197, 94, 0.2)",
                  "0 10px 50px rgba(34, 197, 94, 0.4)",
                  "0 10px 30px rgba(34, 197, 94, 0.2)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <span className="font-semibold text-white text-sm sm:text-base">Expert Team</span>
              <div className="flex -space-x-1 sm:-space-x-2">
                {[
                  { from: 'emerald-400', to: 'teal-600', delay: 0 },
                  { from: 'teal-500', to: 'cyan-600', delay: 0.2 },
                  { from: 'emerald-600', to: 'teal-800', delay: 0.4 },
                  { from: 'cyan-400', to: 'teal-500', delay: 0.6 }
                ].map((color, i) => (
                  <motion.div
                    key={i}
                    className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-${color.from} to-${color.to} border-2 border-emerald-500/50`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: color.delay 
                    }}
                  />
                ))}
                <motion.div 
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-2 border-emerald-500/50 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  9+
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Section Label */}
            <motion.div 
              className="flex items-center gap-2"
              variants={fadeInRight}
            >
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 fill-emerald-400" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 uppercase tracking-wider">WHO WE ARE</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight"
              variants={fadeInRight}
            >
              Your Trusted Partner in Financial Growth
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-emerald-200/75 leading-relaxed text-sm sm:text-base"
              variants={fadeInUp}
            >
              Finclix is your premier destination for comprehensive financial solutions, offering expert investment strategies and wealth management services tailored to secure your financial future.
            </motion.p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6">
              {/* Wealth Management */}
              <motion.div 
                className="flex gap-3 sm:gap-4"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Wealth Management</h3>
                  <p className="text-emerald-200/75 text-xs sm:text-sm leading-relaxed">
                    In today's dynamic financial markets, strategic wealth management is essential for achieving long-term financial security and growth.
                  </p>
                </div>
              </motion.div>

              {/* Portfolio Optimization */}
              <motion.div 
                className="flex gap-3 sm:gap-4"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                      <Wrench className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Portfolio Optimization</h3>
                  <p className="text-emerald-200/75 text-xs sm:text-sm leading-relaxed">
                    Our data-driven approach ensures your investment portfolio is perfectly balanced to maximize returns while managing risk effectively.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-emerald-300">Client Satisfaction</span>
                <motion.span 
                  className="text-xs sm:text-sm font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  95%
                </motion.span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Bottom Section - CTA and Founder */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
              {/* Get Started Button */}
              <motion.button 
                className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)",
                  y: -8
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Investing
                <motion.span 
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center text-teal-600"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                  </motion.div>
                </motion.span>
              </motion.button>

              {/* Founder Info */}
              <motion.div 
                className="flex items-center gap-3"
                variants={fadeInUp}
              >
                <motion.div 
                  className="w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-md flex-shrink-0"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ y: -5 }}
                >
                  <motion.img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt="John Williams"
                    className="w-full h-full object-cover"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                </motion.div>
                <div>
                  <p className="font-bold text-white italic text-sm sm:text-base">John Williams</p>
                  <p className="text-xs sm:text-sm text-emerald-300 font-semibold">Financial Advisor</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}