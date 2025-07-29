import React from 'react';
import { motion } from 'framer-motion';

const StarField: React.FC = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2
  }));
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, 20]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Nebula effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #F035BE10 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #00F5FF10 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, #F035BE10 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #00F5FF10 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default StarField;