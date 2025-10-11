import { Briefcase, PieChart, ArrowUpRight } from 'lucide-react';

export default function Home2ndSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Hero Content */}
          <div className="relative">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-20 w-32 h-32 border-l-4 border-t-4 border-gray-400 transform rotate-45"></div>
              <div className="absolute top-32 left-40 w-24 h-24 border-r-4 border-b-4 border-gray-400 transform rotate-12"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 border-4 border-gray-400 transform -rotate-12"></div>
            </div>

            {/* Client Avatars */}
            <div className="flex items-center gap-2 mb-8 relative z-10">
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-full bg-gray-300 border-4 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                </div>
                <div className="w-14 h-14 rounded-full bg-gray-400 border-4 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-900"></div>
                </div>
                <div className="w-14 h-14 rounded-full bg-gray-500 border-4 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                </div>
                <div className="w-14 h-14 rounded-full bg-gray-200 border-4 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 relative z-10">
              50K+ Satisfied Investors
            </h1>

            {/* CTA Button */}
            <button className="relative z-10 group inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Investing
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>

          {/* Right Side - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Financial Planning Card */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Financial Planning</h3>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Build a secure financial future with our expert guidance. We help you create personalized investment strategies, manage wealth effectively, and achieve your long-term financial goals through smart planning.
              </p>
              
              <a href="#" className="inline-block text-white font-semibold border-b-2 border-white hover:border-green-400 transition-colors">
                Read More
              </a>
            </div>

            {/* Investment Advisory Card */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Investment Advisory</h3>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Make informed investment decisions with our professional advisory services. From portfolio diversification to risk management, we provide strategic insights to maximize your returns.
              </p>
              
              <a href="#" className="inline-block text-white font-semibold border-b-2 border-white hover:border-green-400 transition-colors">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}