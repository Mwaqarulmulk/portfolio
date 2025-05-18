import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  className = '',
  children,
  hover = true,
  delay = 0
}) => {
  return (
    <motion.div
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay: delay * 0.1
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hover ? { 
        y: -5, 
        scale: 1.02,
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default Card;