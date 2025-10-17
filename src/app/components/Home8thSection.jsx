"use client";

import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Home8thSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      quote: "Their investment strategy completely transformed my financial outlook. Within a year, I've seen remarkable growth in my portfolio while keeping my risk managed. The personalized guidance and transparent communication make all the difference. I couldn't ask for better financial partners.",
      name: "Robert J. Hare",
      role: "Investor, Tech Sector",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      quote: "Working with this financial advisory team has been a game-changer for my business. They helped me diversify my investments and create a robust wealth management plan. Their expertise and dedication to understanding my goals set them apart from other firms.",
      name: "Sarah Johnson",
      role: "Business Owner & Investor",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
      quote: "The level of professionalism and financial acumen displayed by this team is exceptional. They navigated me through complex market conditions with clarity and provided actionable investment strategies that delivered consistent returns. Highly recommended for serious investors.",
      name: "Michael Chen",
      role: "Portfolio Manager",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white py-4 overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
              variants={fadeInUp}
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              className="text-emerald-200/75 mt-4 text-lg"
              variants={fadeInUp}
            >
              Hear from our satisfied investors and clients about their experience
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Left Side - Image and Rating */}
            <motion.div 
              className="flex flex-col items-center lg:items-start"
              variants={fadeInLeft}
            >
              <div className="relative group">
                {/* Profile Image */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="w-72 h-72 rounded-full overflow-hidden border-8 border-emerald-500/20 shadow-2xl"
                  >
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ y: -24 }}
                    >
                      <motion.div
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(34, 197, 94, 0.2)",
                            "0 0 40px rgba(34, 197, 94, 0.5)",
                            "0 0 20px rgba(34, 197, 94, 0.2)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.img 
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover"
                          animate={{ 
                            filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Quote Icon Badge */}
                <motion.div 
                  className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
                  variants={badgePop}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Quote className="w-7 h-7 text-white fill-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Star Rating */}
              <motion.div 
                className="mt-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full px-6 py-3 shadow-md border border-emerald-500/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 15px rgba(34, 197, 94, 0.3)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  opacity: { delay: 0.6, duration: 0.6 },
                  x: { delay: 0.6, duration: 0.6 },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.1 
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Testimonial Content */}
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <div className="prose prose-lg">
                    <motion.p 
                      className="text-emerald-200/75 text-lg leading-relaxed"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {current.quote}
                    </motion.p>
                  </div>

                  {/* Author Info */}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-1"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    >
                      {current.name} <span className="text-emerald-400 font-normal">/</span>
                    </motion.h3>
                    <p className="text-emerald-200/75">
                      {current.role}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.div 
                className="flex gap-3 pt-4"
                variants={fadeInUp}
              >
                <motion.button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center shadow-md border border-emerald-500/20"
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-emerald-300" />
                </motion.button>
                <motion.button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center shadow-md border border-emerald-500/20"
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-emerald-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home8thSection;