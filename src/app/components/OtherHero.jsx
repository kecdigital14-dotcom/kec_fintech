"use client";

import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OtherHero({ 
  title = "About", 
  breadcrumbLabel = "About",
  backgroundImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop"
}) {
  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const breadcrumbVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative w-full h-96 md:h-[490px] flex items-center justify-center overflow-hidden bg-black z-10"
    >
      {/* Gradient Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950"></div>

      {/* Animated Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.8,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-emerald-900/50 to-transparent"></div>
      </motion.div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-500/10 to-cyan-500/20 mix-blend-screen"></div>

      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-600/40 to-teal-600/40 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-green-500/40 to-teal-600/40 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>

      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-lime-500/30 to-emerald-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      ></motion.div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-emerald-300 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            opacity: [0, 1, 0],
            scale: [0, particle.scale, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        ></motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 text-center space-y-2 px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Line Above Title */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          variants={breadcrumbVariants}
        >
          <motion.div 
            className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400"
            animate={{ scaleX: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <motion.div 
            className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400"
            animate={{ scaleX: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Main Title with Advanced Gradient */}
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-[85px] font-bold tracking-tight text-white"
          variants={titleVariants}
        >
          <motion.span
            className="text-gray-300"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            {title}
          </motion.span>
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          className="text-emerald-100/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
          variants={breadcrumbVariants}
        >
          {/* Discover our story and vision */}
        </motion.p>

        {/* Breadcrumb Navigation */}
        <motion.div 
          className="flex items-center justify-center gap-2 pt-4"
          variants={breadcrumbVariants}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-emerald-500/20 shadow-lg shadow-emerald-500/10"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(16, 185, 129, 0.4)"
            }}
            transition={{ duration: 0.2 }}
          >
            {/* <span className="text-sm font-medium text-emerald-200">Home</span> */}
            <ChevronRight className="w-4 h-4 text-emerald-200" />
            <span className="text-lg font-semibold text-white">{breadcrumbLabel}</span>
          </motion.div>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          className="flex justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade to Content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}