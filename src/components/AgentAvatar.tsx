"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AgentAvatarProps {
  size?: 'small' | 'medium' | 'large';
}

const AgentAvatar: React.FC<AgentAvatarProps> = ({ size = 'medium' }) => {
  // Configuración de tamaño
  const dimensions = {
    small: { size: 8, border: 2, fontSize: 'text-xs' },
    medium: { size: 12, border: 3, fontSize: 'text-base' },
    large: { size: 16, border: 4, fontSize: 'text-xl' },
  };

  const selected = dimensions[size];

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  return (
    <motion.div
      className={`relative w-${selected.size} h-${selected.size} rounded-full flex items-center justify-center bg-gradient-to-tr from-primary-600 to-primary-400 shadow-md`}
      variants={pulseVariants}
      animate="pulse"
      whileHover={{ scale: 1.1 }}
    >
      <div className={`absolute inset-0 rounded-full border-${selected.border} border-white opacity-20`}></div>
      <span className={`${selected.fontSize} font-bold text-white`}>AL</span>
      
      {/* Indicador de actividad */}
      <motion.div 
        className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
        }}
      />
    </motion.div>
  );
};

export default AgentAvatar; 