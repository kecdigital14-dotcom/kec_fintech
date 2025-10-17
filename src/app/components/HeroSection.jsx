"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ExternalLink, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-black rounded-[40px] mx-6 overflow-hidden sm:h-[520px] shadow-2xl">
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

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-12 py-2 relative z-10 lg:ml-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-bold leading-tight"
            >
              <span className="text-white drop-shadow-lg">Instant Credit for </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 30px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Rural
              </motion.span>{' '}
              <span className="text-white drop-shadow-lg">India</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-emerald-200/75 text-lg max-w-md leading-relaxed drop-shadow-md"
            >
              Empowering you to secure, grow, and prosper as we redefine the future of finance together.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-400/50 transition-all group"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Lets Talk With Us
                </motion.span>
                <motion.div 
                  className="bg-white rounded-full p-2"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={20} className="text-teal-600" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Decorative Arrow */}
            <motion.div 
              className="absolute left-[500px] top-[400px]"
              animate={{ 
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: 'top center' }}
            >
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <path
                  d="M10 40 Q 40 10, 70 40"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
                <path
                  d="M60 30 L70 40 L60 50"
                  fill="url(#arrowGradient)"
                />
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#34d399' }} />
                    <stop offset="100%" style={{ stopColor: '#2dd4bf' }} />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Small Image Decoration */}
            <motion.div 
              className="absolute left-[480px] top-[280px] w-48 h-32 rounded-3xl overflow-hidden border-4 border-emerald-500/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <motion.img 
                  src="/homebanner13.jpg" 
                  alt="decorative" 
                  className="w-full h-full object-cover"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative flex justify-end items-center h-[600px]">
            {/* Main Image Placeholder */}
            <div className="relative">
              <motion.div 
                className="w-[500px] h-[600px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-t-full relative flex items-center justify-center shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                {/* Floating Images Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Center Circle Background with Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="relative w-84 h-84 border-2 border-emerald-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.img 
                        src="/homebanner6.png" 
                        alt="center image" 
                        className="w-full h-full object-cover rounded-full"
                        animate={{ 
                          scale: [1, 1.08, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Image 1 - Top Left - Rupee Symbol */}
                  <motion.div 
                    className="absolute top-12 left-20"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className="w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center"
                      whileHover={{ y: -5, scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(34, 197, 94, 0.4)',
                          '0 0 30px rgba(34, 197, 94, 0.8)',
                          '0 0 15px rgba(34, 197, 94, 0.4)'
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <motion.span 
                        className="text-white text-4xl font-bold drop-shadow-lg"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ₹
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Image 2 - Top Right - Rupee in Circle */}
                  <motion.div 
                    className="absolute top-20 right-16"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center"
                      whileHover={{ y: -5, scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(34, 197, 94, 0.4)',
                          '0 0 30px rgba(34, 197, 94, 0.8)',
                          '0 0 15px rgba(34, 197, 94, 0.4)'
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                      }}
                    >
                      <motion.span 
                        className="text-white text-2xl font-bold drop-shadow-lg"
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ₹
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Image 3 - Bottom Left - Rupee Coins */}
                  <motion.div 
                    className="absolute bottom-20 left-12"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center"
                      whileHover={{ y: -5, scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(34, 197, 94, 0.4)',
                          '0 0 30px rgba(34, 197, 94, 0.8)',
                          '0 0 15px rgba(34, 197, 94, 0.4)'
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                      }}
                    >
                      <motion.span 
                        className="text-white text-xl font-bold drop-shadow-lg"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        ₹
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Image 4 - Bottom Right - Rupee Stack */}
                  <motion.div 
                    className="absolute bottom-32 right-8"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center"
                      whileHover={{ y: -5, scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(34, 197, 94, 0.4)',
                          '0 0 30px rgba(34, 197, 94, 0.8)',
                          '0 0 15px rgba(34, 197, 94, 0.4)'
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                      }}
                    >
                      <motion.span 
                        className="text-white text-2xl font-bold drop-shadow-lg"
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      >
                        ₹
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Circular Badge */}
              <motion.div 
                className="absolute -right-20 top-1/3 w-36 h-36 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-400/40"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <motion.div 
                  className="text-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-[10px] font-semibold fill-black" letterSpacing="6">
                      <textPath href="#circlePath">
                        CONSULTING • BUSINESS • IT • DEVELOPMENTS •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-black text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ★
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side Website Icons */}
      <motion.div 
        className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/95 backdrop-blur-sm rounded-r-2xl px-2 py-3 shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Website Link 1 */}
        <Link 
          href="https://kisanexperience.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Visit Main Website"
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
            <Globe size={20} className="text-black" />
          </motion.div>
          <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
            Main Website
          </span>
        </Link>

        {/* Website Link 2 */}
        <Link 
          href="https://www.kecbiofuel.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Visit Portfolio"
        >
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.2 }}>
            <ExternalLink size={20} className="text-black" />
          </motion.div>
          <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
            Portfolio
          </span>
        </Link>

        {/* Website Link 3 */}
        <Link 
          href="https://kec-hemu.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Visit Services"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            animate={{ rotate: 360 }}
            transition={{ 
              scale: { duration: 0.2 },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          >
            <Compass size={20} className="text-black" />
          </motion.div>
          <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
            Services
          </span>
        </Link>
      </motion.div>

      {/* Shopping Cart Icon */}
      <motion.div 
        className="absolute right-8 top-1/2 bg-white rounded-lg p-3 cursor-pointer shadow-lg hover:shadow-xl"
        animate={{ 
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
      >
        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2">
          <path d="M9 2L7 6M7 6L5 2M7 6h10M7 6L5 20h14l-2-14" />
        </svg>
      </motion.div>
    </section>
  );
}