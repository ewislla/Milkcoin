import React from 'react';
import { motion } from 'framer-motion';
// import Button from '../ui/Button';

// const nftVariants = [
//   { name: "Galaxy Explorer", rarity: "Common", id: 1 },
//   { name: "Nebula Navigator", rarity: "Rare", id: 2 },
//   { name: "Cosmic Commander", rarity: "Epic", id: 3 },
//   { name: "Stellar Supreme", rarity: "Legendary", id: 4 }
// ];

const NFT: React.FC = () => {
  return (
    <section className="py-20 px-4" id="nft">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F035BE]">
            Galactic Grazers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Our NFT collection brings the Bulls to space. Upgrade, fuse, and unlock milk-tier rewards in the MOOniVerse.
          </p>
          <p className="text-lg text-[#00F5FF] font-semibold">
            Coming soon...
          </p>
        </motion.div>

        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {nftVariants.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#2A0344] to-[#0B0B1F] p-6 rounded-2xl border border-[#F035BE]/30 hover:border-[#F035BE] transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square bg-gradient-to-br from-[#F035BE]/20 to-[#00F5FF]/20 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl">
                  
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {nft.name}
              </h3>

              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  nft.rarity === 'Common' ? 'bg-gray-600 text-white' :
                  nft.rarity === 'Rare' ? 'bg-blue-600 text-white' :
                  nft.rarity === 'Epic' ? 'bg-purple-600 text-white' :
                  'bg-gradient-to-r from-[#F035BE] to-[#00F5FF] text-black'
                }`}>
                  {nft.rarity}
                </span>
                <span className="text-[#00F5FF] font-bold">
                  #{nft.id.toString().padStart(3, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" href="#">
            View Collection
          </Button>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default NFT;