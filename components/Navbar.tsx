import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Strategy', href: '#strategy' },
    { name: 'Founders', href: '#founders' },
    { name: 'AI Demo', href: '#demo' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-brand-black/10 ${
      scrolled ? 'bg-white/95 backdrop-blur-md py-3' : 'bg-brand-offwhite py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo-cropped.png" 
              alt="ContentViking Logo" 
              className="h-12 w-auto transition-transform group-hover:-translate-y-0.5"
            />
            <span className="text-brand-black font-display font-bold text-2xl tracking-tight">ContentViking</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-darkgray hover:text-brand-black font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-brand-black text-white border border-brand-black px-6 py-2 text-sm font-bold shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all active:translate-y-0 active:shadow-none cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-brand-black hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-black/10 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-black hover:bg-gray-50 block px-3 py-3 text-base font-medium border-l-2 border-transparent hover:border-brand-yellow cursor-pointer"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')} 
                className="bg-brand-black text-white block px-3 py-3 text-center text-base font-bold mt-6 mx-2 shadow-neo-sm cursor-pointer"
              >
                Contact Us
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;