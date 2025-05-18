import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import AnimatedText from '../animations/AnimatedText';
import Button from '../ui/Button';
import ParticlesCanvas from '../animations/ParticlesCanvas';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 flex flex-col justify-center overflow-hidden">
      <ParticlesCanvas />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium inline-block">
              Software Engineer & AI Expert
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Muhammad Waqar Ul Mulk
            </span>
          </motion.h1>
          
          <AnimatedText 
            text="Building AI-powered tools, full-stack platforms, and automation bots that solve real problems."
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-10"
          />
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              icon={<Send size={18} />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<Download size={18} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;