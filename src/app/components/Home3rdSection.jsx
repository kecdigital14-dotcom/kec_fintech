import { Lightbulb, Wrench, ArrowUpRight, Play } from 'lucide-react';

export default function Home3rdSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Collage */}
          <div className="relative">
            {/* Main Image - Two people working */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop" 
                alt="Financial advisors meeting"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Bottom Left Image - Person working on laptop */}
            <div className="absolute bottom-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
                alt="Financial analyst working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image - Woman on phone */}
            <div className="absolute bottom-0 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop" 
                alt="Investment consultant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Expert Team Badge */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 bg-white rounded-full px-6 py-3 shadow-2xl flex items-center gap-3">
              <span className="font-semibold text-gray-800">Expert Team</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  9+
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-green-500 fill-green-500" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">WHO WE ARE</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in Financial Growth
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Finclix is your premier destination for comprehensive financial solutions, offering expert investment strategies and wealth management services tailored to secure your financial future.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* Wealth Management */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <Lightbulb className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wealth Management</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In today's dynamic financial markets, strategic wealth management is essential for achieving long-term financial security and growth.
                  </p>
                </div>
              </div>

              {/* Portfolio Optimization */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <Wrench className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Optimization</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our data-driven approach ensures your investment portfolio is perfectly balanced to maximize returns while managing risk effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Client Satisfaction</span>
                <span className="text-sm font-bold text-gray-900">95%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            {/* Bottom Section - CTA and Founder */}
            <div className="flex items-center gap-6 pt-4">
              {/* Get Started Button */}
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Investing
                <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>

              {/* Founder Info */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt="John Williams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 italic">John Williams</p>
                  <p className="text-sm text-teal-600 font-semibold">Financial Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}