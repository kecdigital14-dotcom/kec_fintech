import React from 'react';
import { Shield, TrendingUp, DollarSign, Users } from 'lucide-react';

const Home4thSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Your investments are protected with advanced security protocols and comprehensive risk management strategies to ensure capital safety.",
      bgColor: "bg-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Achieve superior returns through data-driven investment strategies, market analysis, and personalized portfolio allocation.",
      bgColor: "bg-lime-500"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Our competitive pricing model ensures you get maximum value for every investment dollar.",
      bgColor: "bg-emerald-600"
    },
    {
      icon: Users,
      title: "Dedicated Advisors",
      description: "Access experienced financial professionals who provide personalized guidance and ongoing support for your wealth management journey.",
      bgColor: "bg-lime-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-teal-300 transform rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:py-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-end ">
            <div className="relative max-w-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Financial team meeting"
                className=" rounded-lg shadow-2xl max-w-[80%]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-lime-400"></div>
                <span className="text-lime-400 text-sm font-semibold tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Your Trusted Financial<br />
                Partner for Wealth Growth
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className={`${service.bgColor} p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-teal-200 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-lime-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default Home4thSection;