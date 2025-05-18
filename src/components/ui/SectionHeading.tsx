import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-16 ${alignmentClasses[align]}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mt-4 rounded-full mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: align === 'center' ? '5rem' : '3rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginLeft: align === 'left' ? 0 : 'auto', marginRight: align === 'right' ? 0 : 'auto' }}
      />
    </div>
  );
};

export default SectionHeading;