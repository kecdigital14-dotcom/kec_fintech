"use client"

import React, { useEffect, useState } from 'react';

export default function Hero3rdSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 40px rgba(20, 184, 166, 0.6);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(20, 184, 166, 1);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .animate-rotate-border {
          animation: rotate-border 20s linear infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="animate-slide-in-left">
            {/* Accent line */}
             <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-teal-400/20 border border-teal-500/50 rounded-full text-teal-600 font-semibold text-sm animate-pulse-glow">
                🌾 KisanExperience
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Kisan
              <span className="block bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent animate-glow-pulse">
                Experience
              </span>
 
            </h2>

            {/* Company Name Badge */}
          

            {/* Description */}
            <p className="text-base text-gray-600 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We leverage cutting-edge technology and sustainable practices to transform modern agriculture. Our AgriTech solutions empower farmers with intelligent tools for precision farming, crop monitoring, and yield optimization.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                { title: 'AI-Powered Analytics', desc: 'Real-time crop health monitoring and predictive insights' },
                { title: 'Sustainable Solutions', desc: 'Eco-friendly practices for sustainable farming' },
             
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border border-teal-200/30 bg-teal-50/60 backdrop-blur-sm hover:border-teal-300 hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:scale-105 hover:translate-x-2"
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center flex-shrink-0 mt-1 animate-pulse-glow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 animate-glow-pulse">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="animate-slide-in-right">
            {/* Video Container with 3D effect */}
            <div className="relative group mb-10">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition-all duration-500 group-hover:blur-2xl animate-pulse-glow"></div>

              {/* Video Card */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 group-hover:border-teal-500/50 transition-all duration-300 shadow-2xl transform group-hover:scale-105 group-hover:shadow-2xl animate-float">
                {/* Animated video gradient bg */}
                <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-teal-500/20 animate-pulse group-hover:from-teal-600/40 group-hover:to-teal-500/40 transition-all duration-500"></div>
                  
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23111827' width='400' height='300'/%3E%3C/svg%3E"
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  </video>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-300 animate-pulse-glow">
                      <svg className="w-8 h-8 text-white ml-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info bar */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-4 border-t border-teal-500/10 transform group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-teal-400 text-sm font-medium animate-glow-pulse">Watch how we transform farming</p>
                  <p className="text-gray-400 text-xs mt-1 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>🚀 AgriTech Innovation in Action</p>
                </div>
              </div>

              {/* Decorative elements with animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-teal-500/30 rounded-full group-hover:border-teal-500/60 transition-all duration-500 animate-rotate-border"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-teal-500/20 rounded-full group-hover:border-teal-500/40 transition-all duration-500 animate-rotate-border" style={{ animationDirection: 'reverse' }}></div>
            </div>
                       {/* CTA Button */}
            <button className="relative inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 group-hover:from-teal-700 group-hover:to-teal-600 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              <span className="relative animate-glow-pulse">Learn More</span>
              <svg className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </section>
  );
}