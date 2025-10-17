"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, FileText, Users } from 'lucide-react';

export default function Vision1stSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const sideImageRef = useRef(null);
  
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isSideImageInView = useInView(sideImageRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CheckCircle,
      title: "Certified & Accredited Labs",
      description: "All tests are performed in ISO-certified laboratories.",
      delay: 0.3
    },
    {
      icon: FileText,
      title: "Secure Online Reports",
      description: "Access your test results anytime, anywhere.",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Experienced Pathologists",
      description: "Our team of highly qualified pathologists ensures accuracy.",
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
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isImageInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isImageInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
          {/* Left Side - Image */}
          <motion.div 
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative mb-8">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.img
                  src="./vision2.jpg"
                  alt="Lab professional"
                  className="w-[450px] rounded-2xl shadow-lg relative z-10 border-2 border-emerald-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Decorative element */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-2xl -z-10"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isImageInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div 
            ref={contentRef}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-emerald-300 font-semibold text-sm mb-4"
              >
                • Why Choose Us
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight mb-4"
              >
                Our Vision
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-emerald-200/75 text-base leading-relaxed"
              >
                Our laboratory combines advanced diagnostic technology with a team of certified professionals to ensure every test result is accurate and reliable. We prioritize speed without compromising quality, delivering results that empower informed decisions.
              </motion.p>
            </div>

            {/* Features */}
            <div className='flex gap-6'>
              <div className="space-y-6 flex-1">
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
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <motion.div 
                          className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-500/20"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 6,
                            backgroundColor: "rgba(45, 212, 191, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-5 h-5 text-emerald-400" />
                        </motion.div>
                      </div>
                      <div>
                        <motion.h3 
                          className="font-bold text-white"
                          whileHover={{ color: "rgb(204, 251, 241)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <p className="text-emerald-200/75 text-sm mt-1">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Side Image */}
              <motion.div 
                ref={sideImageRef}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={isSideImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block"
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
                    src="./vision1.jpg"
                    alt="Lab samples"
                    className="rounded-2xl shadow-lg w-[250px] relative z-10 border-2 border-emerald-500/20"
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