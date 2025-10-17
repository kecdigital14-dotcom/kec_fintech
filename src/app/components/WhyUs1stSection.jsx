"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WhyUs1stSection() {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [0, 300], [15, -15]), {
    stiffness: 100,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 300], [-15, 15]), {
    stiffness: 100,
    damping: 20
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(150);
    mouseY.set(150);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Image with Interactive Effects */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* Teal Accent Border */}
            <motion.div 
              className="absolute -inset-6 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl blur-xl"
              initial={{ opacity: 0.15 }}
              whileHover={{ opacity: 0.25 }}
              transition={{ duration: 0.5 }}
            />

            {/* Floating Cards Background Effect */}
            <motion.div 
              className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [-12, -7, -12]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-3xl opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [12, 17, 12]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Main Image Container */}
            <motion.div 
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-md w-full group cursor-pointer border-4 border-emerald-500/20"
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Shine Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent z-20 pointer-events-none"
                style={{ width: '200%' }}
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ 
                  x: '100%',
                  opacity: 0.2,
                  transition: { duration: 1, ease: "easeInOut" }
                }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
                alt="Business Consultants"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl shadow-2xl p-6 z-20 border border-emerald-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm font-bold text-white">500+</p>
                  <p className="text-xs text-emerald-200/75">Satisfied Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div 
            ref={contentRef}
            className="space-y-8 md:space-y-4"
          >
            {/* Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs md:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 border border-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                  <Sparkles className="w-4 h-4" />
                  Why Us
                </span>
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
                Partner With Our{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Trusted</span>
                  <motion.svg 
                    className="absolute -bottom-3 left-0 w-full h-4 text-emerald-400 opacity-70"
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0 }}
                    animate={isContentInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.path 
                      d="M0,10 Q75,0 150,10 T300,10" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
                {' '}Consultants Today.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-5 text-emerald-200/75 text-[15.5px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.p
                whileHover={{ x: 8, color: "rgb(204, 251, 241)" }}
                transition={{ duration: 0.3 }}
              >
                At Advisor Consulting Company, we are a trusted business consulting firm dedicated to helping businesses thrive and reach their full potential.
              </motion.p>
              <motion.p
                whileHover={{ x: 8, color: "rgb(204, 251, 241)" }}
                transition={{ duration: 0.3 }}
              >
                Our team of experienced consultants brings diverse industry knowledge and expertise. We prioritize understanding your unique challenges and deliver customized solutions tailored to your needs.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.button 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(34, 197, 94, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-400"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 font-bold text-emerald-300 border-2 border-emerald-500/20 rounded-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgb(45, 212, 191)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-emerald-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
                <span className="relative">Learn More</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex gap-6 pt-4 border-t border-emerald-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                { value: "15+", label: "Years Experience", color: "text-emerald-400" },
                { value: "50+", label: "Expert Team", color: "text-cyan-400" },
                { value: "98%", label: "Success Rate", color: "text-emerald-300" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-emerald-200/75">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}