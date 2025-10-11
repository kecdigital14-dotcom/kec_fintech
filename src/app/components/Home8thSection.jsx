import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home8thSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      quote: "Their investment strategy completely transformed my financial outlook. Within a year, I've seen remarkable growth in my portfolio while keeping my risk managed. The personalized guidance and transparent communication make all the difference. I couldn't ask for better financial partners.",
      name: "Robert J. Hare",
      role: "Investor, Tech Sector",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      quote: "Working with this financial advisory team has been a game-changer for my business. They helped me diversify my investments and create a robust wealth management plan. Their expertise and dedication to understanding my goals set them apart from other firms.",
      name: "Sarah Johnson",
      role: "Business Owner & Investor",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
      quote: "The level of professionalism and financial acumen displayed by this team is exceptional. They navigated me through complex market conditions with clarity and provided actionable investment strategies that delivered consistent returns. Highly recommended for serious investors.",
      name: "Michael Chen",
      role: "Portfolio Manager",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50 py-4 overflow-hidden">
      {/* Dotted World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#84cc16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Hear from our satisfied investors and clients about their experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Rating */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative">
                {/* Profile Image */}
                <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-7 h-7 text-white fill-white" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="mt-8 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-900 text-lg leading-relaxed">
                  {current.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {current.name} <span className="text-gray-400 font-normal">/</span>
                </h3>
                <p className="text-gray-600">
                  {current.role}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-200 rounded-full filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Home8thSection;