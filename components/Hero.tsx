import React from 'react';
import { ArrowRight, FileText, Mic, FileAudio, Database, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden bg-brand-offwhite">
      {/* Subtle abstract background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Block */}
          <div className="lg:col-span-6 flex flex-col gap-8">
             <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-white border border-brand-black/20 text-brand-darkgray font-medium text-sm rounded-full shadow-sm">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
              Accepting new clients for Q4
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-black leading-[1.1] tracking-tight">
              Amplify Insights <br />
              <span className="relative inline-block text-brand-black mt-4">
                Build Audience.
                <div className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/40 -z-10 transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-darkgray leading-relaxed max-w-xl">
              We distill insights from meetings and documents to help founders become thought leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 bg-brand-black text-white font-bold text-lg hover:bg-brand-darkgray shadow-neo-sm hover:shadow-neo hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Block: Chaos to Order */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] flex items-center justify-center group cursor-default perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-12 preserve-3d">
              
              {/* Container Frame */}
              <div className="absolute inset-0 bg-white border border-brand-black/10 shadow-xl rounded-xl overflow-hidden flex items-center justify-between px-8 py-12">
                 
                 {/* Left Side: Chaos (Scattered Inputs) */}
                 <div className="flex-1 h-full relative border-r border-dashed border-gray-200 mr-8">
                    <div className="absolute top-10 left-0 p-3 bg-gray-50 border border-gray-200 rounded shadow-sm transform -rotate-6">
                       <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="absolute top-1/2 left-8 p-3 bg-brand-blue/30 border border-brand-blue rounded shadow-sm transform rotate-12 z-10">
                       <Mic className="w-6 h-6 text-brand-black" />
                    </div>
                    <div className="absolute bottom-12 left-2 p-3 bg-brand-yellow/30 border border-brand-yellow rounded shadow-sm transform -rotate-3">
                       <Database className="w-6 h-6 text-brand-black" />
                    </div>
                    <div className="absolute top-20 right-4 p-2 bg-gray-100 rounded text-xs font-mono text-gray-500 transform rotate-3">
                       meeting_notes.docx
                    </div>
                    <div className="absolute bottom-20 right-0 p-2 bg-gray-100 rounded text-xs font-mono text-gray-500 transform -rotate-6">
                       strategy_v2.pdf
                    </div>
                 </div>

                 {/* Middle: Processing Arrow */}
                 <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full border border-gray-200 shadow-md">
                    <ArrowRight className="w-6 h-6 text-brand-black" />
                 </div>

                 {/* Right Side: Order (Structured Output) */}
                 <div className="flex-1 h-full flex items-center justify-center pl-4">
                    <div className="w-full bg-white border border-gray-200 shadow-neo-sm rounded-lg p-4 transform transition-transform group-hover:scale-105 duration-500">
                       <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                          <div className="w-10 h-10 bg-brand-black rounded-full"></div>
                          <div>
                             <div className="h-3 w-24 bg-brand-black rounded-full mb-1"></div>
                             <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-3 w-3/4 bg-gray-200 rounded-full"></div>
                       </div>
                       <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                          <div className="flex gap-1">
                             <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                             <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                          </div>
                          <div className="bg-brand-green/20 text-brand-black text-[10px] font-bold px-2 py-1 rounded border border-brand-green/40 flex items-center gap-1">
                             <CheckCircle2 className="w-3 h-3" />
                             OPTIMIZED
                          </div>
                       </div>
                    </div>
                 </div>

              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full opacity-20 -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue rounded-full opacity-20 -z-10 blur-xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;