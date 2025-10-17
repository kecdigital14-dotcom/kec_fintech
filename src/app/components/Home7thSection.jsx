"use client";

import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Home7thSection = () => {
  const team = [
    {
      name: "Guy Hawkins",
      role: "Admin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Jacob Jones",
      role: "Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Kristin Watson",
      role: "Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Bessie Cooper",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
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

  const cardPop = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.68, -0.55, 0.265, 1.55]
      }
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
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            variants={fadeInDown}
          >
            <motion.div 
              className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-emerald-400 border-r-8 border-r-transparent"
              variants={triangleSlide}
            />
            <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">
              OUR TEAMMATE
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight"
            variants={fadeInUp}
          >
            Enhance Your Experience with<br />
            Expert Consulting
          </motion.h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={cardPop}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                y: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2 
                }
              }}
            >
              {/* Card */}
              <motion.div 
                className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl overflow-hidden shadow-sm border border-emerald-500/20"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                  transition: { duration: 0.3 }
                }}
                animate={{ 
                  y: [0, -15, 0],
                  boxShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 20px 40px rgba(34, 197, 94, 0.15), inset 0 0 20px rgba(34, 197, 94, 0.05)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  y: { 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  },
                  boxShadow: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    style={{ 
                      animationDuration: '3s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${index * 0.3}s`
                    }}
                  />
                  
                  {/* Overlay Gradient on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Plus Button */}
                  <motion.button 
                    className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(34, 197, 94, 0)",
                        "0 0 20px rgba(34, 197, 94, 0.6)",
                        "0 0 0px rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { 
                        duration: 2.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.1 
                      }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 0.95, 1.05, 0.98, 1]
                      }}
                      transition={{ 
                        rotate: { 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: index * 0.2 
                        },
                        scale: { 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Info Section */}
                <motion.div 
                  className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-1"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(34, 197, 94, 0)",
                        "0 0 10px rgba(34, 197, 94, 0.3)",
                        "0 0 0px rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.15 
                    }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-emerald-200/75 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 1 }}
                  >
                    {member.role}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home7thSection;