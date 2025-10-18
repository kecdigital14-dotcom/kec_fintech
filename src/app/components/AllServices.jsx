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
            
            <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/20 hover:border-emerald-400 transition-colors duration-300">
              {/* Image with overlay */}
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div> */}
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute w-64 h-64 bg-white rounded-full blur-3xl opacity-10 pointer-events-none"
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
                     
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.p 
                    className="text-emerald-300 font-semibold text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
      title: "Portfolio Management",
      description: "Build and optimize diversified investment portfolios tailored to your financial goals. We leverage advanced algorithms and market analysis to maximize returns while managing risk effectively.",
      icon: <Zap className="text-emerald-400" size={24} />,
      largeIcon: Zap,
      image: "port1.jpg",
      features: [
        "AI-driven asset allocation",
        "Real-time portfolio rebalancing",
        "Risk assessment & management",
        "Tax-efficient strategies"
      ]
    },
    {
      title: "Wealth Analytics",
      description: "Gain deep insights into your financial health with comprehensive analytics and reporting. Our platform provides real-time tracking and predictive modeling to help you make informed investment decisions.",
      icon: <Shield className="text-emerald-400" size={24} />,
      largeIcon: Shield,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Performance tracking dashboard",
        "Predictive market insights",
        "Custom financial reports",
        "Goal progress monitoring"
      ]
    },
    {
      title: "Investment Advisory",
      description: "Receive personalized investment guidance from our expert advisors and AI-powered recommendations. We analyze market trends and your unique financial situation to create tailored strategies for wealth growth.",
      icon: <BarChart3 className="text-emerald-400" size={24} />,
      largeIcon: BarChart3,
       image: "invest1.jpg",
      features: [
        "Personalized investment plans",
        "Market trend analysis",
        "Retirement planning support",
        "Alternative investment options"
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
            Comprehensive financial solutions tailored to elevate your investment portfolio and secure your financial future
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
              Ready to Transform Your Financial Future?
            </motion.h3>
            <motion.p 
              className="text-emerald-200/75 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get in touch with our team to discuss your investment goals
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
              Start Investing Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}