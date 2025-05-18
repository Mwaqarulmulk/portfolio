import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        when: "afterChildren" 
      }
    }
  };

  const loaderVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      borderRadius: ["20%", "50%", "20%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-slate-950 z-50"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600"
            variants={loaderVariants}
            animate="animate"
          />
          <motion.p
            className="mt-6 text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            WAQAR UL MULK
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;