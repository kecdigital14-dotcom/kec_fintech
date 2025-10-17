"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 1;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-20"
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div 
          className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 hover:shadow-2xl hover:shadow-emerald-400/20 transition-shadow duration-300 border border-emerald-500/20">
            <motion.div 
              className="flex items-center gap-4 group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="p-3 bg-emerald-500/20 rounded-full"
                whileHover={{ rotate: 12, scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {service.title}
              </h3>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-emerald-200/75 text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-4"
            >
              {service.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-3 text-emerald-200/75"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                  </motion.div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: 3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, rotate: -1 }}
        >
          <div className="relative">
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 shadow-2xl overflow-hidden border-2 border-emerald-500/20 hover:border-emerald-400 transition-colors duration-300">
              {/* Animated background shapes */}
              <div className="absolute inset-0 opacity-10">
                <motion.div 
                  className="absolute top-0 right-0 w-40 h-40 bg-emerald-500 rounded-full -mr-20 -mt-20"
                  animate={{
                    y: [0, -20, -40, -20, 0],
                    x: [0, 10, 0, -10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500 rounded-full -ml-16 -mb-16"
                  animate={{
                    y: [0, -30, -50, -30, 0],
                    x: [0, -15, 0, 15, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              {/* Animated shine effect */}
              <motion.div 
                className="absolute w-64 h-64 bg-white rounded-full blur-3xl opacity-20 pointer-events-none"
                animate={{
                  left: `${mousePosition.x - 128}px`,
                  top: `${mousePosition.y - 128}px`
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
              />
              
              <div className="relative h-64 flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    className="inline-block p-6 bg-emerald-500/10 rounded-full shadow-lg mb-4 border border-emerald-500/20"
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <service.largeIcon className="text-emerald-400" size={60} />
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-emerald-300 font-semibold text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {service.title}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function AllServices() {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern technologies and best practices. We create responsive, fast-loading websites that convert visitors into customers.",
      icon: <Zap className="text-emerald-400" size={24} />,
      largeIcon: Zap,
      features: [
        "React, Next.js & Vue.js expertise",
        "Responsive design for all devices",
        "SEO optimized architecture",
        "Lightning-fast performance"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Craft beautiful, intuitive user experiences that users love. Our design approach combines aesthetics with functionality to create interfaces that drive engagement.",
      icon: <Shield className="text-emerald-400" size={24} />,
      largeIcon: Shield,
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Accessibility compliance",
        "Brand consistency"
      ]
    },
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals. We analyze market trends and competition to create actionable roadmaps for growth.",
      icon: <BarChart3 className="text-emerald-400" size={24} />,
      largeIcon: BarChart3,
      features: [
        "Market analysis & insights",
        "Competitive positioning",
        "Growth metrics tracking",
        "ROI optimization"
      ]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-950 via-slate-900 to-black overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHeaderInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHeaderInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-emerald-200/75 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Comprehensive solutions tailored to elevate your digital presence and drive business growth
          </motion.p>
          <motion.div 
            className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="mt-20 p-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl text-center hover:shadow-2xl hover:shadow-emerald-400/20 transition-shadow duration-300 overflow-hidden relative group border border-emerald-500/20"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p 
              className="text-emerald-200/75 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get in touch with our team to discuss your project
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { 
                opacity: 1, 
                y: [20, 0, -10, 0],
              } : { 
                opacity: 0, 
                y: 20 
              }}
              transition={isCtaInView ? {
                opacity: { duration: 0.7, delay: 0.2 },
                y: { 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.5, 1],
                  delay: 0.2
                }
              } : { duration: 0.7 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 40px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-emerald-400 to-teal-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}