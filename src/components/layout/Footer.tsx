import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Linkedin size={20} />, 
      url: 'https://www.linkedin.com/in/mwaqarulmulk/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Github size={20} />, 
      url: 'https://github.com/mwaqarulmulk', 
      label: 'GitHub' 
    },
    { 
      icon: <Facebook size={20} />, 
      url: 'https://facebook.com/bestdigitalagency', 
      label: 'Facebook' 
    },
    { 
      icon: <Mail size={20} />, 
      url: 'mailto:mwaqarulmulk@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Muhammad Waqar Ul Mulk
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Software Engineer | AI Automation Expert | Full Stack Developer | Founder of BestDigitalAgency.tech
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Lahore, Pakistan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a href="tel:+923010492137" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                +92 301 0492137
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <a href="mailto:mwaqarulmulk@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                mwaqarulmulk@gmail.com
              </a>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {currentYear} Muhammad Waqar Ul Mulk. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;