"use client"

import React, { useState } from 'react';
import { Twitter, Facebook, Youtube, Linkedin, Phone, Mail, ArrowRight, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const works = [
    { name: 'Works', href: '#' },
    { name: 'Expertise', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Awards', href: '#' }
  ];

  const solutions = [
    { name: 'Corporate Finance Advisory', href: '#' },
    { name: 'Banking & Financial Services', href: '#' },
    { name: 'Investment & Wealth Management', href: '#' },
    { name: 'Taxation & Compliance', href: '#' },
    { name: 'Risk & Audit Management', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'from-red-400 to-red-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-500 to-blue-700' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10">
        {/* Top Banner */}
        <div className="border-b border-emerald-500/15 px-8 lg:px-16 py-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Logo Section */}
              <motion.div variants={fadeInLeft}>
                <div className="flex items-center gap-3">
                  <motion.div 
                   className=''
                  >
                   <img src="/kec_logo.png" alt="KEC Logo"  className='h-12'/>
                  </motion.div>
               
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-4"
                variants={fadeInRight}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`relative w-11 h-11 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center overflow-hidden group`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <social.icon className="w-5 h-5 relative z-10" />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              
              {/* Location */}
              <motion.div variants={fadeInUp}>
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="p-2 bg-emerald-500/15 rounded-lg"
                      whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.25)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">Head Office</h3>
                  </div>
                  <p className="text-emerald-200/75 text-sm leading-relaxed mb-6">
                    429, 4th Floor, Amsal Chamber 2, Metro Station - Gate No.3, Bikaji Cama Place, New Delhi-110066
                  </p>
                  
                  <div className="space-y-3">
                    <motion.a 
                      href="tel:+918287933634" 
                      className="flex items-center gap-2 text-emerald-300 text-sm relative group"
                      whileHover={{ x: 5, color: "#a7f3d0" }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91-8287933634</span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                    <motion.a 
                      href="mailto:finance@kec.com" 
                      className="flex items-center gap-2 text-emerald-300 text-sm relative group"
                      whileHover={{ x: 5, color: "#a7f3d0" }}
                    >
                      <Mail className="w-4 h-4" />
                      <span>finance@kec.com</span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full"></span>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-emerald-200/75 text-sm flex items-center gap-2 group relative"
                        whileHover={{ x: 5, color: "#a7f3d0" }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                        {link.name}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Works */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full"></span>
                  Works
                </h3>
                <ul className="space-y-3">
                  {works.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-emerald-200/75 text-sm flex items-center gap-2 group relative"
                        whileHover={{ x: 5, color: "#a7f3d0" }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                        {link.name}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full"></span>
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutions.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-emerald-200/75 text-sm flex items-center gap-2 group relative"
                        whileHover={{ x: 5, color: "#a7f3d0" }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                        {link.name}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div 
              className="bg-gradient-to-r from-emerald-500/8 to-teal-500/8 border border-emerald-500/20 rounded-2xl p-8 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInBottom}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-emerald-200/75 text-sm">Get the latest news and insights delivered to your inbox</p>
                </div>
                <div className="relative w-full md:w-80">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/25 rounded-lg text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                  <motion.button 
                    className="absolute right-1 top-1 p-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5 text-black" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div 
              className="border-t border-emerald-500/15 pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-emerald-200/50 text-sm">
                  © 2025 Developed by Developers Infotech Pvt Ltd. All Rights Reserved.
                </p>
                <div className="flex gap-6">
                  <motion.a 
                    href="#" 
                    className="text-emerald-200/50 text-sm relative"
                    whileHover={{ color: "#a7f3d0" }}
                  >
                    Privacy Policy
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-emerald-200/50 text-sm relative"
                    whileHover={{ color: "#a7f3d0" }}
                  >
                    Terms & Conditions
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-emerald-200/50 text-sm relative"
                    whileHover={{ color: "#a7f3d0" }}
                  >
                    Sitemap
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;