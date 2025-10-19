"use client";

import { useState, useEffect, useRef } from 'react';

export default function WhyUs2ndSection() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (section) => (el) => {
    sectionRefs.current[section] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white px-16 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          style={{ animation: 'float 40s linear infinite' }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={setRef('header')}
          data-section="header"
          className="mb-16"
        >
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
            isVisible.header ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <span className="text-emerald-300 text-[10px] font-bold tracking-[3px] uppercase">
              INVESTMENT PROCESS
            </span>
            <div className="w-12 h-[2px] bg-emerald-400"></div>
          </div>
          <h1 className={`text-[52px] font-bold leading-[1.2] bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent transition-all duration-700 delay-100 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            How Does It Even Work?
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-[580px_1fr] gap-12 items-start">
          {/* Left Section - Steps */}
          <div 
            ref={setRef('steps')}
            data-section="steps"
            className="relative"
          >
            {/* Vertical Line */}
            <div className={`absolute left-[21px] top-[50px] bottom-[100px] w-[1px] bg-emerald-400 opacity-20 transition-all duration-1000 ${
              isVisible.steps ? 'scale-y-100' : 'scale-y-0'
            }`} style={{ transformOrigin: 'top' }}></div>

            {/* Step 1 */}
            <div className={`relative mb-12 flex gap-6 transition-all duration-700 ${
              isVisible.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="flex-shrink-0 w-[44px] h-[44px] rounded-[10px] border-2 border-emerald-400 bg-transparent flex items-center justify-center text-emerald-400 font-bold text-[18px] relative z-10 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                1
              </div>
              <div className="pt-[2px]">
                <h3 className="text-[20px] font-bold mb-3 text-white">Create Your Account</h3>
                <p className="text-emerald-200/75 text-[14px] leading-[1.7] text-justify">
                  Start your investment journey by<br />
                  signing up with your email and<br />
                  secure credentials.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`relative mb-10 flex gap-6 transition-all duration-700 delay-200 ${
              isVisible.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="flex-shrink-0 w-[44px] h-[44px] rounded-[10px] border-2 border-emerald-400 bg-transparent flex items-center justify-center text-emerald-400 font-bold text-[18px] relative z-10 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                2
              </div>
              <div className="pt-[2px]">
                <h3 className="text-[20px] font-bold mb-3 text-white">Choose Investment Strategy</h3>
                <p className="text-emerald-200/75 text-[14px] leading-[1.7] mb-6 text-justify">
                  Select from diversified portfolios,<br />
                  stocks, bonds, crypto assets, or<br />
                  customize your own strategy
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`relative flex gap-6 transition-all duration-700 delay-400 ${
              isVisible.steps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="flex-shrink-0 w-[44px] h-[44px] rounded-[10px] border-2 border-emerald-400 bg-transparent flex items-center justify-center text-emerald-400 font-bold text-[18px] relative z-10 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                3
              </div>
              <div className="pt-[2px]">
                <h3 className="text-[20px] font-bold mb-3 text-white">Set Your Goals</h3>
                <p className="text-emerald-200/75 text-[14px] leading-[1.7] text-justify">
                  Define your financial targets, risk<br />
                  tolerance, and investment timeline<br />
                  for personalized recommendations
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Image Card */}
          <div 
            ref={setRef('image')}
            data-section="image"
            className={`relative mt-[-20px] transition-all duration-1000 max-w-[480px] ${
              isVisible.image ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
            }`}
          >
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-[24px] p-6 relative overflow-visible hover:shadow-2xl hover:shadow-emerald-400/20 transition-all duration-500 border border-emerald-500/20">
              <div className="relative">
                <img
                  src="/fintech3.jpg"
                  alt="Financial Analytics Dashboard"
                  className="w-full h-[480px] object-cover rounded-[18px]"
                />
              </div>
              
              {/* Floating Card 1 - Top Right */}
              <div className={`absolute top-[120px] right-[-40px] z-20 transition-all duration-700 delay-300 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float">
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">Real-Time Analytics</span>
                </div>
              </div>

              {/* Floating Card 2 - Top Left */}
              <div className={`absolute top-[120px] left-[-40px] z-20 transition-all duration-700 delay-400 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">Portfolio Diversification</span>
                </div>
              </div>

              {/* Floating Card 3 - Middle Left */}
              <div className={`absolute top-[250px] left-[-40px] z-20 transition-all duration-700 delay-500 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">AI-Powered Insights</span>
                </div>
              </div>

              {/* Floating Card 4 - Bottom Left */}
              <div className={`absolute bottom-[100px] left-[-40px] z-20 transition-all duration-700 delay-600 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">Risk Management</span>
                </div>
              </div>
              
              {/* Floating Card 5 - Middle Right */}
              <div className={`absolute top-[250px] right-[-40px] z-20 transition-all duration-700 delay-700 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">Automated Trading</span>
                </div>
              </div>

              {/* Floating Card 6 - Bottom Right */}
              <div className={`absolute bottom-[100px] right-[-40px] z-20 transition-all duration-700 delay-800 ${
                isVisible.image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-black border-2 border-emerald-400 rounded-[12px] px-5 py-3 flex items-center gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-emerald-300 transition-all duration-300 animate-float" style={{ animationDelay: '2.5s' }}>
                  <svg className="w-[18px] h-[18px] text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[14px] font-normal whitespace-nowrap text-emerald-200/75">Secure Transactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}