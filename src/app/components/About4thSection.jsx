"use client";

import { ArrowRight, PlayCircle, Leaf, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MyCompanies() {
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

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white p-8">
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

      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div 
          className="inline-block px-4 py-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full mb-6 border border-emerald-500/20"
          variants={slideDown}
        >
          <span className="text-emerald-300 font-semibold text-sm">My Portfolio</span>
        </motion.div>
        <motion.h1 
          className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4"
          variants={slideUp}
        >
          Building the Future of AgriTech
        </motion.h1>
        <motion.p 
          className="text-xl text-emerald-200/75 max-w-2xl"
          variants={slideUp}
        >
          Two innovative ventures transforming agriculture through cutting-edge technology and sustainable practices.
        </motion.p>
      </motion.div>

      {/* Companies Grid */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Kisan */}
        <motion.div 
          className="group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Card */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl blur-2xl opacity-20"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group/video hover:shadow-2xl transition-all duration-300 border border-emerald-500/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlayCircle className="w-20 h-20 text-emerald-400" />
                </motion.div>
              </div>
              <p className="text-sm text-emerald-200/75 mt-3">Watch how we transform farming</p>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-6"
              variants={slideRight}
            >
              <div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full mb-4 border border-emerald-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold text-sm">Company 1</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-3">
                  Kisan <span className="text-emerald-400">Experience</span>
                </h2>
                <p className="text-emerald-200/75 leading-relaxed">
                  Leveraging cutting-edge technology and sustainable practices to transform modern agriculture. Our AgriTech solutions empower farmers with intelligent tools for precision farming, crop monitoring, and yield optimization.
                </p>
              </div>

              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI-Powered Analytics</h3>
                    <p className="text-emerald-200/75 text-sm">Real-time crop health monitoring and predictive insights</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sustainable Solutions</h3>
                    <p className="text-emerald-200/75 text-sm">Eco-friendly practices for sustainable farming</p>
                  </div>
                </motion.div>
              </div>

              <motion.button 
                className="mt-6 px-6 py-3 bg-gradient-to-br from-emerald-400 to-teal-600 text-white font-semibold rounded-lg flex items-center gap-2 group/btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More 
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Kec Biofuel */}
        <motion.div 
          className="group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense">
            {/* Content */}
            <motion.div 
              className="space-y-6 lg:col-span-1"
              variants={slideLeft}
            >
              <div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full mb-4 border border-cyan-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm">Company 2</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-3">
                  Kec <span className="text-cyan-400">Biofuel</span>
                </h2>
                <p className="text-emerald-200/75 leading-relaxed">
                  Pioneering sustainable energy solutions through advanced biofuel technologies. Our innovations reduce carbon footprints and provide eco-friendly fuel alternatives for a greener future.
                </p>
              </div>

              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Biofuel Innovation</h3>
                    <p className="text-emerald-200/75 text-sm">Cutting-edge technologies for sustainable energy production</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Eco-Friendly Impact</h3>
                    <p className="text-emerald-200/75 text-sm">Reducing carbon emissions with green fuel alternatives</p>
                  </div>
                </motion.div>
              </div>

              <motion.button 
                className="mt-6 px-6 py-3 bg-gradient-to-br from-cyan-400 to-teal-600 text-white font-semibold rounded-lg flex items-center gap-2 group/btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More 
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Video Card */}
            <motion.div 
              className="relative lg:col-span-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-2xl blur-2xl opacity-20"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group/video hover:shadow-2xl transition-all duration-300 border border-cyan-500/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlayCircle className="w-20 h-20 text-cyan-400" />
                </motion.div>
              </div>
              <p className="text-sm text-emerald-200/75 mt-3">Discover sustainable energy solutions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}