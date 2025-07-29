import React from 'react';
import { motion } from 'framer-motion';

interface AstronautCowProps {
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
  breathing?: boolean;
  glowing?: boolean;
  delay?: number;
  className?: string;
}

const AstronautCow: React.FC<AstronautCowProps> = ({
  size = 'md',
  floating = false,
  breathing = false,
  glowing = false,
  delay = 0,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20 text-4xl',
    md: 'w-32 h-32 text-6xl',
    lg: 'w-48 h-48 text-8xl'
  };
  
  const animations: any = {};
  
  if (floating) {
    animations.animate = {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2]
    };
    animations.transition = {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    };
  }
  
  if (breathing && !floating) {
    animations.animate = {
      scale: [1, 1.05, 1]
    };
    animations.transition = {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    };
  }
  
  const glowEffect = glowing ? {
    filter: 'drop-shadow(0 0 20px #F035BE) drop-shadow(0 0 40px #F035BE50)',
  } : {};
  
  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center relative`}
      style={{ willChange: 'transform', ...glowEffect }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      {...animations}
    >
      {/* Astronaut cow emoji with space helmet effect */}
      <div className="relative">
        <motion.span 
          className="block"
          animate={glowing ? {
            textShadow: [
              '0 0 10px #F035BE, 0 0 20px #F035BE, 0 0 30px #F035BE',
              '0 0 20px #F035BE, 0 0 30px #F035BE, 0 0 40px #F035BE',
              '0 0 10px #F035BE, 0 0 20px #F035BE, 0 0 30px #F035BE'
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🐄
        </motion.span>
        
        {/* Space helmet overlay */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#00F5FF]/30"
          animate={{
            borderColor: ['#00F5FF30', '#F035BE30', '#00F5FF30']
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Jetpack effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-[#F035BE] to-transparent rounded-full opacity-60"
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        
        {/* Stars around the cow */}
        {glowing && (
          <>
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-300 text-xs"
              animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-1 -left-2 text-yellow-300 text-xs"
              animate={{ rotate: -360, scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ⭐
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default AstronautCow;