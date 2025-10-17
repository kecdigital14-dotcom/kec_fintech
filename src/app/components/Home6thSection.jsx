"use client";

import React from 'react';
import { Users, PieChart, CreditCard, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home6thSection = () => {
  const services = [
    {
      icon: Users,
      title: "Strategic Investments",
      description: "Everyone with high and useful reward for his We offer",
      bgColor: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
      icon: PieChart,
      title: "Putting Customers First",
      description: "Everyone with high and useful reward for his We offer",
      bgColor: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    {
      icon: CreditCard,
      title: "Smarter Business Decisions",
      description: "Everyone with high and useful reward for his We offer",
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-800"
    },
    {
      icon: TrendingUp,
      title: "Driving Innovation with Agile",
      description: "Everyone with high and useful reward for his We offer",
      bgColor: "bg-gradient-to-br from-cyan-400 to-teal-500"
    }
  ];

  // Animation variants
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const triangleSlide = {
    hidden: { opacity: 0, x: -20, scaleX: 0 },
    visible: { 
      opacity: 1, 
      x: 0,
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white py-20 overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Side - Header */}
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              variants={fadeInLeft}
            >
              <motion.div 
                className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-emerald-400 border-r-8 border-r-transparent"
                variants={triangleSlide}
              />
              <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">
                OUR EXPERTISE
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight"
              variants={fadeInLeft}
            >
              We provide consulting<br />
              to strategic growth.
            </motion.h2>
          </div>

          {/* Right Side - Description */}
          <motion.div 
            className="flex items-start lg:pt-12"
            variants={fadeInRight}
          >
            <motion.p 
              className="text-emerald-200/75 text-base leading-relaxed"
              variants={fadeInUp}
            >
              Finolix is the destination where early adopters and innovation<br />
              enthusiasts discover cutting-edge technology
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 shadow-sm border border-emerald-500/20 group"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                transition: { duration: 0.3 }
              }}
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(34, 197, 94, 0.05)",
                  "0 0 40px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(34, 197, 94, 0.1)",
                  "0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(34, 197, 94, 0.05)"
                ]
              }}
              transition={{ 
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <motion.div 
                  className="absolute inset-0 bg-emerald-500/20 rounded-full filter blur-xl opacity-20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className={`relative w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.15 
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-4 leading-tight"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 15px rgba(34, 197, 94, 0.3)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.1 
                }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-emerald-200/75 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.15 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home6thSection;