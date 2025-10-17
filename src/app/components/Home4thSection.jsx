"use client";

import React from 'react';
import { Shield, TrendingUp, DollarSign, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Home4thSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Your investments are protected with advanced security protocols and comprehensive risk management strategies to ensure capital safety.",
      bgColor: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Achieve superior returns through data-driven investment strategies, market analysis, and personalized portfolio allocation.",
      bgColor: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Our competitive pricing model ensures you get maximum value for every investment dollar.",
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-800"
    },
    {
      icon: Users,
      title: "Dedicated Advisors",
      description: "Access experienced financial professionals who provide personalized guidance and ongoing support for your wealth management journey.",
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
        delayChildren: 0.1
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

  const lineSlide = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "32px", 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white overflow-hidden py-4">
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

      <div className="relative z-10 container mx-auto px-6 lg:py-4 max-w-6xl">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={fadeInLeft}
          >
            <motion.div 
              className="relative max-w-md"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Financial team meeting"
                className="rounded-lg shadow-2xl max-w-[80%] border border-emerald-500/20"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Glow effect behind image */}
              <motion.div 
                className="absolute inset-0 max-w-[80%] rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
                animate={{ 
                  filter: ["blur(60px)", "blur(40px)", "blur(60px)"],
                  opacity: [0.15, 0.3, 0.15]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="text-white">
            <motion.div 
              className="mb-8"
              variants={fadeInRight}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                  variants={lineSlide}
                />
                <motion.span 
                  className="text-emerald-300 text-sm font-semibold tracking-wider uppercase"
                  variants={fadeInUp}
                >
                  Why Choose Us
                </motion.span>
              </div>
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight"
                variants={fadeInUp}
              >
                Your Trusted Financial<br />
                Partner for Wealth Growth
              </motion.h2>
            </motion.div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    y: { 
                      duration: 3.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2 
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`${service.bgColor} p-3 rounded-full flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                      }}
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(34, 197, 94, 0.3)",
                          "0 0 40px rgba(34, 197, 94, 0.6)",
                          "0 0 20px rgba(34, 197, 94, 0.3)"
                        ]
                      }}
                      transition={{ 
                        boxShadow: { 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2 
                        }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-semibold mb-2 text-white"
                        animate={{ 
                          textShadow: [
                            "0 0 0px rgba(34, 197, 94, 0)",
                            "0 0 15px rgba(34, 197, 94, 0.5)",
                            "0 0 0px rgba(34, 197, 94, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.3 
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-emerald-200/75 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.15 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home4thSection;