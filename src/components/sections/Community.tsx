import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Twitter } from 'lucide-react';
import Button from '../ui/Button';

const socialLinks = [
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/+qqkgcx-8_kgyOGNh",
    color: "#0088cc"
  },
  {
    name: "Discord",
    icon: Users,
    href: "https://discord.gg/ydRdFUGa",
    color: "#5865F2"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/MilkedNest",
    color: "#1DA1F2"
  }
];

const Community: React.FC = () => {
  return (
    <section className="py-20 px-4" id="community">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F035BE]">
            Join the Herd 
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with fellow space Bulls and stay updated on our journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#2A0344] to-[#0B0B1F] p-8 rounded-2xl border border-[#F035BE]/30 hover:border-[#F035BE] transition-all duration-300 group text-center"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon 
                    size={32} 
                    style={{ color: social.color }}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {social.name}
              </h3>
              
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Join our {social.name.toLowerCase()} community
              </p>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-8"
          >
            Stay{' '}
            <span className="text-[#F035BE]">
              Weird
            </span>
            . Stay{' '}
            <span className="text-[#00F5FF]">
              Milked
            </span>
            . 🥛
          </motion.p>
          
          <Button 
            variant="primary" 
            size="lg" 
            href="https://t.me/+qqkgcx-8_kgyOGNh"
          >
            Join The Revolution
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;