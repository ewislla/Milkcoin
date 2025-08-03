import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F035BE]">
            What is MILK COIN?
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on left for desktop, top for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/about.jpeg"
              alt="Milk Coin Visual"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed">
              $MILK COIN is a fully community-driven crypto project built to protect small investors using smart astronaut cow mascots, anti-whale mechanics, and a utility-packed NFT ecosystem.
            </p>

            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              We're fun, secure, and always bullish.
            </p>

            <div className="bg-gradient-to-r from-[#2A0344] to-[#F035BE]/20 p-6 rounded-2xl border border-[#F035BE]/30">
              <p className="text-xl font-bold text-[#00F5FF] mb-2">Highlight</p>
              <p className="text-lg text-white">
                Moo-lennial DeFi meets intergalactic memes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;