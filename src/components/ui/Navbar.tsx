import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'NFTs', href: '#nft' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Community', href: '#community' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B1F]/95 backdrop-blur-md border-b border-[#F035BE]/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0 relative"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#F035BE] shadow-md">
              <img 
                src="/assets/milk.jpeg"
                alt="Milk Coin Logo"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-[#F035BE]/20 blur-lg rounded-full animate-pulse z-[-1]" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F035BE]">
              $MILK
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-[#F035BE] transition-colors duration-300 font-medium text-sm xl:text-base relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F035BE] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* Whitepaper Link - Desktop */}
            <motion.a
              href="/Milked_Nest_Coin_White_Paper.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#F035BE] transition-colors duration-300 font-semibold text-sm xl:text-base relative group"
            >
              Whitepaper
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F035BE] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              href="https://t.me/+qqkgcx-8_kgyOGNh"
              variant="primary"
              size="md"
              className="text-sm xl:text-base"
            >
              Join Herd
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#F035BE] transition-colors duration-300 border border-[#F035BE]/30 rounded-lg hover:border-[#F035BE] hover:bg-[#F035BE]/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0B0B1F]/98 backdrop-blur-md border-t border-[#F035BE]/20 shadow-xl"
            >
              <div className="py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-white hover:text-[#F035BE] hover:bg-[#F035BE]/10 transition-all duration-300 rounded-lg mx-4 font-medium border-l-2 border-transparent hover:border-[#F035BE]"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Whitepaper Link - Mobile */}
                <a
                  href="/Milked_Nest_Coin_White_Paper.pdf"
                  download
                  className="block px-4 py-3 text-white hover:text-[#F035BE] hover:bg-[#F035BE]/10 transition-all duration-300 rounded-lg mx-4 font-semibold border-l-2 border-transparent hover:border-[#F035BE]"
                >
                  📄 Download Whitepaper
                </a>

                {/* CTA Button */}
                <div className="px-4 pt-4">
                  <Button 
                    href="https://t.me/+qqkgcx-8_kgyOGNh"
                    variant="primary"
                    size="md"
                    className="w-full justify-center text-center"
                  >
                    Join Herd
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;