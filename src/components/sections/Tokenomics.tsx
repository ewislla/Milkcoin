import React from 'react';
import { motion } from 'framer-motion';

const tokenInfo = [
  { label: "Symbol", value: "$MILKED" },
  { label: "Chain", value: "Ethereum (ERC-20)" },
  { label: "Features", value: "Anti-whale, Community-first" },
  { label: "Contract", value: "HGntnofpfzjnt3FzShUXAfWonim1ymKijrfF7PCAmoon" }
];

const Tokenomics: React.FC = () => {
  return (
    <section className="py-20 px-4" id="tokenomics">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F035BE]">
            Tokenomics 📊
          </h2>
          <p className="text-xl text-gray-300">
            Fair, transparent, and community-driven
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {tokenInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#2A0344] to-[#0B0B1F] p-6 rounded-2xl border border-[#F035BE]/30 hover:border-[#F035BE] transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[#00F5FF] font-bold text-lg min-w-[120px]">
                    {info.label}:
                  </span>
                  <span className={`text-white ${
                    info.label === 'Contract' ? 'font-mono text-sm break-all' : 'text-lg'
                  }`}>
                    {info.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="text-6xl md:text-8xl">
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;