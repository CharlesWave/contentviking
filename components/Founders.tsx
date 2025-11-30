import React from 'react';
import { FOUNDERS } from '../constants';
import { Linkedin, Users } from 'lucide-react';

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-yellow">The Architects</h2>
          </div>
          <p className="text-xl md:text-2xl text-brand-black font-bold tracking-tight">
            Deep Tech Expertise. Marketing Psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FOUNDERS.map((founder, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-brand-offwhite border border-gray-100 hover:shadow-soft transition-shadow">
              <div className="w-full md:w-32 h-32 flex-shrink-0 relative overflow-hidden rounded-xl bg-gray-200">
                <img 
                  src={founder.imageUrl} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-brand-black font-display">{founder.name}</h3>
                  <a href={founder.linkedinUrl || "#"} className="text-gray-400 hover:text-[#0077b5] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-brand-darkgray text-sm font-medium uppercase tracking-wider mb-4">{founder.role}</p>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;