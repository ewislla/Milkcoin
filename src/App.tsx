import React from 'react';
import { useReducedMotion } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import NFT from './components/sections/NFT';
import Tokenomics from './components/sections/Tokenomics';
import Community from './components/sections/Community';
import Footer from './components/sections/Footer';

function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B1F] via-[#2A0344] to-[#0B0B1F] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <NFT />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
}

export default App;