"use client";

import { Briefcase, PieChart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home2ndSection() {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const avatarPop = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    })
  };

  return (
    <section className="w-full bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Hero Content */}
          <div className="relative">
            {/* Client Avatars */}
            <motion.div 
              className="flex items-center gap-2 mb-8 relative z-10"
              variants={fadeInUp}
            >
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={avatarPop}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className={`w-14 h-14 rounded-full border-4 border-emerald-500/50 overflow-hidden cursor-pointer ${
                      i === 0 ? 'bg-gradient-to-br from-emerald-400 to-teal-600' : 
                      i === 1 ? 'bg-gradient-to-br from-teal-500 to-cyan-600' : 
                      i === 2 ? 'bg-gradient-to-br from-emerald-600 to-teal-800' : 
                      'bg-gradient-to-br from-cyan-400 to-teal-500'
                    }`}
                  >
                    <motion.div 
                      className="w-full h-full"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-8 relative z-10"
              variants={fadeInLeft}
            >
              50K+ Satisfied Investors
            </motion.h1>

            {/* CTA Button */}
            <motion.button 
              className="relative z-10 group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Investing
              <motion.span 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </motion.button>
          </div>

          {/* Right Side - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Financial Planning Card */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl p-8 text-white shadow-xl"
              variants={fadeInRight}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)"
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mb-6"
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(34, 197, 94, 0.3)",
                    "0 0 30px rgba(34, 197, 94, 0.6)",
                    "0 0 15px rgba(34, 197, 94, 0.3)"
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-4 text-white"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                Financial Planning
              </motion.h3>
              
              <motion.p 
                className="text-emerald-200/75 text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Build a secure financial future with our expert guidance. We help you create personalized investment strategies, manage wealth effectively, and achieve your long-term financial goals through smart planning.
              </motion.p>
              
              <motion.a 
                href="#" 
                className="inline-block text-emerald-300 font-semibold border-b-2 border-emerald-400 hover:border-teal-400 transition-colors relative"
                whileHover={{ x: 5, color: "#a7f3d0" }}
              >
                Read More
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Investment Advisory Card */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl p-8 text-white shadow-xl"
              variants={fadeInRight}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)"
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mb-6"
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(34, 197, 94, 0.3)",
                    "0 0 30px rgba(34, 197, 94, 0.6)",
                    "0 0 15px rgba(34, 197, 94, 0.3)"
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <PieChart className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-4 text-white"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                Investment Advisory
              </motion.h3>
              
              <motion.p 
                className="text-emerald-200/75 text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Make informed investment decisions with our professional advisory services. From portfolio diversification to risk management, we provide strategic insights to maximize your returns.
              </motion.p>
              
              <motion.a 
                href="#" 
                className="inline-block text-emerald-300 font-semibold border-b-2 border-emerald-400 hover:border-teal-400 transition-colors relative"
                whileHover={{ x: 5, color: "#a7f3d0" }}
              >
                Read More
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}