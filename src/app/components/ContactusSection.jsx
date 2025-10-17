"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactusSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'finance@kec.com, ceo@kec.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91-8287933634, +91-9582549573',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '429, 4th Floor, Amsal Chamber 2, Metro Station - Gate No.3, Bikaji Cama Place, New Delhi-110066, India',
    },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-emerald-200/75 max-w-2xl mx-auto"
          >
            Have a question or want to work together? We'd love to hear from you. Send us a message, and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isLocation = info.title === 'Location';
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400 transition-all duration-300">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                  <p className={`text-emerald-200/75 ${isLocation ? 'max-w-[280px]' : 'max-w-[160px]'}`}>{info.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <div className="lg:max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Animated background blur */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 sm:p-12">
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center bg-teal-950/90 backdrop-blur-sm rounded-3xl z-50"
                  >
                    <div className="text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-emerald-200/75"
                      >
                        Thank you for reaching out. We'll get back to you soon.
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 }}
                    className="group"
                  >
                    <label className="block text-sm font-medium text-emerald-200 mb-2">
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-teal-950/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.6 }}
                    className="group"
                  >
                    <label className="block text-sm font-medium text-emerald-200 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-teal-950/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-teal-950/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-teal-950/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-white placeholder-emerald-400/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-400/50"
                >
                  {loading ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}