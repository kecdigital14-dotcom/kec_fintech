import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1e4d4a] rounded-[40px] mx-6 overflow-hidden sm:h-[520px]">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-12 py-2 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-white">Instant Credit for </span>
              <br />
              <span className="text-[#c4df5f]">Rural </span>{' '}
              <span className="text-white">India</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Empowering you to secure, grow, and prosper as we redefine the future of finance together.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#c4df5f] text-[#1e4d4a] px-8 py-4 rounded-full font-semibold hover:bg-[#d4ef6f] transition-all hover:gap-4 group"
            >
              <span>Lets Talk With Us</span>
              <div className="bg-white rounded-full p-2 group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} className="text-[#1e4d4a]" />
              </div>
            </Link>

            {/* Decorative Arrow */}
            <div className="absolute left-[500px] top-[400px]">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <path
                  d="M10 40 Q 40 10, 70 40"
                  stroke="#c4df5f"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
                <path
                  d="M60 30 L70 40 L60 50"
                  fill="#c4df5f"
                />
              </svg>
            </div>

            {/* Small Image Decoration */}
            <div className="absolute left-[480px] top-[280px] w-48 h-32 rounded-3xl overflow-hidden border-4 border-white/20">
              <div className="w-full h-full bg-gradient-to-br from-[#2a5d5a] to-[#1e4d4a]"></div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative flex justify-end items-center">
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="w-[500px] h-[600px] bg-gradient-to-br from-[#2a5d5a] to-[#1e4d4a] rounded-t-full">
                    {/* <img src="/herobanner1.png" alt="" className=' h-full'/> */}
              </div>
          

              {/* Circular Badge */}
              <div className="absolute -right-20 top-1/3 w-48 h-48 bg-[#c4df5f] rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                <div className="text-center">
                  
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-[10px] font-semibold fill-[#1e4d4a]" letterSpacing="6">
                      <textPath href="#circlePath">
                        CONSULTING • BUSINESS • IT • DEVELOPMENTS •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#1e4d4a] text-2xl">★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side Icons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-r-2xl p-3">
        <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
        </button>
        <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-6 h-6 bg-blue-600 rounded"></div>
        </button>
        <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
        </button>
      </div>

      {/* Shopping Cart Icon */}
      <div className="absolute right-8 top-1/2 bg-white rounded-lg p-3 hover:scale-110 transition-transform cursor-pointer shadow-lg">
        <svg width="24" height="24" fill="none" stroke="#1e4d4a" strokeWidth="2">
          <path d="M9 2L7 6M7 6L5 2M7 6h10M7 6L5 20h14l-2-14" />
        </svg>
      </div>
    </section>
  );
}