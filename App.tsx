import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Founders from './components/Founders';
import AIDemo from './components/AIDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Strategy />
        <Founders />
        <AIDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;