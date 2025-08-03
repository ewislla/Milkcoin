import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    title: "Genesis",
    period: "Q3 2025",
    items: [
      "Launch $MILK token (SOL)",
      "Branding reveal + #GotMilked campaign",
      "Uniswap listing & LP lock",
      "Community launch platforms"
    ]
  },
  {
    title: "Utility Unleashed",
    period: "Q4 2025",
    items: [
      "Stake-to-Moo dApp",
      "NFT drop: Galactic Grazers",
      "Meme-to-Earn bounty system"
    ]
  },
  {
    title: "Meme Economy",
    period: "Q1 2026",
    items: [
      "NFT Fusion & MooDAO voting",
      "Cream Token ($CMT) launch",
      "MOOniVerse avatar preview"
    ]
  },
  {
    title: "Moo-narchy",
    period: "Q2 2026",
    items: [
      "GameFi launch: Milk Wars/Rug Dodge",
      "Global meme ambassador program",
      "Milk Nest donations & CEX listings"
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-20 px-4" id="roadmap">
      <div className="container mx-auto">
        {/* Heading + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F035BE]">
            MOO MAP
          </h2>
          <p className="text-xl text-gray-300 mb-6">Our journey to the moon</p>
        </motion.div>

        {/* Responsive Layout for Image + Phases */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12">
          {/* Roadmap Phases */}
          <div className="w-full md:w-2/3 space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#2A0344] to-[#0B0B1F] p-8 rounded-2xl border border-[#F035BE]/30 hover:border-[#F035BE] transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#F035BE] text-black font-bold px-3 py-1 rounded-full text-sm">
                      Phase {index + 1}
                    </span>
                    <span className="text-[#00F5FF] font-semibold">
                      {phase.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {phase.title}
                  </h3>

                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + itemIndex * 0.05
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-[#F035BE] rounded-full"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Roadmap Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <img
              src="/assets/roadmap.jpeg"
              alt="Roadmap Visual"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;