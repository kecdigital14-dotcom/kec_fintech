import React from 'react';
import { Plus } from 'lucide-react';

const Home7thSection = () => {
  const team = [
    {
      name: "Guy Hawkins",
      role: "Admin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Jacob Jones",
      role: "Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Kristin Watson",
      role: "Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Bessie Cooper",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-lime-500 border-r-8 border-r-transparent"></div>
            <span className="text-lime-600 text-sm font-semibold tracking-wider uppercase">
              OUR TEAMMATE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Enhance Your Experience with<br />
            Expert Consulting
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                    <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Info Section */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Home7thSection;