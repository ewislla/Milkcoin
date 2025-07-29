import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "https://t.me/+qqkgcx-8_kgyOGNh",
    },
    {
      name: "Discord",
      icon: Users,
      href: "https://discord.gg/ydRdFUGa",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0B0B1F] to-[#2A0344] border-t border-[#F035BE]/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-4xl">🐄</span>
              <span className="text-2xl font-bold text-[#F035BE]">MILK COIN</span>
            </div>
            <p className="text-gray-400 text-sm">
              To the MOOoon we go! 🚀
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2A0344] hover:bg-[#F035BE]/20 border border-[#F035BE]/30 hover:border-[#F035BE] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <social.icon size={18} className="text-[#F035BE]" />
              </a>
            ))}
          </motion.div>

          {/* Contract and links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="mb-4">
              <p className="text-[#00F5FF] font-semibold mb-2">Contract Address:</p>
              <p className="text-xs font-mono text-gray-400 break-all">
                HGntnofpfzjnt3FzShUXAfWonim1ymKijrfF7PCAmoon
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#F035BE] transition-colors duration-300">
                Whitepaper
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F035BE] transition-colors duration-300">
                Audit Report
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#F035BE]/20 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} MILK COIN. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-[#F035BE] fill-current" />
              <span>by the community</span>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-gray-500 mt-4"
          >
            Disclaimer: Cryptocurrency investments carry risk. Please do your own research.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;