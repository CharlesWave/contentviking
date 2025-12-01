import React from 'react';
import { SERVICES } from '../constants';
import { Database, LayoutTemplate, UserCheck, Cpu } from 'lucide-react';

const Strategy: React.FC = () => {
  // Map visuals to the existing services
  const strategyVisuals = [
    {
      // Insight Extraction -> Grounded AI
      // Image: Magnifying glass, documents, tablet (Audit/Research concept)
      icon: <Database className="w-12 h-12 text-brand-black" />,
      bg: 'bg-gray-100', 
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      label: "INPUT"
    },
    {
      // Template Engine -> Context Engineering
      // Image: Blueprint / Structure / Grid
      icon: <LayoutTemplate className="w-12 h-12 text-brand-black" />,
      bg: 'bg-gray-100', 
      // Image: Wireframing / Layout structure
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      label: "PROCESS"
    },
    {
      // Founder Polish -> Human Audit
      // Image: Writing/Review
      icon: <UserCheck className="w-12 h-12 text-brand-black" />,
      bg: 'bg-gray-100', 
      // Image: Fountain pen / Editing
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      label: "OUTPUT"
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
               <Cpu className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow" />
               <h2 className="text-4xl md:text-5xl font-display text-brand-yellow whitespace-nowrap overflow-hidden text-ellipsis px-2">
                 Our Approach
               </h2>
            </div>
            <p className="text-xl md:text-xl text-brand-black font-bold tracking-tight">
              Scale content writing with AI. Control quality with expert aduiting.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>

          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group flex flex-col h-full bg-white border border-gray-200 hover:border-brand-black transition-colors duration-300 rounded-xl overflow-hidden shadow-soft hover:shadow-neo-sm"
            >
              {/* Visual Header */}
              <div className={`h-48 ${strategyVisuals[index].bg} relative border-b border-gray-100/50 overflow-hidden`}>
                 
                 {/* Background Image - Full Color */}
                 <img 
                    src={strategyVisuals[index].image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Very Subtle Overlay to normalize text contrast slightly without killing color */}
                 <div className="absolute inset-0 bg-black/10"></div>

                 {/* Content Wrapper */}
                 <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 text-xs font-bold tracking-widest text-brand-black/90 bg-white/60 backdrop-blur-md px-2 py-1 rounded shadow-sm">
                        0{index + 1} // {strategyVisuals[index].label}
                    </div>
                    
                    {/* Icon Background */}
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-sm border border-white/50">
                        {strategyVisuals[index].icon}
                    </div>
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <h3 className="text-xl font-display font-bold text-brand-black mb-3">{service.title}</h3>
                <p className="text-brand-darkgray leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;