import { Briefcase, TrendingUp, BarChart3, Zap, ArrowUpRight } from 'lucide-react';

export default function About2ndSection() {
  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: "Business Consulting",
      description: "We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits."
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Invest Propose",
      description: "We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits."
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Accounting",
      description: "We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits."
    },
    {
      id: 4,
      icon: Zap,
      title: "Career Development",
      description: "We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden rounded-3xl mx-4 md:mx-0">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-teal-700/70 rounded-3xl"></div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        {/* Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left - Badge and Title */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="text-yellow-400">▶</span>
              <span className="text-sm font-semibold text-yellow-400 tracking-wide">LATEST SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Guidance for Personal and Professional Growth.
            </h2>
          </div>

          {/* Right - Stat Card */}
          <div className="flex flex-col items-center justify-center lg:border-l lg:border-teal-400/30 lg:pl-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">5K+</div>
              <p className="text-teal-100 font-medium">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-teal-700/40 to-teal-800/30 border border-teal-500/30 rounded-2xl p-6 hover:border-teal-400/60 transition-all duration-300 group cursor-pointer"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-teal-100 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-teal-100 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}