import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#F035BE]/10 blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#00F5FF]/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-[#F035BE]/15 blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* IMAGE FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-[-40px] rounded-full blur-3xl bg-gradient-to-r from-[#F035BE]/40 to-[#00F5FF]/40 animate-pulse" />
              <div className="absolute inset-[-30px] rounded-full blur-2xl bg-[#F035BE]/50 animate-pulse delay-75" />
              <div className="absolute inset-[-20px] rounded-full blur-xl bg-gradient-to-r from-[#00F5FF]/30 to-[#F035BE]/30 animate-ping delay-150" />
              <div className="absolute inset-[-10px] rounded-full blur-lg bg-[#F035BE]/40 animate-pulse delay-300" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#F035BE] via-[#00F5FF] to-[#F035BE] p-1 shadow-2xl shadow-[#F035BE]/50">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F035BE]/20 to-[#00F5FF]/20 animate-pulse" />
                  <img
                    src="/assets/milk.jpeg"
                    alt="Milk"
                    className="w-full h-full object-cover rounded-full relative z-10 filter brightness-125 contrast-115 saturate-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-[#F035BE]/10 to-[#00F5FF]/20 animate-pulse" />
                </div>
              </div>

              <div className="absolute inset-[-35px] rounded-full border-2 border-dashed border-[#F035BE]/40 animate-spin" style={{ animationDuration: '15s' }} />
              <div className="absolute inset-[-45px] rounded-full border border-[#00F5FF]/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

              <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-[#F035BE] animate-bounce" />
              <div className="absolute -bottom-6 -left-2 w-2 h-2 rounded-full bg-[#00F5FF] animate-bounce delay-300" />
              <div className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-white animate-bounce delay-700" />
            </div>
          </motion.div>

          {/* TEXT SECOND ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 text-center lg:text-left space-y-8 lg:pr-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
              >
                <span className="text-white">Got </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F035BE] to-[#FF6B9D] animate-pulse">
                  MILKED
                </span>
                <span className="text-white">?</span>
                <span className="ml-4 text-6xl"></span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
              >
                <span className="text-[#00F5FF]">To the </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F035BE] to-[#00F5FF] font-black">
                  MOO
                </span>
                <span className="text-[#00F5FF]">oon We Go!</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
            >
              A revolutionary crypto movement powered by{' '}
              <span className="text-[#F035BE] font-semibold">cows</span>,{' '}
              <span className="text-[#00F5FF] font-semibold">memes</span>, and{' '}
              <span className="text-white font-semibold">community</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
            >
              <Button 
                href="https://moonshot.com/HGntnofpfzjnt3FzShUXAfWonim1ymKijrfF7PCAmoon?ref=fljnaC4xGj" 
                variant="primary" 
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#F035BE]/25"
              >
                Buy $MILK
              </Button>
              <Button 
                href="https://t.me/+qqkgcx-8_kgyOGNh"
                variant="secondary" 
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 border-2 border-[#00F5FF]/50 hover:border-[#00F5FF]"
              >
                Join The Herd
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#F035BE] rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
