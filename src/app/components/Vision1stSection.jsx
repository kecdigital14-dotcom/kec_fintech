"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, TrendingUp, Lock } from 'lucide-react';

export default function Vision1stSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const sideImageRef = useRef(null);
  
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isSideImageInView = useInView(sideImageRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your investments are protected with military-grade encryption and multi-factor authentication.",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Data",
      description: "Access live market insights and portfolio performance tracking 24/7.",
      delay: 0.4
    },
    {
      icon: Lock,
      title: "Regulated & Compliant",
      description: "Fully licensed and regulated by financial authorities to ensure your safety.",
      delay: 0.5
    }
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contentVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/12 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isImageInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isImageInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 sm:gap-12">
          {/* Left Side - Image */}
          <motion.div 
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative mb-6 sm:mb-8">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div 
                  className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-xl sm:rounded-2xl blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.img
                  src="/fintech5.jpg"
                  alt="Financial professional analyzing investment data"
                  className="w-full max-w-md mx-auto lg:max-w-[450px] h-[400px] sm:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl shadow-lg relative z-10 border-2 border-emerald-500/20 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Decorative element */}
                <motion.div 
                  className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-20 sm:w-24 h-20 sm:h-24 bg-emerald-500/20 rounded-xl sm:rounded-4xl -z-10 overflow-hidden"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isImageInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src="/fintech7.avif" alt="" className='h-full w-full object-cover rounded-xl sm:rounded-2xl' />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div 
            ref={contentRef}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Header */}
            <div>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-emerald-300 font-semibold text-xs sm:text-sm mb-3 sm:mb-4"
              >
                • Why Choose Us
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4"
              >
                Our Vision
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-emerald-200/75 text-sm sm:text-base leading-relaxed text-justify"
              >
                Our platform combines cutting-edge fintech innovation with proven investment strategies to democratize wealth creation. We leverage AI-powered analytics and real-time market intelligence to deliver personalized investment solutions that align with your financial goals and risk tolerance.
              </motion.p>
            </div>

            {/* Features */}
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className="space-y-5 sm:space-y-6 flex-1 text-justify">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={featureVariants}
                      initial="hidden"
                      animate={isContentInView ? "visible" : "hidden"}
                      transition={{ delay: feature.delay }}
                      whileHover={{ x: 8 }}
                      className="flex gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <motion.div 
                          className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-emerald-500/20"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 6,
                            backgroundColor: "rgba(45, 212, 191, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                        </motion.div>
                      </div>
                      <div>
                        <motion.h3 
                          className="font-bold text-white text-sm sm:text-base"
                          whileHover={{ color: "rgb(204, 251, 241)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <p className="text-emerald-200/75 text-xs sm:text-sm mt-1">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Side Image - Hidden on mobile and tablet, visible on desktop */}
              <motion.div 
                ref={sideImageRef}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={isSideImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="hidden xl:block"
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-l from-emerald-400 to-teal-600 rounded-2xl blur-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.img
                    src="/fintech4.jpg"
                    alt="Investment growth charts"
                    className="rounded-2xl shadow-lg w-[250px] relative z-10 border-2 border-emerald-500/20 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Decorative element */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/20 rounded-2xl -z-10"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={isSideImageInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}