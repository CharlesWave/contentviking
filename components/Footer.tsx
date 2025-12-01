import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-black py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
             <img 
               src="/logo-cropped.png" 
               alt="ContentViking Logo" 
               className="h-10 w-auto"
             />
             <span className="text-xl font-display font-bold tracking-tight">ContentViking</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 ContentViking. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
           <a href="#" className="text-gray-500 hover:text-brand-black font-medium text-sm transition-colors">LinkedIn</a>
           <a href="#" className="text-gray-500 hover:text-brand-black font-medium text-sm transition-colors">Twitter</a>
           <a href="#" className="text-gray-500 hover:text-brand-black font-medium text-sm transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;