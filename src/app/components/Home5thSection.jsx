import React from 'react';

const Home5thSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assess Your Goals",
      description: "Understand your financial objectives, risk tolerance, and investment timeline to create a personalized strategy."
    },
    {
      number: "02",
      title: "Build Portfolio",
      description: "Diversify your investments across asset classes to optimize returns while managing risk effectively."
    },
    {
      number: "03",
      title: "Monitor & Adjust",
      description: "Track performance regularly and rebalance your portfolio based on market conditions and life changes."
    },
    {
      number: "04",
      title: "Achieve Wealth",
      description: "Reach your financial milestones with consistent growth, strategic planning, and expert guidance."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 overflow-hidden py-20">
      {/* Decorative Globe Background - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Grid lines */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#10b981" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke="#10b981" strokeWidth="0.5"/>
          <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="#10b981" strokeWidth="0.5"/>
          <ellipse cx="100" cy="100" rx="90" ry="50" fill="none" stroke="#10b981" strokeWidth="0.5"/>
          <line x1="100" y1="10" x2="100" y2="190" stroke="#10b981" strokeWidth="0.5"/>
          <line x1="10" y1="100" x2="190" y2="100" stroke="#10b981" strokeWidth="0.5"/>
        </svg>
        {/* Colorful dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-lime-500 border-r-8 border-r-transparent"></div>
            <span className="text-lime-600 text-sm font-semibold tracking-wider uppercase">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your Path to Financial<br />
            Success in 4 Simple Steps.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-lime-200 group-hover:to-emerald-200 transition-all duration-300" style={{ WebkitTextStroke: '1px #d1d5db' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-900 text-lg">
            <span className="font-medium">Plan Smart, Invest Better,</span> and <span className="font-medium">Grow Your Wealth.</span>{' '}
            <span className="font-bold text-gray-900 underline decoration-lime-500 decoration-2 underline-offset-4 cursor-pointer hover:text-lime-600 transition-colors">
              Get Started Today
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-200 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
};

export default Home5thSection;