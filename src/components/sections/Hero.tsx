import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 pt-32 bg-black text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Glowing Milk Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-[-20px] rounded-full blur-3xl bg-[#F035BE]/60 animate-pulse" />
            <div className="absolute inset-[-15px] rounded-full blur-2xl bg-[#F035BE]/50 animate-pulse delay-75" />
            <div className="absolute inset-[-10px] rounded-full blur-xl bg-[#F035BE]/40 animate-ping delay-150" />
            <div className="absolute inset-[-5px] rounded-full blur-lg bg-[#F035BE]/30 animate-pulse delay-300" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#F035BE] shadow-2xl shadow-[#F035BE]/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F035BE]/20 to-transparent animate-pulse" />
              <img
                src="/assets/milk.jpeg"
                alt="Milk"
                className="w-full h-full object-cover rounded-full relative z-10 filter brightness-110 contrast-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-[#F035BE]/10 to-[#F035BE]/20 animate-pulse" />
            </div>

            <div
              className="absolute inset-[-25px] rounded-full border-2 border-[#F035BE]/30 blur-sm animate-spin"
              style={{ animationDuration: '10s' }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left z-10 order-2 lg:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Got <span className="text-[#F035BE]">MILKED</span>? 🥛
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-4 text-[#00F5FF]"
          >
            To the <span className="text-[#F035BE]">MOO</span>oon We Go!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl"
          >
            A crypto movement powered by cows, memes, and community
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button href="https://t.me/+qqkgcx-8_kgyOGNh" variant="primary" size="lg">
              Join The Herd
            </Button>
            <Button href="#" variant="secondary" size="lg">
              Read Whitepaper
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;