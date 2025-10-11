import React from 'react';
import { Users, PieChart, CreditCard, TrendingUp } from 'lucide-react';

const Home6thSection = () => {
  const services = [
    {
      icon: Users,
      title: "Strategic Investments",
      description: "Everyone with high and useful reward for his We offer"
    },
    {
      icon: PieChart,
      title: "Putting Customers First",
      description: "Everyone with high and useful reward for his We offer"
    },
    {
      icon: CreditCard,
      title: "Smarter Business Decisons",
      description: "Everyone with high and useful reward for his We offer"
    },
    {
      icon: TrendingUp,
      title: "Driving Innovation with agile",
      description: "Everyone with high and useful reward for his We offer"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-lime-500 border-r-8 border-r-transparent"></div>
              <span className="text-lime-600 text-sm font-semibold tracking-wider uppercase">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We provide consulting<br />
              to strategic growth.
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-start lg:pt-12">
            <p className="text-gray-600 text-base leading-relaxed">
              Finolix is the destination where early adopters and innovation<br />
              enthusiasts discover cutting-edge technology
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Home6thSection;