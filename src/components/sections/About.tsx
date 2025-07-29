import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F035BE]">
            What is MILK COIN?
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="text-6xl md:text-8xl text-center">
              🐄
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed"
            >
              $MILK COIN is a fully community-driven crypto project built to protect small investors using smart astronaut cow mascots, anti-whale mechanics, and a utility-packed NFT ecosystem.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed"
            >
              We're fun, secure, and always bullish.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#2A0344] to-[#F035BE]/20 p-6 rounded-2xl border border-[#F035BE]/30"
            >
              <p className="text-xl font-bold text-[#00F5FF] mb-2">
                💫 Highlight
              </p>
              <p className="text-lg text-white">
                Moo-lennial DeFi meets intergalactic memes
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;